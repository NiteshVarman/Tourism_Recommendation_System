const User = require("../models/user").User;

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("name email profileImage");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      name: user.name,
      email: user.email,
      profileImage: user.profileImage ? `${process.env.BASE_URL || 'http://127.0.0.1:8080'}${user.profileImage}` : null,
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

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: User ID not found" });
    }

    const imageUrl = `/uploads/profiles/${req.file.filename}`;
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { profileImage: imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const fullImageUrl = `${process.env.BASE_URL || 'http://127.0.0.1:8080'}${imageUrl}`;
    res.status(200).json({ message: "Profile image updated", imageUrl: fullImageUrl });
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

    const imageUrl = `/Uploads/reviews/${req.file.filename}`;
    const fullImageUrl = `${process.env.BASE_URL || 'http://127.0.0.1:8080'}${imageUrl}`;
    res.status(200).json({ message: "Review image uploaded", imageUrl: fullImageUrl });
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