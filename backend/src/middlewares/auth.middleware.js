import { verifyToken } from "../utils/jwt.util.js";
import { Volunteer } from "../models/volunteer.model.js"; // Import the Volunteer model
import { NGO } from "../models/ngo.model.js"; // Import the NGO model

// Middleware for volunteer authentication
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decode = verifyToken(token);
    if (!decode) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    req.user = decode;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Invalid Token", success: false });
  }
};

// Middleware for NGO authentication
const ngoAuthMiddleware = async (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    req.user = decoded; // This will store the decoded info (including NGO ID)

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(500).json({ message: "Invalid Token", success: false });
  }
};

// Exporting both middlewares as named exports
export { authMiddleware, ngoAuthMiddleware };
