// Connect to MongoDB
require("dotenv").config();
const mongoose = require("mongoose");

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.err("MongoDB connection error", err.message);
  }
};

module.exports = ConnectToDatabase;
