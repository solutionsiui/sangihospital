import { contactPage } from "@/Components/Contact/contactContent";
import {
  FORM_LIMITS,
  isAllowedOption,
  isValidEmail,
  isValidMessage,
  isValidPersonName,
  isValidPhone,
  sanitizeString,
} from "@/lib/email/validate";

const subjectLabels = contactPage.subjects.map((item) => item.label);

export type ContactValidationResult =
  | {
      ok: true;
      payload: {
        fullName: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
    }
  | { ok: false; message: string };

export function validateContactSubmission(
  body: Record<string, unknown>,
): ContactValidationResult {
  const fullName = sanitizeString(body.fullName, FORM_LIMITS.name.max);
  const email = sanitizeString(body.email, FORM_LIMITS.email.max);
  const phone = sanitizeString(body.phone, 20);
  const subject = sanitizeString(body.subject, 160);
  const message = sanitizeString(body.message, FORM_LIMITS.messageContact.max);

  if (!fullName) return { ok: false, message: "Full name is required." };
  if (!isValidPersonName(fullName)) return { ok: false, message: "Enter a valid full name." };
  if (!email) return { ok: false, message: "Email is required." };
  if (!isValidEmail(email)) return { ok: false, message: "Enter a valid email address." };
  if (!phone) return { ok: false, message: "Phone number is required." };
  if (!isValidPhone(phone)) {
    return { ok: false, message: "Enter a valid 10-digit Indian mobile number." };
  }
  if (!subject) return { ok: false, message: "Subject is required." };
  if (!isAllowedOption(subject, subjectLabels)) {
    return { ok: false, message: "Select a valid subject." };
  }
  if (!message) return { ok: false, message: "Message is required." };
  if (
    !isValidMessage(message, FORM_LIMITS.messageContact.min, FORM_LIMITS.messageContact.max)
  ) {
    return {
      ok: false,
      message: `Message must be ${FORM_LIMITS.messageContact.min}-${FORM_LIMITS.messageContact.max} characters.`,
    };
  }

  return {
    ok: true,
    payload: { fullName, email, phone, subject, message },
  };
}
