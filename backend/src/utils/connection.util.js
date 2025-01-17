import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Connection Error");
  }
};

export default connectDB;
