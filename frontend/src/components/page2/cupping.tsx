import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight, Award, Star, User, Mail, MessageSquare } from "lucide-react";
import Header from "../home/header";
import Footer from "../home/footer";
import { useState } from "react";


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
    imageUrl: "/cuppingtoppic.jpg",
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
  testimonials: [
    {
      name: "Dr. Priya Sharma",
      role: "Physiotherapist",
      location: "Delhi",
      content:
        "The cupping therapy course at Alpro Physio Clinic was exceptional. The hands-on training and expert guidance helped me integrate cupping into my practice effectively. The certification is internationally recognized and has opened new opportunities for me.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Sports Coach",
      location: "Mumbai",
      content:
        "I was impressed by the comprehensive curriculum covering both theory and practical aspects. The instructors are highly knowledgeable and the hybrid learning format made it convenient to learn at my own pace. Highly recommended for anyone serious about cupping therapy.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Wellness Practitioner",
      location: "Bangalore",
      content:
        "The diploma course exceeded my expectations. The detailed training on wet cupping techniques and the focus on hygiene and safety protocols gave me complete confidence to practice professionally. The ongoing support from the team is outstanding.",
      rating: 5,
    },
  ],
};

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CuppingCoursePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add form submission logic here
    alert("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* 1. Hero Section */}
        <section className="relative text-white py-20 md:py-32 bg-gray-800">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{ 
              backgroundImage: `url(${pageData.hero.imageUrl})`,
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
          {/* <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <ProductSection />
          </motion.section> */}
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

          {/* Testimonials Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                What Our Clients Say
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Real experiences from professionals who transformed their practice
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pageData.testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={sectionVariants}>
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enrollment Form Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Enroll Now / Get More Information
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Fill out the form below and we'll get back to you with course details and enrollment information
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Course
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a course</option>
                        <option value="certificate">Certificate Course in Hijama (Cupping Therapy) - ₹11,999</option>
                        <option value="diploma">Diploma in Hijama (Cupping Therapy) - ₹14,999</option>
                        <option value="both">Interested in both courses</option>
                        <option value="information">Just need more information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Questions
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Any specific questions or requirements?"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                    >
                      Submit Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
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
