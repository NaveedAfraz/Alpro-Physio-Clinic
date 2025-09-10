import { Heart, Award, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every patient feels secure, supported, and restored with our personalized approach.",
    },
    {
      icon: Award,
      title: "World-Class Healthcare",
      description:
        "Integrating modern physiotherapy, cupping therapy, Pilates and nutrition under one roof.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Evidence-based medical practices with advanced equipment and experienced therapists.",
    },
    {
      icon: Target,
      title: "Proven Results",
      description:
        "Combining trust, quality, security and togetherness for optimal patient outcomes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#DDF1FC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1C1D0E] mb-6 relative font-acumin">
            About{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Alpro Physio Clinic
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#5492DD] to-[#0044A3] rounded-full"></div>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-4xl mx-auto leading-relaxed font-opensans">
            Alpro Physio Clinic is more than a treatment center – it's a
            movement toward trust, quality, security, and togetherness.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#1C1D0E] mb-6 relative font-acumin">
                Our Mission & Vision
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#5492DD] to-[#0044A3]"></div>
              </h3>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E5E4E2] font-opensans text-[#1C1D0E]/80">
                  Founded with the vision to deliver world-class healthcare in
                  Shivpuri, Alpro integrates modern physiotherapy, Cupping
                  therapy, Pilates and nutrition under one roof.
                </p>

                <p className="text-lg leading-relaxed p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E5E4E2] font-opensans text-[#1C1D0E]/80">
                  Our mission is simple: combine evidence-based medical
                  practices, advanced equipment, and compassionate care so that
                  every patient feels secure, supported, and restored.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E4E2]">
                <div className="text-4xl font-bold text-[#0044A3] mb-2">10+</div>
                <div className="text-[#1C1D0E]/80 font-opensans">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E4E2]">
                <div className="text-4xl font-bold text-[#008D7D] mb-2">5K+</div>
                <div className="text-[#1C1D0E]/80 font-opensans">Patients Treated</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#1C1D0E] font-acumin">
              Your Trusted Partner in Holistic Healing
            </h3>
            <p className="text-lg text-[#1C1D0E]/80 leading-relaxed font-opensans">
              At Alpro Physio Clinic, we believe in a comprehensive approach to
              healthcare that addresses both physical and emotional well-being.
              Our team of certified therapists combines traditional methods with
              modern techniques to deliver exceptional care.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-[#5492DD]/10 text-[#0044A3] px-4 py-2 rounded-lg text-sm font-medium font-opensans">
                Evidence-Based Care
              </div>
              <div className="bg-[#008D7D]/10 text-[#008D7D] px-4 py-2 rounded-lg text-sm font-medium font-opensans">
                Patient-Centric Approach
              </div>
              <div className="bg-[#5492DD]/10 text-[#0044A3] px-4 py-2 rounded-lg text-sm font-medium font-opensans">
                Modern Facilities
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-[#E5E4E2] mt-6">
              <div className="w-full h-full bg-gradient-to-br from-[#5492DD] to-[#0044A3] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h4 className="text-2xl font-bold mb-4 font-acumin">
                    Experience the Difference
                  </h4>
                  <p className="text-lg opacity-90 font-opensans">
                    Where healing meets compassion and expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E4E2] hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#DDF1FC] flex items-center justify-center mb-4 text-[#0044A3]">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1C1D0E] font-acumin">
                {feature.title}
              </h3>
              <p className="text-[#1C1D0E]/80 font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 font-acumin">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-lg mb-6 text-white/90 font-opensans">
              Experience the Alpro difference with our comprehensive,
              patient-centered approach to healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#0044A3] hover:bg-white/90 font-semibold rounded-lg transition-colors font-opensans">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold rounded-lg transition-colors font-opensans">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
