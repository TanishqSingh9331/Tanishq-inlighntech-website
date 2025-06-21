import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import InlighnLogo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Programs' },
    { href: '#certificates', label: 'Verify Certificates' },
    { href: '#special', label: 'What\'s Special' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-green-900/98 via-emerald-900/98 to-green-800/98 backdrop-blur-lg shadow-2xl border-b border-emerald-400/30 glass-morphism' 
        : 'bg-gradient-to-r from-green-900/80 via-emerald-900/80 to-green-800/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Animation */}
          <div className="flex items-center space-x-3 group cursor-pointer magnetic-hover text-hover-glow bg-click-pulse">
            <InlighnLogo className="transition-transform duration-500 group-hover:rotate-12 animate-rotateIn icon-hover-spin icon-click-bounce" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold transition-all duration-500 bg-gradient-to-r from-emerald-300 via-yellow-400 to-emerald-300 bg-clip-text text-transparent animate-gradient-x holographic text-hover-pulse text-click-glow">
                Inlighn Tech
              </span>
              <span className="text-xs text-yellow-400 font-medium tracking-wider opacity-80 animate-fadeInUp animation-delay-300 text-hover-bounce text-click-pulse">
                Empowering Future
              </span>
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-medium transition-all duration-500 hover:scale-105 group magnetic-hover animate-fadeInDown text-emerald-100 hover:text-yellow-300 text-hover-glow text-click-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-yellow-400/25 group magnetic-button btn-float animate-fadeInDown animation-delay-600 bg-hover-shift text-hover-expand bg-click-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <LogIn className="w-4 h-4 relative z-10 animate-wave icon-hover-bounce icon-click-spin" />
              <span className="relative z-10 text-click-pulse">Login Portal</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className="md:hidden transition-colors duration-300 magnetic-hover text-emerald-200 hover:text-yellow-300 icon-hover-wiggle icon-click-spin"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 animate-rotateIn" /> : <Menu className="w-6 h-6 animate-rotateIn" />}
          </button>
        </div>

        {/* Mobile Menu with Enhanced Animations */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-green-900/98 to-emerald-900/98 backdrop-blur-lg shadow-2xl border-b border-emerald-400/30 animate-slideDown glass-morphism">
            <div className="py-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-4 text-emerald-200 hover:text-yellow-400 hover:bg-emerald-800/30 transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 magnetic-hover animate-slideInFromLeft text-hover-glow bg-hover-shift text-click-bounce bg-click-pulse"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-4">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 magnetic-button btn-float animate-slideInFromLeft animation-delay-300 bg-hover-shift text-hover-expand bg-click-pulse">
                  <LogIn className="w-4 h-4 animate-wave icon-hover-bounce icon-click-spin" />
                  <span className="text-click-pulse">Login Portal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;