
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-heading font-bold">
              <span className="text-white">Ivan</span>
              <span className="text-portfolio-neon">.</span>
              <span className="text-portfolio-purple">dev</span>
            </a>
            <p className="text-gray-500 mt-2 text-sm">
              Creating digital experiences with purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Navigation</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-portfolio-neon">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-portfolio-neon">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-portfolio-neon">Services</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-portfolio-neon">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-portfolio-neon">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">Web Applications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">AI Chatbots</a></li>
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-portfolio-neon">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ivan.dev. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-portfolio-neon">
              <span className="sr-only">Twitter</span>
              𝕏
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-neon">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-neon">
              <span className="sr-only">GitHub</span>
              𝐆
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-neon">
              <span className="sr-only">Instagram</span>
              𝕚
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
