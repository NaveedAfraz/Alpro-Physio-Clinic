import { Card } from "../ui/card";
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
    <section id="about" className="py-20 bg-light-blue/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-headline font-bold text-foreground mb-6 relative">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              Alpro Physio Clinic
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-accent rounded-full animate-pulse-glow"></div>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-up-delay-1">
            Alpro Physio Clinic is more than a treatment center – it's a
            movement toward trust, quality, security, and togetherness.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8 animate-fade-up-delay-1">
              <h3 className="text-subheadline font-semibold text-foreground mb-6 relative">
                Our Mission & Vision
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-accent animate-pulse-glow"></div>
              </h3>

              <div className="space-y-6 text-muted-foreground stagger-animation">
                <p className="text-body-large leading-relaxed hover-lift cursor-default p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                  Founded with the vision to deliver world-class healthcare in
                  Shivpuri, Alpro integrates modern physiotherapy, Cupping
                  therapy, Pilates and nutrition under one roof.
                </p>

                <p className="text-body-large leading-relaxed hover-lift cursor-default p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                  Our mission is simple: combine evidence-based medical
                  practices, advanced equipment, and compassionate care so that
                  every patient feels secure, supported, and restored.
                </p>
              </div>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-2 gap-6 animate-fade-up-delay-2">
              <div className="text-center p-6 bg-white rounded-lg shadow-soft hover-glow cursor-default relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-primary mb-2 animate-bounce-in">
                    10+
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-soft hover-glow cursor-default relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-teal/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div
                    className="text-3xl font-bold text-accent mb-2 animate-bounce-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    500+
                  </div>
                  <div className="text-muted-foreground">Monthly Patients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6 stagger-animation">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover-glow bg-white border-0 shadow-soft group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center animate-fade-up">
          <Card className="p-8 bg-gradient-to-r from-primary to-primary-deep text-white border-0 shadow-strong">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Experience the Alpro difference with our comprehensive,
              patient-centered approach to healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-colors hover-lift">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-md transition-colors hover-lift">
                Learn More
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
