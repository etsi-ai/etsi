
import React from 'react';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  return (
<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-4 overflow-hidden bg-black">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.8)_0%,_rgba(147,51,234,0.3)_40%,_transparent_80%)] opacity-100 z-10"></div>

  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="w-[500px] h-[500px] rounded-full bg-[#a855f7]/50 blur-[80px] animate-pulse shadow-[0_0_150px_60px_rgba(168,85,247,0.5)]"></div>
  </div>

  <div className="absolute inset-0 flex items-center justify-center z-30">
    <div className="w-[600px] h-[600px] rounded-full border border-purple-500/10 animate-spin-slow blur-sm"></div>
    <div className="w-[400px] h-[400px] absolute rounded-full border border-purple-400/20 animate-spin-reverse blur-sm"></div>
  </div>

  <div className="absolute inset-0 z-30 pointer-events-none">
    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      ></div>
    ))}
  </div>

  <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
  <div className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-400/50 animate-pulse"></div>

  <div className="absolute top-[20%] left-8 transform -rotate-90 opacity-40">
    <p className="text-xs tracking-widest text-cyan-400 font-mono">GO. EVERYWHERE</p>
    <p className="text-xs tracking-widest text-cyan-400 font-mono">REACH. EVERYWHERE</p>
  </div>
  <div className="absolute bottom-[30%] right-8 transform -rotate-90 opacity-40">
    <p className="text-xs tracking-widest text-cyan-400 font-mono">GO. EVERYWHERE</p>
    <p className="text-xs tracking-widest text-cyan-400 font-mono">REACH. EVERYWHERE</p>
  </div>

  <div className="relative z-40 text-center max-w-4xl mx-auto">
    <h1 className="text-6xl md:text-7xl font-extrabold text-offwhite mb-8 font-mono tracking-wide">Et-si</h1>
    <p className="text-white text-xl sm:text-2xl mb-10 font-sans">...we hacked reality’s source code?</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="https://github.com/etsi-ai" className="bg-purple-600 text-white py-3 px-6 rounded-full font-mono hover:bg-purple-700 transition animate-pulse-glow">
        Start Building
      </a>
      <a href="#about" className="border border-purple-400 text-purple-300 py-3 px-6 rounded-full font-mono hover:bg-purple-800/20 transition">
        Read Manifesto
      </a>
    </div>
  </div>

  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
    <div className="flex flex-col items-center">
      <span className="text-purple-400 text-sm mb-2">Scroll to Enter</span>
      <div className="w-1 h-6 bg-purple-400 animate-bounce"></div>
    </div>
  </div> */}

  {/* <div className="absolute bottom-0 left-0 w-full h-32 z-10">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 96L1440 0V96H0Z" fill="#121212" />
      <path d="M0 96L1440 0" stroke="#9b87f5" strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  </div> */}
</section>


  );
};

export default Hero;
