import mongoose from "mongoose";

const NGOSchema = new mongoose.Schema(
  {
    ngoName: { type: String },
    ngoEmail: { type: String, unique: true, required: true },
    ngoContactNumber: { type: String },
    regID: { type: String, required: true },
    ngoAddress: { type: String },
    ngoType: { type: String, enum: ["Local", "National", "International"] },
    ngoLogo: { type: String },
    isVerified: { type: Boolean, default: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const NGO = mongoose.model("NGO", NGOSchema);
