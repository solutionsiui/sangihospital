import type { RegisterOptions } from "react-hook-form";

// Shared rule objects are intentionally untyped for reuse across forms.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormRegisterOptions = RegisterOptions<any, any>;

function asRules<T extends FormRegisterOptions>(rules: T): T {
  return rules;
}

export const FORM_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 160 },
  messageShort: { min: 10, max: 500 },
  messageLong: { min: 10, max: 2000 },
  messageContact: { min: 10, max: 3000 },
  qualification: { min: 2, max: 120 },
  employer: { max: 120 },
  coverLetter: { max: 2000 },
  resumeMaxBytes: 5 * 1024 * 1024,
} as const;

const namePattern = /^[a-zA-Z][a-zA-Z\s.'-]*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const resumeMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const resumeExtensions = new Set(["pdf", "doc", "docx"]);

export function digitsOnlyPhone(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidPersonName(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < FORM_LIMITS.name.min || trimmed.length > FORM_LIMITS.name.max) {
    return false;
  }
  if (!namePattern.test(trimmed)) return false;
  return /[a-zA-Z]/.test(trimmed);
}

export function isValidPhone(value: string): boolean {
  const digits = digitsOnlyPhone(value);
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^91[6-9]\d{9}$/.test(digits);
  }
  return false;
}

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > FORM_LIMITS.email.max) return false;
  return emailPattern.test(trimmed);
}

export function isValidMessage(value: string, min: number, max: number): boolean {
  const trimmed = value.trim();
  if (trimmed.length < min || trimmed.length > max) return false;
  return /[a-zA-Z0-9]/.test(trimmed);
}

export function isValidFutureDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return date >= today && date <= maxDate;
}

export function isAllowedOption(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

export function getMinAppointmentDate(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getMaxAppointmentDate(): string {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  return maxDate.toISOString().slice(0, 10);
}

export function isValidResumeFile(file: File | undefined): string | true {
  if (!file) return "Resume is required";

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const hasAllowedType = resumeMimeTypes.has(file.type);
  const hasAllowedExtension = resumeExtensions.has(extension);

  if (!hasAllowedType && !hasAllowedExtension) {
    return "Upload a PDF or Word document (.pdf, .doc, .docx)";
  }

  if (file.size === 0) return "Resume file is empty";
  if (file.size > FORM_LIMITS.resumeMaxBytes) return "Resume must be 5 MB or smaller";

  return true;
}

export const fullNameRules = asRules({
  required: "Full name is required",
  minLength: {
    value: FORM_LIMITS.name.min,
    message: "Name must be at least 2 characters",
  },
  maxLength: {
    value: FORM_LIMITS.name.max,
    message: "Name must be at most 80 characters",
  },
  validate: (value) =>
    isValidPersonName(String(value)) || "Enter a valid full name using letters only",
});

export const personNameRules = asRules({
  ...fullNameRules,
  required: "Name is required",
});

export const phoneRules = asRules({
  required: "Phone number is required",
  validate: (value) =>
    isValidPhone(String(value)) ||
    "Enter a valid 10-digit Indian mobile number (optionally with +91)",
});

export const emailRequiredRules = asRules({
  required: "Email is required",
  maxLength: {
    value: FORM_LIMITS.email.max,
    message: "Email is too long",
  },
  validate: (value) => isValidEmail(String(value)) || "Enter a valid email address",
});

export const emailOptionalRules = asRules({
  maxLength: {
    value: FORM_LIMITS.email.max,
    message: "Email is too long",
  },
  validate: (value) => {
    const trimmed = String(value ?? "").trim();
    if (!trimmed) return true;
    return isValidEmail(trimmed) || "Enter a valid email address";
  },
});

export function messageRules(
  min: number,
  max: number,
  required = true,
) {
  return asRules({
    required: required ? "Message is required" : false,
    maxLength: {
      value: max,
      message: `Message must be at most ${max} characters`,
    },
    validate: (value) => {
      const trimmed = String(value ?? "").trim();
      if (!required && !trimmed) return true;
      if (trimmed.length < min) {
        return `Message must be at least ${min} characters`;
      }
      return isValidMessage(trimmed, min, max) || "Enter a meaningful message";
    },
  });
}

export const futureDateRules = asRules({
  required: "Select a date",
  validate: (value) =>
    isValidFutureDate(String(value)) || "Choose a valid date from today onwards",
});

export const consentRules = asRules({
  validate: (value) => value === true || "Please accept the terms to continue",
});

export function selectRules(label: string) {
  return asRules({ required: `Select ${label}` });
}

export function allowedSelectRules(
  label: string,
  options: readonly string[],
) {
  return asRules({
    required: `Select ${label}`,
    validate: (value) =>
      isAllowedOption(String(value), options) || `Select a valid ${label}`,
  });
}

export const qualificationRules = asRules({
  required: "Qualification is required",
  minLength: {
    value: FORM_LIMITS.qualification.min,
    message: "Qualification must be at least 2 characters",
  },
  maxLength: {
    value: FORM_LIMITS.qualification.max,
    message: "Qualification is too long",
  },
  validate: (value) => {
    const trimmed = String(value).trim();
    return /[a-zA-Z0-9]/.test(trimmed) || "Enter a valid qualification";
  },
});

export const employerOptionalRules = asRules({
  maxLength: {
    value: FORM_LIMITS.employer.max,
    message: "Employer name is too long",
  },
  validate: (value) => {
    const trimmed = String(value ?? "").trim();
    if (!trimmed) return true;
    return trimmed.length >= 2 || "Enter a valid employer name";
  },
});

export const coverLetterOptionalRules = asRules({
  maxLength: {
    value: FORM_LIMITS.coverLetter.max,
    message: `Cover letter must be at most ${FORM_LIMITS.coverLetter.max} characters`,
  },
});

export const resumeRules = asRules({
  required: "Resume is required",
  validate: (value) => {
    const fileList = value as FileList | undefined;
    return isValidResumeFile(fileList?.[0]);
  },
});
