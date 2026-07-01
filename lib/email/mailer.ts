import nodemailer from "nodemailer";
import { getEmailConfig } from "./config";

export type SendMailOptions = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail({ subject, html, text, replyTo }: SendMailOptions) {
  const config = getEmailConfig();

  if (!config) {
    throw new Error("Email is not configured. Please set SMTP environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo,
    subject,
    html,
    text,
  });
}
