import { CheckCircle, Users, Award, Heart, Stethoscope, Globe } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced & Certified Therapists",
      description:
        "Our team of highly qualified physiotherapists brings years of expertise and advanced certifications to provide you with the best care possible.",
    },
    {
      icon: Award,
      title: "Premium Infrastructure & Equipment",
      description:
        "State-of-the-art facilities with the latest physiotherapy equipment and modern treatment rooms designed for optimal patient comfort.",
    },
    {
      icon: Heart,
      title: "Holistic Care: Physiotherapy + Hijama + Pilates",
      description:
        "Comprehensive treatment approach combining traditional physiotherapy with cupping therapy and Pilates for complete wellness.",
    },
    {
      icon: Stethoscope,
      title: "Patient-First Approach with Continuous Feedback",
      description:
        "Personalized treatment plans with regular progress monitoring and adjustments based on your specific needs and recovery goals.",
    },
    {
      icon: Globe,
      title: "Trusted by Families, Athletes & International Patients",
      description:
        "Serving a diverse community including local families, professional athletes, and patients from around the world seeking quality care.",
    },
  ];

  const stats = [
    { number: "15,000+", label: "Patients Treated Successfully" },
    { number: "95%", label: "Patient Satisfaction Rate" },
    { number: "10+", label: "Years of Excellence" },
    { number: "24/7", label: "Emergency Support Available" },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Why Choose <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">Alpro</span>?
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto font-opensans">
            Experience the difference that quality care, advanced technology,
            and personalized treatment can make in your recovery journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-xl border border-[#E5E4E2] hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-[#0044A3] mb-2 font-acumin">
                {stat.number}
              </div>
              <div className="text-[#1C1D0E]/80 font-opensans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const iconBgColors = [
              "bg-[#DDF1FC] text-[#0044A3]",
              "bg-[#E6F7F5] text-[#008D7D]",
              "bg-[#EBF5FF] text-[#5492DD]",
              "bg-[#F0F7FF] text-[#5492DD]"
            ];
            
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-[#E5E4E2] hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 ${iconBgColors[index % iconBgColors.length]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <reason.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1C1D0E] mb-3 font-acumin">
                      {reason.title}
                    </h3>
                    <p className="text-[#1C1D0E]/80 leading-relaxed font-opensans">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Checklist */}
        <div>
          <div className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 font-acumin">
                What You Get with Alpro Physio Clinic
              </h3>
              <p className="text-lg text-white/90 font-opensans">
                Comprehensive care that goes beyond traditional physiotherapy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "Free Initial Consultation",
                "Personalized Treatment Plans",
                "Advanced Diagnostic Assessment",
                "Modern Equipment & Facilities",
                "Certified & Experienced Staff",
                "Progress Tracking & Monitoring",
                "Home Exercise Programs",
                "Emergency Support Available",
                "Insurance Claim Assistance",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-opensans">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-white hover:bg-white/90 text-[#0044A3] font-semibold rounded-lg transition-colors font-opensans">
                Start Your Recovery Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
