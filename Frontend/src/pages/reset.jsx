import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${process.env.API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
        <input type="email" placeholder="Email" value={email} disabled />
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
