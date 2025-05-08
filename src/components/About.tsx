import React, { useEffect, useRef } from 'react';
import GlitchText from './GlitchText';
// import './index.css';

const NUM_NODES = 12;
const NUM_LINES = 20;
interface Node {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const generateNodes = (): Node[] =>
  Array.from({ length: NUM_NODES }).map(() => ({
    x: Math.random() * 400,
    y: Math.random() * 400,
    dx: (Math.random() - 0.5) * 2.8,
    dy: (Math.random() - 0.5) * 2.8,
  }));

const About: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<Node[]>(generateNodes());

  const animate = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const circles = svg.querySelectorAll('circle');
    const lines = svg.querySelectorAll('line');

    nodeRefs.current.forEach((node, i) => {
      node.x += node.dx;
      node.y += node.dy;

      // bounce from edges
      if (node.x < 0 || node.x > 400) node.dx *= -1;
      if (node.y < 0 || node.y > 400) node.dy *= -1;

      const circle = circles[i] as SVGCircleElement;
      if (circle) {
        circle.setAttribute('cx', node.x.toString());
        circle.setAttribute('cy', node.y.toString());
      }
    });

    // randomly connect nodes
    lines.forEach((line, i) => {
      const a = nodeRefs.current[Math.floor(Math.random() * nodeRefs.current.length)];
      const b = nodeRefs.current[Math.floor(Math.random() * nodeRefs.current.length)];
      line.setAttribute('x1', a.x.toString());
      line.setAttribute('y1', a.y.toString());
      line.setAttribute('x2', b.x.toString());
      line.setAttribute('y2', b.y.toString());
    });

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-cyber-black via-cyber-black to-cyber-black">
      {/* Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" className="w-full">
          <path
            fill="#121212"
            fillOpacity="0.3"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-cyber font-bold mb-6 text-white">
              <span className="text-cyber-purple">&lt;</span>{' '}
              <GlitchText text="About Us" />{' '}
              <span className="text-cyber-purple">/&gt;</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At et-si, we don't just build AI tools—we awaken them.
              <br /><br />
              et-si is a collection of builders exploring the question — what if?
              <br/> We design and develop open-source tools that harness the power of AI, LLMs, and automation to solve real-world problems.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="cyber-button font-cyber">Our Vision</a>
              <a href="#" className="cyber-button font-cyber">Join the Team</a>
            </div> */}
          </div>

          {/* RIGHT ANIMATION */}
          <div className="aspect-video relative overflow-hidden rounded-lg border border-cyber-purple/30">
            <svg ref={svgRef} viewBox="0 0 400 400" className="w-full h-full">
              <g className="connections" stroke="#4fd1c5" strokeWidth="1" opacity="0.4">
                {Array.from({ length: NUM_LINES }).map((_, i) => (
                  <line key={i} x1="0" y1="0" x2="0" y2="0" />
                ))}
              </g>
              <g className="nodes">
                {nodeRefs.current.map((_, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r="6"
                    fill="#9b87f5"
                    className="opacity-90"
                    style={{
                      animation: `pulse-glow 3s ease-in-out infinite`,
                      animationDelay: `${(i * 1.5) % 4}s`,
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
