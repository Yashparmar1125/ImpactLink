import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      maxLength: 10,
    },
    profile: {
      bio: { type: String, default: null },
      interests: [{ type: String }],
      skills: [{ type: String }],
      resume: { type: String, default: null },
      profilePhoto: { type: String, default: "" },
      social: {
        instagram: { type: String, default: null },
        linkedin: { type: String, default: null },
        github: { type: String, default: null },
        website: { type: String, default: null },
      },
      profileStatus: { type: String, enum: ["Active", "Inactive", "Pending"] },
      campaignsApplied: [
        {
          taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
          status: { type: String, enum: ["Pending", "Accepted", "Rejected"] },
          completionStatus: { type: String, enum: ["Ongoing", "Completed"] },
          completedHours: { type: Number },
          completionDate: { type: Date },
          feedback: { type: String },
          ratings: { type: Number },
        },
      ],
      badges: [
        {
          badgeId: { type: mongoose.Schema.Types.ObjectId, ref: "Badge" },
          earnedDate: Date,
        },
      ],
      totalHours: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
    },
  },
  { timestamps: true }
);

export const Volunteer = mongoose.model("Volunteer", volunteerSchema);
