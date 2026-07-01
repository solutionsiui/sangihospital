import { isEmailConfigured } from "@/lib/email/config";
import { sendMail } from "@/lib/email/mailer";
import {
  buildAppointmentEmail,
  type AppointmentPayload,
} from "@/lib/email/templates/appointmentEmail";
import {
  apiError,
  apiSuccess,
  isValidEmail,
  isValidPhone,
  sanitizeString,
} from "@/lib/email/validate";

function parseAppointmentBody(body: unknown): AppointmentPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const type = data.type === "quick" ? "quick" : "full";

  if (type === "quick") {
    const name = sanitizeString(data.name, 120);
    const phone = sanitizeString(data.phone, 20);
    const department = sanitizeString(data.department, 120);
    const date = sanitizeString(data.date, 20);
    const message = sanitizeString(data.message, 2000);

    if (!name || !phone || !department || !date || !message) return null;
    if (!isValidPhone(phone)) return null;

    return { type: "quick", name, phone, department, date, message };
  }

  const fullName = sanitizeString(data.fullName, 120);
  const phone = sanitizeString(data.phone, 20);
  const email = sanitizeString(data.email, 160);
  const hospital = sanitizeString(data.hospital, 80);
  const department = sanitizeString(data.department, 80);
  const serviceType = sanitizeString(data.serviceType, 80);
  const visitType = sanitizeString(data.visitType, 80);
  const preferredDate = sanitizeString(data.preferredDate, 20);
  const preferredTime = sanitizeString(data.preferredTime, 40);
  const message = sanitizeString(data.message, 2000);

  if (
    !fullName ||
    !phone ||
    !hospital ||
    !department ||
    !serviceType ||
    !visitType ||
    !preferredDate ||
    !preferredTime
  ) {
    return null;
  }

  if (!isValidPhone(phone)) return null;
  if (email && !isValidEmail(email)) return null;

  return {
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
  };
}

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return apiError(
        "Email service is not configured. Please contact the hospital directly.",
        503,
      );
    }

    const body = await request.json();
    const payload = parseAppointmentBody(body);

    if (!payload) {
      return apiError("Please fill in all required appointment details.");
    }

    const email = buildAppointmentEmail(payload);

    await sendMail({
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: "replyTo" in email ? email.replyTo : undefined,
    });

    return apiSuccess(
      "Your appointment request has been sent. Our team will contact you shortly.",
    );
  } catch (error) {
    console.error("Appointment email error:", error);
    return apiError(
      "Unable to send your appointment request right now. Please try again or call the hospital.",
      500,
    );
  }
}
