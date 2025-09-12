import { Star, Quote, ArrowRight } from "lucide-react";
import { motion, useInView, type Variants, animate } from "framer-motion";
import { useEffect, useRef, type FC } from "react";

// --- Reusable Animated Number Components ---
interface AnimatedNumberProps {
  to: number;
  isInView: boolean;
  isFloat?: boolean; // To handle decimal numbers
}

const AnimatedStatistic: FC<{ to: number; suffix?: string; isFloat?: boolean }> = ({ to, suffix = "", isFloat = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div ref={ref} className="font-bold mb-2">
      <AnimatedNumber to={to} isInView={isInView} isFloat={isFloat} />
      {suffix}
    </div>
  );
};

const AnimatedNumber: FC<AnimatedNumberProps> = ({ to, isInView, isFloat }) => {
    const nodeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!isInView) return;
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, to, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(value) {
                if (isFloat) {
                    node.textContent = value.toFixed(1); // Format for one decimal place
                } else {
                    node.textContent = Math.round(value).toLocaleString();
                }
            },
        });
        
        return () => controls.stop();
    }, [to, isInView, isFloat]);

    return <span ref={nodeRef}>0</span>;
}

// --- Reusable Avatar Component ---
const Avatar: FC<{ name: string }> = ({ name }) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5492DD] to-[#0044A3] flex items-center justify-center text-white font-semibold text-lg">
            {initials}
        </div>
    );
};


const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Anita Sharma",
      condition: "Back Pain Recovery",
      rating: 5,
      testimonial: "After 6 months of chronic back pain, Alpro's rehabilitation program gave me back my mobility in just 3 weeks. The personalized care and modern equipment made all the difference.",
      location: "International Patient"
    },
    {
      name: "Rajesh Kumar",
      condition: "Sports Injury",
      rating: 5,
      testimonial: "As a professional athlete, I needed the best care for my knee injury. Alpro's sports physiotherapy program not only healed my injury but made me stronger than before.",
      location: "Professional Athlete"
    },
    {
      name: "Dr. Priya Patel",
      condition: "Post-Surgery Recovery",
      rating: 5,
      testimonial: "The post-operative physiotherapy at Alpro was exceptional. Their evidence-based approach and caring staff made my recovery smooth and successful.",
      location: "Medical Professional"
    },
    {
      name: "Ahmed Hassan",
      condition: "Chronic Pain Management",
      rating: 5,
      testimonial: "Best physiotherapy clinic in Shivpuri - professional, caring, and globally trusted. The combination therapy approach gave me relief I hadn't felt in years.",
      location: "Local Patient"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-[#FFB800] fill-[#FFB800]" : "text-gray-300"}`}
      />
    ));
  };

  // --- Animation Variants ---
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardHover = {
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(0, 68, 163, 0.2)",
    transition: { duration: 0.3 },
  };


  return (
    <motion.section 
        id="testimonials" 
        className="py-24  md:px-12  bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Patient <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            Real stories from patients who found healing and restored their quality of life with Alpro Physio Clinic.
          </p>
        </motion.div>

        {/* Success Stories Statistics */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="p-10 bg-white rounded-2xl border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-4xl lg:text-5xl font-acumin text-[#0044A3]">
                <AnimatedStatistic to={98} suffix="%" />
                <div className="text-base text-[#1C1D0E]/80 font-opensans mt-2">Patient Satisfaction</div>
              </div>
              <div className="text-4xl lg:text-5xl font-acumin text-[#008D7D]">
                <AnimatedStatistic to={15000} suffix="+" />
                <div className="text-base text-[#1C1D0E]/80 font-opensans mt-2">Success Stories</div>
              </div>
              <div className="text-4xl lg:text-5xl font-acumin text-[#5492DD]">
                 <AnimatedStatistic to={4.9} suffix="/5" isFloat={true} />
                <div className="text-base text-[#1C1D0E]/80 font-opensans mt-2">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg relative overflow-hidden"
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <Quote className="w-20 h-20 text-gray-100 absolute -top-4 -left-4 z-0" />
              <div className="relative z-10">
                <p className="text-[#1C1D0E]/80 leading-relaxed text-lg font-opensans mb-6">
                  {testimonial.testimonial}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar name={testimonial.name} />
                        <div>
                            <h4 className="font-semibold text-[#1C1D0E] text-lg font-acumin">
                                {testimonial.name}
                            </h4>
                            <p className="text-sm text-[#0044A3] font-medium font-opensans">
                                {testimonial.condition}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center" variants={fadeInUp}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <h3 className="text-2xl font-bold text-[#1C1D0E] font-acumin">
                Ready to Write Your Success Story?
            </h3>
            <motion.button 
                className="px-8 py-4 bg-[#0044A3] hover:bg-[#003380] text-white font-semibold rounded-lg shadow-md transition-colors duration-300 font-opensans flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
