
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * 3000) + 3000;
    
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setIsGlitching(false);
      }, 500);
    }, randomInterval);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <span className={`${className} ${isGlitching ? 'animate-enhanced-glitch' : ''} relative`}>
      {text}
      {isGlitching && (
        <span className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{
          clipPath: 'inset(30% 0 40% 0)',
          transform: 'translate(-5px, 0)',
          opacity: 0.8
        }}>
          {text}
        </span>
      )}
    </span>
  );
};

export default GlitchText;
