import { Campaign } from "../models/campaign.model.js";
import { Volunteer } from "../models/volunteer.model.js";

export const createCampaign = async (req, res) => {
  try {
    // Extract validated fields from the request body
    const {
      campaignName,
      description,
      startDate,
      endDate,
      location,
      maxRegistrations,
      areaOfWork,
      requiredSkills,
      totalHours,
    } = req.body;
    const ngoId = req.user.userId;
    // Create a new campaign instance
    const newCampaign = new Campaign({
      campaignName,
      description,
      startDate,
      totalHours,
      endDate,
      location,
      areaOfWork,
      requiredSkills,
      maxRegistrations,
      ngoId, // Assuming ngoId was sent as part of the validated request body
    });

    // Save the campaign to the database
    await newCampaign.save();

    // Respond with the created campaign
    return res.status(201).json({
      message: "Campaign created successfully",
      campaign: newCampaign,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error. Failed to create campaign.",
      error: error.message,
    });
  }
};

export const listedCampaign = async (req, res) => {
  try {
    const ngoId = req.user.userId;
    const campaigns = await Campaign.find({ ngoId });
    if (campaigns.length == 0) {
      return res
        .status(400)
        .json({ message: "Campaign not found", sucess: false });
    }
    res.status(200).json({
      message: "Campaign successfully found",
      campaign: campaigns,
      sucess: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error. Failed to create campaign.",
      error: error.message,
    });
  }
};

export const getCampaign = async (req, res) => {
  try {
    const campaignId = req.params.id;

    // Fetch the campaign by its ID
    const campaign = await Campaign.findById(campaignId).populate({
      path: "registeredVolunteers",
      options: { sort: { level: -1 } },
    });

    // If campaign is not found, return 404
    if (!campaign) {
      return res
        .status(404)
        .json({ message: "Campaign not found", success: false });
    }

    // If campaign is found, return the campaign details
    return res
      .status(200) // OK status code
      .json({ message: "Campaign found", campaign, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateCampaign = async (req, res) => {
  try {
    // Extract campaign ID from route parameters
    const campaignId = req.params.id;

    // Extract fields from the request body
    const {
      campaignName,
      description,
      startDate,
      endDate,
      location,
      maxRegistrations,
      certificateTemplate,
      areaOfWork,
      requiredSkills,
      totalHours,
    } = req.body;

    // Find the campaign by its ID
    const campaign = await Campaign.findById(campaignId);

    // If campaign not found, return a 404 error
    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
      });
    }

    // Update the campaign fields with the new values or retain the old ones if no new value is provided
    campaign.campaignName = campaignName || campaign.campaignName;
    campaign.description = description || campaign.description;
    campaign.startDate = startDate || campaign.startDate;
    campaign.endDate = endDate || campaign.endDate;
    campaign.location = location || campaign.location;
    campaign.totalHours = totalHours || campaign.totalHours;
    campaign.maxRegistrations = maxRegistrations || campaign.maxRegistrations;
    campaign.certificateTemplate =
      certificateTemplate || campaign.certificateTemplate;
    campaign.areaOfWork = areaOfWork || campaign.areaOfWork;
    campaign.requiredSkills = requiredSkills || campaign.requiredSkills;

    // Save the updated campaign
    const updatedCampaign = await campaign.save();

    // Return the updated campaign in the response
    return res.status(200).json({
      message: "Campaign updated successfully",
      campaign: updatedCampaign,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error. Failed to update campaign.",
      error: error.message,
    });
  }
};

export const deleteCampaign = async (req, res) => {
  try {
    // Extract campaign ID from the route parameters
    const campaignId = req.params.id;

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);

    // If the campaign doesn't exist, return a 404 error
    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
      });
    }

    // Delete the campaign
    await Campaign.deleteOne({ _id: campaignId });

    // Return a success message after deletion
    return res.status(200).json({
      message: "Campaign deleted successfully",
    });
  } catch (error) {
    console.error(error);
    // Return an internal server error response
    return res.status(500).json({
      message: "Server error. Failed to delete campaign.",
      error: error.message,
    });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const campaignId = req.params.id; // Extract the campaign ID from the route parameter
    const { volunteerId, completedHours } = req.body; // Extract volunteerId and completedHours from the request body

    // Validate that both campaignId, volunteerId, and completedHours are provided
    if (!campaignId || !volunteerId || completedHours === undefined) {
      return res
        .status(400)
        .json({ message: "Missing required fields", success: false });
    }

    // Find the volunteer by their ID
    const volunteer = await Volunteer.findById(volunteerId);
    if (!volunteer) {
      return res
        .status(404)
        .json({ message: "Volunteer not found", success: false });
    }

    // Ensure the volunteer's profile and campaignsApplied are defined
    if (
      !volunteer.profile ||
      !Array.isArray(volunteer.profile.campaignsApplied)
    ) {
      return res.status(400).json({
        message: "No campaigns applied for this volunteer",
        success: false,
      });
    }

    // Find the specific campaign that the volunteer is associated with
    const campaignTask = volunteer.profile.campaignsApplied.find(
      (task) => task.taskId.toString() == campaignId.toString()
    );

    if (!campaignTask) {
      return res.status(404).json({
        message: "Campaign not found for this volunteer",
        success: false,
      });
    }
    const campaign = await Campaign.findById(campaignId);
    // Increment the completedHours for the campaign task
    campaignTask.completedHours = completedHours; // Increment the completedHours

    // Check if the task is completed or still ongoing
    if (campaignTask.completedHours >= campaign.totalHours) {
      campaignTask.completionStatus = "Completed";
      campaignTask.completionDate = new Date(); // Set completion date when the task is finished
    } else {
      campaignTask.completionStatus = "Ongoing";
    }

    // Update the volunteer's total hours
    if (campaignTask.completionStatus == "Completed") {
      volunteer.profile.totalHours += completedHours;
    }

    // Save the updated volunteer document
    await volunteer.save();

    // Return a success response
    return res.status(200).json({
      message: "Progress updated successfully",
      success: true,
      volunteer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error. Failed to update volunteer progress.",
      error: error.message,
    });
  }
};

export const campaign = async (req, res) => {
  try {
    console.log("trigger");
    const campaigns = await Campaign.find();
    if (campaigns.length == 0) {
      return res.status(404).json({ message: "Not found", sucess: false });
    }
    return res.status(201).json({ campaigns: campaigns, sucess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error. Failed to get campaigns.",
      sucess: false,
    });
  }
};
