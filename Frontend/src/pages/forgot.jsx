import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const sendOtp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, { email });
      setStep(2);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/verify-otp`, { email, otp });
      console.log(response.data);
      setStep(3);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate(`/reset-password?email=${encodeURIComponent(email)}`);
      }
      , 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Forgot Password</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      
      {step === 1 && (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      {step === 3 && <h3>OTP Verified Successfully! You can now reset your password.</h3>}
    </div>
  );
};

export default ForgotPassword;
