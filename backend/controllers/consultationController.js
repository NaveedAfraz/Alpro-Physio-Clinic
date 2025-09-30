const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendConsultationEmail = async ({ name, email, phone, preferredTime, consultationType, concerns }) => {
  try {
    // Skip email sending in test environment
    if (process.env.NODE_ENV === 'test') {
      console.log('Email sending skipped in test environment');
      return { success: true, skipped: true };
    }

    // Skip if no API key is provided
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Email sending is disabled.');
      return { success: true, skipped: true };
    }

    // For production or when using a verified sender
    const senderEmail = process.env.APP_EMAIL;
    console.log(`Using sender email: ${senderEmail}`);

    const emailData = {
      from: `${process.env.APP_NAME} <${process.env.APP_EMAIL}>`,
      to: process.env.CONTACT_EMAIL || 'naveedafraz2003@gmail.com',
      subject: `New Online Consultation Request from ${name}`,
      html: `
        <h2>New Online Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
        <p><strong>Consultation Type:</strong> ${consultationType || 'Not specified'}</p>
        <p><strong>Concerns:</strong></p>
        <p>${concerns ? concerns.replace(/\n/g, '<br>') : 'Not provided'}</p>
      `
    };

    console.log("Sending consultation email with data:", JSON.stringify(emailData, null, 2));

    const { data, error: emailError } = await resend.emails.send(emailData);

    if (emailError) {
      console.error('Email sending error:', {
        status: emailError.statusCode,
        error: emailError.message,
        details: emailError
      });

      // Handle specific Resend API errors
      if (emailError.name === 'validation_error') {
        return {
          success: false,
          error: 'Email configuration error. Please try again later or contact support.',
          details: process.env.NODE_ENV === 'development' ? emailError : undefined
        };
      }

      // Handle rate limits or temporary failures
      if (emailError.statusCode >= 400 && emailError.statusCode < 500) {
        return {
          success: false,
          error: 'Temporary email service issue. Please try again in a few minutes.',
          retryable: true
        };
      }

      throw emailError;
    }

    return {
      success: true,
      data,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error("Unexpected error in sendConsultationEmail:", error);
    return {
      success: false,
      error: 'Failed to process email request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    };
  }
};

const submitConsultationForm = async (req, res, next) => {
  try {
    const { name, email, phone = "", preferredTime = "", consultationType = "", concerns = "" } = req.body;
    const errors = [];

    // Input validation
    if (!name?.trim()) {
      errors.push({ field: 'name', message: 'Name is required' });
    }

    if (!email?.trim()) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Please provide a valid email address' });
    }

    if (!phone?.trim()) {
      errors.push({ field: 'phone', message: 'Phone number is required' });
    }

    // Return validation errors if any
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    try {
      // Log the consultation request
      console.log("New consultation form submission:", {
        name,
        email,
        phone,
        preferredTime: preferredTime || 'Not specified',
        consultationType: consultationType || 'Not specified',
        concerns: concerns ? (concerns.length > 50 ? concerns.substring(0, 50) + '...' : concerns) : 'Not provided'
      });

      // Send email notification
      const emailResult = await sendConsultationEmail({
        name,
        email,
        phone,
        preferredTime,
        consultationType,
        concerns,
      });

      // Log email sending result
      console.log('Consultation email sending result:', {
        success: emailResult.success,
        skipped: emailResult.skipped,
        error: emailResult.error
      });

      // Send success response
      return res.status(200).json({
        success: true,
        message: "Thank you for your consultation request! We will contact you soon to schedule your appointment.",
        emailSent: !emailResult.skipped,
      });

    } catch (emailError) {
      console.error('Error processing consultation form:', emailError);

      // Even if email fails, we still want to acknowledge the form submission
      return res.status(200).json({
        success: true,
        message: "Thank you for your consultation request! We've received your submission and will contact you soon.",
        emailSent: false,
        _debug: process.env.NODE_ENV === 'development' ? {
          emailError: emailError.message
        } : undefined
      });
    }
  } catch (error) {
    console.error("Error in submitConsultationForm:", error);
    res.status(500).json({
      success: false,
      message:
        "An error occurred while processing your request. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = {
  submitConsultationForm,
};
