import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "SMTP_USER and SMTP_PASS are required for email verification. Configure server/.env (or server/env).",
    );
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  return transporter;
}

export async function sendEmail({ to, subject, text, html }) {
  const smtpUser = process.env.SMTP_USER;
  const smtpFrom = process.env.SMTP_FROM;
  const from =
    smtpFrom && smtpFrom.includes("@")
      ? smtpFrom
      : `Professional Socio <${smtpUser}>`;
  const activeTransporter = getTransporter();

  await activeTransporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}
