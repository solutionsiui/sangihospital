import { buildEmailTemplate, fieldsToPlainText } from "./baseTemplate";

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function buildContactEmail(payload: ContactPayload) {
  const fields = [
    { label: "Full Name", value: payload.fullName },
    { label: "Email Address", value: payload.email },
    { label: "Phone Number", value: payload.phone },
    { label: "Subject", value: payload.subject },
    { label: "Message", value: payload.message },
    { label: "Form Source", value: "Contact Us Page" },
    { label: "Submitted At", value: new Date().toLocaleString("en-IN") },
  ];

  return {
    subject: `New Contact Query — ${payload.subject}`,
    html: buildEmailTemplate({
      preheader: `New contact query from ${payload.fullName}`,
      badge: "Contact Query",
      title: "New Patient Inquiry",
      subtitle: "Someone reached out through the Contact Us form.",
      fields,
      footerNote:
        "Please reply directly to the patient using the email address provided above.",
    }),
    text: fieldsToPlainText(fields),
    replyTo: payload.email,
  };
}
