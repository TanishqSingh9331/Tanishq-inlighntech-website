import React, { useEffect, useRef } from 'react';
import { Shield, Code, Database, BarChart3, Clock, Users, Award, Brain, Briefcase, Settings, Target } from 'lucide-react';

const Programs: React.FC = () => {
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

  const programs = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      duration: '3-6 Months',
      students: '2000+',
      description: 'Master modern web development with React, Node.js, and cloud deployment. Build real-world applications that solve business problems.',
      skills: ['React/Angular', 'Node.js', 'Database Design', 'Cloud Deployment', 'API Development'],
      color: 'from-blue-500 to-indigo-600',
      delay: '0s'
    },
    {
      icon: Brain,
      title: 'Data Science & AI',
      duration: '4-6 Months',
      students: '1500+',
      description: 'Transform data into insights using machine learning, AI, and advanced analytics. Work on real business datasets.',
      skills: ['Python/R', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'AI Models'],
      color: 'from-purple-500 to-violet-600',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      duration: '3-5 Months',
      students: '1200+',
      description: 'Protect digital assets with comprehensive training in ethical hacking, penetration testing, and security protocols.',
      skills: ['Ethical Hacking', 'Network Security', 'Digital Forensics', 'Risk Assessment', 'Security Auditing'],
      color: 'from-red-500 to-pink-600',
      delay: '0.4s'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      duration: '2-4 Months',
      students: '1000+',
      description: 'Master data analysis, business intelligence, and reporting for data-driven decision making.',
      skills: ['SQL', 'Power BI', 'Excel Advanced', 'Business Intelligence', 'Statistical Analysis'],
      color: 'from-emerald-500 to-teal-600',
      delay: '0.6s'
    },
    {
      icon: Code,
      title: 'Python Development',
      duration: '2-3 Months',
      students: '800+',
      description: 'Learn Python programming for web development, automation, and data processing applications.',
      skills: ['Python Fundamentals', 'Django/Flask', 'Automation', 'API Development', 'Testing'],
      color: 'from-green-500 to-emerald-600',
      delay: '0.8s'
    },
    {
      icon: Briefcase,
      title: 'Business Analysis',
      duration: '2-3 Months',
      students: '600+',
      description: 'Bridge the gap between business needs and technical solutions with comprehensive BA skills.',
      skills: ['Requirements Analysis', 'Process Mapping', 'Stakeholder Management', 'Documentation', 'Agile Methods'],
      color: 'from-orange-500 to-red-600',
      delay: '1s'
    },
    {
      icon: Settings,
      title: 'Project Management',
      duration: '2-3 Months',
      students: '500+',
      description: 'Lead successful projects with modern PM methodologies, tools, and best practices.',
      skills: ['Agile/Scrum', 'Project Planning', 'Risk Management', 'Team Leadership', 'PM Tools'],
      color: 'from-cyan-500 to-blue-600',
      delay: '1.2s'
    }
  ];

  const features = [
    'Real Industry Projects',
    'Mentorship by Experienced Professionals',
    'Career-Focused Guidance',
    'Job-Ready Certifications',
    'Portfolio Development',
    'Interview Preparation'
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots animate-spin-reverse"></div>
        <div className="absolute inset-0 pattern-grid animate-float-reverse"></div>
      </div>

      {/* Moving Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-32 left-16 w-28 h-28 bg-gradient-to-br from-emerald-400/25 to-teal-400/15 rounded-full animate-float animation-delay-500"></div>
        <div className="floating-element absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-yellow-400/25 to-amber-400/15 rounded-full animation-delay-1200 animate-morphing"></div>
        <div className="floating-element absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full animation-delay-800 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-textReveal">
            Our <span className="text-emerald-400 holographic">Programs</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Industry-focused internship programs designed to transform you into a skilled 
            technology professional ready for the digital economy.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16 fade-in-section">
          <h3 className="text-2xl font-bold text-center text-white mb-8 animate-fadeInUp">Why Choose INLIGHN TECH?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/60 to-emerald-800/40 p-4 rounded-lg animate-slideInFromBottom backdrop-blur-sm border border-emerald-400/20 blur-focus" style={{ animationDelay: `${index * 100}ms` }}>
                <Award className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-slate-800/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-400/20 card-hover magnetic-hover fade-in-section animate-slideInFromBottom backdrop-blur-sm blur-progressive"
              style={{ animationDelay: program.delay }}
            >
              {/* Header with Gradient Animation */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <program.icon className="w-12 h-12 animate-rotateIn" />
                    <div className="text-right">
                      <div className="text-white/90 text-sm">Duration</div>
                      <div className="font-semibold animate-fadeInRight animation-delay-300">{program.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 animate-fadeInLeft animation-delay-600">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-white/90">
                    <div className="flex items-center space-x-1 animate-fadeInUp animation-delay-900">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{program.students} enrolled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content with Stagger Animation */}
              <div className="p-6">
                <p className="text-emerald-200 mb-6 leading-relaxed animate-fadeInUp animation-delay-300">
                  {program.description}
                </p>

                {/* Skills with Individual Animations */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 animate-fadeInLeft animation-delay-600">Key Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2 stagger-animation">
                    {program.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-slate-700/60 text-emerald-200 px-3 py-1 rounded-full text-sm animate-scaleIn magnetic-hover border border-emerald-400/30 blur-on-click"
                        style={{ animationDelay: `${0.9 + skillIndex * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA with Enhanced Hover Effects */}
                <div className="flex items-center justify-between">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center space-x-2 magnetic-button btn-float">
                    <span>Learn More</span>
                  </button>
                  <div className="text-emerald-400 font-semibold animate-fadeInRight animation-delay-1200">
                    Flexible Pricing
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action with 3D Effects */}
        <div className="text-center bg-gradient-to-r from-slate-800/80 to-emerald-800/60 rounded-2xl p-8 text-white fade-in-section transform-3d rotate-x-12 hover:rotate-x-0 transition-transform duration-500 glass-morphism border border-emerald-400/30 backdrop-blur-sm blur-gradient">
          <h3 className="text-3xl font-bold mb-4 animate-fadeInUp">Ready to Start Your Tech Journey?</h3>
          <p className="text-slate-200 mb-6 text-lg animate-fadeInUp animation-delay-300 font-semibold">
            Join thousands of successful graduates who transformed their careers with our programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 stagger-animation">
            <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 magnetic-button btn-float blur-on-click">
              View All Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 magnetic-button blur-on-click">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;