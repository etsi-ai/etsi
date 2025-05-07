
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Members from '../components/Members';
import About from '../components/About';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = "et-si | Autonomous AI Agents";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black overflow-hidden">
      {/* Particle background effect */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main sections */}
      <main>
        <Hero />
        <Products />
        <Members />
        <About />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
