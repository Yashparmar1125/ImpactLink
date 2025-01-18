import mongoose from "mongoose";

// Define the schema for a certificate
const certificateSchema = new mongoose.Schema(
  {
    volunteerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer", // Reference to the User model (volunteer)
      required: true,
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign", // Reference to the Campaign model
      required: true,
    },
    certificateUrl: {
      type: String,
      required: true, // The URL or path to the certificate
    },
    issuedAt: {
      type: Date,
      required: true, // The date the certificate was issued
      default: Date.now, // Automatically set the issue date to the current date if not provided
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields
  }
);

// Create and export the Certificate model
export const Certificate = mongoose.model("Certificate", certificateSchema);
