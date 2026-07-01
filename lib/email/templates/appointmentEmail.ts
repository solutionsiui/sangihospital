import {
  appointmentDepartments,
  appointmentHospitals,
  appointmentPage,
  appointmentServices,
} from "@/Components/Appointment/appointmentContent";
import { buildEmailTemplate, fieldsToPlainText } from "./baseTemplate";

export type FullAppointmentPayload = {
  type: "full";
  fullName: string;
  phone: string;
  email?: string;
  hospital: string;
  department: string;
  serviceType: string;
  visitType: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
};

export type QuickAppointmentPayload = {
  type: "quick";
  name: string;
  phone: string;
  department: string;
  date: string;
  message: string;
};

export type AppointmentPayload = FullAppointmentPayload | QuickAppointmentPayload;

function labelFrom<T extends { value: string; label: string }>(
  items: readonly T[],
  value: string,
) {
  return items.find((item) => item.value === value)?.label ?? value;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function buildAppointmentEmail(payload: AppointmentPayload) {
  if (payload.type === "quick") {
    const fields = [
      { label: "Patient Name", value: payload.name },
      { label: "Phone Number", value: payload.phone },
      { label: "Department", value: payload.department },
      { label: "Preferred Date", value: formatDate(payload.date) },
      { label: "Message", value: payload.message || "—" },
      { label: "Form Source", value: "Homepage Quick Appointment" },
      { label: "Submitted At", value: new Date().toLocaleString("en-IN") },
    ];

    return {
      subject: `New Appointment Request — ${payload.name}`,
      html: buildEmailTemplate({
        preheader: `New quick appointment request from ${payload.name}`,
        badge: "Appointment Request",
        title: "New Quick Appointment",
        subtitle: "A patient submitted the homepage appointment form.",
        fields,
      }),
      text: fieldsToPlainText(fields),
    };
  }

  const fields = [
    { label: "Patient Name", value: payload.fullName },
    { label: "Phone Number", value: payload.phone },
    { label: "Email Address", value: payload.email || "Not provided" },
    {
      label: "Hospital Location",
      value: labelFrom(appointmentHospitals, payload.hospital),
    },
    {
      label: "Department / Speciality",
      value: labelFrom(appointmentDepartments, payload.department),
    },
    {
      label: "Service Type",
      value: labelFrom(appointmentServices, payload.serviceType),
    },
    {
      label: "Visit Type",
      value: labelFrom(appointmentPage.visitTypes, payload.visitType),
    },
    {
      label: "Preferred Date",
      value: formatDate(payload.preferredDate),
    },
    {
      label: "Preferred Time",
      value: labelFrom(appointmentPage.timeSlots, payload.preferredTime),
    },
    { label: "Additional Notes", value: payload.message || "—" },
    { label: "Form Source", value: "Appointment Booking Page" },
    { label: "Submitted At", value: new Date().toLocaleString("en-IN") },
  ];

  return {
    subject: `New Appointment Request — ${payload.fullName}`,
    html: buildEmailTemplate({
      preheader: `New appointment request from ${payload.fullName}`,
      badge: "Appointment Request",
      title: "New Appointment Booking",
      subtitle: "A patient submitted the full appointment booking form.",
      fields,
    }),
    text: fieldsToPlainText(fields),
    replyTo: payload.email || undefined,
  };
}
