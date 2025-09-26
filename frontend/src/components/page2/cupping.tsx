import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight, Award } from "lucide-react";
import Header from "../home/header";
import Footer from "../home/footer";
import { ProductSection } from "./productDisplay";
 

// --- DATA for the Cupping Therapy Course Page ---
const pageData = {
  hero: {
    title: "Cupping Therapy Course",
    subtitle:
      "Your Trusted Partner for Personalised and Authoritative Cupping Therapy Training",
    features: [
      "Internationally Recognised Certification",
      "Expert training by certified DOCTORS & Practitioners",
      "Hybrid mode of learning, Online sessions with hands on practical training, no distance barriers. Happy Learning!",
    ],
    imageUrl:
      "https://images.pexels.com/photos/4041253/pexels-photo-4041253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  introduction: {
    title: "Learn Cupping at Alpro Physio Clinic",
    text: "Cupping therapy (Hijama) is one of the world’s oldest healing systems, and today it is recognized globally for its effectiveness in pain management, stress relief, detox, and overall wellness.",
  },
  courses: [
    {
      title: "Certificate Course in Hijama (Cupping Therapy)",
      description:
        "Learn the science of cupping therapy, types, hygiene, points, locations, anatomy, and physiology behind this therapy through 10 hours of videos and online sessions plus 3 days of classroom practical training.",
      price: "₹11,999/-",
    },
    {
      title: "Diploma in Hijama (Cupping Therapy)",
      description:
        "Intense Advanced training for mastering the art of wet cupping therapy on skin, face, head, legs etc with 25 hours of videos and online sessions plus 3 days of classroom practical training.",
      price: "₹14,999/-",
    },
  ],
  whoCanJoin: [
    "Healthcare professionals (AYUSH Doctors, Physiotherapists, Nurses and Wellness Experts)",
    "Sports coaches, Trainers & Fitness professionals",
    "Alternative Medicine Practitioners",
    "Anyone passionate about holistic healing",
  ],
  certification:
    "Upon completion, participants receive an Internationally recognized certificate which will empower them to safely and professionally provide Hijama therapy.",
  enroll: {
    contact: "+91 8770922310",
    text: "Seats are limited to ensure personalized training.",
  },
};

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CuppingCoursePage() {
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
          <div className="absolute inset-0 bg-black/60"></div>
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
              {pageData.hero.subtitle}
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
              {pageData.hero.features.map((feature, index) => (
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

        {/* 2. Main Content Sections */}
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
          {/* Introduction Section */}
          <motion.section
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {pageData.introduction.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageData.introduction.text}
            </p>
          </motion.section>

          {/* Courses Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Cupping Courses
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Classroom Workshops & Online Course
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pageData.courses.map((course) => (
                <motion.div key={course.title} variants={sectionVariants}>
                  <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{course.description}</p>
                    </CardContent>
                    <CardContent className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-gray-800">
                        {course.price}
                      </p>
                      <Button>
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <ProductSection />
          </motion.section>
          {/* Who Can Join Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <Card className="bg-slate-50 p-8">
              <CardTitle className="text-2xl mb-6 text-center">
                Who Can Join?
              </CardTitle>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {pageData.whoCanJoin.map((who, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                      <p>{who}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Certification Section */}
          <motion.section
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              Internationally Recognized Certification
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageData.certification}
            </p>
          </motion.section>

          {/* Enroll Today CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="bg-gray-900 text-white rounded-2xl p-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold">Enroll Today</h2>
              <p className="mt-4 text-lg text-gray-300">
                {pageData.enroll.text}
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact us at {pageData.enroll.contact}
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
