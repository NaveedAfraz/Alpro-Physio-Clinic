import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-4">
                <span className="text-white">ALPRO</span>
                <span className="text-accent ml-1">PHYSIO</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Healthcare that the world trusts – now in Shivpuri. Premium physiotherapy, 
                rehabilitation, and wellness solutions designed to heal, restore, and empower.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">
                  40 No. Kothi Road, Jawahar Colony, Shivpuri, Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">+91 8770623310</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">info@alpro-physio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">Mon-Sat: 7AM-9PM, Sun: 8AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Advanced Physiotherapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Rehabilitation Programs
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Wellness & Preventive Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Specialized Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Medical Tourism Support
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Cupping Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/70 text-sm">
              © 2024 Alpro Physio Clinic. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>for better healthcare in Shivpuri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;