const mongoose = require("mongoose");
const initDB = require("../init/index.js");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
    await initDB();
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = { connectDB };