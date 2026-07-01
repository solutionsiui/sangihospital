"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown, Headphones, ScanEye, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { submitAppointmentRequest } from "@/lib/api/forms";

type AppointmentFormValues = {
  name: string;
  phone: string;
  department: string;
  date: string;
  message: string;
};

const features = [
  {
    title: "100% Safe and Trusted",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    icon: ShieldCheck,
  },
  {
    title: "Specialist eye Surgery",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    icon: ScanEye,
  },
  {
    title: "24/7 Take care Staff",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    icon: Headphones,
  },
] as const;

const departments = [
  "Dental",
  "Cardiology",
  "Neurology",
  "Gynecology",
  "Emergency",
  "Psychiatry",
] as const;

export default function AppointmentCta() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      department: departments[0],
      date: "",
      message: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await submitAppointmentRequest({
        type: "quick",
        name: data.name,
        phone: data.phone,
        department: data.department,
        date: data.date,
        message: data.message,
      });

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your appointment request. Please try again.",
      );
    }
  };

  return (
    <section className="appointment-cta">
      <div className="appointment-cta__inner">
        <div className="appointment-cta__grid">
          <div className="appointment-cta__content">
            <p className="appointment-cta__eyebrow">Appointment</p>
            <h2 className="appointment-cta__title">
              Get Amazing Treatment For Our Specialist Doctors
            </h2>

            <ul className="appointment-cta__features">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.title} className="appointment-cta__feature">
                    <span className="appointment-cta__feature-icon" aria-hidden="true">
                      <Icon className="appointment-cta__feature-icon-svg" strokeWidth={1.75} />
                    </span>
                    <div className="appointment-cta__feature-body">
                      <h3 className="appointment-cta__feature-title">{feature.title}</h3>
                      <p className="appointment-cta__feature-text">{feature.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="appointment-cta__form-wrap">
            <form
              className="appointment-cta__form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <h3 className="appointment-cta__form-title">Make an Appointment</h3>

              <div className="appointment-cta__field-row">
                <div className="appointment-cta__field">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="appointment-cta__input"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name ? (
                    <span className="appointment-cta__error">{errors.name.message}</span>
                  ) : null}
                </div>

                <div className="appointment-cta__field">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="appointment-cta__input"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\s()-]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone ? (
                    <span className="appointment-cta__error">{errors.phone.message}</span>
                  ) : null}
                </div>
              </div>

              <div className="appointment-cta__field-row">
                <div className="appointment-cta__field">
                  <div className="appointment-cta__select-wrap">
                    <select
                      className="appointment-cta__input appointment-cta__select"
                      aria-invalid={errors.department ? "true" : "false"}
                      {...register("department", { required: "Select a department" })}
                    >
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="appointment-cta__field-icon"
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  {errors.department ? (
                    <span className="appointment-cta__error">{errors.department.message}</span>
                  ) : null}
                </div>

                <div className="appointment-cta__field">
                  <div className="appointment-cta__date-wrap">
                    <input
                      type="date"
                      className="appointment-cta__input appointment-cta__date"
                      aria-invalid={errors.date ? "true" : "false"}
                      {...register("date", { required: "Select a date" })}
                    />
                    <CalendarDays
                      className="appointment-cta__field-icon"
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  {errors.date ? (
                    <span className="appointment-cta__error">{errors.date.message}</span>
                  ) : null}
                </div>
              </div>

              <div className="appointment-cta__field">
                <textarea
                  rows={5}
                  placeholder="Write Message"
                  className="appointment-cta__input appointment-cta__textarea"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message ? (
                  <span className="appointment-cta__error">{errors.message.message}</span>
                ) : null}
              </div>

              <button
                type="submit"
                className="appointment-cta__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book An Appointment"}
              </button>
              {submitSuccess ? (
                <p className="appointment-cta__success" role="status">
                  Your appointment request has been sent. Our team will contact you shortly.
                </p>
              ) : null}
              {submitError ? (
                <p className="appointment-cta__error" role="alert">
                  {submitError}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
