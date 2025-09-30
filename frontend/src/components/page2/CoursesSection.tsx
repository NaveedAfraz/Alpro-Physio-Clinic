import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Course {
  title: string;
  description: string;
  price: string;
}

interface CoursesSectionProps {
  courses: Course[];
}

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
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
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
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
  );
}
