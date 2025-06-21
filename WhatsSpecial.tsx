import React, { useEffect, useRef } from 'react';
import { Zap, Users, Award, BookOpen, Briefcase, Globe, Target, CheckCircle } from 'lucide-react';

const WhatsSpecial: React.FC = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Real Industry Projects',
      description: 'Work on actual business problems and build solutions that matter. No theoretical fluff - just practical skills that employers value.',
      delay: '0s'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn directly from professionals working at Google, Microsoft, Amazon, and other top tech companies.',
      delay: '0.2s'
    },
    {
      icon: Award,
      title: 'Job-Ready Certifications',
      description: 'Government-recognized certifications that add real value to your professional portfolio and career prospects.',
      delay: '0.4s'
    },
    {
      icon: BookOpen,
      title: 'Industry-Relevant Curriculum',
      description: 'Curriculum designed by industry experts and updated quarterly to match current market demands.',
      delay: '0.6s'
    },
    {
      icon: Briefcase,
      title: '95% Placement Rate',
      description: 'Dedicated placement cell with partnerships across 200+ companies ensuring job opportunities.',
      delay: '0.8s'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Graduates working in 25+ countries with an average salary increase of 300% post-completion.',
      delay: '1s'
    }
  ];

  const keyBenefits = [
    'Work on real business problems',
    'Build a job-ready portfolio',
    'Gain mentorship from industry veterans',
    'Boost your confidence for interviews',
    'Career-focused guidance',
    '100% online & flexible'
  ];

  return (
    <section id="special" className="py-20 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots animate-spin-slow"></div>
        <div className="absolute inset-0 pattern-hexagon animate-float-diagonal"></div>
      </div>

      {/* Moving Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-24 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/25 to-teal-400/15 rounded-full animate-liquidFlow animation-delay-300"></div>
        <div className="floating-element absolute bottom-24 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400/25 to-amber-400/15 rounded-full animation-delay-1000 animate-liquidBubble"></div>
        <div className="floating-element absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full animation-delay-1500 animate-liquidWave"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-textReveal">
            Why Choose <span className="text-emerald-400 holographic">INLIGHN TECH</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto animate-fadeInUp animation-delay-300">
            INLIGHN TECH is redefining internship training by combining industry-grade projects, 
            personalized mentorship, and globally recognized certifications.
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-16 fade-in-section">
          <h3 className="text-2xl font-bold text-center text-white mb-8 animate-fadeInUp">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/60 p-4 rounded-lg shadow-md animate-slideInFromBottom backdrop-blur-sm border border-emerald-400/20" style={{ animationDelay: `${index * 100}ms` }}>
                <CheckCircle className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 card-hover magnetic-hover fade-in-section animate-slideInFromBottom backdrop-blur-sm border border-emerald-400/20"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-rotateIn animation-delay-300 liquid-shape">
                <feature.icon className="w-8 h-8 text-white animate-wave" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 animate-fadeInUp animation-delay-600">{feature.title}</h3>
              <p className="text-emerald-200 leading-relaxed animate-fadeInUp animation-delay-900">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Target Audience Section with Fluid Animations */}
        <div className="bg-slate-800/60 rounded-2xl p-8 shadow-lg fade-in-section glass-morphism mb-16 border border-emerald-400/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center text-white mb-8 animate-textReveal">
            Our Programs Are Built For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn border border-emerald-400/30 backdrop-blur-sm liquid-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center liquid-element">
                <Users className="w-8 h-8 text-white animate-wave" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-300">Students</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-600">
                Seeking practical experience beyond classroom learning
              </p>
              {/* Liquid background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquidPulse"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-300 border border-emerald-400/30 backdrop-blur-sm bubble-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center bubble-element animation-delay-500">
                <Target className="w-8 h-8 text-white animate-wave animation-delay-300" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-600">Freshers</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-900">
                Building their professional portfolio and gaining industry exposure
              </p>
              {/* Bubble background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquidBubble"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-600 border border-emerald-400/30 backdrop-blur-sm wave-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center wave-element animation-delay-1000">
                <Zap className="w-8 h-8 text-white animate-wave animation-delay-600" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-900">Career Switchers</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1200">
                Entering tech with confidence and relevant skills
              </p>
              {/* Wave background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquidWave"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-900 border border-emerald-400/30 backdrop-blur-sm pulse-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center pulse-element animation-delay-1500">
                <Award className="w-8 h-8 text-white animate-wave animation-delay-900" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-1200">Working Professionals</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1500">
                Upgrading their skills to stay competitive
              </p>
              {/* Pulse background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquidPulse"></div>
            </div>
          </div>
        </div>

        {/* Success Stories with Enhanced Animations */}
        <div className="bg-slate-800/60 rounded-2xl p-8 shadow-lg fade-in-section glass-morphism border border-emerald-400/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center text-white mb-8 animate-textReveal">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            <div className="text-center animate-zoomIn ripple-click group relative overflow-hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-liquidFlow">
                <span className="text-white font-bold text-2xl">AS</span>
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-300">Arjun Sharma</h4>
              <p className="text-emerald-400 font-medium mb-2 animate-fadeInUp animation-delay-600">Cybersecurity Analyst at TCS</p>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-900">
                "The hands-on approach at INLIGHN TECH gave me the practical skills I needed. 
                I landed my dream job within 2 months of graduation!"
              </p>
              {/* Ripple effect element */}
              <div className="ripple-element absolute inset-0 bg-emerald-400/20 rounded-2xl opacity-0"></div>
            </div>
            
            <div className="text-center animate-zoomIn animation-delay-300 splash-click group relative overflow-hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-liquidBubble animation-delay-500">
                <span className="text-white font-bold text-2xl">PK</span>
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-600">Priya Kumari</h4>
              <p className="text-emerald-400 font-medium mb-2 animate-fadeInUp animation-delay-900">Full Stack Developer at Wipro</p>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1200">
                "The mentorship program was incredible. Learning from industry experts 
                made all the difference in my career trajectory."
              </p>
              {/* Splash effect element */}
              <div className="splash-element absolute inset-0 bg-yellow-400/20 rounded-2xl opacity-0"></div>
            </div>
            
            <div className="text-center animate-zoomIn animation-delay-600 ripple-click group relative overflow-hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-liquidWave animation-delay-1000">
                <span className="text-white font-bold text-2xl">RG</span>
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-900">Rahul Gupta</h4>
              <p className="text-emerald-400 font-medium mb-2 animate-fadeInUp animation-delay-1200">Data Scientist at IBM</p>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1500">
                "The Data Science program was comprehensive and up-to-date. 
                I'm now working on cutting-edge AI projects at IBM!"
              </p>
              {/* Ripple effect element */}
              <div className="ripple-element absolute inset-0 bg-blue-400/20 rounded-2xl opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsSpecial;