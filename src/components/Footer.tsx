
import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-black py-12 border-t border-cyber-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-cyber font-bold text-white">
                <span className="text-cyber-purple">?.</span>
                <span className="text-white">et-si</span>
              </span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/etsi-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://discord.gg/ndYP5ZT3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors"
              aria-label="Discord"
            >
              <Icon icon="simple-icons:discord" width="20" height="20" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm font-cyber">
            &copy; {new Date().getFullYear()} et-si. All rights reserved.
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          <p>Crafted with reality-bending algorithms.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
