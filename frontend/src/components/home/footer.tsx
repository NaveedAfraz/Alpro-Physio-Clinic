import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Animation Variants ---
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="bg-[#0F172A] text-white font-opensans"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-acumin mb-4">
                <span className="text-white">ALPRO</span>
                <span className="text-[#5492DD] ml-1">PHYSIO</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Healthcare that the world trusts – now in Shivpuri. Premium
                physiotherapy, rehabilitation, and wellness solutions designed
                to heal, restore, and empower.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#5492DD] text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6 font-acumin">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Advanced Physiotherapy",
                "Rehabilitation Programs",
                "Wellness & Preventive Care",
                "Specialized Care",
                "Medical Tourism Support",
                "Cupping Therapy",
              ].map((service) => (
                <li key={service}>
                  {/* FIX: Changed <a> to <Link> and updated path */}
                  <Link
                    to="/#services"
                    className="text-gray-400 hover:text-[#5492DD] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-[#5492DD] rounded-full transition-colors duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6 font-acumin">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Services",
                "Testimonials",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  {/* FIX: Changed <a> to <Link> and updated path */}
                  <Link
                    to={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-[#5492DD] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-[#5492DD] rounded-full transition-colors duration-300"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6 font-acumin">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5492DD] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  40 No. Kothi Road, Jawahar Colony, Shivpuri, Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5492DD] flex-shrink-0" />
                <a
                  href="tel:+918770623310"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 8770623310
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5492DD] flex-shrink-0" />
                <a
                  href="mailto:info@alpro-physio.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@alpro-physio.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#5492DD] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Mon-Sat: 7AM-9PM
                  <br />
                  Sun: 8AM-6PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Alpro Physio Clinic. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#5492DD]" />{" "}
              <span>for better healthcare in Shivpuri</span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0044A3] hover:bg-[#5492DD] text-white rounded-full shadow-lg flex items-center justify-center transition-all"
        onClick={scrollToTop}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: -15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
