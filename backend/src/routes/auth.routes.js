import express from "express";

//validators imports
import {
  validateRegistration,
  validateLogin,
  validateUpdateProfile,
  validateNGORegistration,
  validateNGOLogin,
  validateNGOUpdateProfile,
} from "../validators/auth.validator.js";

//controllers imports
import {
  register,
  login,
  logout,
  updateProfile,
  profile,
  registerNGO,
  loginNGO,
  updateNGOProfile,
  NGOProfile,
} from "../controllers/auth.controller.js";
const router = express.Router();

//middlewares imports
import {
  authMiddleware,
  ngoAuthMiddleware,
} from "../middlewares/auth.middleware.js";

//routes for volunteer
router.post("/volunteer/register", validateRegistration, register);
router.post("/volunteer/login", validateLogin, login);
router.get("/volunteer/profile", authMiddleware, profile);
router.post(
  "/volunteer/updateProfile",
  authMiddleware,
  validateUpdateProfile,
  updateProfile
);

//routes for ngo
router.post("/ngo/register", validateNGORegistration, registerNGO); // NGO Registration route
router.post("/ngo/login", validateNGOLogin, loginNGO); // NGO Login route
router.get("/ngo/profile", ngoAuthMiddleware, NGOProfile); // NGO Profile route
router.post(
  "/ngo/updateProfile",
  ngoAuthMiddleware,
  validateNGOUpdateProfile,
  updateNGOProfile
);
//common routes
router.get("/logout", logout);

export default router;
