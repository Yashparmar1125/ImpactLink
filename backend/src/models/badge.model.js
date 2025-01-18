import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  badgeName: {type:String},
  criteria: {type:String},
  badgeImage: {type:String},
  points: {type:String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Badge = mongoose.Schema("Badge", BadgeSchema);
