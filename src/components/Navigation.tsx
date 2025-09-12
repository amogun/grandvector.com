import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, BookOpen, Phone, Users, Puzzle, Info } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation = ({ onContactClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // On homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage with anchor
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // On homepage, scroll to contact section
      scrollToSection('contact');
    } else {
      // On other pages, open contact modal
      onContactClick();
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { 
      type: 'link', 
      to: '/', 
      label: 'Home', 
      icon: null,
      isActive: location.pathname === '/'
    },
    { 
      type: 'link', 
      to: '/about', 
      label: 'About', 
      icon: Info,
      isActive: location.pathname === '/about'
    },
    { 
      type: 'link', 
      to: '/solutions', 
      label: 'Solutions', 
      icon: Users,
      isActive: location.pathname === '/solutions'
    },
    { 
      type: 'link', 
      to: '/integrations', 
      label: 'Integrations', 
      icon: Puzzle,
      isActive: location.pathname === '/integrations'
    },
    { 
      type: 'link', 
      to: '/newsletter', 
      label: 'Newsletter', 
      icon: Mail,
      isActive: location.pathname === '/newsletter'
    },
    { 
      type: 'link', 
      to: '/blog', 
      label: 'Blog', 
      icon: BookOpen,
      isActive: location.pathname.startsWith('/blog')
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo_vector-v3.svg" 
              alt="Grand Vector Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Grand Vector
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  item.isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white border border-transparent hover:border-gray-600/50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </Link>
            ))}
            
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                    item.isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white border border-transparent hover:border-gray-600/50'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              ))}
              
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 mt-2"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;