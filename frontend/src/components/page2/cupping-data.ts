import type { CuppingCourseData } from './cupping-types';

export const pageData: CuppingCourseData = {
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
    title: "Alpro Physio Clinic × Learn Cupping Therapy",
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
  locations: [
    "Mumbai",
    "Delhi",
    "Bhopal",
    "Bengaluru",
    "Kolkata",
    "Hyderabad"
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
