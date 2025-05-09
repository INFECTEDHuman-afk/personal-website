
import React, { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Teaching', id: 'teaching' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          DEV<span className="text-primary">PORT</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </button>
          ))}
          <ModeToggle />
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <div className="relative w-6 h-5">
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-2" : "top-0"
                )}
              />
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground top-2 transition-opacity duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-2" : "top-4"
                )}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 overflow-hidden md:hidden",
          isMenuOpen ? "max-h-[400px] border-t" : "max-h-0"
        )}
      >
        <div className="container mx-auto p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground hover:text-primary transition-colors py-2 w-full text-left text-lg font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
