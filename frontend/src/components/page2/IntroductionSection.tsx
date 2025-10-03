import { motion } from "framer-motion";

interface IntroductionSectionProps {
  title: string;
  subtitle: string;
  text: string;
}

export function IntroductionSection({
  title,
  subtitle,
  text,
}: IntroductionSectionProps) {
  return (
    <motion.section
      className="text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <h2 className="text-3xl font-bold text-gray-900">{subtitle}</h2>
      <p className="mt-4 text-lg text-gray-600">{text}</p>
    </motion.section>
  );
}
