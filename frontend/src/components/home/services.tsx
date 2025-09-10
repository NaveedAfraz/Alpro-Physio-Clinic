import { Activity, Heart, RotateCcw, Plus, Phone } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Activity,
      title: "Advanced Physiotherapy & Pain Relief",
      description: "Back, neck, shoulder, joint & chronic pain management",
      features: [
        "Manual Therapy",
        "Exercise Therapy",
        "Pain Management",
        "Joint Mobilization",
      ],
      bgColor: "from-[#DDF1FC] to-[#E5F0FA]",
      iconColor: "bg-[#DDF1FC] text-[#0044A3]"
    },
    {
      icon: RotateCcw,
      title: "Rehabilitation Programs",
      description: "Post-surgery recovery, neurological rehab, and sports injury rehabilitation",
      features: [
        "Post Surgery Recovery",
        "Neurological Rehab",
        "Sports Injury",
        "Functional Training",
      ],
      bgColor: "from-[#E6F7F5] to-[#E5F2F1]",
      iconColor: "bg-[#E6F7F5] text-[#008D7D]"
    },
    {
      icon: Heart,
      title: "Wellness & Preventive Care",
      description: "Physiotherapy, Pilates, lifestyle correction and fitness routines",
      features: [
        "Pilates Classes",
        "Fitness Programs",
        "Lifestyle Correction",
        "Preventive Care",
      ],
      bgColor: "from-[#F0F7FF] to-[#E5F0FA]",
      iconColor: "bg-[#EBF5FF] text-[#5492DD]"
    }
  ];

  const additionalServices = [
    {
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children with developmental delays and conditions"
    },
    {
      title: "Geriatric Care",
      description: "Specialized programs for elderly patients to improve mobility and independence"
    },
    {
      title: "Workplace Ergonomics",
      description: "Assessments and interventions to prevent workplace injuries"
    },
    {
      title: "Travel Care",
      description: "Pre and post-travel physiotherapy for frequent travelers"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1C1D0E] mb-6 font-acumin">
            Our Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#5492DD] to-[#0044A3] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-[#1C1D0E]/80 max-w-3xl mx-auto font-opensans">
            Expert care tailored to your unique needs and recovery goals
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-gradient-to-br ${service.bgColor} border border-[#E5E4E2] hover:shadow-md transition-shadow`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.iconColor} flex items-center justify-center mb-6`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C1D0E] font-acumin">
                {service.title}
              </h3>
              <p className="text-[#1C1D0E]/80 mb-4 font-opensans">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-[#1C1D0E]/80 font-opensans">
                    <span className={`w-1.5 h-1.5 rounded-full ${index === 1 ? 'bg-[#008D7D]' : 'bg-[#0044A3]'} mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="flex items-center text-[#0044A3] font-medium hover:text-[#003380] transition-colors group font-opensans">
                Learn more
                <Plus className="ml-2 w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-[#1C1D0E] mb-4 font-acumin">
            Additional Specialized Services
          </h3>
          <p className="text-[#1C1D0E]/80 max-w-2xl mx-auto font-opensans mb-8">
            We offer a range of specialized therapies to address your specific needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-[#E5E4E2] bg-white hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5F9FF] flex items-center justify-center mb-4">
                  <Plus className="w-5 h-5 text-[#0044A3]" />
                </div>
                <h4 className="font-semibold text-[#1C1D0E] mb-2 font-acumin">{service.title}</h4>
                <p className="text-sm text-[#1C1D0E]/80 font-opensans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0044A3] to-[#5492DD] text-white rounded-2xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3 font-acumin">
                Ready to Begin Your Recovery Journey?
              </h3>
              <p className="text-white/90 font-opensans">
                Book a comprehensive assessment with our expert physiotherapists today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-6 py-3 bg-white text-[#0044A3] hover:bg-white/90 font-semibold rounded-lg transition-colors font-opensans">
                Book Assessment
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 font-opensans">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
