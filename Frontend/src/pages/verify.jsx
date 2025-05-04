import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get email from URL (sent from Forgot Password page)
  const email = new URLSearchParams(location.search).get("email");

  const handleVerifyOTP = async () => {
    if (!otp) {
      setMessage("Please enter the OTP!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("OTP Verified:", data);
        setMessage(data.message);

        // ✅ Redirect to Reset Password page
        navigate(`/reset-password?email=${encodeURIComponent(email)}`);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <p>Email: {email}</p> {/* ✅ Show the email for clarity */}
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleVerifyOTP}>Verify</button>
      <p>{message}</p>
    </div>
  );
};

export default VerifyOTP;
