const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const Booking = require("../models/booking");
const Review = require("../models/reviews");
const User = require("../models/user");


// 🟢 1) Featured packages (FIXED — removed isFeatured)
// ❗ Since your schema has no isFeatured, we simply send latest 10 packages
router.get("/packages/featured", async (req, res, next) => {
  try {
    const packages = await Listing.find({})
      .select("title place duration price image type country route")
      .sort({ createdAt: -1 })
      .limit(10);

    return res.json({ data: packages });
  } catch (err) {
    next(err);
  }
});


// 🟢 2) Search packages (location → place/country, days → duration)
router.post("/packages/search", async (req, res, next) => {
  try {
    const { location, budget, days } = req.body;
    const query = {};

    // 🔹 Search by place or country
    if (location) {
      query.$or = [
        { place: new RegExp(location, "i") },
        { country: new RegExp(location, "i") },
      ];
    }

    // 🔹 Search by duration (stored as string, so compare loosely)
    if (days) {
      query.duration = new RegExp(days, "i"); 
      // or EXACT MATCH: query.duration = `${days} Days`;
      // (depends on your data format)
    }

    // 🔹 Search by budget (price)
    if (budget) {
      query.price = { $lte: Number(budget) };
    }

    const result = await Listing.find(query)
      .select("title place duration price image type country route")
      .limit(10);

    return res.json({ data: result });
  } catch (err) {
    next(err);
  }
});


// 🟢 3) Create a lead
router.post("/leads", async (req, res, next) => {
  try {
    const { name, email, phone, packageId, source } = req.body;

    const booking = await Booking.create({
      email,
      name,
      phone,
      listing: packageId,
      status: "LEAD",
      source: source || "bot",
    });

    return res.json({ leadId: booking._id });
  } catch (err) {
    next(err);
  }
});


// 🟢 4) My packages (get bookings by user)
router.get("/users/:email/packages", async (req, res, next) => {
  try {
    const { email } = req.params;

    const bookings = await Booking.find({ email })
      .populate("listing")
      .sort({ createdAt: -1 })
      .limit(10);

    const formatted = bookings.map((b) => ({
      bookingId: b._id,
      status: b.status,
      travelDate: b.travelDate,
      packageId: b.listing?._id,
      packageName: b.listing?.title,
      duration: b.listing?.duration,
      price: b.listing?.price,
      image: b.listing?.image,
    }));

    return res.json({ data: formatted });
  } catch (err) {
    next(err);
  }
});


// 🟢 5) Feedback
router.post("/feedback", async (req, res, next) => {
  try {
    const { email, bookingId, rating, comments } = req.body;

    await Review.create({
      email,
      booking: bookingId,
      rating,
      comment: comments,
      source: "bot",
    });

    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});


// 🟢 6) Book again / generate invoice link
router.post("/bookings/rebook", async (req, res, next) => {
  try {
    const { email, packageId } = req.body;

    const listing = await Listing.findById(packageId);
    if (!listing) {
      return res.status(404).json({ error: "Package not found" });
    }

    const booking = await Booking.create({
      email,
      listing: packageId,
      status: "PENDING_PAYMENT",
    });

    const invoiceUrl = `${
      process.env.FRONTEND_URL || "https://www.trippicker.me"
    }/payment/${booking._id}`;

    return res.json({ invoiceUrl });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
