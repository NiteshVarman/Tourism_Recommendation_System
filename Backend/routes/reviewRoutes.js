const express = require("express");
const router = express.Router();
const { getReviews, addReview, updateReview, deleteReview, respondToReview, upvoteReview } = require("../controllers/reviewController");

router.get("/:listingId", getReviews);
router.post("/", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);
router.post("/:reviewId/respond", respondToReview);
router.put("/:id/upvote", upvoteReview);

module.exports = router;