import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, Lightbulb, CheckCircle, Zap } from 'lucide-react';

const About: React.FC = () => {
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

  const coreValues = [
    {
      icon: Target,
      title: 'Practical Learning',
      description: 'Theory meets practice with real-world projects and hands-on experience.',
      delay: '0s'
    },
    {
      icon: Users,
      title: 'Industry-Relevant Skills',
      description: 'Updated curricula that match current market demands and industry standards.',
      delay: '0.2s'
    },
    {
      icon: Award,
      title: 'Mentorship',
      description: 'Guided learning with expert mentors from top tech companies.',
      delay: '0.4s'
    },
    {
      icon: Lightbulb,
      title: 'Confidence Building',
      description: 'Transform anxiety into confidence with comprehensive career support.',
      delay: '0.6s'
    }
  ];

  const benefits = [
    '100% online & flexible learning',
    'Work on real business problems',
    'Build a job-ready portfolio',
    'Gain mentorship from industry veterans',
    'Boost your confidence for interviews',
    'Career-focused guidance'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots animate-spin-slow"></div>
        <div className="absolute inset-0 pattern-circuit animate-float-slow"></div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-green-400/20 rounded-full animate-liquidMorph"></div>
        <div className="floating-element absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-amber-400/20 rounded-full animation-delay-1000 animate-morphing"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-400/15 rounded-full animation-delay-2000 animate-bounce-slow"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/25 to-yellow-400/15 rounded-full animation-delay-1500 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-textReveal">
            About <span className="text-emerald-400 holographic">INLIGHN TECH</span>
          </h2>
          <p className="text-2xl text-emerald-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300 font-semibold">
            Where Talent Meets Opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6 fade-in-section">
            <h3 className="text-3xl font-bold text-white animate-fadeInLeft">Our Mission</h3>
            <div className="space-y-4 text-emerald-100 stagger-animation">
              <p className="animate-fadeInUp text-lg leading-relaxed">
                At INLIGHN TECH, we believe true learning happens when theory meets practice. Our mission is to transform ambitious learners into industry-ready professionals by providing experiential learning opportunities, guided by expert mentors and powered by real-world projects.
              </p>
              <p className="animate-fadeInUp animation-delay-300 text-lg leading-relaxed">
                Since our inception, we've empowered thousands of learners across the globe to confidently enter the competitive world of tech — with job-ready skills, strong portfolios, and real project experience.
              </p>
              <p className="animate-fadeInUp animation-delay-600 text-lg leading-relaxed">
                We're redefining internship training by combining industry-grade projects, personalized mentorship, and globally recognized certifications. Our remote, flexible programs empower you with hands-on skills that matter.
              </p>
            </div>
          </div>

          {/* Visual Element with Enhanced Key Benefits */}
          <div className="relative fade-in-section">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white transform-3d rotate-x-12 hover:rotate-x-0 transition-transform duration-500 glass-morphism shadow-2xl border border-emerald-400/30">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold animate-fadeInRight text-yellow-400">Key Benefits</h4>
                <div className="space-y-4 stagger-animation">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-slideInFromBottom" style={{ animationDelay: `${index * 150}ms` }}>
                      <CheckCircle className="w-6 h-6 text-yellow-400 animate-pulse flex-shrink-0" style={{ animationDelay: `${index * 150}ms` }} />
                      <span className="text-white font-semibold text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16 fade-in-section">
          <h3 className="text-3xl font-bold text-center text-white mb-12 animate-textReveal">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 card-hover magnetic-hover animate-zoomIn border border-emerald-400/20 backdrop-blur-sm"
                style={{ animationDelay: value.delay }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center mb-4 animate-rotateIn animation-delay-300">
                  <value.icon className="w-6 h-6 text-white animate-wave" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 animate-fadeInUp animation-delay-600">{value.title}</h4>
                <p className="text-emerald-200 animate-fadeInUp animation-delay-900">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="bg-slate-800/60 rounded-2xl p-8 shadow-lg fade-in-section glass-morphism border border-emerald-400/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center text-white mb-8 animate-textReveal">
            Our Programs Are Built For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn border border-emerald-400/30 backdrop-blur-sm liquid-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-morphing liquid-element">
                <Users className="w-8 h-8 text-white animate-wave" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-300">Students</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-600">
                Seeking practical experience beyond classroom learning
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-300 border border-emerald-400/30 backdrop-blur-sm bubble-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-morphing animation-delay-500 bubble-element">
                <Target className="w-8 h-8 text-white animate-wave animation-delay-300" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-600">Freshers</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-900">
                Building their professional portfolio and gaining industry exposure
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-600 border border-emerald-400/30 backdrop-blur-sm wave-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-morphing animation-delay-1000 wave-element">
                <Zap className="w-8 h-8 text-white animate-wave animation-delay-600" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-900">Career Switchers</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1200">
                Transitioning into tech with confidence and relevant skills
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-800/40 to-green-800/30 rounded-xl animate-zoomIn animation-delay-900 border border-emerald-400/30 backdrop-blur-sm pulse-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-morphing animation-delay-1500 pulse-element">
                <Award className="w-8 h-8 text-white animate-wave animation-delay-900" />
              </div>
              <h4 className="font-semibold text-white mb-2 animate-fadeInUp animation-delay-1200">Working Professionals</h4>
              <p className="text-emerald-200 text-sm animate-fadeInUp animation-delay-1500">
                Upgrading their skills to stay competitive in the market
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-section">
          <p className="text-2xl font-bold text-white mb-6 animate-fadeInUp">
            Join INLIGHN TECH and unlock your future — today.
          </p>
          <button className="magnetic-button bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 btn-float animate-slideInFromBottom animation-delay-300">
            Become Job-Ready in 3 Months
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;