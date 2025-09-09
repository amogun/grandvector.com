import React, { useState } from 'react';
import { Menu, X, Mail, BookOpen, Phone, ArrowLeft } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Navigation = ({ currentPage, onPageChange, showBackButton, onBack }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'newsletter', label: 'Newsletter', icon: Mail },
    { id: 'blog', label: 'Blog', icon: BookOpen }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handlePageChange('home')}
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
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {showBackButton && onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            )}
            {!showBackButton && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white border border-transparent hover:border-gray-600/50'
                }`}
              >
                {currentPage !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                )}
                {item.label}
              </button>
            ))}
            
            <button
              onClick={scrollToDemo}
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
              {showBackButton && onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-300 text-left"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </button>
              )}
              {!showBackButton && navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white border border-transparent hover:border-gray-600/50'
                  }`}
                >
                  {currentPage !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                  )}
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={scrollToDemo}
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