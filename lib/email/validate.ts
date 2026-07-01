export {
  FORM_LIMITS,
  digitsOnlyPhone,
  isValidPersonName,
  isValidPhone,
  isValidEmail,
  isValidMessage,
  isValidFutureDate,
  isAllowedOption,
  isValidResumeFile,
} from "@/lib/validation/forms";

export function sanitizeString(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function apiError(message: string, status = 400) {
  return Response.json({ success: false, message }, { status });
}

export function apiSuccess(message: string) {
  return Response.json({ success: true, message });
}
