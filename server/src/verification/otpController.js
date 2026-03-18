import client from "../redisClient.js";
import { ALLOWED_COMPANY_EMAIL_DOMAINS } from "./allowedCompanyDomains.js";
import { sendEmail } from "./mailService.js";
import {
  getOtpMailTemplate,
  getVerificationSuccessTemplate,
} from "./mailTemplates.js";

const MAX_TRIES = 5;
const OTP_TTL_SECONDS = 60 * 10;

function getOtpKey(email) {
  return `otp:${email}`;
}

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedCompanyEmail(email) {
  const domain = email.split("@")[1];
  return ALLOWED_COMPANY_EMAIL_DOMAINS.includes(domain);
}

async function readOtpState(email) {
  const raw = await client.get(getOtpKey(email));
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeOtpState(email, state) {
  await client.set(getOtpKey(email), JSON.stringify(state), {
    EX: OTP_TTL_SECONDS,
  });
}

function getBlockedResponse(tries) {
  return {
    ok: false,
    message:
      "Too many wrong OTP attempts. OTP requests are blocked for this email.",
    tries,
    maxTries: MAX_TRIES,
  };
}

export async function requestOtp(req, res) {
  try {
    const email = normalizeEmail(req.body?.email);

    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, message: "Invalid email format" });
    }

    if (!isAllowedCompanyEmail(email)) {
      return res.status(400).json({
        ok: false,
        message:
          "Only approved company work emails are allowed. Generic email domains are blocked.",
      });
    }

    const existing = await readOtpState(email);
    const tries = Number(existing?.tries || 0);

    if (tries >= MAX_TRIES) {
      return res.status(429).json(getBlockedResponse(tries));
    }

    const otp = generateOtp();
    const state = {
      email,
      otp,
      tries,
      verified: false,
      updatedAt: Date.now(),
    };

    await writeOtpState(email, state);

    const template = getOtpMailTemplate(otp, email);
    await sendEmail({
      to: email,
      ...template,
    });

    return res.status(200).json({
      ok: true,
      message: "OTP sent to email",
      tries,
      maxTries: MAX_TRIES,
    });
  } catch (error) {
    console.error("requestOtp error", error);
    const errorMessage = String(error?.message || "");
    if (errorMessage.includes("SMTP_USER and SMTP_PASS")) {
      return res.status(500).json({ ok: false, message: errorMessage });
    }

    return res.status(500).json({ ok: false, message: "Failed to send OTP" });
  }
}

export async function verifyOtp(req, res) {
  try {
    const email = normalizeEmail(req.body?.email);
    const otp = String(req.body?.otp || "").trim();

    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, message: "Invalid email format" });
    }

    if (!otp) {
      return res.status(400).json({ ok: false, message: "OTP is required" });
    }

    const state = await readOtpState(email);

    if (!state) {
      return res
        .status(404)
        .json({ ok: false, message: "No OTP request found for this email" });
    }

    const tries = Number(state.tries || 0);

    if (tries >= MAX_TRIES) {
      return res.status(429).json(getBlockedResponse(tries));
    }

    if (state.otp !== otp) {
      const updatedTries = tries + 1;
      await writeOtpState(email, {
        ...state,
        tries: updatedTries,
        updatedAt: Date.now(),
      });

      if (updatedTries >= MAX_TRIES) {
        return res.status(429).json(getBlockedResponse(updatedTries));
      }

      return res.status(400).json({
        ok: false,
        message: "Invalid OTP",
        tries: updatedTries,
        attemptsLeft: MAX_TRIES - updatedTries,
      });
    }

    await writeOtpState(email, {
      ...state,
      verified: true,
      otp: null,
      updatedAt: Date.now(),
    });

    const template = getVerificationSuccessTemplate(email);
    await sendEmail({
      to: email,
      ...template,
    });

    return res.status(200).json({
      ok: true,
      message: "Email verified successfully",
      verified: true,
      tries,
    });
  } catch (error) {
    console.error("verifyOtp error", error);
    const errorMessage = String(error?.message || "");
    if (errorMessage.includes("SMTP_USER and SMTP_PASS")) {
      return res.status(500).json({ ok: false, message: errorMessage });
    }

    return res.status(500).json({ ok: false, message: "Failed to verify OTP" });
  }
}
