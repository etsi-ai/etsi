
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-cyber-black via-cyber-black to-cyber-black">
      {/* Top wave pattern */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" className="w-full">
          <path 
            fill="#121212" 
            fillOpacity="0.3"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-cyber font-bold mb-6 text-white">
              <span className="text-cyber-purple">#</span> About Us
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At et-si, we don't just build AI tools—we awaken them.<br /><br />
              Our chain-of-agents framework fuses memory, reasoning,
              and human feedback to push the boundaries of autonomy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="cyber-button font-cyber">
                Our Vision
              </a>
              <a href="#" className="cyber-button font-cyber">
                Join the Team
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="cyber-card aspect-video overflow-hidden">
              {/* Neural network animation */}
              <div className="absolute inset-0 bg-cyber-black flex items-center justify-center">
                <div className="w-full h-full max-w-md max-h-md relative">
                  {/* Network nodes and connections (simplified SVG) */}
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <g className="nodes">
                      {Array.from({ length: 20 }).map((_, i) => {
                        const x = 50 + Math.random() * 300;
                        const y = 50 + Math.random() * 300;
                        const pulseDelay = Math.random() * 5;
                        return (
                          <circle 
                            key={i}
                            cx={x} 
                            cy={y} 
                            r="6" 
                            fill="#9b87f5" 
                            className="opacity-90"
                            style={{ 
                              animation: `pulse-glow 3s ease-in-out infinite`,
                              animationDelay: `${pulseDelay}s`
                            }}
                          />
                        );
                      })}
                    </g>
                    <g className="connections" stroke="#4fd1c5" strokeWidth="1" opacity="0.4">
                      {Array.from({ length: 40 }).map((_, i) => {
                        const x1 = 50 + Math.random() * 300;
                        const y1 = 50 + Math.random() * 300;
                        const x2 = 50 + Math.random() * 300;
                        const y2 = 50 + Math.random() * 300;
                        return (
                          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                        );
                      })}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-r-2 border-b-2 border-cyber-purple opacity-60"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 border-l-2 border-t-2 border-cyber-teal opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
