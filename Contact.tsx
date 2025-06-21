import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots animate-spin-slow"></div>
        <div className="absolute inset-0 pattern-waves animate-float-reverse"></div>
      </div>

      {/* Animated Background Elements with Liquid Effects */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-amber-400/20 rounded-full animate-liquidFlow"></div>
        <div className="floating-element absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-green-400/20 rounded-full animation-delay-1000 animate-liquidBubble"></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/25 to-indigo-400/15 rounded-full animation-delay-1500 animate-liquidWave"></div>
        <div className="floating-element absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-violet-400/10 rounded-full animation-delay-800 animate-liquidPulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-textReveal">
            Get In <span className="text-amber-400 holographic">Touch</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Ready to start your tech journey? Contact us today and let's discuss 
            how we can help you achieve your career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information with Enhanced Animations */}
          <div className="space-y-8 fade-in-section">
            <div className="animate-slideInFromLeft blur-focus">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-emerald-200 mb-8 animate-fadeInUp animation-delay-300 text-lg">
                We're here to help you take the next step in your career. 
                Reach out to us and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 stagger-animation">
              <div className="flex items-center space-x-4 animate-slideInFromLeft liquid-hover group relative">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center liquid-element">
                  <Phone className="w-6 h-6 text-white animate-wave" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-emerald-200">+91 98765 43210</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex items-center space-x-4 animate-slideInFromLeft animation-delay-300 bubble-hover group relative">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center bubble-element animation-delay-300">
                  <Mail className="w-6 h-6 text-white animate-wave animation-delay-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-emerald-200">contact@inlighntech.com</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex items-center space-x-4 animate-slideInFromLeft animation-delay-600 wave-hover group relative">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center wave-element animation-delay-600">
                  <MapPin className="w-6 h-6 text-white animate-wave animation-delay-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-emerald-200">
                    123 Tech Hub, Sector 62<br />
                    Noida, Uttar Pradesh 201309
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Office Hours with Glass Morphism and Liquid Effects */}
            <div className="bg-slate-800/60 rounded-xl p-6 glass-morphism animate-zoomIn animation-delay-900 border border-emerald-400/30 backdrop-blur-sm pulse-hover group relative">
              <h4 className="text-white font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-emerald-200 stagger-animation">
                <div className="flex justify-between animate-fadeInUp">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between animate-fadeInUp animation-delay-300">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between animate-fadeInUp animation-delay-600">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="pulse-element absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Contact Form with Enhanced Animations and Liquid Effects */}
          <div className="bg-slate-800/80 rounded-2xl p-8 shadow-2xl fade-in-section glass-morphism animate-slideInFromRight border border-emerald-400/20 backdrop-blur-sm blur-gradient">
            <h3 className="text-2xl font-bold text-white mb-6 animate-fadeInUp">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-slideInFromBottom ripple-click group relative">
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/60 text-white placeholder-emerald-300 blur-on-click"
                    placeholder="Your full name"
                  />
                  <div className="ripple-element absolute inset-0 bg-emerald-400/20 rounded-lg opacity-0"></div>
                </div>
                <div className="animate-slideInFromBottom animation-delay-300 splash-click group relative">
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/60 text-white placeholder-emerald-300 blur-on-click"
                    placeholder="your.email@example.com"
                  />
                  <div className="splash-element absolute inset-0 bg-yellow-400/20 rounded-lg opacity-0"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-slideInFromBottom animation-delay-600 liquid-hover group relative">
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/60 text-white placeholder-emerald-300 blur-on-click"
                    placeholder="+91 98765 43210"
                  />
                  <div className="liquid-element absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="animate-slideInFromBottom animation-delay-900 bubble-hover group relative">
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Interested Program
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/60 text-white blur-on-click"
                  >
                    <option value="">Select a program</option>
                    <option value="fullstack">Full Stack Web Development</option>
                    <option value="datascience">Data Science & AI</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="dataanalysis">Data Analytics</option>
                    <option value="python">Python Development</option>
                    <option value="business">Business Analysis</option>
                    <option value="project">Project Management</option>
                  </select>
                  <div className="bubble-element absolute inset-0 bg-gradient-to-r from-purple-400/10 to-violet-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="animate-slideInFromBottom animation-delay-1200 wave-hover group relative">
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/60 text-white placeholder-emerald-300 blur-on-click"
                  placeholder="Tell us about your goals and how we can help..."
                ></textarea>
                <div className="wave-element absolute inset-0 bg-gradient-to-r from-teal-400/10 to-emerald-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 magnetic-button btn-float animate-slideInFromBottom animation-delay-1500 pulse-hover group relative overflow-hidden blur-on-click"
              >
                <Send className="w-5 h-5 animate-wave" />
                <span>Send Message</span>
                <div className="pulse-element absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;