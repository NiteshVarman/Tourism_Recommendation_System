const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
    amount: { type: Number, required: true },
    taxAmount: { type: Number, default: 0 },
    discountAmount: { type: Number, default: 0 },
    couponCode: { type: String, default: null },
    currency: { type: String, default: "INR" },
    
    numAdults: { type: Number, required: true },
    numChildren: { type: Number, required: true },
    guestNames: { type: [String], required: true },
    contactNumber: { type: String, required: true },
    altContactNumber: { type: String },
    address: { type: String, required: true },
    
    date: { type: String, required: true },  // Booking Date
    time: { type: String, required: true },  // Booking Time

    paymentStatus: { type: String, default: "Pending" }, // "Pending", "Completed", "Failed"
    paymentMethod: { type: String, required: true },  // "Razorpay", "UPI", "Credit Card", etc.
    paymentGateway: { type: String, required: true }, // "Razorpay", "PayPal", etc.
    transactionId: { type: String, default: null },  // Razorpay Transaction ID
    orderId: { type: String, default: null },  // Razorpay Order ID
    paymentDate: { type: String }, // YYYY-MM-DD
    paymentTime: { type: String }, // HH:MM:SS
    
    refundStatus: { type: String, default: "Not Requested" }, // "Not Requested", "Pending", "Processed"
    refundAmount: { type: Number, default: 0 },

    ipAddress: { type: String, default: null },  // For fraud detection
    deviceInfo: { type: String, default: null },  // Browser, OS, Device
    geoLocation: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null }
    },

    receiptUrl: { type: String, default: null },  // URL for payment receipt

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", PaymentSchema);
