import React from 'react';

const InlighnLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative group`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-all duration-500 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F2419" />
            <stop offset="50%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#2D5A3E" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#logoGradient)"
          stroke="#FFD700"
          strokeWidth="2"
          className="animate-pulse"
        />
        
        {/* Inner Tech Pattern */}
        <g className="animate-spin-slow">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
        </g>
        
        {/* Letter I */}
        <rect
          x="35"
          y="25"
          width="6"
          height="50"
          fill="url(#textGradient)"
          filter="url(#glow)"
          className="animate-pulse"
        />
        
        {/* Letter T */}
        <rect
          x="50"
          y="25"
          width="20"
          height="6"
          fill="url(#textGradient)"
          filter="url(#glow)"
          className="animate-pulse"
        />
        <rect
          x="57"
          y="25"
          width="6"
          height="50"
          fill="url(#textGradient)"
          filter="url(#glow)"
          className="animate-pulse"
        />
        
        {/* Tech Circuit Lines */}
        <g className="opacity-60">
          <line x1="20" y1="20" x2="30" y2="30" stroke="#FFD700" strokeWidth="1" />
          <line x1="70" y1="20" x2="80" y2="30" stroke="#FFD700" strokeWidth="1" />
          <line x1="20" y1="80" x2="30" y2="70" stroke="#FFD700" strokeWidth="1" />
          <line x1="70" y1="80" x2="80" y2="70" stroke="#FFD700" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

export default InlighnLogo;