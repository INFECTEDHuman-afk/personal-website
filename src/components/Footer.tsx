
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, Sparkle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16 relative overflow-hidden border-t border-border/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <a 
              href="#hero" 
              className="text-2xl font-heading font-bold inline-flex items-center gap-1 group"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DEV</span>
              <span className="relative">
                <span className="relative z-10 text-primary">PORT</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/80 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </span>
              <Sparkle className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-0 group-hover:rotate-12" />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack & AI Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 md:mb-0">
            {["about", "skills", "experience", "projects", "contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link}`} 
                className="text-sm hover:text-primary transition-colors relative group"
              >
                <span className="capitalize">{link}</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all group border-primary/30 hover:border-primary"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </Button>
        </div>
        
        <div className="border-t border-border/50 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Chetan Sah. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex items-center">
            Designed with <Sparkle className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
