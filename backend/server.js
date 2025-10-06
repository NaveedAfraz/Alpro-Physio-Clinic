require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');
const contactRoutes = require('./routes/contactRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const cuppingRoutes = require('./routes/cuppingRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Fallback port for local dev
const PORT = process.env.PORT || 5000;
console.log('Server will run on port:', PORT);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow Postman, curl, etc.
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

// Debug log for incoming requests (useful on cPanel)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes (✅ mounted correctly)
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/online-consultation', consultationRoutes);
app.use('/api/cupping-inquiry', cuppingRoutes);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
