import { isEmailConfigured } from "@/lib/email/config";
import { sendMail } from "@/lib/email/mailer";
import { buildContactEmail } from "@/lib/email/templates/contactEmail";
import {
  apiError,
  apiSuccess,
  isValidEmail,
  isValidPhone,
  sanitizeString,
} from "@/lib/email/validate";

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return apiError(
        "Email service is not configured. Please contact the hospital directly.",
        503,
      );
    }

    const body = await request.json();
    const fullName = sanitizeString(body?.fullName, 120);
    const email = sanitizeString(body?.email, 160);
    const phone = sanitizeString(body?.phone, 20);
    const subject = sanitizeString(body?.subject, 160);
    const message = sanitizeString(body?.message, 3000);

    if (!fullName || !email || !phone || !subject || !message) {
      return apiError("Please fill in all required contact details.");
    }

    if (!isValidEmail(email)) {
      return apiError("Please enter a valid email address.");
    }

    if (!isValidPhone(phone)) {
      return apiError("Please enter a valid phone number.");
    }

    const mail = buildContactEmail({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    await sendMail({
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      replyTo: mail.replyTo,
    });

    return apiSuccess(
      "Your message has been sent successfully. We will get back to you soon.",
    );
  } catch (error) {
    console.error("Contact email error:", error);
    return apiError(
      "Unable to send your message right now. Please try again later.",
      500,
    );
  }
}
