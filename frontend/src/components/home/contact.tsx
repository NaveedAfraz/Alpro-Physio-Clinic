import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  MessageCircle,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["40 No. Kothi Road", "Jawahar Colony, Shivpuri", "Madhya Pradesh, India"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8770623310", "Emergency: 24/7 Available"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@alpro-physio.com", "appointments@alpro-physio.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 7:00 AM - 9:00 PM", "Sunday: 8:00 AM - 6:00 PM"],
      action: "Book Slot"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-headline font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our healthcare experts. We're here to help you start your journey to better health.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-lift bg-light-blue/10 border-0 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {info.title}
              </h3>
              
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                {info.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="p-8 shadow-medium border-0">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select className="w-full h-12 px-3 border border-border rounded-md bg-background">
                    <option value="">Select a service</option>
                    <option value="physiotherapy">Advanced Physiotherapy</option>
                    <option value="rehabilitation">Rehabilitation Program</option>
                    <option value="wellness">Wellness & Preventive Care</option>
                    <option value="specialized">Specialized Care</option>
                    <option value="medical-tourism">Medical Tourism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Describe your condition or inquiry..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to be contacted by Alpro Physio Clinic and understand that my information 
                    will be used according to the privacy policy.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary-deep text-lg font-semibold hover-lift"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Map and Additional Info */}
          <div className="animate-slide-in-right space-y-8">
            {/* Map Placeholder */}
            <Card className="p-6 shadow-medium border-0">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Find Us on Map
              </h3>
              
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <Navigation className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">40 No. Kothi Road, Jawahar Colony</p>
                  <p className="text-sm">Shivpuri, Madhya Pradesh</p>
                </div>
              </div>
              
              <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                <MapPin className="mr-2 w-4 h-4" />
                Open in Google Maps
              </Button>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-gradient-to-r from-accent to-accent/90 text-white border-0 shadow-medium">
              <h3 className="text-xl font-semibold mb-4">
                Emergency Contact
              </h3>
              <p className="mb-4">
                Need immediate medical attention or have an urgent inquiry?
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+91 8770623310</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Emergency Support</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-white text-accent hover:bg-white/90"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Emergency Appointment
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-medium border-0">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              
              <div className="grid gap-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-primary border-primary hover:bg-primary hover:text-white"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call for Appointment
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-teal border-teal hover:bg-teal hover:text-white"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Us
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-accent border-accent hover:bg-accent hover:text-white"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Online
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;