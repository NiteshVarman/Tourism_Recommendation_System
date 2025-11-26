require("dotenv").config();
const express = require('express');
const cors = require("cors");
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const compression = require("compression");

const app = express();

// Database connection
require('./config/db');

// Passport configuration
require('./config/passport');

const botRoutes = require("./routes/botRoutes");

// ───────────────────────────────────────────────
// ZOHO SALESIQ SAFE SETTINGS
// ───────────────────────────────────────────────

// Disable all gzip compression (SalesIQ cannot read gzip)
app.use(compression({ filter: () => false }));

// Disable etags (SalesIQ sometimes misreads them)
app.disable("etag");

// DO NOT set Transfer-Encoding manually (crashes Render)
// ───────────────────────────────────────────────


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// bot routes BEFORE session & passport
app.use("/api/bot", botRoutes);

// Session and Passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Other routes
app.use('/auth', require('./routes/authRoutes.js'));
app.use('/bookings', require('./routes/bookingRoutes'));
app.use('/listings', require('./routes/listingRoutes'));
app.use('/reviews', require('./routes/reviewRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/recommend', require('./routes/recommendationRoutes'));

// Error handler
app.use(require('./middlewares/errorHandler'));

module.exports = app;
