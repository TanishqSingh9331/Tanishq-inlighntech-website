import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollArrow: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show scroll to top when user has scrolled down
      setShowScrollTop(scrollTop > 300);
      
      // Hide scroll down when near bottom
      setShowScrollDown(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToNext = () => {
    const currentSection = getCurrentSection();
    const nextSection = getNextSection(currentSection);
    
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const getCurrentSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      if (section.offsetTop <= scrollPosition) {
        return section;
      }
    }
    return sections[0] as HTMLElement;
  };

  const getNextSection = (currentSection: HTMLElement) => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex + 1] as HTMLElement || null;
  };

  return (
    <div className="fixed left-6 bottom-20 z-40 flex flex-col space-y-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group relative w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-slideInFromBottom"
          aria-label="Scroll to top"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <ChevronUp className="w-6 h-6 text-white relative z-10 group-hover:animate-bounce" />
          
          {/* Tooltip */}
          <div className="absolute bottom-14 left-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Scroll to top
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Scroll Down Button */}
      {showScrollDown && (
        <button
          onClick={scrollToNext}
          className="group relative w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-slideInFromBottom animation-delay-300"
          aria-label="Scroll to next section"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <ChevronDown className="w-6 h-6 text-white relative z-10 group-hover:animate-bounce" />
          
          {/* Tooltip */}
          <div className="absolute bottom-14 left-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Next section
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollArrow;