import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Plane,
  Hotel,
  MessageSquare,
  IndianRupee,
  Phone,
  Calendar,
  Quote,
} from "lucide-react";
import Footer from "../home/footer";
import Header from "../home/header";

// --- DATA for the Medical Tourism Page ---
const pageData = {
  hero: {
    title: "Medical Tourism at Alpro Physio",
    description:
      "Our dedicated International Patient Services department manages all healthcare and travel needs for you and your companions, ensuring a seamless healing journey.",
    imageUrl:
      "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  services: {
    title: "Comprehensive Care for International Patients",
    items: [
      {
        icon: FileText,
        title: "Visa Documentation Assistance",
        description:
          "Once your treatment is finalized, our team provides an official invitation letter to facilitate a priority medical visa for you and your attendant.",
      },
      {
        icon: Plane,
        title: "Arriving at Alpro Physio Clinic",
        description:
          "Upon arrival, simply present your passport at our registration counter to complete your patient registration, as required by government directives.",
      },
      {
        icon: Hotel,
        title: "Your Stay in India",
        description:
          "If you prefer to stay at a nearby hotel, our team can arrange accommodation that fits your budget and preferences. Please contact us before you travel.",
      },
      {
        icon: MessageSquare,
        title: "Language Interpreter Services",
        description:
          "Professional language interpreters can be made available upon request to ensure clear communication throughout your treatment.",
      },
      {
        icon: IndianRupee,
        title: "Cost Estimate and Billing",
        description:
          "Based on your proposed treatment, our team will provide a detailed cost estimate and explain the billing and payment process (Cash, Card, RTGS).",
      },
    ],
  },
  testimonials: [
    "I traveled from Dubai for post-surgery rehab. The care at Alpro was world-class, yet affordable.",
    "The medical tourism package made everything stress-free – from travel to treatment.",
  ],
  cta: {
    title: "Plan Your Healing Journey",
    description:
      "Your health deserves the best care. With Alpro Physio Clinic, you get international-quality physiotherapy and wellness support, right here in Shivpuri.",
    contact: "+91 8770922310",
  },
};

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function MedicalTourismPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* 1. Hero Section */}
        <section className="relative text-white py-20 md:py-32 bg-gray-800">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pageData.hero.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pageData.hero.title}
            </motion.h1>
            <motion.p
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {pageData.hero.description}
            </motion.p>
          </div>
        </section>

        {/* 2. Main Content Sections */}
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
          {/* Services Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                {pageData.services.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.services.items.map((service) => (
                <motion.div key={service.title} variants={sectionVariants}>
                  <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Testimonials from Medical Tourists
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pageData.testimonials.map((testimonial, index) => (
                  <blockquote
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
                  >
                    <Quote className="w-8 h-8 text-blue-100 mb-2 transform rotate-180" />
                    <p className="text-lg italic text-gray-700">
                      {testimonial}
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="bg-blue-600 text-white rounded-2xl p-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold">{pageData.cta.title}</h2>
              <p className="mt-4 text-lg text-blue-100">
                {pageData.cta.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Start with an online consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact us: {pageData.cta.contact}
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
