import express from "express";

//validators imports

//controllers imports
import {
  getCertificates,
  getCampaignCertificate,
} from "../controllers/certificate.controller.js";

//middleware imports
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

//routes

router.get("/volunteer/certificates", authMiddleware, getCertificates);
router.get(
  "/volunteer/campaign/:id/certificate",
  authMiddleware,
  getCampaignCertificate
);
export default router;
