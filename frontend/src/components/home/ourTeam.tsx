import { motion, type Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- DATA for the "Our Team" section ---
const teamMembers = [
  {
    name: "Dr. Zeeshan Ahmad",
    credentials:
      "MPT (Sports), Certified Strength & Conditioning Coach (Australia)",
    bio: "With international expertise in sports physiotherapy and athletic conditioning, Dr. Zeeshan Ahmad brings advanced skills in injury prevention, pain management, and performance-based rehabilitation.",
    imageUrl:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    initials: "ZA",
  },
  {
    name: "Dr. Prashant",
    credentials: "MPT (Sports Physiotherapy), India",
    bio: "Dr. Prashant specializes in pediatric physiotherapy, neuro-rehabilitation, and functional movement assessment.",
    imageUrl:
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    initials: "DP",
  },
  {
    name: "Dr. Shahana Pathan",
    credentials:
      "Ph.D. in Counseling Psychology | Certified Special Educator | Life Skill Trainer – Riyadh",
    bio: "Dr. Shahana brings a holistic dimension to rehabilitation, integrating counseling psychology, life skills, and inclusive care practices into physiotherapy recovery.",
    imageUrl:
      "https://images.pexels.com/photos/5214993/pexels-photo-5214993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    initials: "SP",
  },
];

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Main Team Section Component ---
export function TeamSection() {
  return (
    <motion.section
      id="team"
      className="py-24  md:px-12  bg-slate-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1D0E] mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto leading-relaxed">
            Dedicated professionals committed to your health and well-being,
            combining expertise in physiotherapy, rehab, and holistic care.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-8 border border-gray-100"
              variants={cardVariants}
            >
              <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-blue-100 shadow-md">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback className="text-3xl bg-gray-200">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-semibold my-2 h-10">
                {member.credentials}
              </p>
              <p className="text-gray-600 mt-6 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
