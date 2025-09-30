import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CertificationSectionProps {
  certification: string;
}

export function CertificationSection({ certification }: CertificationSectionProps) {
  return (
    <motion.section
      className="text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-gray-900">
        Internationally Recognized Certification
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        {certification}
      </p>
    </motion.section>
  );
}
