import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:5000/api"
        }/contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log('Form submission response:', response.data);
      
      // Always reset the form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Show success message
      setIsSuccess(true);
      setError("");
    } catch (err: any) {
      console.error('Form submission error:', err);
      const errorMessage = err.response?.data?.message || 
                         err.message || 
                         "Something went wrong. Please try again.";
      setError(errorMessage);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div variants={fadeInUp} className="w-full">
      <div className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 h-full">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-[#1C1D0E] font-acumin mb-2">
            Send Us a Message
          </h3>
          <p className="text-[#1C1D0E]/80 font-opensans">
            Fill out the form below, and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSuccess ? (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <>
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full h-12 rounded-lg border-gray-300 pl-10 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full h-12 rounded-lg border-gray-300 pl-10 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full h-12 rounded-lg border-gray-300 pl-10 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2"
                >
                  Subject *
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full h-12 rounded-lg border-gray-300 pl-10 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2"
                >
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px] w-full rounded-lg border-gray-300 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                  placeholder="Please provide details about your inquiry..."
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0044A3] hover:bg-[#003380] text-white py-3 text-lg font-semibold transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
