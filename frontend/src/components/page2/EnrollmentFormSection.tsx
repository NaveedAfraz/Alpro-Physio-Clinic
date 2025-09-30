import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import type { FormData } from "./cupping-types";

interface EnrollmentFormSectionProps {
  // No props needed since form data is internal to this component
}

export function EnrollmentFormSection({}: EnrollmentFormSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:5000/api"
        }/cupping-inquiry`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          course: "",
          message: ""
        });
        toast.success("Your inquiry has been submitted successfully! We'll contact you soon.");
      } else {
        toast.error(response.data.message || "Failed to submit inquiry");
      }
    } catch (error: any) {
      let errorMessage = "Failed to submit inquiry. Please try again.";
      if (error.response?.data?.errors) {
        errorMessage = error.response.data.errors
          .map((err: any) => `${err.field}: ${err.message}`)
          .join("\n");
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Enroll Now / Get More Information
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Fill out the form below and we'll get back to you with course details and enrollment information
        </p>
      </div>
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                  maxLength={10}
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a course</option>
                <option value="certificate">Certificate Course in Hijama (Cupping Therapy) - ₹11,999</option>
                <option value="diploma">Diploma in Hijama (Cupping Therapy) - ₹14,999</option>
                <option value="both">Interested in both courses</option>
                <option value="information">Just need more information</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message / Questions
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific questions or requirements?"
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  );
}
