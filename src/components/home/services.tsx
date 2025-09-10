import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Activity,
  Heart,
  Users,
  Baby,
  Plane,
  RotateCcw,
  Shield,
  ArrowRight,
} from "lucide-react";

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
    },
    {
      icon: RotateCcw,
      title: "Rehabilitation Programs",
      description:
        "Post-surgery recovery, neurological rehab, and sports injury rehabilitation",
      features: [
        "Post Surgery Recovery",
        "Neurological Rehab",
        "Sports Injury",
        "Functional Training",
      ],
    },
    {
      icon: Heart,
      title: "Wellness & Preventive Programs",
      description:
        "Physiotherapy, Pilates, lifestyle correction and fitness routines",
      features: [
        "Pilates Classes",
        "Fitness Programs",
        "Lifestyle Correction",
        "Preventive Care",
      ],
    },
    {
      icon: Users,
      title: "Specialized Care for All Ages",
      description:
        "Comprehensive care tailored for different age groups and conditions",
      features: [
        "Women's Health",
        "Pediatric Care",
        "Geriatric Care",
        "Sports Medicine",
      ],
    },
  ];

  const specializedCare = [
    {
      title: "Women's Health Physiotherapy",
      description: "Pre/post-natal, pelvic floor care",
      icon: Heart,
    },
    {
      title: "Pediatric Physiotherapy",
      description: "Developmental delay, cerebral palsy, neuro rehab",
      icon: Baby,
    },
    {
      title: "Geriatric Physiotherapy",
      description: "Mobility & pain relief for seniors",
      icon: Shield,
    },
    {
      title: "Medical Tourism Support",
      description: "End-to-end care for international patients",
      icon: Plane,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-headline font-bold text-foreground mb-6 relative">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              Services
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-accent rounded-full animate-pulse-glow"></div>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto animate-fade-up-delay-1">
            Comprehensive physiotherapy and wellness solutions designed to
            restore your health and enhance your quality of life.
          </p>
        </div>

        {/* Enhanced Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 stagger-animation">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-glow bg-white border shadow-soft hover:shadow-medium transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>

              <div className="flex items-start gap-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-deep transition-colors" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 hover-lift cursor-default"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white group-btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary translate-x-[-100%] group-btn-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Specialized Care Section */}
        <div className="animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-subheadline font-semibold text-foreground mb-4">
              Specialized Care Programs
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Targeted treatments designed for specific conditions and patient
              demographics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {specializedCare.map((care, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift bg-light-blue/20 border-0 shadow-soft"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <care.icon className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-semibold text-foreground mb-3">
                  {care.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {care.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <Card className="p-8 bg-gradient-accent text-white border-0 shadow-strong max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Begin Your Recovery Journey?
                </h3>
                <p className="text-lg text-white/90">
                  Book a comprehensive assessment with our expert
                  physiotherapists today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 px-8 py-3 font-semibold hover-lift"
                >
                  Book Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-3 font-semibold hover-lift"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
