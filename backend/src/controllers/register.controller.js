import { Volunteer } from "../models/volunteer.model.js";
import { Campaign } from "../models/campaign.model.js";

//register to a campaign
export const registerCampaign = async (req, res) => {
  try {
    const { campaignId } = req.body; // Extract the campaignId from the request body
    const userId = req.user.userId; // Extract the userId from the authenticated user

    // Ensure the userId is provided (i.e., the user is authenticated)
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    // Find the user (volunteer) by their ID
    const user = await Volunteer.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Volunteer not found", success: false });
    }

    // Find the campaign by its ID
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res
        .status(404)
        .json({ message: "Campaign not found", success: false });
    }

    // Check if the volunteer is already registered for this campaign
    const alreadyApplied = user.profile.campaignsApplied.some(
      (task) => task.taskId.toString() === campaignId.toString()
    );
    if (alreadyApplied) {
      return res.status(400).json({
        message: "You have already applied for this campaign",
        success: false,
      });
    }

    // Add the campaign to the volunteer's campaignsApplied array
    user.profile.campaignsApplied.push({
      taskId: campaignId,
      status: "Pending", // Initially, the status is "Pending"
      completionStatus: "Ongoing", // Completion status is initially "Ongoing"
      completedHours: 0, // Set initial completed hours to 0
      feedback: "", // Initially empty
      ratings: null, // Initially no ratings
    });

    // Save the updated volunteer document
    await user.save();

    campaign.registeredVolunteers.push({
      volunteerId: userId,
      status: "Pending",
    });
    await campaign.save();
    // Return a success response with the updated volunteer data
    return res.status(200).json({
      message: "Campaign registration successful",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error. Failed to register for campaign.",
      error: error.message,
    });
  }
};

//get all campaigns
export const getCampaigns = async (req, res) => {
  try {
    const campaign = await Campaign.find().sort({ createdAt: -1 });
    if (campaign.length == 0) {
      return res
        .status(404)
        .json({ message: "Campaigns not found..", sucess: false });
    }
    return res
      .status(200)
      .json({ message: "Campaigns found", campaigns: campaign, sucess: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

//get campaign based on volunteers intrest
export const getCampaignByInterest = async (req, res) => {
  try {
    const volunteerId = req.user.userId; // Assuming the volunteer's ID is in req.user.userId

    // Find the volunteer by ID
    const volunteer = await Volunteer.findById(volunteerId);
    if (!volunteer) {
      return res
        .status(404)
        .json({ message: "Volunteer not found", success: false });
    }

    // Get the volunteer's interests
    const interests = volunteer.profile.interests;

    if (!interests || interests.length === 0) {
      return res
        .status(404)
        .json({ message: "Volunteer has no interests listed", success: false });
    }

    // Find campaigns where the areaOfWork matches any of the volunteer's interests (case-insensitive)
    const campaigns = await Campaign.find({
      areaOfWork: {
        $in: interests.map((interest) => new RegExp(interest, "i")),
      }, // Case-insensitive matching
    });

    if (campaigns.length === 0) {
      return res.status(404).json({
        message: "No campaigns found based on your interests",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Campaigns found based on your interests",
      campaigns,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

//get campaign by volunteers skills
export const getCampaignBySkills = async (req, res) => {
  try {
    const volunteerId = req.user.userId; // Assuming the volunteer's ID is in req.user.userId

    // Find the volunteer by ID
    const volunteer = await Volunteer.findById(volunteerId);
    if (!volunteer) {
      return res
        .status(404)
        .json({ message: "Volunteer not found", success: false });
    }

    // Get the volunteer's skills
    const skills = volunteer.profile.skills;

    if (!skills || skills.length === 0) {
      return res
        .status(404)
        .json({ message: "Volunteer has no skills listed", success: false });
    }

    // Find campaigns where the requiredSkills match any of the volunteer's skills (case-insensitive)
    const campaigns = await Campaign.find({
      requiredSkills: { $in: skills.map((skill) => new RegExp(skill, "i")) }, // Case-insensitive matching
    });

    if (campaigns.length === 0) {
      return res.status(404).json({
        message: "No campaigns found based on your skills",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Campaigns found based on your skills",
      campaigns,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
