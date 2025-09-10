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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-[#DDF1FC]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #DDF1FC80, #5492DD33)'
          }}
        />
      </div>

      <div className="container relative z-20 px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-hero font-bold mb-6 min-h-[120px] md:min-h-[220px] flex items-center font-acumin">
              <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                {displayedText}
              </span>
            </h1>
            <p className="text-lg text-[#1C1D0E]/80 mb-8 max-w-lg leading-relaxed font-opensans">
              Premium physiotherapy, rehabilitation, cupping therapy &
              alternative wellness solutions designed to heal, restore, and
              empower.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#0044A3] hover:bg-[#003380] text-white px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-[#008D7D] text-[#008D7D] hover:bg-[#008D7D] hover:text-white px-8 py-6 text-lg font-semibold transition-colors"
              >
                <Globe className="mr-2" size={20} />
                Explore Medical Tourism
              </Button>
            </div>
          </div>

          {/* Right Side Content (Form) */}
          <div className="animate-slide-in-right">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-[#E5E4E2]">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#1C1D0E] font-acumin">
                  Book Your First{" "}
                  <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
                    Free
                  </span>{" "}
                  Appointment
                </h2>
                <p className="text-[#1C1D0E]/80 mt-2 font-opensans">
                  Get personalized treatment plans from certified therapists
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1C1D0E] font-opensans">
                    Full Name
                  </h3>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1C1D0E]/50" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1C1D0E] font-opensans">
                    Phone Number
                  </h3>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1C1D0E]/50" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1C1D0E] font-opensans">
                    Email Address
                  </h3>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1C1D0E]/50" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 text-md pl-10 border-2 border-[#E5E4E2] rounded-lg focus:border-[#5492DD] focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1C1D0E] font-opensans">
                    Service
                  </h3>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1C1D0E]/50" />
                    <select
                      id="service"
                      className="w-full h-12 px-3 pl-10 border-2 border-[#E5E4E2] rounded-lg bg-white text-md focus:border-[#5492DD] focus:outline-none focus:ring-2 focus:ring-[#5492DD]/50 font-opensans"
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
                  className="w-full bg-[#0044A3] hover:bg-[#003380] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors mt-6 flex items-center justify-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
