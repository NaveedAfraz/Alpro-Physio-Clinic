import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  images: {
    mobile: string;
    desktop: string;
  };
}

export function HeroSection({ title, subtitle, features, images }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(images.desktop);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setCurrentImage(images.mobile);
      } else {
        setCurrentImage(images.desktop);
      }
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [images.mobile, images.desktop]);

  return (
    <section className="relative text-white py-20 md:py-32 bg-gray-800 h-screen md:h-[70vh] flex items-center overflow-hidden">
      <img
        src={currentImage}
        alt="Cupping Therapy Course"
        className="absolute inset-0 w-full h-full md:h-[66.5vh] object-cover"
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-8 space-y-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Check className="h-5 w-5 text-green-400" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
