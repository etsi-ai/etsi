
import React from 'react';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-4 overflow-hidden bg-cyber-black">
      {/* Enhanced Neon Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-purple/40 via-cyber-purple/10 to-transparent opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-cyber-purple/20 blur-[120px] animate-pulse-glow"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-cyber-teal shadow-lg shadow-cyber-teal/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-cyber-purple shadow-lg shadow-cyber-purple/50 animate-pulse"></div>
      
      {/* Repeating "GO EVERYWHERE REACH EVERYWHERE" text similar to reference image */}
      <div className="absolute top-[20%] left-8 transform -rotate-90 opacity-40">
        <p className="text-xs tracking-widest text-cyber-teal font-cyber">GO. EVERYWHERE</p>
        <p className="text-xs tracking-widest text-cyber-teal font-cyber">REACH. EVERYWHERE</p>
      </div>
      <div className="absolute bottom-[30%] right-8 transform -rotate-90 opacity-40">
        <p className="text-xs tracking-widest text-cyber-teal font-cyber">GO. EVERYWHERE</p>
        <p className="text-xs tracking-widest text-cyber-teal font-cyber">REACH. EVERYWHERE</p>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cyber font-bold mb-8 text-white">
          <GlitchText text="Et-si..." className="inline-block mr-4 text-white/90" />
          {/* <GlitchText text="ALL" className="inline-block mr-4 text-white/90" /> */}
          <br className="md:hidden" />
          {/* <GlitchText text="ECOSYSTEMS" className="inline-block text-white/90" /> */}
        </h1>
        <p className="text-white text-xl sm:text-2xl mb-10 font-sans">
        we hacked reality’s source code?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#products" className="cyber-button font-cyber animate-pulse-glow relative overflow-hidden group">
            <span className="relative z-10">Start Building</span>
            <span className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#about" className="cyber-button font-cyber relative overflow-hidden group">
            <span className="relative z-10">Read Manifesto</span>
            <span className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-cyber-purple/75 mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-cyber-purple/50 animate-pulse"></div>
        </div>
      </div>
      
      {/* Improved angled divider with enhanced design */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L1440 0V96H0Z" fill="#121212" />
          <path d="M0 96L1440 0" stroke="#9b87f5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
