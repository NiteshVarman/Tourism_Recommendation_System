require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
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

const mongo_url = "mongodb://127.0.0.1:27017/project";

app.use(express.json());
app.use(cors());

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



app.get('/', (req, res) => {
    res.render('home');
});

//Index route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    console.log(allListings);
    // res.render("listings/index", { allListings });
});

//Show route
app.get('/listings/:id', async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    // res.render("listings/show", { listing });
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


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

