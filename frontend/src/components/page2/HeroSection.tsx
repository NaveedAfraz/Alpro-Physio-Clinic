import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  imageUrl: string;
}

export function HeroSection({ title, subtitle, features, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative text-white py-20 md:py-32 bg-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover'
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
