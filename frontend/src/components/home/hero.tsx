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
import { useCallback, useEffect, useMemo, useState, memo, useRef } from "react";

interface FormData {
  fullName: string;
  phone: string;
  pincode: string;
  service: string;
}

const Hero = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    pincode: "",
    service: "",
  });

  const words = useMemo(
    () => ["Healthcare That the World Trusts", "Now in Shivpuri"],
    []
  );
  const slides = useMemo(() => [top1, top2, top3], []);

  // Refs for DOM manipulation without re-renders
  const textRef = useRef<HTMLSpanElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<{
    currentWordIndex: number;
    displayedText: string;
    isDeleting: boolean;
    currentSlide: number;
    intervalId?: ReturnType<typeof setTimeout>;
  }>({
    currentWordIndex: 0,
    displayedText: "",
    isDeleting: false,
    currentSlide: 0,
  });

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
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
    },
    [formData]
  );

  // Typing effect with direct DOM manipulation to avoid re-renders
  useEffect(() => {
    const animate = () => {
      const current = animationRef.current;
      const currentWord = words[current.currentWordIndex];

      if (!current.isDeleting) {
        // Typing forward
        if (current.displayedText.length < currentWord.length) {
          current.displayedText = currentWord.substring(
            0,
            current.displayedText.length + 1
          );
          if (textRef.current) {
            textRef.current.textContent = current.displayedText;
          }
          current.intervalId = setTimeout(animate, 100);
        } else {
          // Pause before deleting
          current.intervalId = setTimeout(() => {
            current.isDeleting = true;
            animate();
          }, 2000);
        }
      } else {
        // Deleting
        if (current.displayedText.length > 0) {
          current.displayedText = current.displayedText.substring(
            0,
            current.displayedText.length - 1
          );
          if (textRef.current) {
            textRef.current.textContent = current.displayedText;
          }
          current.intervalId = setTimeout(animate, 50);
        } else {
          // Move to next word and slide
          const oldSlide = current.currentSlide;
          current.currentWordIndex =
            (current.currentWordIndex + 1) % words.length;
          current.currentSlide = (current.currentSlide + 1) % slides.length;
          current.displayedText = "";
          current.isDeleting = false;

          // Update slides opacity directly
          if (slideRefs.current[oldSlide]) {
            slideRefs.current[oldSlide]!.style.opacity = "0";
          }
          if (slideRefs.current[current.currentSlide]) {
            slideRefs.current[current.currentSlide]!.style.opacity = "1";
          }

          current.intervalId = setTimeout(animate, 500);
        }
      }
    };

    // Start animation
    animationRef.current.intervalId = setTimeout(animate, 1000);

    return () => {
      if (animationRef.current.intervalId) {
        clearTimeout(animationRef.current.intervalId);
      }
    };
  }, [words, slides.length]);

  // Memoize variants to prevent recreation on every render
  const containerVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.14, delayChildren: 0.15 },
      },
    }),
    []
  );

  const itemVariants = useMemo<Variants>(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 },
      },
    }),
    []
  );

  const formVariants = useMemo<Variants>(
    () => ({
      hidden: { scale: 0.98, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6 },
      },
    }),
    []
  );

  return (
    <>
      {/* HERO: left text + right boxed slider */}
      <section
        id="home"
        className="relative pt-16 pb-10 lg:pb-20 bg-gradient-to-b from-[#DDF1FC] to-white"
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
                  <span ref={textRef}></span>
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
                      <div
                        key={index}
                        ref={(el) => {
                          slideRefs.current[index] = el;
                        }}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{ opacity: index === 0 ? 1 : 0 }}
                      >
                        <img
                          src={slide}
                          alt={`Healthcare slide ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM: separate section below the hero (always visible) */}
      <section id="appointment" className="py-12 lg:py-16">
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
                    className="appearance-none w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5492DD]/40 focus:border-transparent bg-white"
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
                disabled={isSubmitting}
                className="w-full bg-[#0044A3] hover:bg-[#003380] text-white py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
});

Hero.displayName = "Hero";

export default Hero;
