import { MapPin, Phone, Mail, Clock, User, Send, Building } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

// Reusable Input Field Component for clean form structure
interface FormInputProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  id: string;
  label: string;
}

const FormInput: FC<FormInputProps> = ({
  icon: Icon,
  type,
  placeholder,
  id,
  label,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2 font-opensans"
    >
      {label}
    </label>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full h-12 rounded-lg border-gray-300 pl-10 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "40 No. Kothi Road",
        "Jawahar Colony, Shivpuri",
        "Madhya Pradesh, India",
      ],
      action: "Get Directions",
      color: "text-[#008D7D]",
      bgColor: "bg-[#E6F7F5]",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8770623310", "Emergency: 24/7 Available"],
      action: "Call Now",
      color: "text-[#0044A3]",
      bgColor: "bg-[#EBF5FF]",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@alpro-physio.com", "appointments@alpro-physio.com"],
      action: "Send Email",
      color: "text-[#D97706]",
      bgColor: "bg-[#FEF6E6]",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 7 AM - 9 PM", "Sunday: 8 AM - 6 PM"],
      action: "Book Slot",
      color: "text-[#5492DD]",
      bgColor: "bg-[#EFF6FF]",
    },
  ];

  // --- Animation Variants ---
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardHover: any = {
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(0, 68, 163, 0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <motion.section
      id="contact"
      className="py-24  md:px-12  bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            We're here to help you start your journey to better health. Reach
            out to our healthcare experts today.
          </p>
        </motion.div>
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 h-full">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#1C1D0E] font-acumin mb-2">
                  Send Us a Message
                </h3>
                <p className="text-[#1C1D0E]/80 font-opensans">
                  Fill out the form below, and we'll get back to you within 24
                  hours.
                </p>
              </div>
              <form className="space-y-6">
                <FormInput
                  icon={User}
                  type="text"
                  placeholder="John Doe"
                  id="name"
                  label="Full Name *"
                />
                <FormInput
                  icon={Phone}
                  type="tel"
                  placeholder="+91 12345 67890"
                  id="phone"
                  label="Phone Number *"
                />
                <FormInput
                  icon={Mail}
                  type="email"
                  placeholder="you@example.com"
                  id="email"
                  label="Email Address *"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1C1D0E]/90 mb-2 font-opensans"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#0044A3] focus:ring-[#0044A3] sm:text-sm font-opensans"
                    placeholder="Describe your condition or inquiry..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full h-12 bg-[#0044A3] hover:bg-[#003380] text-white text-lg font-semibold rounded-lg shadow-md flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" /> Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
          {/* Map and Additional Info */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Alpro%20Physio%20Clinic%2C%2040%20No.%20Kothi%20Road%2C%20Jawahar%20Colony%2C%20Shivpuri%2C%20Madhya%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpro Physio Clinic Location"
              ></iframe>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[#EBF5FF] text-[#0044A3] flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1C1D0E] font-acumin">
                      Alpro Physio Clinic
                    </h3>
                    <p className="text-[#1C1D0E]/80 font-opensans">
                      40 No. Kothi Road, Jawahar Colony, Shivpuri, Madhya
                      Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.slice(1, 3).map((info, index) => (
                <motion.div
                  key={index}
                  className="p-6 text-center bg-white rounded-2xl shadow-xl border border-gray-200"
                  whileHover={cardHover}
                >
                  <div
                    className={`w-14 h-14 ${info.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <info.icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1C1D0E] mb-2 font-acumin">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-[#1C1D0E]/80 text-sm font-opensans"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
