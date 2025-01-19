import mongoose from "mongoose";

// Define the schema for a campaign
const campaignSchema = new mongoose.Schema(
  {
    campaignName: {
      type: String,
      required: true,
    },
    ngoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NGO", // Reference to the NGO model
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    // New fields added
    areaOfWork: {
      type: [{ type: String }], // Array of strings (e.g., ["Health", "Education", "Environment"])
      required: true, // To ensure the area of work is provided
    },
    requiredSkills: {
      type: [{ type: String }], // Array of strings (e.g., ["Teaching", "Medical Expertise", "Fundraising"])
      required: true, // To ensure the skills are provided
    },
    maxRegistrations: {
      type: Number,
      required: true,
    },
    registeredVolunteers: [
      {
        volunteerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Reference to the User model (volunteers)
          required: true,
        },
        status: {
          type: String,
          enum: ["Pending", "Accepted", "Rejected"],
          required: true,
        },
      },
    ],
    status: { type: String, enum: ["Active", "Closed"], default: "Active" },
    totalRegistrations: {
      type: Number,
      default: 0,
      validate: {
        validator: function (value) {
          // Ensure totalRegistrations is not greater than maxRegistrations
          return value <= this.maxRegistrations;
        },
        message: (props) =>
          `Total registrations (${props.value}) cannot exceed max registrations (${props.maxRegistrations})`,
      },
    },
    certificateTemplate: { type: String },
    campaignPoster: { type: String },
    totalHours: { type: Number },
  },
  {
    timestamps: true, // This automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Campaign model
export const Campaign = mongoose.model("Campaign", campaignSchema);
