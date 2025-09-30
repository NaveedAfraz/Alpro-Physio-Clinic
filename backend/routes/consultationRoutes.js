const express = require('express');
const router = express.Router();
const { submitConsultationForm } = require('../controllers/consultationController');

// POST /api/online-consultation - Submit consultation form
router.post('/', submitConsultationForm);

module.exports = router;
