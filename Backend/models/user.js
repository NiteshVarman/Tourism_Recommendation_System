const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
});

// OTP Schema
const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, expires: "5m", default: Date.now }, // Auto-delete after 5 min
});

// Export both models
const User = mongoose.model("User", userSchema);
const OTP = mongoose.model("OTP", otpSchema);

module.exports = { User, OTP };
