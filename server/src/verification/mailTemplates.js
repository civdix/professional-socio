export function getOtpMailTemplate(otp, email) {
  return {
    subject: "Professional Socio OTP Verification",
    text: `Your OTP for Professional Socio is ${otp}. It is valid for 10 minutes. If you did not request this, please ignore this email.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="padding: 24px; border-bottom: 1px solid #1e293b;">
          <h2 style="margin: 0; color: #38bdf8;">Professional Socio Email Verification</h2>
          <p style="margin: 8px 0 0; color: #cbd5e1;">Confirm your work email to continue.</p>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 14px;">Hi ${email},</p>
          <p style="margin: 0 0 20px;">Use this One-Time Password (OTP):</p>
          <div style="font-size: 30px; letter-spacing: 8px; font-weight: 700; text-align: center; background: #111827; padding: 14px; border-radius: 10px; color: #22c55e;">${otp}</div>
          <p style="margin: 20px 0 0; color: #94a3b8;">OTP expires in 10 minutes. Max 5 wrong attempts are allowed.</p>
        </div>
      </div>
    `,
  };
}

export function getVerificationSuccessTemplate(email) {
  return {
    subject: "Professional Socio Email Verified",
    text: `Your email ${email} is now verified successfully on Professional Socio.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="padding: 24px; border-bottom: 1px solid #1e293b;">
          <h2 style="margin: 0; color: #22c55e;">Verification Successful ✅</h2>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 14px;">Hi ${email},</p>
          <p style="margin: 0;">Your work email has been verified successfully. You can now continue using Professional Socio.</p>
        </div>
      </div>
    `,
  };
}
