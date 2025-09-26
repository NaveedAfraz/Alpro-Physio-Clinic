import { motion, type Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import img1 from "../../assets/alproPro1.jpg";
import img2 from "../../assets/alproPro2.jpg";
// --- DATA for the Products Section (from your image) ---
const productsData = [
  {
    title: "Cupping Wellness Kit (Cups Only)",
    oldPrice: "873",
    newPrice: "620",
    imageUrl: img1,
  },
  {
    title: "Cupping Wellness Kit",
    oldPrice: "1492",
    newPrice: "1060",
    imageUrl: img2,
  },
  {
    title: "Cupping Athlete Wellness Kit",
    oldPrice: "1820",
    newPrice: "1292",
    imageUrl: img2,
  },
];

// --- Animation Variants (can be shared from your page) ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProductSection() {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-gray-900 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl text-center md:text-4xl font-bold tracking-tight text-gray-900">
            Buy our Therapeutic Cupping Set
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Harnessing the potentials of the oldest & most globally sought
            therapy in human history to your wellbeing.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {productsData.map((product) => (
            <motion.div key={product.title} variants={sectionVariants}>
              <Card className="bg-white border-gray-200 text-gray-900 flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-[100%] bg-gray-100 rounded-t-lg overflow-hidden">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-contain" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-900 text-lg">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
                  <div className="text-left">
                    <p className="text-sm line-through text-gray-500">
                      ₹{product.oldPrice}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{product.newPrice}
                    </p>
                  </div>
                  <Button className="bg-gray-900 text-white hover:bg-gray-700">
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
