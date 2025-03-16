require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const Payment = require('./models/payment');
const { User, OTP } = require("./models/user");
const path = require('path');
const Transporter = require('./utils/email');
const ExpressError = require('./utils/ExpressError');
const dataBase = require('./init/index.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Razorpay = require("razorpay");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const generateBookingPDF = require("./utils/generatepdf");
const { google } = require("googleapis");

const mongo_url = "mongodb://127.0.0.1:27017/project";

app.use(express.json());
app.use(cors());

app.use(session({ secret: "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", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com;"
    );
    next();
});



async function main() {
    await mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

main()
    .then(() => {
        console.log("MongoDB is connected");
        app.listen(8080, () => console.log("Server running on port 8080"));
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.get('/', (req, res) => {
    res.render('home');
});

//Index route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    console.log(allListings);
    // res.render("listings/index", { allListings });
});


const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI
);



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    scope: ["profile", "email", "https://www.googleapis.com/auth/calendar.events"],
    accessType: "offline",
    prompt: "consent"
}, async (accessToken, refreshToken, profile, done) => {
    console.log("Google OAuth Tokens:", { accessToken, refreshToken });

    // ✅ Store Both Access and Refresh Tokens
    const user = {
        googleId: profile.id,
        accessToken,
        refreshToken // 🔥 Save Refresh Token for Auto-Renewal
    };

    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// 🔥 Generate JWT (Without Refresh Token)
function generateJWT(user) {
    return jwt.sign(
        { googleId: user.googleId, accessToken: user.accessToken, refreshToken: user.refreshToken },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Adjust as needed
    );
}

// ✅ Google OAuth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/calendar.events"] }));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
}), (req, res) => {
    console.log("Google Profile:", req.user);
    const token = generateJWT(req.user); // Generate JWT token
    res.redirect(`http://localhost:5173/bookings?token=${token}`); // ✅ Corrected Syntax
});

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

app.post("/google/sync-calendar", async (req, res) => {
    try {
        const { booking } = req.body;
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        let accessToken = decoded.accessToken;
        const refreshToken = decoded.refreshToken;

        // ✅ Auto-Refresh Access Token if Expired
        if (!accessToken) {
            accessToken = await refreshAccessToken(refreshToken);
        }

        // ✅ Use Updated Access Token
        oAuth2Client.setCredentials({ access_token: accessToken });

        const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

        const event = {
            summary: booking.listing?.title || "Unknown Booking",
            description: `Type: ${booking.listing?.type || "Unknown Type"}\nAmount: ₹${booking.amount}\nGuests: ${booking.numAdults} Adults, ${booking.numChildren} Children\nStatus: ${booking.paymentStatus}`,
            start: { 
                dateTime: new Date(`${booking.date}T${booking.time}:00`).toISOString(), 
                timeZone: "Asia/Kolkata" 
            },
            end: { 
                dateTime: new Date(new Date(`${booking.date}T${booking.time}:00`).getTime() + 3600000).toISOString(), 
                timeZone: "Asia/Kolkata" 
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
});



// Register Route
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
app.post("/login", async (req, res) => {
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
});

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is correct
        req.userId = decoded.userId;
        console.log("Middleware:", req.userId); // Store userId for further use
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

// Profile Route
app.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("name"); // Fetch username
        if (!user) return res.status(404).json({ message: "User not found" });
        console.log(user);
        res.status(200).json({ name: user.name });
        
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/india', async (req, res, next) => {
    try {
        const indiaPackages = await Listing.find({ country: "India" }); 
        res.render('india', { indiaPackages }); 
    } catch (error) {
        next(error); 
    }
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const otpStore = {};
  // Generate OTP
  app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });
  
    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // Expiry: 5 minutes
  
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
  });
  


app.post("/verify-otp", (req, res) => {
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
});


app.post("/reset-password", async (req, res) => {
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
});

app.post("/payments/create-order", async (req, res) => {
    try {
        const { userId, listingId, amount, date, time, numAdults, numChildren, guestNames, contactNumber, altContactNumber, address } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100, // Convert to paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            payment_capture: 1,
        });

        res.json({
            success: true,
            orderId: order.id,
            amount,
            userId,
            listingId,
            date,
            time,
            numAdults,
            numChildren,
            guestNames,
            contactNumber,
            altContactNumber,
            address
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Order creation failed", error });
    }
});


// Verify Payment Route (Dummy)
app.post("/payments/verify-payment", async (req, res) => {
    try {
        const { orderId, paymentId, userId, listingId, amount, date, time, numAdults, numChildren, guestNames, contactNumber, altContactNumber, address } = req.body;

        // Convert to IST (Indian Standard Time)
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds
        const istTime = new Date(now.getTime() + istOffset);

        const newPayment = new Payment({
            orderId,
            transactionId: paymentId,
            user: new mongoose.Types.ObjectId(userId),  // Ensure ObjectId
            listing: new mongoose.Types.ObjectId(listingId),
            amount,
            date,
            time,
            numAdults,
            numChildren,
            guestNames,
            contactNumber,
            altContactNumber,
            address,
            status: "Paid",
            paymentStatus: "Completed",
            paymentMethod: "Razorpay",
            paymentGateway: "Razorpay",
            paymentDate: istTime.toISOString().split("T")[0], // YYYY-MM-DD
            paymentTime: istTime.toISOString().split("T")[1].split(".")[0], // HH:MM:SS
        });

        await newPayment.save();
        res.json({ success: true, message: "Payment successful!", payment: newPayment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Payment verification failed", error });
    }
});

app.get("/generate-pdf/:orderId", async (req, res) => {
    try {
        const { orderId } = req.params;
        const bookingDetails = await Payment.findOne({ orderId });

        if (!bookingDetails) {
            return res.status(404).json({ success: false, message: "Booking not found!" });
        }

        generateBookingPDF(bookingDetails, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to generate PDF", error });
    }
});

app.get("/payments/my-bookings", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId; // Extracted from JWT

        // Find all payments made by this user
        const bookings = await Payment.find({ user: userId }).populate("listing", "title state type"); // Populate listing details
        res.json({ success: true, bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch bookings", error });
    }
});

app.delete("/payments/cancel/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId; // Extracted from JWT

        // Find and delete only if the user owns the booking
        const deletedBooking = await Payment.findOneAndDelete({ _id: id, user: userId });

        if (!deletedBooking) {
            return res.status(404).json({ success: false, message: "Booking not found or unauthorized" });
        }

        res.json({ success: true, message: "Booking cancelled successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to cancel booking" });
    }
});

app.put("/payments/update/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        let { guestNames, contactNumber } = req.body;
        const userId = req.userId;
        
        if (!Array.isArray(guestNames)) {
            guestNames = [guestNames]; // Convert string to array if needed
        }
        // Update only if the user owns the booking
        const updatedBooking = await Payment.findOneAndUpdate(
            { _id: id, user: userId },
            { guestNames, contactNumber },
            { new: true } // Return updated document
        );

        if (!updatedBooking) {
            return res.status(404).json({ success: false, message: "Booking not found or unauthorized" });
        }

        res.json({ success: true, message: "Booking updated successfully", booking: updatedBooking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update booking" });
    }
});


app.get('/indiamap', (req, res) => {
    res.render('indiamap');
})

app.get('/place', async (req, res) => {
    try {
        const placeName = req.query.name; // Get place from URL (e.g., Goa)
        const filteredPackages = await Listing.find({ place: placeName }); // Fetch packages for the place
        // res.render('place', { placeName, filteredPackages }); // Pass data to place.ejs
        res.json(filteredPackages);
    } catch (error) {
        console.log(error);
    }
});


app.get('/listings/international', async (req, res) => {
    try {
        const internationalListings = await Listing.find({ type: "International tour" }); 
        
        res.json(internationalListings);
    } catch (error) {
        console.error("Error fetching educational tour listings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/listings/educational', async (req, res) => {
    try {
        const educationalListings = await Listing.find({ type: "Educational tour" }); 
        res.json(educationalListings);
    } catch (error) {
        console.error("Error fetching educational tour listings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/listings/devotional', async (req, res) => {
    try {
        const devotionalListings = await Listing.find({ type: "Devotional tour" }); 
        res.json(devotionalListings);
    } catch (error) {
        console.error("Error fetching educational tour listings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/listings/weekend', async (req, res) => {
    try {
        const weekendListings = await Listing.find({ type: "Weekend tour" }); 
        res.json(weekendListings);
    } catch (error) {
        console.error("Error fetching educational tour listings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

