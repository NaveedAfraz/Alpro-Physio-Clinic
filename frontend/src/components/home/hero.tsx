import {
  Calendar,
  Globe,
  ArrowRight,
  User,
  Phone,
  Briefcase,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "sonner";
import top1 from "../../assets/top1.png"
import top2 from "../../assets/top2.png"
import top3 from "../../assets/top3.jpg"
import { useEffect, useState } from "react";

interface FormData {
  fullName: string;
  phone: string;
  pincode: string;
  service: string;
}

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    pincode: "",
    service: "",
  });
  console.log(isSuccess);
  console.log(isSubmitting);

  const words = ["Healthcare That the World Trusts", "Now in Shivpuri"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [top1, top2, top3];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments",
        {
          name: formData.fullName,

          phone: formData.phone,

          service: formData.service,
          pincode: formData.pincode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        setIsSuccess(true);
        setIsSubmitting(false);
        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          pincode: "",
          service: "",
        });

        toast.success("Your appointment has been booked successfully!");
      }
    } catch (error: any) {
      console.error("Error booking appointment:", error);
      let errorMessage = "Failed to book appointment. Please try again.";

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

  // Auto-typing effect for the heading
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

  // Auto-slide effect for the background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

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
    <>
      <section
        id="home"
        className="relative md:px-12 pt-16 md:pt-24 pb-0 lg:pb-24 flex items-start lg:items-center min-h-[600px] md:min-h-[700px]"
      >
        {/* Image Slider Background */}
        <div className="absolute inset-0 z-0 overflow-hidden h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: 1,
              }}
              animate={{
                opacity: index === currentSlide ? 0.7 : 0,
                scale: index === currentSlide ? 1 : 1.1,
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
              }}
            >
              <img 
                src={slide} 
                alt="Background" 
                className="w-full h-full object-cover object-center"
                style={{
                  height: '100%',
                  maxHeight: '800px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </motion.div>
          ))}
          {/* Overlay gradient */}
          <div 
            className="absolute inset-0 z-2"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.7) 100%)',
            }}
          />
        </div>

        <div className="container relative z-20 px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side Content - Animated */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:pr-8"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 min-h-[100px] md:min-h-[180px] flex items-center font-acumin"
              >
                <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                  {displayedText}
                  <span className="inline-block animate-pulse">|</span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-[#1C1D0E]/80 mb-6 md:mb-8 max-w-lg leading-relaxed font-opensans"
              >
                Premium physiotherapy, rehabilitation, cupping therapy &
                alternative wellness solutions designed to heal, restore, and
                empower.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col xl:flex-row gap-4 mb-8 lg:mb-0"
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

            {/* Right Side Content (Form) - Visible only on large screens */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <div
                id="appointment"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200"
              >
                <div className="text-center mb-4 md:mb-6">
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
                <form className="space-y-4" onSubmit={handleSubmit}>
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        placeholder="98765 43210"
                        className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg transition-all duration-300 focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="pincode"
                      className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                    >
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD] focus:border-transparent transition-all duration-200 font-opensans"
                      placeholder="Enter your pincode"
                      required
                    />
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
                        onChange={handleInputChange}
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

      {/* Form Section - Visible on small screens */}
      <section className="lg:hidden bg-white py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              id="appointment-mobile"
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="text-center mb-4 md:mb-6">
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
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      placeholder="98765 43210"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg transition-all duration-300 focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="pincode"
                    className="text-lg font-semibold text-[#1C1D0E] font-opensans"
                  >
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD] focus:border-transparent transition-all duration-200 font-opensans"
                    placeholder="Enter your pincode"
                    required
                  />
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
                      onChange={handleInputChange}
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
      </section>
    </>
  );
};

export default Hero;
