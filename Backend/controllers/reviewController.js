const Review = require("../models/reviews");

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ listing: decodeURIComponent(req.params.listingTitle) })
      .populate("responses")
      .exec();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
};

const addReview = async (req, res) => {
  const { name, listing, rating, comment } = req.body;

  if (!name || !listing || !rating || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Extract file paths from uploaded files
    const photos = req.files ? req.files.map(file => `/uploads/reviews/${file.filename}`) : [];

    const newReview = new Review({
      name,
      listing,
      rating,
      comment,
      photos, // Store file paths
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ message: "Failed to create review", error });
  }
};

const updateReview = async (req, res) => {
  const { name, rating, comment } = req.body;

  try {
    // Extract file paths from uploaded files, or keep existing photos if none uploaded
    const photos = req.files ? req.files.map(file => `/uploads/reviews/${file.filename}`) : undefined;

    const updateData = { name, rating, comment };
    if (photos) updateData.photos = photos; // Only update photos if new files were uploaded

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ message: "Failed to update review", error });
  }
};

const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const respondToReview = async (req, res) => {
  const { reviewId } = req.params;
  const { name, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: "Name and comment are required." });
  }

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    review.responses.push({ name, comment });
    await review.save();

    res.status(200).json({ message: "Response added successfully", review });
  } catch (error) {
    console.error("Error responding to review:", error);
    res.status(500).json({ error: "Failed to add response" });
  }
};

const upvoteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { upvotes: 1 } },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Failed to upvote review", error });
  }
};

module.exports = {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
  respondToReview,
  upvoteReview,
};