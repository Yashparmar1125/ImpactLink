import { body, validationResult } from "express-validator";

//validate volunteer registeration fields
export const validateRegistration = [
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
  body("name").trim().notEmpty(),
  body("phone").isLength({ min: 10 }),
  body("skills").notEmpty(),
  body("interests").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validate volunteer login fields
export const validateLogin = [
  body("email").isEmail().normalizeEmail(),
  body("password").exists(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validate volunteer updateProfile fields
export const validateUpdateProfile = [
  // Validate 'name' (optional, but if provided, must be a non-empty string or null)
  body("name")
    .optional()
    .custom(
      (value) =>
        value === null || (typeof value === "string" && value.trim().length > 0)
    )
    .withMessage("Name must be a non-empty string or null"),

  body("bio")
    .optional()
    .custom(
      (value) =>
        value === null || (typeof value === "string" && value.trim().length > 0)
    ),

  body("email")
    .optional()
    .custom((value) => value === null || /^\S+@\S+\.\S+$/.test(value)),

  // Validate 'phone' (optional, but if provided, must be a valid phone number or null)
  body("phone")
    .optional()
    .custom((value) => value === null || /^[0-9]{10}$/.test(value)) // Custom regex for 10-digit phone number
    .withMessage("Please provide a valid phone number or null"),

  // Validate 'profile.skills' (optional, but if provided, must be an array or null)
  body("profile.skills")
    .optional()
    .custom((value) => value === null || Array.isArray(value))
    .withMessage("Skills should be an array or null"),
  body("profile.interests")
    .optional()
    .custom((value) => value === null || Array.isArray(value))
    .withMessage("Skills should be an array or null"),

  // Validate 'profile.profilePhoto' (optional, but if provided, must be a valid URL or null)
  body("profile.profilePhoto")
    .optional()
    .custom(
      (value) =>
        value === null ||
        (typeof value === "string" &&
          /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value))
    )
    .withMessage("Profile photo should be a valid URL or null"),

  // Handle validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validate ngo registeration fields
export const validateNGORegistration = [
  // NGO Name validation (must be a non-empty string)
  body("ngoName").trim().notEmpty().withMessage("NGO name is required"),

  // NGO Email validation (must be a valid email format)
  body("ngoEmail")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid NGO email is required"),

  // NGO Contact Number validation (must be at least 10 digits)
  body("ngoContactNumber")
    .isLength({ min: 10 })
    .withMessage("Contact number must be at least 10 digits"),
  body("regID").trim().notEmpty().withMessage("Registration ID is required..."),

  // NGO Address validation (optional, but if provided, it must be a non-empty string)
  body("ngoAddress")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Address must be a valid string"),

  // NGO Type validation (must be one of the specified options)
  body("ngoType")
    .optional()
    .isIn(["Local", "National", "International"])
    .withMessage(
      "NGO Type must be one of 'Local', 'National', 'International'"
    ),

  // NGO Logo validation (optional, but if provided, it must be a valid URL)
  body("ngoLogo")
    .optional()
    .isURL()
    .withMessage("NGO Logo must be a valid URL"),

  // Handle validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validate ngo lofin fields
export const validateNGOLogin = [
  // NGO Email validation (must be a valid email format)
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid NGO email is required"),

  // NGO Password validation (must exist)
  body("password").exists().withMessage("Password is required"),

  // Handle validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validate ngo updateProfile fields
export const validateNGOUpdateProfile = [
  // Validate 'ngoName' (optional, but if provided, must be a non-empty string)
  body("ngoName")
    .optional()
    .custom(
      (value) =>
        value === null || (typeof value === "string" && value.trim().length > 0)
    )
    .withMessage("NGO Name must be a non-empty string or null"),

  // Validate 'ngoContactNumber' (optional, but if provided, must be a valid phone number)
  body("ngoContactNumber")
    .optional()
    .custom((value) => value === null || /^[0-9]{10}$/.test(value))
    .withMessage("Contact Number must be a valid 10-digit phone number"),

  // Validate 'ngoEmail' (optional, but if provided, must be a valid email format)
  body("ngoEmail")
    .optional()
    .custom((value) => value === null || /^\S+@\S+\.\S+$/.test(value))
    .withMessage("NGO Email must be a valid email"),

  // Validate 'ngoAddress' (optional, but if provided, must be a non-empty string)
  body("ngoAddress")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Address must be a valid string"),

  // Validate 'ngoType' (optional, but if provided, must be one of the allowed types)
  body("ngoType")
    .optional()
    .isIn(["Local", "National", "International"])
    .withMessage(
      "NGO Type must be one of 'Local', 'National', 'International'"
    ),

  // Validate 'ngoLogo' (optional, but if provided, must be a valid URL)
  body("ngoLogo")
    .optional()
    .isURL()
    .withMessage("NGO Logo must be a valid URL"),

  // Handle validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
