import { Card } from "../ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Anita Sharma",
      condition: "Back Pain Recovery",
      rating: 5,
      testimonial: "After 6 months of chronic back pain, Alpro's rehabilitation program gave me back my mobility in just 3 weeks. The personalized care and modern equipment made all the difference.",
      location: "International Patient"
    },
    {
      name: "Rajesh Kumar",
      condition: "Sports Injury",
      rating: 5,
      testimonial: "As a professional athlete, I needed the best care for my knee injury. Alpro's sports physiotherapy program not only healed my injury but made me stronger than before.",
      location: "Professional Athlete"
    },
    {
      name: "Dr. Priya Patel",
      condition: "Post-Surgery Recovery",
      rating: 5,
      testimonial: "The post-operative physiotherapy at Alpro was exceptional. Their evidence-based approach and caring staff made my recovery smooth and successful.",
      location: "Medical Professional"
    },
    {
      name: "Ahmed Hassan",
      condition: "Chronic Pain Management",
      rating: 5,
      testimonial: "Best physiotherapy clinic in Shivpuri - professional, caring, and globally trusted. The combination therapy approach gave me relief I hadn't felt in years.",
      location: "Local Patient"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-accent fill-accent" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-light-blue/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-headline font-bold text-foreground mb-6">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Real stories from patients who found healing and restored their quality of life with Alpro Physio Clinic.
          </p>
        </div>

        {/* Success Stories Statistics */}
        <div className="text-center mb-16 animate-scale-in">
          <Card className="p-8 bg-white shadow-medium border-0 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">15,000+</div>
                <div className="text-muted-foreground">Success Stories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-white border-0 shadow-soft hover-lift hover:shadow-medium transition-all duration-300 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed text-lg italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
              
              <div className="border-t border-gray-light pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.condition}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Patient Story */}
        <div className="animate-fade-up">
          <Card className="p-8 bg-gradient-to-r from-teal to-primary text-white border-0 shadow-strong">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
              <blockquote className="text-xl font-medium leading-relaxed mb-6">
                "After my surgery, Alpro's rehab program gave me back my mobility in weeks!" 
              </blockquote>
              <cite className="text-lg">
                <strong>– International Patient</strong>
              </cite>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Patients</h3>
                <p className="text-white/90 mb-6">
                  Experience the same level of care that has helped patients from around the world 
                  recover faster and live better lives.
                </p>
                <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-colors hover-lift">
                  Share Your Success Story
                </button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">What Our Patients Say:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• "Professional and caring staff"</li>
                  <li>• "Modern facilities and equipment"</li>
                  <li>• "Effective treatment results"</li>
                  <li>• "Globally trusted healthcare"</li>
                  <li>• "Personalized care approach"</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the thousands who have experienced life-changing results with our comprehensive physiotherapy programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary-deep text-white font-semibold rounded-md transition-colors hover-lift">
              Book Your Consultation
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-md transition-colors hover-lift">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;