"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  FileUp,
  GraduationCap,
  User,
} from "lucide-react";
import {
  careerExperienceLevels,
  careerHospitals,
  careersPage,
  type CareerJob,
} from "./careersContent";

export type CareerApplicationFormValues = {
  fullName: string;
  phone: string;
  email: string;
  hospital: string;
  experience: string;
  qualification: string;
  currentEmployer: string;
  resume: FileList;
  coverLetter: string;
  consent: boolean;
};

type CareerApplicationFormProps = {
  job: CareerJob;
};

export default function CareerApplicationForm({ job }: CareerApplicationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationFormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      hospital: careerHospitals[0]?.value ?? "",
      experience: careerExperienceLevels[0].value,
      qualification: "",
      currentEmployer: "",
      coverLetter: "",
      consent: false,
    },
  });

  const onSubmit = async (data: CareerApplicationFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Career application (UI only):", { role: job.slug, ...data });
    setIsSubmitted(true);
    setResumeName("");
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="career-form__success" role="status">
        <span className="career-form__success-icon" aria-hidden="true">
          <CheckCircle2 size={40} strokeWidth={1.5} />
        </span>
        <h2 className="career-form__success-title">Application Submitted Successfully</h2>
        <p className="career-form__success-text">
          Thank you for applying for the {job.title} role at Sangi Hospital. Our HR team will
          review your profile and contact you if shortlisted for the next round.
        </p>
        <button
          type="button"
          className="career-form__success-button"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="career-form">
      <div className="career-form__header">
        <p className="career-form__eyebrow">Job Application</p>
        <h2 className="career-form__title">
          Apply for{" "}
          <span className="career-form__title-accent">{job.shortTitle}</span>
        </h2>
        <p className="career-form__lead">
          Complete the form below to apply for this position. Fields marked with * are required.
        </p>
        <p className="career-form__role-note">
          Applying for <strong>{job.title}</strong>
        </p>
      </div>

      <form className="career-form__body" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="career-form__section">
          <h3 className="career-form__section-title">
            <User size={18} aria-hidden="true" />
            Personal Details
          </h3>

          <div className="career-form__row career-form__row--2">
            <div className="career-form__field">
              <label htmlFor="fullName" className="career-form__label">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="career-form__input"
                aria-invalid={errors.fullName ? "true" : "false"}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName ? (
                <span className="career-form__error">{errors.fullName.message}</span>
              ) : null}
            </div>

            <div className="career-form__field">
              <label htmlFor="phone" className="career-form__label">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 00000 00000"
                className="career-form__input"
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
                <span className="career-form__error">{errors.phone.message}</span>
              ) : null}
            </div>
          </div>

          <div className="career-form__field">
            <label htmlFor="email" className="career-form__label">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="career-form__input"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email ? (
              <span className="career-form__error">{errors.email.message}</span>
            ) : null}
          </div>
        </div>

        <div className="career-form__section">
          <h3 className="career-form__section-title">
            <Briefcase size={18} aria-hidden="true" />
            Professional Details
          </h3>

          <div className="career-form__row career-form__row--2">
            <div className="career-form__field">
              <label htmlFor="hospital" className="career-form__label">
                Preferred Location *
              </label>
              <div className="career-form__select-wrap">
                <select
                  id="hospital"
                  className="career-form__input career-form__select"
                  aria-invalid={errors.hospital ? "true" : "false"}
                  {...register("hospital", { required: "Select a location" })}
                >
                  {careerHospitals.map((hospital) => (
                    <option key={hospital.value} value={hospital.value}>
                      {hospital.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="career-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.hospital ? (
                <span className="career-form__error">{errors.hospital.message}</span>
              ) : null}
            </div>

            <div className="career-form__field">
              <label htmlFor="experience" className="career-form__label">
                Experience *
              </label>
              <div className="career-form__select-wrap">
                <select
                  id="experience"
                  className="career-form__input career-form__select"
                  {...register("experience", { required: "Select experience level" })}
                >
                  {careerExperienceLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="career-form__field-icon" size={18} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="career-form__row career-form__row--2">
            <div className="career-form__field">
              <label htmlFor="qualification" className="career-form__label">
                Highest Qualification *
              </label>
              <input
                id="qualification"
                type="text"
                placeholder="e.g. MBBS, B.Sc Nursing, BBA"
                className="career-form__input"
                aria-invalid={errors.qualification ? "true" : "false"}
                {...register("qualification", { required: "Qualification is required" })}
              />
              {errors.qualification ? (
                <span className="career-form__error">{errors.qualification.message}</span>
              ) : null}
            </div>

            <div className="career-form__field">
              <label htmlFor="currentEmployer" className="career-form__label">
                Current Employer
              </label>
              <input
                id="currentEmployer"
                type="text"
                placeholder="Current hospital / organization"
                className="career-form__input"
                {...register("currentEmployer")}
              />
            </div>
          </div>
        </div>

        <div className="career-form__section">
          <h3 className="career-form__section-title">
            <GraduationCap size={18} aria-hidden="true" />
            Application Documents
          </h3>

          <div className="career-form__field">
            <label htmlFor="resume" className="career-form__label">
              Upload Resume / CV *
            </label>
            <div className="career-form__file-wrap">
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="career-form__file-input"
                aria-invalid={errors.resume ? "true" : "false"}
                {...register("resume", {
                  required: "Resume is required",
                  onChange: (event) => {
                    const file = event.target.files?.[0];
                    setResumeName(file?.name ?? "");
                  },
                })}
              />
              <label htmlFor="resume" className="career-form__file-label">
                <FileUp size={20} aria-hidden="true" />
                <span>{resumeName || "Choose PDF or Word file"}</span>
              </label>
            </div>
            {errors.resume ? (
              <span className="career-form__error">{errors.resume.message}</span>
            ) : null}
          </div>

          <div className="career-form__field">
            <label htmlFor="coverLetter" className="career-form__label">
              Cover Letter / Message
            </label>
            <textarea
              id="coverLetter"
              rows={4}
              placeholder="Tell us why you want to join Sangi Hospital..."
              className="career-form__input career-form__textarea"
              {...register("coverLetter")}
            />
          </div>
        </div>

        <div className="career-form__consent">
          <label className="career-form__checkbox-label">
            <input
              type="checkbox"
              className="career-form__checkbox"
              aria-invalid={errors.consent ? "true" : "false"}
              {...register("consent", {
                required: "You must agree before submitting",
              })}
            />
            <span>
              I confirm that the information provided is accurate and I agree to be contacted by
              Sangi Hospital HR regarding this application.
            </span>
          </label>
          {errors.consent ? (
            <span className="career-form__error">{errors.consent.message}</span>
          ) : null}
        </div>

        <button type="submit" className="career-form__submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        <p className="career-form__note">
          {careersPage.contact.email} · Applications are reviewed within 5–7 working days.
        </p>
      </form>
    </div>
  );
}
