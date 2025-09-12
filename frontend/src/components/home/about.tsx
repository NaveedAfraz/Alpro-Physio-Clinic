import { Heart, Award, Users, Target } from "lucide-react";
import { motion, useInView, type Variants, animate } from "framer-motion";
import { useEffect, useRef, type FC } from "react";
import type { LucideIcon } from "lucide-react";

// Define TypeScript types for our component props
interface AnimatedStatisticProps {
  to: number;
  suffix?: string;
}

interface AnimatedNumberProps {
  to: number;
  isInView: boolean;
}

// This component's only job is to detect when it's in the viewport
const AnimatedStatistic: FC<AnimatedStatisticProps> = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold mb-2">
      <AnimatedNumber to={to} isInView={isInView} />
      {suffix}
    </div>
  );
};

// This component now handles its own animation using the `animate` function
const AnimatedNumber: FC<AnimatedNumberProps> = ({ to, isInView }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Only start the animation when the component is in view
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    // Use the standalone `animate` function from Framer Motion
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      // onUpdate is called on every animation frame
      onUpdate(value) {
        // Update the node's text content with the rounded, localized value
        node.textContent = Math.round(value).toLocaleString();
      },
    });

    // Return a cleanup function to stop the animation if the component unmounts
    return () => controls.stop();
  }, [to, isInView]); // Rerun effect if `to` or `isInView` changes

  // Start with 0 so there's no layout shift
  return (
    <p ref={nodeRef} className="inline-block">
      0
    </p>
  );
};

const About = () => {
  const features: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  }[] = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every patient feels secure, supported, and restored with our personalized approach.",
      color: "text-[#D946EF]",
      bgColor: "bg-[#D946EF]/10",
    },
    {
      icon: Award,
      title: "World-Class Healthcare",
      description:
        "Integrating modern physiotherapy, cupping therapy, Pilates and nutrition under one roof.",
      color: "text-[#008D7D]",
      bgColor: "bg-[#008D7D]/10",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Evidence-based medical practices with advanced equipment and experienced therapists.",
      color: "text-[#0044A3]",
      bgColor: "bg-[#0044A3]/10",
    },
    {
      icon: Target,
      title: "Proven Results",
      description:
        "Combining trust, quality, security and togetherness for optimal patient outcomes.",
      color: "text-[#F59E0B]",
      bgColor: "bg-[#F59E0B]/10",
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHover = {
    scale: 1.05,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  };

  return (
    <motion.section
      id="about"
      className="py-24  md:px-12  bg-gradient-to-b from-[#DDF1FC] to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6 relative font-acumin">
            About{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Alpro Physio Clinic
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#5492DD] to-[#0044A3] rounded-full"></div>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-4xl mx-auto leading-relaxed font-opensans mt-8">
            Alpro Physio Clinic is more than a treatment center – it's a
            movement toward trust, quality, security, and togetherness.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div variants={fadeInUp}>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-[#1C1D0E] mb-6 relative font-acumin">
                Our Mission & Vision
                <div className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-[#5492DD] to-[#0044A3]"></div>
              </h3>
              <div className="space-y-6 mt-8">
                <motion.p
                  className="text-lg leading-relaxed p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm font-opensans text-[#1C1D0E]/90"
                  whileHover={{ scale: 1.02 }}
                >
                  At Alpro Physio Clinic, we are committed to restoring your
                  movement and enhancing your quality of life. Our expert
                  physiotherapists use advanced techniques and personalized care
                  to help you heal faster.
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm font-opensans text-[#1C1D0E]/90"
                  whileHover={{ scale: 1.02 }}
                >
                  Our mission is simple: combine evidence-based practice and
                  compassionate care so that every patient feels secure,
                  supported, and restored.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                <div className="text-[#0044A3]">
                  <AnimatedStatistic to={10} suffix="+" />
                </div>
                <div className="text-md text-[#1C1D0E]/80 font-opensans">
                  Years Experience
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                <div className="text-[#008D7D]">
                  <AnimatedStatistic to={5000} suffix="+" />
                </div>
                <div className="text-md text-[#1C1D0E]/80 font-opensans">
                  Patients Treated
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-gray-200 mt-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5492DD] to-[#0044A3] transition-transform duration-500 group-hover:scale-110"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h4 className="text-2xl font-bold mb-4 font-acumin">
                    Experience the Difference
                  </h4>
                  <p className="text-lg opacity-90 font-opensans">
                    Where healing meets compassion and expertise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 cursor-pointer group"
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <div
                className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mb-6 text-3xl ${feature.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
              >
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C1D0E] font-acumin">
                {feature.title}
              </h3>
              <p className="text-[#1C1D0E]/80 font-opensans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={fadeInUp}>
          <div className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute -bottom-16 -right-5 w-56 h-56 bg-white/10 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-acumin">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto font-opensans">
                Experience the Alpro difference with our comprehensive,
                patient-centered approach to healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-[#0044A3] font-semibold rounded-lg shadow-md transition-all duration-300 font-opensans"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 font-semibold rounded-lg transition-colors duration-300 font-opensans"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
