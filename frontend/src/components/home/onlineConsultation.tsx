import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Phone, Briefcase, ArrowRight, Video, Clock, CheckCircle } from "lucide-react";
import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";

interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredTime: string;
  consultationType: string;
  concerns: string;
}

const OnlineConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    phone: "",
    email: "",
    preferredTime: "",
    consultationType: "",
    concerns: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/online-consultation",
          {
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            preferredTime: formData.preferredTime,
            consultationType: formData.consultationType,
            concerns: formData.concerns,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.data.success) {
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            preferredTime: "",
            consultationType: "",
            concerns: "",
          });
          toast.success("Your online consultation request has been submitted successfully!");
        } else {
          toast.error(response.data.message || "Failed to submit consultation request");
        }
      } catch (error: any) {
        let errorMessage = "Failed to submit consultation request. Please try again.";
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
    },
    [formData]
  );

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const consultationTypes = [
    "General Physiotherapy Consultation",
    "Sports Injury Assessment",
    "Post-Surgery Rehabilitation",
    "Chronic Pain Management",
    "Neurological Conditions",
    "Pediatric Physiotherapy",
    "Geriatric Care",
    "Ergonomic Assessment",
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ];

  return (
    <motion.section
      id="online-consultation"
      className="py-24 md:px-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Online Physiotherapy{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto leading-relaxed font-opensans">
            Get expert physiotherapy consultation from the comfort of your home. Our certified therapists provide personalized online assessments and treatment plans.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={fadeInUp}>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-[#0044A3]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1C1D0E] mb-3 font-acumin">Video Consultation</h3>
            <p className="text-[#1C1D0E]/80 font-opensans">
              Face-to-face virtual consultation with our expert physiotherapists using secure video calls.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#008D7D]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1C1D0E] mb-3 font-acumin">Expert Assessment</h3>
            <p className="text-[#1C1D0E]/80 font-opensans">
              Comprehensive evaluation of your condition with personalized treatment recommendations.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#7C3AED]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1C1D0E] mb-3 font-acumin">Flexible Scheduling</h3>
            <p className="text-[#1C1D0E]/80 font-opensans">
              Book consultations at your convenience with our flexible time slots throughout the day.
            </p>
          </div>
        </motion.div>

        {/* Consultation Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#1C1D0E] mb-4 font-acumin">
                Schedule Your Online Consultation
              </h3>
              <p className="text-lg text-[#1C1D0E]/80 font-opensans max-w-2xl mx-auto">
                Fill out the form below and our team will contact you to confirm your appointment and provide consultation details.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="h-12"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="consultationType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Consultation Type *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      id="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="appearance-none w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD]/40 focus:border-transparent bg-white"
                      required
                    >
                      <option value="" disabled>
                        Select consultation type
                      </option>
                      {consultationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="appearance-none w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD]/40 focus:border-transparent bg-white"
                      required
                    >
                      <option value="" disabled>
                        Select preferred time
                      </option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="concerns"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Describe Your Concerns *
                </label>
                <textarea
                  id="concerns"
                  value={formData.concerns}
                  onChange={handleInputChange}
                  placeholder="Please describe your symptoms, duration, and any relevant medical history..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD]/40 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0044A3] hover:bg-[#003380] text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request Online Consultation"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-[#0044A3] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#0044A3] hover:underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div className="mt-20 text-center" variants={fadeInUp}>
          <h3 className="text-3xl font-bold text-[#1C1D0E] mb-8 font-acumin">
            Why Choose Online Consultation?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-[#0044A3]" />
              </div>
              <h4 className="font-semibold text-[#1C1D0E] mb-2">Convenient Scheduling</h4>
              <p className="text-sm text-[#1C1D0E]/80">Book appointments that fit your schedule</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-[#008D7D]" />
              </div>
              <h4 className="font-semibold text-[#1C1D0E] mb-2">Expert Assessment</h4>
              <p className="text-sm text-[#1C1D0E]/80">Get professional evaluation from certified therapists</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h4 className="font-semibold text-[#1C1D0E] mb-2">Personalized Care</h4>
              <p className="text-sm text-[#1C1D0E]/80">Receive customized treatment plans</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h4 className="font-semibold text-[#1C1D0E] mb-2">Time Saving</h4>
              <p className="text-sm text-[#1C1D0E]/80">No travel time, consult from anywhere</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OnlineConsultation;
