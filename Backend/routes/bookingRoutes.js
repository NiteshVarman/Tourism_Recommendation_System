const express = require("express");
const router = express.Router();
const {
  createOrder,
  verifyPayment,
  generatePDF,
  getMyBookings,
  cancelBooking,
  updateBooking,
} = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create-order", authMiddleware, createOrder);
router.post("/verify-payment", authMiddleware, verifyPayment);
router.get("/generate-pdf/:orderId", authMiddleware, generatePDF);
router.get("/my-bookings", authMiddleware, getMyBookings);
router.delete("/cancel/:id", authMiddleware, cancelBooking);
router.put("/update/:id", authMiddleware, updateBooking);

module.exports = router;