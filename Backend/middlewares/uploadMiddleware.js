const multer = require("multer");
const path = require("path");

const profileStorage = multer.diskStorage({
  destination: "./uploads/profiles/",
  filename: (req, file, cb) => {
    cb(null, `${req.userId}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const reviewStorage = multer.diskStorage({
  destination: "./uploads/reviews/",
  filename: (req, file, cb) => {
    cb(null, `review_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const uploadProfile = multer({ storage: profileStorage });
const uploadReview = multer({ storage: reviewStorage });

module.exports = { uploadProfile, uploadReview };