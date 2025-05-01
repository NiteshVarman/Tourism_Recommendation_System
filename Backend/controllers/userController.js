const User = require("../models/user").User;

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("name email profileImage");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/uploads/profiles/${req.file.filename}`;
    await User.findByIdAndUpdate(req.userId, { profileImage: imageUrl });

    res.status(200).json({ message: "Profile image updated", imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const uploadReviewImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/uploads/reviews/${req.file.filename}`;
    res.status(200).json({ message: "Review image uploaded", imageUrl });
  } catch (error) {
    console.error("Error uploading review image:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProfile,
  uploadProfileImage,
  uploadReviewImage,
};