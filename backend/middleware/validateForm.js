const { body, validationResult } = require("express-validator");

const validateAppointment = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9\-\+\(\)\s]{10,20}$/)
    .withMessage("Please enter a valid phone number"),

  body("service").trim().notEmpty().withMessage("Service is required"),

  // Custom middleware to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((err) => ({
          field: err.param,
          message: err.msg,
        })),
      });
    }
    next();
  },
];

module.exports = {
  validateAppointment,
};
