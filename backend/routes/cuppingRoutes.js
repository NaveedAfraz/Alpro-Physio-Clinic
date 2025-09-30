const express = require('express');
const router = express.Router();
const { submitCuppingInquiry } = require('../controllers/cuppingController');

// POST /api/cupping-inquiry - Submit cupping course inquiry
router.post('/', submitCuppingInquiry);

module.exports = router;
