import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-light sticky top-0 z-50 shadow-soft animate-fade-up">
      {/* Animated Top Bar */}
      <div className="bg-gradient-hero animate-gradient-x text-primary-foreground py-2 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-white/10 animate-pulse-glow"></div>
        <div className="container mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-6 animate-slide-in-left">
            <div className="flex items-center gap-2 hover-lift">
              <Phone size={16} className="animate-float" />
              <span className="font-medium">+91 8770623310</span>
            </div>
            <div className="flex items-center gap-2 hover-lift">
              <MapPin size={16} className="animate-float" style={{ animationDelay: '0.2s' }} />
              <span>40 No. Kothi Road, Jawahar Colony, Shivpuri, Madhya Pradesh</span>
            </div>
          </div>
          <div className="hidden md:block animate-slide-in-right">
            <span className="font-semibold animate-typewriter">Trusted Healthcare • Now in Shivpuri</span>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center animate-bounce-in">
            <div className="text-2xl font-bold cursor-pointer hover-rotate">
              <span className="text-primary">ALPRO</span>
              <span className="text-accent ml-1 animate-pulse-glow">PHYSIO</span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 stagger-animation">
            <a href="#home" className="text-foreground hover:text-primary transition-all font-medium hover-lift relative group">
              Home
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-all font-medium hover-lift relative group">
              About Us
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-all font-medium hover-lift relative group">
              Services
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-all font-medium hover-lift relative group">
              Testimonials
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all font-medium hover-lift relative group">
              Contact
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          </div>

          {/* Enhanced CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:flex bg-gradient-accent animate-gradient-x hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Book Appointment</span>
            </Button>
            
            <button
              className="lg:hidden p-2 hover-rotate"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-light animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="default" className="bg-accent hover:bg-accent/90 mt-4">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;