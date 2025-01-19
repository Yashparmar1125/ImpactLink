import express from "express";

//validators imports
import {
  validateCampaignData,
  validateUpdateCampaignData,
  validateProgressUpdate,
} from "../validators/campaign.validator.js";

//middlewares import
import { ngoAuthMiddleware } from "../middlewares/auth.middleware.js";

//contollers import
import {
  createCampaign,
  listedCampaign,
  getCampaign,
  updateCampaign,
  deleteCampaign,
  updateProgress,
} from "../controllers/campaign.controller.js";

const router = express.Router();

// Campaign Routes
router.post(
  "/campaign/create",
  ngoAuthMiddleware,
  validateCampaignData,
  createCampaign
);
router.get("/campaigns", ngoAuthMiddleware, listedCampaign); // List campaigns created by the NGO
router.get("/campaign/:id", ngoAuthMiddleware, getCampaign); // Get details of a specific campaign
router.put(
  "/campaign/:id/update",
  ngoAuthMiddleware,
  validateUpdateCampaignData,
  updateCampaign
); // Update campaign details
router.delete("/campaign/:id/delete", ngoAuthMiddleware, deleteCampaign); // Delete a campaign
router.post(
  "/campaign/:id/updateProgress",
  ngoAuthMiddleware,
  validateProgressUpdate,
  updateProgress
);

export default router;
