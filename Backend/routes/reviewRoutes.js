const express = require("express");
const router = express.Router();
const { getReviews, addReview, updateReview, deleteReview, respondToReview, upvoteReview } = require("../controllers/reviewController");
const { uploadReview } = require("../middlewares/uploadMiddleware");    

router.get("/:listingTitle", getReviews);
router.post("/", uploadReview.array("photos", 5), addReview); 
router.put("/:id", uploadReview.array("photos", 5), updateReview);
router.delete("/:id", deleteReview);
router.post("/:reviewId/respond", respondToReview);
router.put("/:id/upvote", upvoteReview);

module.exports = router;