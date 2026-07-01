import { isEmailConfigured } from "@/lib/email/config";
import { sendMail } from "@/lib/email/mailer";
import {
  buildAppointmentEmail,
  type AppointmentPayload,
} from "@/lib/email/templates/appointmentEmail";
import { apiError, apiSuccess } from "@/lib/email/validate";
import {
  validateFullAppointment,
  validateQuickAppointment,
} from "@/lib/validation/appointment";

function toAppointmentPayload(
  payload: Record<string, string | undefined>,
): AppointmentPayload | null {
  if (payload.type === "quick") {
    const { name, phone, department, date, message } = payload;
    if (!name || !phone || !department || !date || !message) return null;
    return { type: "quick", name, phone, department, date, message };
  }

  const {
    fullName,
    phone,
    email,
    hospital,
    department,
    serviceType,
    visitType,
    preferredDate,
    preferredTime,
    message,
  } = payload;

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
    if (!body || typeof body !== "object") {
      return apiError("Invalid appointment request.");
    }

    const data = body as Record<string, unknown>;
    const type = data.type === "quick" ? "quick" : "full";
    const result =
      type === "quick"
        ? validateQuickAppointment(data)
        : validateFullAppointment(data);

    if (!result.ok) {
      return apiError(result.message);
    }

    const payload = toAppointmentPayload(result.payload);
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
