import express from "express";

//validators imports
import { validateRegisterCampaign } from "../validators/campaign.validator.js";

//auth middleware imports
import { authMiddleware } from "../middlewares/auth.middleware.js";

//controllers imports
import {
  registerCampaign,
  getCampaigns,
  getCampaignByInterest,
  getCampaignBySkills,
} from "../controllers/register.controller.js";

const router = express.Router();

//routes
router.post(
  "/registerCampaign",
  authMiddleware,
  validateRegisterCampaign,
  registerCampaign
);
router.get("/getCampaigns", authMiddleware, getCampaigns);
router.get("/getCampaignByInterest", authMiddleware, getCampaignByInterest);
router.get("/getCampaignBySkills", authMiddleware, getCampaignBySkills);

export default router;
