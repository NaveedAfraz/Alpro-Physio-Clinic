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
import top1 from "../../assets/top1.png";
import top2 from "../../assets/top2.png";
import top3 from "../../assets/top3.jpg";
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
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        setIsSuccess(true);
        setFormData({ fullName: "", phone: "", pincode: "", service: "" });
        toast.success("Your appointment has been booked successfully!");
      } else {
        toast.error(response.data.message || "Failed to book appointment");
      }
    } catch (error: any) {
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

  // typing effect
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, isDeleting, currentWordIndex]);

  // slide auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // framer variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.15 },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const formVariants: Variants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* HERO: left text + right boxed slider */}
      <section
        id="home"
        className="relative pt-16 pb-10 lg:pb-20   bg-gradient-to-b from-[#DDF1FC] to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: typography + CTAs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-1 lg:order-1"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                  {displayedText}
                  <span className="inline-block animate-pulse">|</span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 mb-6 max-w-lg"
              >
                Premium physiotherapy, rehabilitation, cupping therapy &
                wellness solutions designed to heal, restore, and empower.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-[#0044A3] hover:bg-[#003380] text-white px-6 py-3 text-lg font-semibold shadow"
                >
                  <a href="#appointment">
                    <Calendar className="mr-2 inline-block" size={18} />
                    Book Appointment
                    <ArrowRight className="ml-2 inline-block" size={18} />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group border-2 border-[#008D7D] text-[#008D7D] px-6 py-3 font-semibold"
                >
                  <a href="#medical-tourism">
                    <Globe className="mr-2 inline-block" size={18} />
                    Explore Medical Tourism
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: boxed slider (NOT full-width) */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  {/* slider container (fixed aspect) */}
                  <div className="w-full h-[340px] md:h-[420px] lg:h-[470px] bg-gray-100 relative">
                    {slides.map((slide, index) => (
                      <motion.img
                        key={index}
                        src={slide}
                        alt={`slide-${index}`}
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{
                          opacity: index === currentSlide ? 1 : 0,
                          scale: index === currentSlide ? 1 : 1.03,
                        }}
                        animate={{
                          opacity: index === currentSlide ? 1 : 0,
                          scale: index === currentSlide ? 1 : 1.03,
                        }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        style={{ willChange: "opacity, transform" }}
                      />
                    ))}

                    {/* optional caption or small overlay */}
                    <div className="absolute left-4 bottom-4 bg-black/40 text-white px-3 py-1 rounded-md text-sm">
                      {currentSlide + 1}/{slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM: separate section below the hero (always visible) */}
      <section id="appointment" className=" py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold">
                Book Your First{" "}
                <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                  Free
                </span>{" "}
                Appointment
              </h2>
              <p className="text-gray-600 mt-2">
                Get personalized treatment plans from certified therapists
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode *
                </label>
                <input
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5492DD]/40"
                  placeholder="Enter your pincode"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service
                </label>
                <div className="relative mt-1">
                  <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="service"
                    onChange={handleInputChange}
                    value={formData.service}
                    className="appearance-none w-full h-12 pl-10 border rounded-lg"
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
                    <option value="wellness">Wellness & Preventive Care</option>
                    <option value="specialized">Specialized Care</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0044A3] hover:bg-[#003380] text-white py-3 font-semibold"
              >
                {isSubmitting ? "Booking..." : "Book Free Consultation"}
                <ArrowRight className="ml-2 inline-block" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
