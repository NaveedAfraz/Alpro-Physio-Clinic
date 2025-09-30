import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface WhoCanJoinSectionProps {
  whoCanJoin: string[];
}

export function WhoCanJoinSection({ whoCanJoin }: WhoCanJoinSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <Card className="bg-slate-50 p-8">
        <CardTitle className="text-2xl mb-6 text-center">
          Who Can Join?
        </CardTitle>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            {whoCanJoin.map((who, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <p>{who}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
