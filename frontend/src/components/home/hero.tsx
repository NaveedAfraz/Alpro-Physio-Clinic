import {
  Calendar,
  Globe,
  ArrowRight,
  User,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";
import { motion, type Variants } from "framer-motion"; // Import Variants type
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Healthcare That the World Trusts", "Now in Shivpuri"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentWordIndex]);

  // Animation Variants for Framer Motion with explicit types
  const containerVariants: Variants = {
    // <-- FIX #1
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    // <-- FIX #2
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut", // Now TypeScript understands this is a valid Easing value
      },
    },
  };

  const formVariants: Variants = {
    // <-- FIX #3
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative  md:px-12 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-[#DDF1FC]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, #DDF1FC 0%, #a4c9e1 100%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container relative z-20 px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side Content - Animated */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-hero font-bold mb-6 min-h-[120px] md:min-h-[220px] flex items-center font-acumin"
            >
              <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                {displayedText}
                <span className="inline-block animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#1C1D0E]/80 mb-8 max-w-lg leading-relaxed font-opensans"
            >
              Premium physiotherapy, rehabilitation, cupping therapy &
              alternative wellness solutions designed to heal, restore, and
              empower.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="group bg-[#0044A3] hover:bg-[#003380] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.a href="#appointment">
                  <Calendar className="mr-2" size={20} />
                  Book Appointment
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </motion.a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group border-2 border-[#008D7D] text-[#008D7D] hover:bg-[#008D7D] hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.a href="#medical-tourism">
                  <Globe className="mr-2" size={20} />
                  Explore Medical Tourism
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side Content (Form) - Animated */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              id="appointment"
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#1C1D0E] font-acumin">
                  Book Your First{" "}
                  <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                    Free
                  </span>{" "}
                  Appointment
                </h2>
                <p className="text-[#1C1D0E]/80 mt-2 font-opensans">
                  Get personalized treatment plans from certified therapists
                </p>
              </div>
              <form className="space-y-4">
                {/* Form Fields with subtle hover/focus effects */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors duration-300 focus-within:text-[#5492DD]" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg transition-all duration-300 focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors duration-300 focus-within:text-[#5492DD]" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg transition-all duration-300 focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors duration-300 focus-within:text-[#5492DD]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg transition-all duration-300 focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                  >
                    Service
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="service"
                      className="appearance-none w-full h-12 px-3 pl-10 border-2 border-[#E5E4E2] rounded-lg bg-white text-md transition-all duration-300 focus:border-[#5492DD] focus:outline-none focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="physiotherapy">
                        Advanced Physiotherapy
                      </option>
                      <option value="rehabilitation">
                        Rehabilitation Programs
                      </option>
                      <option value="wellness">
                        Wellness & Preventive Care
                      </option>
                      <option value="specialized">Specialized Care</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="group w-full bg-[#0044A3] hover:bg-[#003380] text-white h-12 rounded-lg text-lg font-semibold transition-all duration-300 mt-6 flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
