import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingUp({ setUsername }) {
  const naviagte = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const backendBaseUrl = useMemo(() => {
    const fallbackSocketUrl =
      import.meta.env.VITE_APP_WEBSOCKET_URL || "http://localhost:5000";
    const envBackendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    const activeBaseUrl = envBackendUrl || fallbackSocketUrl;

    try {
      const parsed = new URL(activeBaseUrl);
      const isConfiguredLocalhost = ["localhost", "127.0.0.1"].includes(
        parsed.hostname,
      );
      const isCurrentLocalhost = ["localhost", "127.0.0.1"].includes(
        window.location.hostname,
      );

      if (isConfiguredLocalhost && !isCurrentLocalhost) {
        parsed.hostname = window.location.hostname;
      }

      return parsed.toString().replace(/\/$/, "");
    } catch {
      return "http://localhost:5000";
    }
  }, []);

  async function postJson(path, payload) {
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Request failed");
    }

    return data;
  }

  async function sendOtp() {
    const email = emailInput.trim().toLowerCase();

    if (!email) {
      setStatusMessage("Enter your work email first.");
      return;
    }

    try {
      setIsRequestingOtp(true);
      setStatusMessage("Sending OTP...");
      await postJson("/api/verification/request-otp", { email });
      setIsOtpSent(true);
      setIsVerified(false);
      setStatusMessage("OTP sent successfully. Check your mailbox.");
    } catch (error) {
      setStatusMessage(error.message);
    } finally {
      setIsRequestingOtp(false);
    }
  }

  async function verifyOtp() {
    const email = emailInput.trim().toLowerCase();
    const otp = otpInput.trim();

    if (!email || !otp) {
      setStatusMessage("Enter both work email and OTP.");
      return;
    }

    try {
      setIsVerifyingOtp(true);
      setStatusMessage("Verifying OTP...");
      await postJson("/api/verification/verify-otp", { email, otp });
      setIsVerified(true);
      setStatusMessage("Email verified successfully. You can start chat now.");
    } catch (error) {
      setIsVerified(false);
      setStatusMessage(error.message);
    } finally {
      setIsVerifyingOtp(false);
    }
  }

  function usernameSubmit(e) {
    e.preventDefault();

    if (!nameInput.trim()) {
      setStatusMessage("Enter your name to continue.");
      return;
    }

    if (!isVerified) {
      setStatusMessage("Verify your company email first.");
      return;
    }

    setUsername(nameInput.trim());
    naviagte("/chat");
  }

  return (
    <div id="signupPage">
      <div id="signupCard">
        <h1 id="OmegelCloneHeading">Professional Socio</h1>
        <p id="signupSubtitle">
          Secure random video chat for verified professionals.
        </p>

        <form onSubmit={usernameSubmit} id="signupForm">
          <input
            type="text"
            className="singupInputBox"
            placeholder="Enter Your Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <div className="verificationRow">
            <input
              type="email"
              className="singupInputBox"
              placeholder="Work Email (company domain only)"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button
              type="button"
              className="signupActionBtn"
              onClick={sendOtp}
              disabled={isRequestingOtp}
            >
              {isRequestingOtp ? "Sending..." : "Send OTP"}
            </button>
          </div>

          <div className="verificationRow">
            <input
              type="text"
              className="singupInputBox"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              disabled={!isOtpSent}
            />
            <button
              type="button"
              className="signupActionBtn"
              onClick={verifyOtp}
              disabled={!isOtpSent || isVerifyingOtp}
            >
              {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
            </button>
          </div>

          <div
            id="verificationStatus"
            data-verified={isVerified ? "true" : "false"}
          >
            {statusMessage || "Verify your company email to unlock chat."}
          </div>

          <button
            type="submit"
            className="singupInputBox"
            id="signupSubmitBtn"
            disabled={!isVerified}
          >
            Start Chat
          </button>
        </form>
      </div>
    </div>
  );
}
