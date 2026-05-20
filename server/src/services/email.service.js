export async function sendEmail({ to, subject, text }) {
  if (!process.env.SMTP_HOST) {
    console.log(`[email skipped] ${subject} -> ${to}: ${text}`);
    return;
  }
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  await transporter.sendMail({ from: process.env.SMTP_FROM, to, subject, text });
}
