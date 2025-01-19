import { Volunteer } from "../models/volunteer.model.js";
import { NGO } from "../models/ngo.model.js";
import nodemailer from "nodemailer";
import emailjs from "emailjs-com";

// utils
import { createToken, verifyToken } from "../utils/jwt.util.js";
import { hashPassword, comparePassword } from "../utils/password.util.js";
import { generatePassword } from "../utils/generatepassword.util.js";

//volunteer register controller
export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if the user already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res
        .status(400)
        .json({ message: "Volunteer already registered", success: false });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const user = new Volunteer({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Create a JWT token
    const token = createToken(user._id);

    // Send the token in the cookie with proper settings
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // Prevents access to cookie via JavaScript
        sameSite: "strict", // Ensures cookies are sent only in same-origin requests
      })
      .json({
        message: "Volunteer registered successfully",
        success: true,
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", success: false });
  }
};

//volunteer login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Volunteer.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", success: false });
    }

    // Compare the provided password with the hashed password in the database
    const check = await comparePassword(password, user.password);
    if (!check) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", success: false });
    }

    // Create a JWT token
    const token = createToken(user._id);

    // Send the token in the cookie with proper settings
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // Prevents access to cookie via JavaScript
        sameSite: "strict", // Ensures cookies are sent only in same-origin requests
      })
      .json({
        message: "Logged in successfully",
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

// logout controller
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logged out Sucessfully", sucess: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", sucess: false });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { phone, profile } = req.body;
    const userId = req.user.userId;

    // Find user by userId
    const user = await Volunteer.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Volunteer Not Found", success: false });
    }

    // Update the basic fields
    if (phone) user.phone = phone;

    // Check if profile exists and update profile fields
    if (profile) {
      if (profile.bio !== undefined) user.profile.bio = profile.bio; // Update bio
      if (profile.interests !== undefined)
        user.profile.interests = profile.interests; // Update interests
      if (profile.skills !== undefined) user.profile.skills = profile.skills; // Update skills
      if (profile.resume !== undefined) user.profile.resume = profile.resume; // Update resume
      if (profile.profilePhoto !== undefined)
        user.profile.profilePhoto = profile.profilePhoto; // Update profile photo

      // Update social media details
      if (profile.social) {
        if (profile.social.instagram !== undefined)
          user.profile.social.instagram = profile.social.instagram;
        if (profile.social.linkedin !== undefined)
          user.profile.social.linkedin = profile.social.linkedin;
        if (profile.social.github !== undefined)
          user.profile.social.github = profile.social.github;
        if (profile.social.website !== undefined)
          user.profile.social.website = profile.social.website;
      }
    }

    // Save the updated user data
    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      userResponse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//volunteer profile controller
export const profile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await Volunteer.findById(userId).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", sucess: false });
  }
};

// NGO register controller
export const registerNGO = async (req, res) => {
  try {
    const {
      ngoName,
      ngoEmail,
      ngoContactNumber,
      ngoAddress,
      ngoType,
      password,
    } = req.body;

    // Check if the NGO already exists
    const existingNGO = await NGO.findOne({ ngoEmail });
    if (existingNGO) {
      return res
        .status(400)
        .json({ message: "NGO already registered", success: false });
    }

    // Hash the password before storing it
    const hashedPassword = await hashPassword(password);

    // Create a new NGO
    const newNGO = new NGO({
      ngoName,
      ngoEmail,
      ngoContactNumber,
      ngoAddress,
      ngoType,
      password: hashedPassword,
      isVerified: true, // Assuming that NGO is verified by default
    });

    // Save the NGO to the database
    await newNGO.save();

    // Respond with success
    return res.status(200).json({
      message: "NGO registered successfully.",
      success: true,
      ngo: newNGO,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};

//ngo login controller
export const loginNGO = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find NGO by email
    const ngo = await NGO.findOne({ ngoEmail: email });
    if (!ngo) {
      return res.status(401).json({ message: "NGO not found", success: false });
    }

    // Check if the NGO is verified
    if (!ngo.isVerified) {
      return res
        .status(401)
        .json({ message: "NGO not verified", success: false });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await comparePassword(password, ngo.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    }

    // Create a JWT token
    const token = createToken(ngo._id); // Assuming you are using the NGO's ID as the payload

    // Send the token in the response (you can send it in a cookie or header)
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // Prevents access to cookie via JavaScript
        sameSite: "strict", // Ensures cookies are sent only in same-origin requests
      })
      .json({
        message: "NGO logged in successfully",
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

//ngo updateProfile controller
export const updateNGOProfile = async (req, res) => {
  try {
    const { ngoName, ngoContactNumber, ngoAddress, ngoType, ngoLogo } =
      req.body;
    const ngoId = req.user.userId; // Assuming the NGO ID is in the JWT payload

    // Find NGO by ID
    const ngo = await NGO.findById(ngoId);
    if (!ngo) {
      return res.status(400).json({ message: "NGO not found", success: false });
    }

    // Update the NGO fields
    if (ngoName) ngo.ngoName = ngoName;
    if (ngoContactNumber) ngo.ngoContactNumber = ngoContactNumber;
    if (ngoAddress) ngo.ngoAddress = ngoAddress;
    if (ngoType) ngo.ngoType = ngoType;
    if (ngoLogo) ngo.ngoLogo = ngoLogo;

    // Save the updated NGO data
    await ngo.save();

    return res.status(200).json({
      message: "NGO profile updated successfully",
      success: true,
      ngo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//ngo profile controller
export const NGOProfile = async (req, res) => {
  try {
    const ngoId = req.user.userId; // Assuming NGO ID is present in the JWT token
    const ngo = await NGO.findById(ngoId).select("-password"); // Optionally, hide fields like isVerified if sensitive

    if (!ngo) {
      return res.status(400).json({ message: "NGO not found", success: false });
    }

    return res.status(200).json(ngo);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
