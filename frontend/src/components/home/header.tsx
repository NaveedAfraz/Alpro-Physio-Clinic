import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useNavigate, Link } from "react-router";
import Alprologo from "../../assets/AlproLogo_11zon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm ">
      {/* Top Bar - Reverted to Alpro Physio branding */}
      <div className="bg-[#0044A3] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918770623310"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">+91 8770623310</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-blue-200">
              <MapPin size={16} />
              <span>40 No. Kothi Road, Shivpuri, Madhya Pradesh</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold text-blue-200">
              Trusted Healthcare • Now in Shivpuri
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* FIX: Replaced fixed width with responsive classes */}
            <div className="w-42 md:w-60 h-16 cursor-pointer">
              <img
                src={Alprologo}
                className="w-full h-full object-cover "
                alt="Alpro Physio Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Updated Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group py-2"
            >
              Home
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              to="/medical-tourism"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group py-2"
            >
              Medical Tourism
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Button
              onClick={() => navigate("/contact")}
              className="hidden md:flex group bg-[#0044A3] hover:bg-[#003380] text-white px-4 py-5 text-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Button>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className=" hidden md:flex group bg-[#0044A3] hover:bg-[#003380] text-white px-8 py-5 text-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => navigate("/book-appointment")}
            >
              Book Appointment
            </Button>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Updated Links */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/medical-tourism"
                className="text-gray-800 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Medical Tourism
              </Link>
              <Button
                className="group bg-[#0044A3] hover:bg-[#003380] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleNavigate("/contact")}
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleNavigate("/book-appointment")}
              >
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
