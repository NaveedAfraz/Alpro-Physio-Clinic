import {
  Activity,
  Heart,
  RotateCcw,
  Plus,
  Phone,
  Check,
  ArrowRight,
  Baby,
} from "lucide-react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";

const Services = () => {
  const handleBooking = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      const headerOffset = 100; // Account for header height
      const elementPosition = appointmentSection.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCall = () => {
    window.open('tel:+918770922310', '_self');
  };
  const mainServices = [
    {
      icon: Baby,
      title: "Pediatric Occupational Therapy",
      description: "Specialized therapy for children with developmental conditions and special needs",
      features: [
        "Developmental Delays",
        "Autism Spectrum Disorder (ASD)",
        "Cerebral Palsy",
        "Down Syndrome",
        "Sensory Processing Disorder (SPD)",
        "ADHD",
        "Traumatic Brain Injury (TBI)",
      ],
      bgColor: "bg-gradient-to-br from-[#F0F8E6] to-white",
      iconColor: "bg-[#E3F2C1] text-[#4A7C59]",
      borderColor: "border-[#E3F2C1]",
      bulletColor: "bg-[#4A7C59]",
    },
    {
      icon: Activity,
      title: "Advanced Physiotherapy & Pain Relief",
      description: "Back, neck, shoulder, joint & chronic pain management",
      features: [
        "Manual Therapy",
        "Exercise Therapy",
        "Pain Management",
        "Joint Mobilization",
      ],
      bgColor: "bg-gradient-to-br from-[#EBF5FF] to-white",
      iconColor: "bg-[#DDEAFC] text-[#0044A3]",
      borderColor: "border-[#DDEAFC]",
      bulletColor: "bg-[#0044A3]",
    },
    {
      icon: RotateCcw,
      title: "Rehabilitation Programs",
      description:
        "Post-surgery recovery, neurological rehab, and sports injury rehabilitation",
      features: [
        "Post Surgery Recovery",
        "Neurological Rehab",
        "Sports Injury Rehab",
        "Functional Training",
      ],
      bgColor: "bg-gradient-to-br from-[#E6F7F5] to-white",
      iconColor: "bg-[#D3F0ED] text-[#008D7D]",
      borderColor: "border-[#D3F0ED]",
      bulletColor: "bg-[#008D7D]",
    },
    {
      icon: Heart,
      title: "Wellness & Preventive Care",
      description:
        "Physiotherapy, Pilates, lifestyle correction and fitness routines",
      features: [
        "Pilates Classes",
        "Fitness Programs",
        "Lifestyle Correction",
        "Preventive Care",
      ],
      bgColor: "bg-gradient-to-br from-[#FEF6E6] to-white",
      iconColor: "bg-[#FCE9C9] text-[#D97706]",
      borderColor: "border-[#FCE9C9]",
      bulletColor: "bg-[#D97706]",
    },
  ];

  const additionalServices = [
    {
      title: "Pediatric Physiotherapy",
      description:
        "Specialized care for children with developmental delays and conditions",
    },
    {
      title: "Geriatric Care",
      description:
        "Specialized programs for elderly patients to improve mobility and independence",
    },
    {
      title: "Workplace Ergonomics",
      description:
        "Assessments and interventions to prevent workplace injuries",
    },
    {
      title: "Travel Care",
      description: "Pre and post-travel physiotherapy for frequent travelers",
    },
  ];

  // --- NEW DATA for "Conditions We Treat" section ---
  const conditionsTreated = [
    "Back Pain",
    "Neck Pain",
    "Slipped Disc",
    "Sciatica",
    "Pelvic Girdle Pain",
    "Piriformis Syndrome",
    "Pregnancy Back Pain",
    "Stenosis",
    "Facet Joint Arthropathy",
    "Headaches With Neck Joint Pains",
    "Coccydynia",
    "Shoulder Injuries (Tendinitis, Frozen Shoulder)",
    "Sports Injuries, Sprains, Tendon/Ligament Damage",
    "Repetitive Strain Injuries (Tennis Elbow, Trigger Finger)",
    "Migraine, Vertigo & Headaches",
    "Stroke / Paralysis",
    "Delayed Milestones in Infants",
    "Cerebral Palsy & Muscular Dystrophy",
    "Pelvic Pain & Incontinence",
    "Prenatal & Postnatal Rehab (Back Pain, C-section Recovery)",
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

  const cardHover: TargetAndTransition = {
    y: -10,
    boxShadow: "0px 25px 50px -12px rgba(0, 68, 163, 0.25)",
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      type: "tween",
    },
  };

  return (
    <motion.section
      id="services"
      className="py-24  md:px-12  bg-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6">
            Our Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto leading-relaxed">
            Expert care tailored to your unique needs and recovery goals
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} shadow-lg flex flex-col`}
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.iconColor} flex items-center justify-center mb-6 shrink-0`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-[#1C1D0E]">
                  {service.title}
                </h3>
                <p className="text-[#1C1D0E]/80 mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[#1C1D0E]/90">
                      <span
                        className={`w-5 h-5 rounded-full ${service.bulletColor}/20 flex items-center justify-center mr-3 shrink-0`}
                      >
                        <Check
                          className={`w-3 h-3 text-[${service.bulletColor}]`}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="mt-auto flex items-center text-[#0044A3] font-semibold hover:text-[#003380] transition-colors group"
                  whileHover={{ gap: "12px" }}
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h3 className="text-3xl font-semibold text-[#1C1D0E] mb-4">
            Additional Specialized Services
          </h3>
          <p className="text-[#1C1D0E]/80 max-w-2xl mx-auto mb-10">
            We offer a range of specialized therapies to address your specific
            needs
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-md text-left"
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center mb-4">
                  <Plus className="w-5 h-5 text-[#0044A3]" />
                </div>
                <h4 className="font-semibold text-[#1C1D0E] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-[#1C1D0E]/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- NEW: Conditions We Treat Section --- */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-[#1C1D0E] mb-4">
              Conditions We Treat
            </h3>
            <p className="text-[#1C1D0E]/80 max-w-2xl mx-auto mb-10">
              Our team is experienced in treating a wide array of
              musculoskeletal and neurological conditions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditionsTreated.map((condition, index) => (
                <div
                  key={index}
                  className="p-3 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-sm text-gray-800 font-medium">
                    {condition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white rounded-2xl p-10 max-w-6xl mx-auto shadow-2xl"
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-3">
                Ready to Begin Your Recovery Journey?
              </h3>
              <p className="text-white/90 max-w-2xl">
                Book a comprehensive assessment with our expert physiotherapists
                today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <motion.button
                className="px-8 py-4 bg-white text-[#0044A3] font-semibold rounded-lg shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
              >
                Book Assessment
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg shadow-md transition-all duration-300 border border-white/30"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 8770922310
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
