import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface EnrollCTASectionProps {
  text: string;
  contact: string;
}

export function EnrollCTASection({ text, contact }: EnrollCTASectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white rounded-2xl p-10 text-center max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-bold">Enroll Today</h2>
        <p className="mt-4 text-lg text-blue-100">
          {text}
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact us at {contact}
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
