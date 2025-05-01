const express = require("express");
const router = express.Router();
const passport = require("passport");
const { googleAuth, syncCalendar, register, login, forgotPassword, verifyOtp, resetPassword } = require("../controllers/authController");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/calendar.events"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), googleAuth);
router.post("/google/sync-calendar", syncCalendar);
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

module.exports = router;