const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendConfirmationEmail = async (appointment) => {
  // Skip sending email if no API key is provided
  if (
    !process.env.RESEND_API_KEY ||
    process.env.RESEND_API_KEY.startsWith("re_")
  ) {
    console.log("Skipping email - No valid Resend API key provided");
    return { success: true, skipped: true };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.APP_NAME} <${process.env.APP_EMAIL}>`,
      to: [appointment.email],
      subject: "Appointment Confirmation",
      html: `
        <h2>Thank you for booking an appointment with us!</h2>
        <p>Here are your appointment details:</p>
        <ul>
          <li><strong>Name:</strong> ${appointment.name}</li>
          <li><strong>Phone:</strong> ${appointment.phone}</li>
          <li><strong>Service:</strong> ${appointment.service}</li>
          <li><strong>Pincode:</strong> ${appointment.pincode}</li>
        </ul>
        <p>We'll get back to you shortly to confirm your appointment.</p>
      `,
    });

    if (error) {
      console.error("Error sending confirmation email:", error);
      // Don't fail the request if email fails
      return { success: false, error: "Failed to send confirmation email" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error in sendConfirmationEmail:", error);
    // Don't fail the request if email fails
    return { success: false, error: error.message };
  }
};

const bookAppointment = async (req, res, next) => {
  try {
    const { name, phone, service, pincode } = req.body;
    console.log(req.body);
    // Basic validation (more comprehensive validation will be in middleware)
    if (!name || !phone || !service || !pincode) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    // In a real application, you would save this to a database here
    const newAppointment = {
      name,
      phone,
      service,
      pincode,
      createdAt: new Date().toISOString(),
    };

    // Send confirmation email (will be skipped if no API key is set)
    const emailResult = await sendConfirmationEmail(newAppointment);

    // In a real app, you might want to send a notification to admin as well

    res.status(201).json({
      success: true,
      message: emailResult.skipped
        ? "Appointment booked successfully! (Email not sent - No API key configured)"
        : "Appointment booked successfully!",
      data: {
        ...newAppointment,
        emailSent: !emailResult.skipped,
        emailError: emailResult.error,
      },
    });
  } catch (error) {
    console.error("Error in bookAppointment:", error);
    next(error);
  }
};

module.exports = {
  bookAppointment,
};
