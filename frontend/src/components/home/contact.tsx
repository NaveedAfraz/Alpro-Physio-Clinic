import { MapPin, Phone, Building } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

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
      details: ["+91 8770922310", "Emergency: 24/7 Available"],
      action: "Call Now",
      color: "text-[#0044A3]",
      bgColor: "bg-[#EBF5FF]",
    },
    {
      icon: Building,
      title: "Working Hours",
      details: ["Mon - Sat: 7 AM - 9 PM", "Sunday: 8 AM - 6 PM"],
      action: "Book Slot",
      color: "text-[#5492DD]",
      bgColor: "bg-[#EFF6FF]",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = {
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(0, 68, 163, 0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <section
      id="contact"
      className="py-24 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <iframe
                src="https://maps.google.com/maps?q=Alpro%20Physio%20Clinic%2C%2040%20No.%20Kothi%20Road%2C%20Jawahar%20Colony%2C%20Shivpuri%2C%20Madhya%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpro Physio Clinic Location"
              />
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
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="p-6 text-center bg-white rounded-2xl shadow-xl border border-gray-200"
                  whileHover={cardHover}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                      },
                    },
                  }}
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
                  <button
                    className={`text-sm font-medium ${info.color} hover:underline`}
                    onClick={() => {
                      if (info.action === "Call Now") {
                        window.location.href = `tel:${info.details[0].replace(
                          /\D/g,
                          ""
                        )}`;
                      } else if (info.action === "Get Directions") {
                        window.open(
                          "https://maps.google.com/maps?q=Alpro+Physio+Clinic,+40+No.+Kothi+Road,+Jawahar+Colony,+Shivpuri,+Madhya+Pradesh",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {info.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
