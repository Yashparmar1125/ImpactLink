import { Certificate } from "../models/certificate.model.js";
import { Volunteer } from "../models/volunteer.model.js";
import { Campaign } from "../models/campaign.model.js";

// Controller to fetch all certificates earned by the volunteer
export const getCertificates = async (req, res) => {
  try {
    const volunteerId = req.user.userId; // Assuming the volunteer's ID is in req.user.userId

    // Find all certificates for the volunteer
    const certificates = await Certificate.find({ volunteerId }).populate(
      "campaignId"
    );

    if (!certificates || certificates.length === 0) {
      return res.status(404).json({
        message: "No certificates found for this volunteer",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Certificates fetched successfully",
      certificates,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Controller to fetch the certificate of a specific campaign for a volunteer
export const getCampaignCertificate = async (req, res) => {
  try {
    const volunteerId = req.user.userId; // Assuming the volunteer's ID is in req.user.userId
    const campaignId = req.params.id; // Extract the campaign ID from the route parameter

    // Find the certificate for the specific campaign and volunteer
    const certificate = await Certificate.findOne({ volunteerId, campaignId });

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found for this campaign and volunteer",
        success: false,
      });
    }

    // Assuming certificates are stored as a URL or file path
    return res.status(200).json({
      message: "Certificate found",
      certificateUrl: certificate.certificateUrl, // Return the certificate URL or file path
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
