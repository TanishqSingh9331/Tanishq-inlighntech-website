import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import InlighnLogo from './Logo';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#contact' },
    { name: 'Career Services', href: '#' },
    { name: 'Success Stories', href: '#' },
  ];

  const programs = [
    { name: 'Cybersecurity', href: '#programs' },
    { name: 'Full Stack Development', href: '#programs' },
    { name: 'Data Science', href: '#programs' },
    { name: 'Data Analysis', href: '#programs' },
  ];

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Certificate Verification', href: '#certificates' },
    { name: 'Technical Support', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #10B981 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-hover-glow bg-click-pulse">
              <InlighnLogo className="hover:scale-110 transition-transform duration-300 icon-hover-spin icon-click-bounce" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent text-hover-pulse text-click-glow">
                  Inlighn Tech
                </span>
                <span className="text-xs text-yellow-400 font-medium text-hover-bounce text-click-pulse">Empowering Future</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-hover-slide text-click-glow">
              Empowering the next generation of tech professionals through immersive, 
              industry-relevant education programs designed for the digital economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group icon-hover-bounce bg-hover-shift border-hover-glow bg-click-pulse">
                <Facebook className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300 icon-hover-wiggle icon-click-spin" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group icon-hover-bounce bg-hover-shift border-hover-glow bg-click-pulse">
                <Twitter className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300 icon-hover-wiggle icon-click-spin" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group icon-hover-bounce bg-hover-shift border-hover-glow bg-click-pulse">
                <Instagram className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300 icon-hover-wiggle icon-click-spin" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group icon-hover-bounce bg-hover-shift border-hover-glow bg-click-pulse">
                <Linkedin className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300 icon-hover-wiggle icon-click-spin" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group icon-hover-bounce bg-hover-shift border-hover-glow bg-click-pulse">
                <Youtube className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300 icon-hover-wiggle icon-click-spin" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 text-hover-glow text-click-bounce">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block text-hover-slide text-click-pulse"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 text-hover-glow text-click-bounce">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block text-hover-slide text-click-pulse"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 text-hover-glow text-click-bounce">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group text-hover-slide bg-click-pulse">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0 group-hover:text-yellow-400 transition-colors duration-300 icon-hover-bounce icon-click-pulse" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-click-glow">
                  123 Tech Hub, Sector 62<br />
                  Noida, Uttar Pradesh 201309
                </span>
              </li>
              <li className="flex items-center space-x-3 group text-hover-slide bg-click-pulse">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:text-yellow-400 transition-colors duration-300 icon-hover-wiggle icon-click-bounce" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-click-glow">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 group text-hover-slide bg-click-pulse">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:text-yellow-400 transition-colors duration-300 icon-hover-pulse icon-click-spin" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-click-glow">contact@inlighntech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Certifications */}
      <div className="border-t border-emerald-800/50 bg-gradient-to-r from-slate-800/50 to-emerald-800/30">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-6 text-yellow-400 text-hover-glow text-click-bounce">Certified & Recognized By</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="group bg-gradient-to-r from-emerald-800/40 to-yellow-600/20 backdrop-blur-sm rounded-xl px-8 py-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 bg-hover-shift border-hover-glow text-hover-pulse bg-click-pulse">
                <span className="text-emerald-300 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">Ministry of Electronics & IT</span>
              </div>
              <div className="group bg-gradient-to-r from-emerald-800/40 to-yellow-600/20 backdrop-blur-sm rounded-xl px-8 py-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 bg-hover-shift border-hover-glow text-hover-pulse bg-click-pulse">
                <span className="text-emerald-300 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">ISO 9001:2015</span>
              </div>
              <div className="group bg-gradient-to-r from-emerald-800/40 to-yellow-600/20 backdrop-blur-sm rounded-xl px-8 py-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 bg-hover-shift border-hover-glow text-hover-pulse bg-click-pulse">
                <span className="text-emerald-300 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">#StartupIndia</span>
              </div>
              <div className="group bg-gradient-to-r from-emerald-800/40 to-yellow-600/20 backdrop-blur-sm rounded-xl px-8 py-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 bg-hover-shift border-hover-glow text-hover-pulse bg-click-pulse">
                <span className="text-emerald-300 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">Skill India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-emerald-800/50 bg-slate-900/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-hover-slide text-click-glow">
              © 2024 Inlighn Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 text-hover-glow text-click-bounce">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 text-hover-glow text-click-bounce">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 text-hover-glow text-click-bounce">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;