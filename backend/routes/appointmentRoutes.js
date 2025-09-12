const express = require('express');
const router = express.Router();
const { bookAppointment } = require('../controllers/appointmentController');
const { validateAppointment } = require('../middleware/validateForm');

// POST /api/appointments
router.post('/', validateAppointment, bookAppointment);

module.exports = router;
