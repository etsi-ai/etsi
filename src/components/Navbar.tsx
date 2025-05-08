
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-purple/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-cyber font-bold text-white">
              <span className="text-cyber-purple">?.</span>
              <span className="text-white">et-si</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/" className="cyber-link">Home</Link>
            </li>
            <li>
              <a href="#products" className="cyber-link">Products</a>
            </li>
            <li>
              <a href="#members" className="cyber-link">Members</a>
            </li>
            <li>
              <a href="#about" className="cyber-link">About</a>
            </li>
          </ul>
          
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/etsi-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Github size={18} className="mr-2" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://discord.gg/ndYP5ZT3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Icon icon="simple-icons:discord" width="18" height="18" className="mr-2" />
              <span>Discord</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 text-white hover:text-cyber-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="block py-2 text-white hover:text-cyber-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#members" 
                  className="block py-2 text-white hover:text-cyber-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Members
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block py-2 text-white hover:text-cyber-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className="pt-4 border-t border-cyber-purple/20">
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://discord.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon icon="simple-icons:discord" width="18" height="18" className="mr-2" />
                    <span>Discord</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
