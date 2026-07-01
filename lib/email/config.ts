export function getEmailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  // MAIL_TO: where form submissions are delivered (defaults to SMTP_USER)
  const to = process.env.MAIL_TO ?? user;
  // MAIL_FROM: sender shown in inbox (use your Gmail address when using Gmail SMTP)
  const from =
    process.env.MAIL_FROM ?? `Sangi Hospital <${user}>`;

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
    from,
    to,
  };
}

export function isEmailConfigured(): boolean {
  return getEmailConfig() !== null;
}
