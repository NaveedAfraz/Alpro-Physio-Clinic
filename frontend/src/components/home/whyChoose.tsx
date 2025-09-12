import {
  CheckCircle,
  Users,
  Award,
  Heart,
  Stethoscope,
  Globe,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

// --- Reusable Animated Number Components ---

// const AnimatedStatistic: FC<AnimatedStatisticProps> = ({ from = 0, to, suffix = "", prefix = "" }) => {
//   const ref = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   useEffect(() => {
//     if (!isInView) return;
//     const node = ref.current;
//     if (!node) return;

//     const controls = animate(from, to, {
//       duration: 2.5,
//       ease: "easeOut",
//       onUpdate(value) {
//         node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
//       },
//     });

//     return () => controls.stop();
//   }, [from, to, isInView, prefix, suffix]);

//   return <span ref={ref} />;
// };

const WhyChoose = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const reasons: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  }[] = [
    {
      icon: Users,
      title: "Experienced & Certified Therapists",
      description:
        "Our team of highly qualified physiotherapists brings years of expertise and advanced certifications to provide you with the best care possible.",
      color: "text-[#0044A3]",
      bgColor: "bg-[#EBF5FF]",
    },
    {
      icon: Award,
      title: "Premium Infrastructure & Equipment",
      description:
        "State-of-the-art facilities with the latest physiotherapy equipment and modern treatment rooms designed for optimal patient comfort.",
      color: "text-[#008D7D]",
      bgColor: "bg-[#E6F7F5]",
    },
    {
      icon: Heart,
      title: "Holistic Care: Physiotherapy + Hijama + Pilates",
      description:
        "Comprehensive treatment approach combining traditional physiotherapy with cupping therapy and Pilates for complete wellness.",
      color: "text-[#D97706]",
      bgColor: "bg-[#FEF6E6]",
    },
    {
      icon: Stethoscope,
      title: "Patient-First Approach with Continuous Feedback",
      description:
        "Personalized treatment plans with regular progress monitoring and adjustments based on your specific needs and recovery goals.",
      color: "text-[#5492DD]",
      bgColor: "bg-[#EFF6FF]",
    },
    {
      icon: Globe,
      title: "Trusted by Families, Athletes & International Patients",
      description:
        "Serving a diverse community including local families, professional athletes, and patients from around the world seeking quality care.",
      color: "text-[#7C3AED]",
      bgColor: "bg-[#F5F3FF]",
    },
  ];

  // const stats = [
  //   { number: 15000, suffix: "+", label: "Patients Treated" },
  //   { number: 95, suffix: "%", label: "Satisfaction Rate" },
  //   { number: 10, suffix: "+", label: "Years of Excellence" },
  // ];

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

  return (
    <motion.section
      id="why-choose"
      className="py-24  md:px-12  bg-gradient-to-b from-[#F9FAFB] to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Alpro
            </span>
            ?
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            Experience the difference that quality care, advanced technology,
            and personalized treatment can make in your recovery journey.
          </p>
        </motion.div>

        {/* Core Reasons Section - Image and Accordion */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="w-full h-96 lg:h-[600px] rounded-2xl bg-gray-200 relative overflow-hidden shadow-2xl"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5492DD] to-[#0044A3]"></div>
            <Users className="absolute -bottom-16 -right-16 w-80 h-80 text-white/10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://placehold.co/800x1200/0044A3/FFFFFF?text=Alpro+Clinic')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">
              <h3 className="text-3xl font-bold font-acumin mb-4">
                A Commitment to Excellence
              </h3>
              <p className="text-lg text-white/90 font-opensans">
                Your health is our highest priority. We are dedicated to
                providing care that is not only effective but also compassionate
                and respectful.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={sectionVariants}
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.header
                  initial={false}
                  animate={{
                    backgroundColor: index === expanded ? "#fff" : "#F9FAFB",
                  }}
                  onClick={() =>
                    setExpanded(expanded === index ? false : index)
                  }
                  className="flex items-center justify-between p-6 rounded-xl cursor-pointer border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${reason.bgColor} ${reason.color} rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <reason.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1C1D0E] font-acumin">
                      {reason.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === index ? 180 : 0 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </motion.header>
                <AnimatePresence initial={false}>
                  {expanded === index && (
                    <motion.section
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 pt-4 text-[#1C1D0E]/80 leading-relaxed font-opensans bg-white rounded-b-xl border-x border-b border-gray-200">
                        {reason.description}
                      </p>
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Checklist / CTA */}
        <motion.div variants={fadeInUp}>
          <div className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute -bottom-16 -right-5 w-56 h-56 bg-white/10 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4 font-acumin">
                  What You Get with Alpro Physio Clinic
                </h3>
                <p className="text-lg text-white/90 font-opensans max-w-3xl mx-auto">
                  A complete ecosystem of care designed for your optimal
                  recovery and long-term wellness.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-10 font-opensans">
                {[
                  "Free Initial Consultation",
                  "Personalized Treatment Plans",
                  "Advanced Diagnostic Assessment",
                  "Modern Equipment & Facilities",
                  "Certified & Experienced Staff",
                  "Progress Tracking & Monitoring",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-white/80 shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="text-center border-t border-white/20 pt-8 mt-8">
                <motion.button
                  className="px-8 py-4 bg-white text-[#0044A3] font-semibold rounded-lg shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Recovery Today
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;
