const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, phone, subject, message }) => {
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
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    console.log("Sending email with data:", JSON.stringify(emailData, null, 2));
    
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
    console.error("Unexpected error in sendContactEmail:", error);
    return { 
      success: false, 
      error: 'Failed to process email request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    };
  }
};

const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone = "", subject, message } = req.body;
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
    
    if (!subject?.trim()) {
      errors.push({ field: 'subject', message: 'Subject is required' });
    }
    
    if (!message?.trim()) {
      errors.push({ field: 'message', message: 'Message is required' });
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
      // Log the contact for now (you can save to database here if needed)
      console.log("New contact form submission:", {
        name,
        email,
        phone: phone || 'Not provided',
        subject,
        message: message.length > 50 ? message.substring(0, 50) + '...' : message
      });

      // Send email notification
      const emailResult = await sendContactEmail({
        name,
        email,
        phone,
        subject,
        message,
      });

      // Log email sending result
      console.log('Email sending result:', {
        success: emailResult.success,
        skipped: emailResult.skipped,
        error: emailResult.error
      });

      // Send success response
      return res.status(200).json({
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
        emailSent: !emailResult.skipped,
      });
      
    } catch (emailError) {
      console.error('Error processing contact form:', emailError);
      
      // Even if email fails, we still want to acknowledge the form submission
      return res.status(200).json({
        success: true,
        message: "Thank you for your message! We've received your submission and will get back to you soon.",
        emailSent: false,
        _debug: process.env.NODE_ENV === 'development' ? {
          emailError: emailError.message
        } : undefined
      });
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    res.status(500).json({
      success: false,
      message:
        "An error occurred while processing your request. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = {
  submitContactForm,
};
