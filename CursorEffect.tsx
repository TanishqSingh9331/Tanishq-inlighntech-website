import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .magnetic-hover, .card-hover');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor with enhanced effects */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering 
            ? 'w-12 h-12 bg-yellow-400/30 border-2 border-yellow-400' 
            : 'w-6 h-6 bg-emerald-400'
        } rounded-full mix-blend-difference opacity-70`}
        style={{
          left: mousePosition.x - (isHovering ? 24 : 12),
          top: mousePosition.y - (isHovering ? 24 : 12),
          transform: 'translate(0, 0)',
        }}
      />
      
      {/* Trailing cursor with glow effect */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          isHovering 
            ? 'w-16 h-16 border-2 border-yellow-400/50' 
            : 'w-8 h-8 border-2 border-emerald-400/50'
        } rounded-full opacity-30`}
        style={{
          left: mousePosition.x - (isHovering ? 32 : 16),
          top: mousePosition.y - (isHovering ? 32 : 16),
        }}
      />

      {/* Particle trail effect */}
      <div
        className="fixed pointer-events-none z-30 w-2 h-2 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-full opacity-20 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </>
  );
};

export default CursorEffect;