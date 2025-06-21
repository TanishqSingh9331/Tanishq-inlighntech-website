import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Users, Award, Zap, Star, Sparkles, Download, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Magnetic effect for buttons
    const buttons = document.querySelectorAll('.magnetic-button');
    
    buttons.forEach(button => {
      button.addEventListener('mousemove', (e: any) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        (button as HTMLElement).style.setProperty('--x', `${x * 0.1}px`);
        (button as HTMLElement).style.setProperty('--y', `${y * 0.1}px`);
      });
      
      button.addEventListener('mouseleave', () => {
        (button as HTMLElement).style.setProperty('--x', '0px');
        (button as HTMLElement).style.setProperty('--y', '0px');
      });
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Darker Greens */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 pattern-dots animate-spin-slow"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-amber-400/20 rounded-full animate-liquidMorph"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/10 rounded-full animation-delay-1000 animate-morphing"></div>
        <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-400/25 to-orange-400/15 rounded-full animation-delay-2000 animate-spin-slow"></div>
        <div className="floating-element absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-emerald-400/15 to-green-400/10 rounded-full animation-delay-1500 animate-bounce-slow"></div>
        
        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Tech Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q50,50 100,100 T200,100" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M0,200 Q100,150 200,200 T400,200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" className="animate-pulse animation-delay-500" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8 text-white" ref={textRef}>
            <div className="space-y-6">
              {/* Animated Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-800/50 to-yellow-600/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30 glass-morphism text-hover-glow bg-hover-shift">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow icon-hover-spin" />
                <span className="text-yellow-300 font-medium text-hover-bounce">Your Career Accelerator in Tech</span>
                <Star className="w-4 h-4 text-yellow-400 animate-pulse icon-hover-pulse" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-hover-slide text-click-bounce">Transform Skills into</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 animate-gradient-x holographic text-hover-glow text-click-pulse">
                  Careers
                </span>
                <span className="block text-3xl lg:text-4xl text-emerald-200 text-hover-color text-click-shake">
                  The INLIGHN TECH Experience
                </span>
              </h1>
              
              <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed text-hover-shadow text-click-glow">
                Bridging classroom knowledge with industry excellence. Learn, build, and launch your future with hands-on tech internships that actually prepare you for real jobs.
              </p>
            </div>

            {/* Enhanced Stats without Glow Effect */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center group magnetic-hover text-hover-pulse bg-click-pulse">
                <div className="text-4xl font-bold text-yellow-400 text-hover-bounce text-click-bounce">5000+</div>
                <div className="text-emerald-200 text-hover-slide">Students Trained</div>
              </div>
              <div className="text-center group magnetic-hover text-hover-pulse bg-click-pulse">
                <div className="text-4xl font-bold text-yellow-400 text-hover-bounce text-click-bounce">95%</div>
                <div className="text-emerald-200 text-hover-slide">Job Placement Rate</div>
              </div>
              <div className="text-center group magnetic-hover text-hover-pulse bg-click-pulse">
                <div className="text-4xl font-bold text-yellow-400 text-hover-bounce text-click-bounce">100%</div>
                <div className="text-emerald-200 text-hover-slide">Online & Flexible</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Magnetic Effect */}
            <div className="flex flex-wrap gap-6">
              <button className="magnetic-button group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold flex items-center space-x-3 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/50 btn-float text-hover-expand bg-hover-shift">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-click-pulse">Apply for Internship Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 icon-hover-bounce icon-click-spin" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="magnetic-button group border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-500 backdrop-blur-sm glass-morphism border-hover-glow text-hover-glow bg-click-pulse">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 icon-hover-wiggle icon-click-bounce" />
                <span className="text-click-shake">Book Free Career Consultation</span>
              </button>
            </div>

            {/* Additional CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="magnetic-button group bg-emerald-600/20 border border-emerald-400/30 text-emerald-300 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-emerald-600/40 transition-all duration-300 backdrop-blur-sm text-hover-bounce border-hover-glow bg-click-pulse">
                <Download className="w-4 h-4 icon-hover-bounce icon-click-spin" />
                <span className="text-click-pulse">Download Program Brochure</span>
              </button>
              
              <button className="magnetic-button group bg-teal-600/20 border border-teal-400/30 text-teal-300 px-6 py-3 rounded-lg font-medium hover:bg-teal-600/40 transition-all duration-300 backdrop-blur-sm text-hover-slide border-hover-glow bg-click-pulse">
                <span className="text-click-glow">Start Building Your Portfolio Today</span>
              </button>
            </div>

            {/* Enhanced Government Certifications */}
            <div className="pt-8 border-t border-emerald-700/50">
              <p className="text-emerald-200 mb-6 font-medium text-hover-glow text-click-bounce">Certified & Recognized by:</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="group bg-gradient-to-r from-emerald-800/30 to-yellow-600/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 glass-morphism magnetic-hover border-hover-glow bg-hover-shift text-hover-pulse bg-click-pulse">
                  <span className="text-white font-semibold group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">Ministry of Electronics & IT</span>
                </div>
                <div className="group bg-gradient-to-r from-emerald-800/30 to-yellow-600/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 glass-morphism magnetic-hover border-hover-glow bg-hover-shift text-hover-pulse bg-click-pulse">
                  <span className="text-white font-semibold group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">ISO 9001:2015</span>
                </div>
                <div className="group bg-gradient-to-r from-emerald-800/30 to-yellow-600/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 glass-morphism magnetic-hover border-hover-glow bg-hover-shift text-hover-pulse bg-click-pulse">
                  <span className="text-white font-semibold group-hover:text-yellow-300 transition-colors duration-300 text-click-glow">#StartupIndia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual with 3D Effects */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main illustration with enhanced effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-yellow-400/10 to-teal-400/20 rounded-3xl backdrop-blur-sm border border-yellow-400/30 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 glass-morphism rotate-x-12 bg-hover-shift border-hover-glow bg-click-pulse">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    <div className="aspect-square bg-gradient-to-br from-emerald-400/40 to-teal-400/30 rounded-2xl flex items-center justify-center skill-card-hover group border border-emerald-400/30 magnetic-hover bg-hover-shift border-hover-glow bg-click-pulse">
                      <Users className="w-16 h-16 text-emerald-200 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300 animate-wave icon-hover-bounce icon-click-spin" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-yellow-400/40 to-amber-400/30 rounded-2xl flex items-center justify-center skill-card-hover group animation-delay-300 border border-yellow-400/30 magnetic-hover bg-hover-shift border-hover-glow bg-click-pulse">
                      <Award className="w-16 h-16 text-yellow-200 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300 animate-wave animation-delay-500 icon-hover-pulse icon-click-bounce" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-teal-400/40 to-emerald-400/30 rounded-2xl flex items-center justify-center skill-card-hover group animation-delay-600 border border-teal-400/30 magnetic-hover bg-hover-shift border-hover-glow bg-click-pulse">
                      <Zap className="w-16 h-16 text-teal-200 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300 animate-wave animation-delay-1000 icon-hover-wiggle icon-click-pulse" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-green-400/40 to-emerald-400/30 rounded-2xl flex items-center justify-center skill-card-hover group animation-delay-900 border border-green-400/30 magnetic-hover bg-hover-shift border-hover-glow bg-click-pulse">
                      <Play className="w-16 h-16 text-green-200 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300 animate-wave animation-delay-1500 icon-hover-glow icon-click-spin" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-60 liquid-shape icon-hover-bounce icon-click-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse opacity-60 liquid-shape icon-hover-pulse icon-click-bounce"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-amber-400 rounded-full animate-ping opacity-60 icon-hover-wiggle icon-click-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;