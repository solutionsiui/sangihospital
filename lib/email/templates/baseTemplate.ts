type EmailField = {
  label: string;
  value: string;
};

type BaseTemplateOptions = {
  preheader: string;
  badge: string;
  title: string;
  subtitle: string;
  fields: EmailField[];
  footerNote?: string;
};

export function buildEmailTemplate({
  preheader,
  badge,
  title,
  subtitle,
  fields,
  footerNote,
}: BaseTemplateOptions): string {
  const rows = fields
    .map(
      (field) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #e8edf5;color:#5c6b8a;font-size:13px;font-weight:600;width:38%;vertical-align:top;">
            ${escapeHtml(field.label)}
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #e8edf5;color:#132573;font-size:14px;line-height:1.6;vertical-align:top;">
            ${escapeHtml(field.value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#132573;">
  <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f6fb;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(19,37,115,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#0a1545 0%,#132573 55%,#2a4db8 100%);padding:28px 32px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.72);font-weight:700;">
                Sangi Hospital
              </p>
              <p style="display:inline-block;margin:0 0 14px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,0.14);color:#ffffff;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                ${escapeHtml(badge)}
              </p>
              <h1 style="margin:0 0 8px;font-size:28px;line-height:1.25;color:#ffffff;font-weight:700;">
                ${escapeHtml(title)}
              </h1>
              <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.88);">
                ${escapeHtml(subtitle)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 12px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0;padding:16px 18px;border-radius:12px;background:#f7f9fc;border:1px solid #e8edf5;font-size:13px;line-height:1.7;color:#5c6b8a;">
                ${escapeHtml(footerNote ?? "This message was sent from the Sangi Hospital website. Please respond to the patient using the contact details above.")}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#8a97b0;text-align:center;">
                © ${new Date().getFullYear()} Sangi Hospital · Trusted Multi-Speciality Healthcare Network
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function fieldsToPlainText(fields: EmailField[]): string {
  return fields.map((field) => `${field.label}: ${field.value}`).join("\n");
}
