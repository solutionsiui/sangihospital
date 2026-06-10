import { Suspense } from "react";
import ClientOnly from "@/Components/ui/ClientOnly";
import AppointmentForm from "./AppointmentForm";
import AppointmentSidebar from "./AppointmentSidebar";

function AppointmentFormFallback() {
  return (
    <div className="appointment-form appointment-form--loading" aria-hidden="true">
      <div className="appointment-form__skeleton appointment-form__skeleton--title" />
      <div className="appointment-form__skeleton appointment-form__skeleton--line" />
      <div className="appointment-form__skeleton appointment-form__skeleton--line" />
      <div className="appointment-form__skeleton appointment-form__skeleton--block" />
    </div>
  );
}

export default function AppointmentBooking() {
  return (
    <section className="appointment-page" aria-labelledby="appointment-page-title">
      <div className="appointment-page__backdrop" aria-hidden="true">
        <span className="appointment-page__orb appointment-page__orb--left" />
        <span className="appointment-page__orb appointment-page__orb--right" />
      </div>

      <div className="appointment-page__inner">
        <h2 id="appointment-page-title" className="sr-only">
          Book an appointment at Sangi Hospital
        </h2>

        <ClientOnly fallback={<AppointmentFormFallback />}>
          <Suspense fallback={<AppointmentFormFallback />}>
            <AppointmentForm />
          </Suspense>
        </ClientOnly>

        <AppointmentSidebar />
      </div>
    </section>
  );
}
