const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\s()-]{7,15}$/;

export function isValidEmail(value: string): boolean {
  return emailPattern.test(value);
}

export function isValidPhone(value: string): boolean {
  return phonePattern.test(value);
}

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
