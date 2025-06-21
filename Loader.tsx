import React from 'react';
import { Code, Database, Shield, BarChart3, Zap, Cpu, Globe, Rocket } from 'lucide-react';
import InlighnLogo from './Logo';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #10B981 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 15s ease-in-out infinite'
        }}></div>
      </div>

      {/* Circuit Lines Background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path d="M0,50 Q200,25 400,50 T800,50" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
        <path d="M0,150 Q300,125 600,150 T1200,150" stroke="url(#circuitGrad)" strokeWidth="1" fill="none" className="animate-pulse animation-delay-500" />
        <path d="M0,250 Q150,225 300,250 T600,250" stroke="url(#circuitGrad)" strokeWidth="1" fill="none" className="animate-pulse animation-delay-1000" />
      </svg>

      <div className="text-center relative z-10">
        {/* Enhanced Logo Animation */}
        <div className="mb-12 relative">
          <div className="relative">
            {/* Outer rotating rings */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-emerald-400 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-b-amber-400 border-l-teal-400 rounded-full animate-spin-reverse animation-delay-150"></div>
              <div className="absolute inset-4 border-2 border-transparent border-t-yellow-300 rounded-full animate-spin animation-delay-300"></div>
            </div>
            
            {/* Center logo */}
            <div className="relative z-10 flex justify-center">
              <InlighnLogo size="lg" className="animate-pulse scale-150" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-3 mt-8 animate-pulse bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
            Inlighn Tech
          </h1>
          <p className="text-yellow-300 text-xl font-medium tracking-wider">Empowering Future Technologists</p>
        </div>

        {/* Enhanced Tech Icons Animation */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="tech-icon-float group">
            <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-400/30 backdrop-blur-sm">
              <Shield className="w-10 h-10 text-emerald-400 group-hover:text-yellow-400 transition-colors duration-300" />
            </div>
          </div>
          <div className="tech-icon-float animation-delay-300 group">
            <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl border border-yellow-400/30 backdrop-blur-sm">
              <Code className="w-10 h-10 text-yellow-400 group-hover:text-emerald-400 transition-colors duration-300" />
            </div>
          </div>
          <div className="tech-icon-float animation-delay-600 group">
            <div className="p-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl border border-teal-400/30 backdrop-blur-sm">
              <Database className="w-10 h-10 text-teal-400 group-hover:text-yellow-400 transition-colors duration-300" />
            </div>
          </div>
          <div className="tech-icon-float animation-delay-900 group">
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30 backdrop-blur-sm">
              <BarChart3 className="w-10 h-10 text-green-400 group-hover:text-yellow-400 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Additional floating tech icons */}
        <div className="absolute top-20 left-20 tech-icon-float animation-delay-1200">
          <Zap className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-32 right-24 tech-icon-float animation-delay-1500">
          <Cpu className="w-6 h-6 text-emerald-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 tech-icon-float animation-delay-1800">
          <Globe className="w-7 h-7 text-teal-400 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-20 tech-icon-float animation-delay-2100">
          <Rocket className="w-8 h-8 text-amber-400 opacity-60" />
        </div>

        {/* Enhanced Loading Bar */}
        <div className="w-80 h-3 bg-slate-800 rounded-full mx-auto overflow-hidden border border-emerald-500/30 shadow-lg">
          <div className="h-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-amber-400 rounded-full loading-bar shadow-lg"></div>
        </div>
        
        <p className="text-emerald-200 mt-6 animate-pulse text-lg font-medium">Loading amazing experiences...</p>
        
        {/* Loading percentage */}
        <div className="mt-4 text-yellow-400 font-bold text-xl animate-pulse">
          <span className="loading-percentage">0%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;