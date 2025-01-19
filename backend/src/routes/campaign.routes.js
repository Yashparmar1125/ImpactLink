import express from "express";

//validators imports
import {
  validateCampaignData,
  validateUpdateCampaignData,
  validateProgressUpdate,
  validateRegisterCampaign,
} from "../validators/campaign.validator.js";

//middlewares import
import {
  authMiddleware,
  ngoAuthMiddleware,
} from "../middlewares/auth.middleware.js";

//contollers import
import {
  createCampaign,
  listedCampaign,
  getCampaign,
  updateCampaign,
  deleteCampaign,
  updateProgress,
  registerCampaign,
} from "../controllers/campaign.controller.js";

const router = express.Router();

// Campaign Routes
router.post(
  "/ngo/campaign/create",
  ngoAuthMiddleware,
  validateCampaignData,
  createCampaign
);
router.get("/ngo/campaigns", ngoAuthMiddleware, listedCampaign); // List campaigns created by the NGO
router.get("/ngo/campaign/:id", ngoAuthMiddleware, getCampaign); // Get details of a specific campaign
router.put(
  "/ngo/campaign/:id/update",
  ngoAuthMiddleware,
  validateUpdateCampaignData,
  updateCampaign
); // Update campaign details
router.delete(
  "/ngo/campaign/:id/delete",
  ngoAuthMiddleware,
  deleteCampaign,
  registerCampaign
); // Delete a campaign
router.post(
  "/ngo/campaign/:id/updateProgress",
  ngoAuthMiddleware,
  validateProgressUpdate,
  updateProgress
);

router.post(
  "/volunteer/registerCampaign",
  authMiddleware,
  validateRegisterCampaign,
  registerCampaign
);

export default router;
