import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      setIsMobileMenuOpen(false); // Close mobile menu if open
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    ${isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-md shadow-md py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-heading font-bold"
              onClick={scrollToSection}
            >
              <span className="text-white">Ivan</span>
              <span className="text-portfolio-neon">.</span>
              <span className="text-portfolio-purple">dev</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href} 
                className="text-sm text-gray-300 hover:text-portfolio-neon transition-colors"
                onClick={scrollToSection}
              >
                {item.title}
              </a>
            ))}
            <Button className="bg-portfolio-neon text-black hover:bg-portfolio-neon/90">
              Let's Talk
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-portfolio-dark/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-4 py-3 text-base text-gray-300 hover:text-portfolio-neon transition-colors"
                onClick={scrollToSection}
              >
                {item.title}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <Button className="w-full bg-portfolio-neon text-black hover:bg-portfolio-neon/90">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
