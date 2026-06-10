import { hospitalsMegaMenu } from "@/lib/hospitals";
import { specialitiesPage } from "@/Components/Specialities/specialitiesContent";
import { siteConfig } from "@/lib/site";

export const appointmentPage = {
  hero: {
    title: "Book an Appointment",
    subtitle:
      "Schedule a consultation with Sangi Hospital specialists — choose your location, department, and preferred visit time.",
    backgroundImage: "/assets/images/home/20240920064059.jpg",
  },
  intro: {
    eyebrow: "Patient Booking",
    heading: "Fast, Simple",
    headingAccent: "Appointment Scheduling",
    description:
      "Fill in your details and our team will confirm your appointment. For medical emergencies, please call our 24x7 helpline directly.",
  },
  features: [
    {
      title: "Trusted Multi-Speciality Care",
      description:
        "Consult experienced doctors across departments at Sangi Hospital locations across Uttar Pradesh.",
    },
    {
      title: "Quick Confirmation",
      description:
        "Our patient desk reviews requests promptly and shares appointment confirmation details with you.",
    },
    {
      title: "24x7 Emergency Support",
      description:
        "For urgent medical needs, contact our emergency helpline — available round the clock.",
    },
  ],
  steps: [
    { step: "01", title: "Fill the Form", description: "Share your contact and visit preferences." },
    { step: "02", title: "Team Review", description: "Our staff verifies slot availability." },
    { step: "03", title: "Get Confirmed", description: "Receive confirmation call or message." },
  ],
  visitTypes: [
    { value: "opd", label: "OPD Consultation" },
    { value: "follow-up", label: "Follow-up Visit" },
    { value: "health-checkup", label: "Health Checkup" },
    { value: "emergency", label: "Emergency (Urgent)" },
  ],
  timeSlots: [
    { value: "morning", label: "Morning (9 AM – 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM – 4 PM)" },
    { value: "evening", label: "Evening (4 PM – 8 PM)" },
  ],
  contact: {
    phone: siteConfig.phone,
    email: siteConfig.email,
    hours: "Mon – Sat: 9:00 AM – 8:00 PM",
    emergency: "24x7 Emergency Available",
  },
} as const;

export const appointmentHospitals = hospitalsMegaMenu.regions.flatMap((region) =>
  region.states.flatMap((state) =>
    state.hospitals.map((hospital) => ({
      value: hospital.id,
      label: hospital.name,
      city: hospital.city,
    })),
  ),
);

export const appointmentDepartments = specialitiesPage.items.map((item) => ({
  value: item.slug,
  label: item.name,
}));

export const appointmentServices = [
  { value: "general-consultation", label: "General Consultation" },
  { value: "diagnostics", label: "Diagnostics & Lab" },
  { value: "surgery", label: "Surgical Consultation" },
  { value: "maternity", label: "Maternity & Women's Health" },
  { value: "pediatric", label: "Paediatric Care" },
  { value: "other", label: "Other / Not Sure" },
];
