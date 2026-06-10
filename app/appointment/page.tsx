import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import AppointmentBooking from "@/Components/Appointment/AppointmentBooking";
import { appointmentPage } from "@/Components/Appointment/appointmentContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Appointment/appointment.css";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.name}`,
  description:
    "Book a doctor appointment at Sangi Hospital. Choose your hospital location, speciality, preferred date and time — our team will confirm your visit.",
  alternates: {
    canonical: "/appointment",
  },
};

export default function AppointmentPage() {
  const { hero } = appointmentPage;

  return (
    <main>
      <InnerHero
        eyebrow="Book a Visit"
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Appointment" },
        ]}
      />
      <AppointmentBooking />
    </main>
  );
}
