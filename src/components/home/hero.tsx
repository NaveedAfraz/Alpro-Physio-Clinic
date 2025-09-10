import {
  Calendar,
  Globe,
  ArrowRight,
  User,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Healthcare That the World Trusts", "Now in Shivpuri"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Increased pause
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-light-blue/50 to-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              {/* --- CHANGE 1 & 2: Smaller heading & adjusted height --- */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-headline block">
                    Healthcare That the World Trusts
                  </span>
                  <span className="text-subhead block mt-2">
                    Now in Shivpuri
                  </span>
                </h1>
                <p className="text-body text-foreground/80 mb-8 max-w-lg leading-relaxed">
                Premium physiotherapy, rehabilitation, cupping therapy &
                alternative wellness solutions designed to heal, restore, and
                empower.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-accent text-accent-foreground px-8 py-6 text-lg font-semibold hover-glow shadow-medium relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Calendar className="mr-2" size={20} />
                  Book Appointment
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-6 text-lg font-semibold relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-teal -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <Globe className="mr-2 relative z-10" size={20} />
                  <span className="relative z-10">Explore Medical Tourism</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side Content (Form) */}
          {/* --- CHANGE 3: Restyled the form card --- */}
          <div className="animate-slide-in-right">
            <Card className="p-8 shadow-strong bg-white/95 backdrop-blur-md border-0 rounded-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Book Your First{" "}
                  <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
                    Free
                  </span>{" "}
                  Appointment
                </h3>
                <p className="text-muted-foreground">
                  Get personalized treatment plans from certified therapists
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 text-md pl-10 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="h-12 text-md pl-10 border-2 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 text-md pl-10 border-2 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-700"
                  >
                    Service
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="service"
                      className="w-full h-12 px-3 pl-10 border-2 rounded-lg bg-background text-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="physiotherapy">
                        Advanced Physiotherapy
                      </option>
                      <option value="rehabilitation">
                        Rehabilitation Programs
                      </option>
                      <option value="wellness">
                        Wellness & Preventive Care
                      </option>
                      <option value="specialized">Specialized Care</option>
                    </select>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-hero text-lg font-semibold flex items-center justify-center gap-2 hover-glow shadow-medium transition-all duration-300 group mt-4"
                >
                  Submit Request
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
