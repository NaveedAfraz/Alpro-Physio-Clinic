import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-[#E5E4E2] sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0044A3] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918770623310" className="flex items-center gap-2 hover:text-[#DDF1FC] transition-colors">
              <Phone size={16} />
              <span className="font-medium">+91 8770623310</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-[#DDF1FC]">
              <MapPin size={16} />
              <span>40 No. Kothi Road, Jawahar Colony, Shivpuri, Madhya Pradesh</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold text-[#DDF1FC]">Trusted Healthcare • Now in Shivpuri</span>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-[#0044A3]">ALPRO</span>
              <span className="text-[#008D7D] ml-1">PHYSIO</span>
            </div>
          </a>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-[#1C1D0E] hover:text-[#0044A3] transition-colors font-medium font-opensans relative group py-2">
              Home
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0044A3] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#about" className="text-[#1C1D0E] hover:text-[#0044A3] transition-colors font-medium font-opensans relative group py-2">
              About Us
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0044A3] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#services" className="text-[#1C1D0E] hover:text-[#0044A3] transition-colors font-medium font-opensans relative group py-2">
              Services
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0044A3] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#testimonials" className="text-[#1C1D0E] hover:text-[#0044A3] transition-colors font-medium font-opensans relative group py-2">
              Testimonials
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0044A3] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#contact" className="bg-[#0044A3] hover:bg-[#003380] text-white px-6 py-2.5 rounded-lg font-medium font-opensans transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </a>
          </div>

          {/* Enhanced CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:flex bg-gradient-accent animate-gradient-x hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Book Appointment</span>
            </Button>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1C1D0E] hover:bg-[#E5E4E2]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 border-t border-[#E5E4E2]">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-[#1C1D0E] hover:text-[#0044A3] py-2 font-medium font-opensans transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#1C1D0E] hover:text-[#0044A3] py-2 font-medium font-opensans transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-[#1C1D0E] hover:text-[#0044A3] py-2 font-medium font-opensans transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-[#1C1D0E] hover:text-[#0044A3] py-2 font-medium font-opensans transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="bg-[#0044A3] hover:bg-[#003380] text-white px-6 py-2.5 rounded-lg font-medium font-opensans text-center mt-4 transition-colors shadow-md hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
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