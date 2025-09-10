import { Card } from "../ui/card";
import {
  CheckCircle,
  Users,
  Award,
  Heart,
  Stethoscope,
  Globe,
} from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-headline font-bold text-foreground mb-6">
            Why Choose Alpro?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Experience the difference that quality care, advanced technology,
            and personalized treatment can make in your recovery journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 animate-scale-in">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-white border-0 shadow-soft hover-lift"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 bg-white border-0 shadow-soft hover-lift hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Checklist */}
        <div className="animate-fade-up">
          <Card className="p-8 bg-gradient-to-r from-primary to-primary-deep text-white border-0 shadow-strong">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                What You Get with Alpro Physio Clinic
              </h3>
              <p className="text-lg text-white/90">
                Comprehensive care that goes beyond traditional physiotherapy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-colors hover-lift text-lg">
                Start Your Recovery Today
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
