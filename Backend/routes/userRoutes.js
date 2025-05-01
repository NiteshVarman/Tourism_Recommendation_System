const express = require("express");
const router = express.Router();
const { getProfile, uploadProfileImage, uploadReviewImage } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const { uploadProfile, uploadReview } = require("../middlewares/uploadMiddleware");

router.get("/profile", authMiddleware, getProfile);
router.post("/upload-profile-image", authMiddleware, uploadProfile.single("image"), uploadProfileImage);
router.post("/upload-review-image", uploadReview.single("image"), uploadReviewImage);
router.get("/indiamap", (req, res) => {
  res.render("indiamap");
});

module.exports = router;