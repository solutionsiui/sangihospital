import {
  appointmentDepartments,
  appointmentHospitals,
  appointmentPage,
  appointmentServices,
} from "@/Components/Appointment/appointmentContent";
import {
  FORM_LIMITS,
  isAllowedOption,
  isValidEmail,
  isValidFutureDate,
  isValidMessage,
  isValidPersonName,
  isValidPhone,
  sanitizeString,
} from "@/lib/email/validate";

export const quickAppointmentDepartments = [
  "Dental",
  "Cardiology",
  "Neurology",
  "Gynecology",
  "Emergency",
  "Psychiatry",
] as const;

const hospitalValues = appointmentHospitals.map((item) => item.value);
const departmentValues = appointmentDepartments.map((item) => item.value);
const serviceValues = appointmentServices.map((item) => item.value);
const visitTypeValues = appointmentPage.visitTypes.map((item) => item.value);
const timeSlotValues = appointmentPage.timeSlots.map((item) => item.value);

export type AppointmentValidationResult =
  | { ok: true; payload: Record<string, string | undefined> }
  | { ok: false; message: string };

function invalid(message: string): AppointmentValidationResult {
  return { ok: false, message };
}

export function validateQuickAppointment(body: Record<string, unknown>): AppointmentValidationResult {
  const name = sanitizeString(body.name, FORM_LIMITS.name.max);
  const phone = sanitizeString(body.phone, 20);
  const department = sanitizeString(body.department, 120);
  const date = sanitizeString(body.date, 20);
  const message = sanitizeString(body.message, FORM_LIMITS.messageShort.max);

  if (!name) return invalid("Name is required.");
  if (!isValidPersonName(name)) return invalid("Enter a valid full name.");
  if (!phone) return invalid("Phone number is required.");
  if (!isValidPhone(phone)) return invalid("Enter a valid 10-digit Indian mobile number.");
  if (!department) return invalid("Department is required.");
  if (!isAllowedOption(department, quickAppointmentDepartments)) {
    return invalid("Select a valid department.");
  }
  if (!date) return invalid("Appointment date is required.");
  if (!isValidFutureDate(date)) return invalid("Choose a valid date from today onwards.");
  if (!message) return invalid("Message is required.");
  if (!isValidMessage(message, FORM_LIMITS.messageShort.min, FORM_LIMITS.messageShort.max)) {
    return invalid(`Message must be ${FORM_LIMITS.messageShort.min}-${FORM_LIMITS.messageShort.max} characters.`);
  }

  return {
    ok: true,
    payload: { type: "quick", name, phone, department, date, message },
  };
}

export function validateFullAppointment(body: Record<string, unknown>): AppointmentValidationResult {
  const fullName = sanitizeString(body.fullName, FORM_LIMITS.name.max);
  const phone = sanitizeString(body.phone, 20);
  const email = sanitizeString(body.email, FORM_LIMITS.email.max);
  const hospital = sanitizeString(body.hospital, 80);
  const department = sanitizeString(body.department, 80);
  const serviceType = sanitizeString(body.serviceType, 80);
  const visitType = sanitizeString(body.visitType, 80);
  const preferredDate = sanitizeString(body.preferredDate, 20);
  const preferredTime = sanitizeString(body.preferredTime, 40);
  const message = sanitizeString(body.message, FORM_LIMITS.messageLong.max);

  if (!fullName) return invalid("Full name is required.");
  if (!isValidPersonName(fullName)) return invalid("Enter a valid full name.");
  if (!phone) return invalid("Phone number is required.");
  if (!isValidPhone(phone)) return invalid("Enter a valid 10-digit Indian mobile number.");
  if (email && !isValidEmail(email)) return invalid("Enter a valid email address.");
  if (!hospital || !isAllowedOption(hospital, hospitalValues)) {
    return invalid("Select a valid hospital location.");
  }
  if (!department || !isAllowedOption(department, departmentValues)) {
    return invalid("Select a valid department.");
  }
  if (!serviceType || !isAllowedOption(serviceType, serviceValues)) {
    return invalid("Select a valid service type.");
  }
  if (!visitType || !isAllowedOption(visitType, visitTypeValues)) {
    return invalid("Select a valid visit type.");
  }
  if (!preferredDate) return invalid("Preferred date is required.");
  if (!isValidFutureDate(preferredDate)) {
    return invalid("Choose a valid preferred date from today onwards.");
  }
  if (!preferredTime || !isAllowedOption(preferredTime, timeSlotValues)) {
    return invalid("Select a valid time slot.");
  }
  if (message && !isValidMessage(message, 1, FORM_LIMITS.messageLong.max)) {
    return invalid("Additional notes contain invalid content.");
  }

  return {
    ok: true,
    payload: {
      type: "full",
      fullName,
      phone,
      email: email || undefined,
      hospital,
      department,
      serviceType,
      visitType,
      preferredDate,
      preferredTime,
      message: message || undefined,
    },
  };
}
