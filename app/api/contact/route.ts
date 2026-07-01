import { isEmailConfigured } from "@/lib/email/config";
import { sendMail } from "@/lib/email/mailer";
import { buildContactEmail } from "@/lib/email/templates/contactEmail";
import { apiError, apiSuccess } from "@/lib/email/validate";
import { validateContactSubmission } from "@/lib/validation/contact";

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
      return apiError("Invalid contact request.");
    }

    const result = validateContactSubmission(body as Record<string, unknown>);
    if (!result.ok) {
      return apiError(result.message);
    }

    const { fullName, email, phone, subject, message } = result.payload;
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
