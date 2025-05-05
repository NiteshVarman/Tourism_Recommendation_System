const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");
const User = require("../models/user").User;
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { oAuth2Client } = require("../utils/googleAuth");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const otpStore = {};

function generateJWT(user) {
  return jwt.sign(
    { googleId: user.googleId, accessToken: user.accessToken, refreshToken: user.refreshToken },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

async function refreshAccessToken(refreshToken) {
  try {
    oAuth2Client.setCredentials({ refresh_token: refreshToken });
    const { credentials } = await oAuth2Client.refreshAccessToken();
    console.log("🔄 New Access Token:", credentials.access_token);
    return credentials.access_token;
  } catch (error) {
    console.error("❌ Error refreshing access token:", error);
    throw new Error("Failed to refresh access token");
  }
}

const googleAuth = (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/bookings?token=${generateJWT(req.user)}`);
};

const syncCalendar = async (req, res) => {
  try {
    const { booking } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let accessToken = decoded.accessToken;
    const refreshToken = decoded.refreshToken;

    if (!accessToken) {
      accessToken = await refreshAccessToken(refreshToken);
    }

    oAuth2Client.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    const event = {
      summary: booking.listing?.title || "Unknown Booking",
      description: `Type: ${booking.listing?.type || "Unknown Type"}\nAmount: ₹${booking.amount}\nGuests: ${booking.numAdults} Adults, ${booking.numChildren} Children\nStatus: ${booking.paymentStatus}`,
      start: {
        dateTime: new Date(`${booking.date}T${booking.time}:00`).toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: new Date(new Date(`${booking.date}T${booking.time}:00`).getTime() + 3600000).toISOString(),
        timeZone: "Asia/Kolkata",
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    res.json({ message: "Event added to Google Calendar", eventId: response.data.id });
  } catch (error) {
    console.error("❌ Error syncing event:", error);
    res.status(500).json({ error: "Failed to sync event to Google Calendar" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = crypto.randomInt(100000, 999999).toString();
  otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Password Reset OTP",
    text: `Your OTP for password reset is: ${otp}. It is valid for 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent successfully!" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
};

const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

  const storedOtpData = otpStore[email];

  if (!storedOtpData) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  if (Date.now() > storedOtpData.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ error: "OTP has expired. Request a new one." });
  }

  if (storedOtpData.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  delete otpStore[email];
  res.json({ message: "OTP verified!", success: true, redirectUrl: `/reset-password?email=${encodeURIComponent(email)}` });
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ success: true, message: "Password reset successfully!" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  googleAuth,
  syncCalendar,
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
};