import { body, validationResult } from "express-validator";

// Validate campaign creation fields
export const validateCampaignData = [
  body("campaignName")
    .isString()
    .withMessage("Campaign name must be a string.")
    .notEmpty()
    .withMessage("Campaign name is required."),
  body("description")
    .isString()
    .withMessage("Description must be a string.")
    .notEmpty()
    .withMessage("Description is required."),
  body("startDate")
    .isISO8601()
    .withMessage("Invalid start date format.")
    .toDate(),
  body("endDate").isISO8601().withMessage("Invalid end date format.").toDate(),
  body("location")
    .isString()
    .withMessage("Location must be a string.")
    .notEmpty()
    .withMessage("Location is required."),
  body("maxRegistrations")
    .isInt({ gt: 0 })
    .withMessage("Max registrations must be a positive number.")
    .notEmpty()
    .withMessage("Max registrations is required."),
  body("certificateTemplate")
    .optional()
    .isString()
    .withMessage("Certificate template must be a valid URL."),
  body("campaignPoster")
    .optional()
    .isString()
    .withMessage("Campaign poster must be a string"),
  body("totalHours").isNumeric().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateUpdateCampaignData = [
  body("campaignName")
    .optional()
    .isString()
    .withMessage("Campaign name must be a string."),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

  body("startDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid start date format.")
    .toDate(),

  body("endDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid end date format.")
    .toDate(),

  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string."),

  body("maxRegistrations")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Max registrations must be a positive number."),

  body("certificateTemplate")
    .optional()
    .isString()
    .withMessage("Certificate template must be a valid URL."),

  // Add any other custom validation here if needed

  // Middleware to check validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateProgressUpdate = [
  body("volunteerId").isString().notEmpty(),
  body("completedHours").isNumeric().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateRegisterCampaign = [
  body("campaignId").isString().notEmpty(),
];
