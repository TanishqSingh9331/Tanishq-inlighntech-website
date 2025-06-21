import React, { useState, useEffect, useRef } from 'react';
import { Search, Award, Download, CheckCircle } from 'lucide-react';

const Certificates: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
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

  const handleVerification = () => {
    // Mock verification - in real app, this would call an API
    if (certificateId.trim()) {
      setVerificationResult({
        valid: true,
        studentName: 'John Doe',
        program: 'Full Stack Development',
        completionDate: '2024-01-15',
        grade: 'A+',
        certificateId: certificateId
      });
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots animate-spin-reverse"></div>
        <div className="absolute inset-0 pattern-waves animate-float-vertical"></div>
      </div>

      {/* Moving Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-16 w-28 h-28 bg-gradient-to-br from-emerald-400/25 to-teal-400/15 rounded-full animate-liquidMorph animation-delay-700"></div>
        <div className="floating-element absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-yellow-400/25 to-amber-400/15 rounded-full animation-delay-1400 animate-morphing"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-textReveal">
            Verify <span className="text-emerald-400 holographic">Certificates</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Verify the authenticity of Inlighn Tech certificates instantly. 
            Enter the certificate ID to validate credentials.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Verification Form with Enhanced Animations */}
          <div className="bg-gradient-to-br from-slate-800/60 to-emerald-800/40 rounded-2xl p-8 mb-12 fade-in-section glass-morphism border border-emerald-400/30 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center animate-fadeInUp">
                Certificate Verification
              </h3>
              
              <div className="space-y-4">
                <div className="relative animate-slideInFromBottom animation-delay-300">
                  <input
                    type="text"
                    placeholder="Enter Certificate ID (e.g., ITC-2024-001234)"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    className="w-full px-4 py-4 pl-12 border border-emerald-400/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 magnetic-hover bg-slate-700/50 text-white placeholder-emerald-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5 animate-wave" />
                </div>
                
                <button
                  onClick={handleVerification}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 magnetic-button btn-float animate-slideInFromBottom animation-delay-600"
                >
                  <Award className="w-5 h-5 animate-rotateIn" />
                  <span>Verify Certificate</span>
                </button>
              </div>

              {/* Verification Result with Animations */}
              {verificationResult && (
                <div className="mt-8 bg-slate-800/80 rounded-xl p-6 shadow-lg border-l-4 border-emerald-500 animate-zoomIn backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-4 animate-fadeInLeft">
                    <CheckCircle className="w-6 h-6 text-emerald-500 animate-pulse" />
                    <h4 className="text-xl font-bold text-white">Certificate Verified</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 stagger-animation">
                    <div className="animate-fadeInUp">
                      <label className="text-sm text-emerald-300">Student Name</label>
                      <p className="font-semibold text-white">{verificationResult.studentName}</p>
                    </div>
                    <div className="animate-fadeInUp animation-delay-300">
                      <label className="text-sm text-emerald-300">Program</label>
                      <p className="font-semibold text-white">{verificationResult.program}</p>
                    </div>
                    <div className="animate-fadeInUp animation-delay-600">
                      <label className="text-sm text-emerald-300">Completion Date</label>
                      <p className="font-semibold text-white">{verificationResult.completionDate}</p>
                    </div>
                    <div className="animate-fadeInUp animation-delay-900">
                      <label className="text-sm text-emerald-300">Grade</label>
                      <p className="font-semibold text-white">{verificationResult.grade}</p>
                    </div>
                  </div>
                  
                  <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center space-x-2 magnetic-button btn-float animate-slideInFromBottom animation-delay-1200">
                    <Download className="w-4 h-4" />
                    <span>Download Certificate</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Certificate Features with 3D Effects */}
          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <div className="text-center animate-flipInX">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-morphing">
                <Award className="w-8 h-8 text-white animate-wave" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 animate-fadeInUp animation-delay-300">Government Recognized</h4>
              <p className="text-emerald-200 animate-fadeInUp animation-delay-600">
                All certificates are recognized by the Ministry of Electronics & IT
              </p>
            </div>

            <div className="text-center animate-flipInX animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-morphing animation-delay-500">
                <CheckCircle className="w-8 h-8 text-white animate-wave animation-delay-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 animate-fadeInUp animation-delay-600">Blockchain Secured</h4>
              <p className="text-emerald-200 animate-fadeInUp animation-delay-900">
                Certificates are secured using blockchain technology for authenticity
              </p>
            </div>

            <div className="text-center animate-flipInX animation-delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-morphing animation-delay-1000">
                <Download className="w-8 h-8 text-white animate-wave animation-delay-600" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 animate-fadeInUp animation-delay-900">Digital Format</h4>
              <p className="text-emerald-200 animate-fadeInUp animation-delay-1200">
                Download digital certificates instantly upon course completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;