
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a 
              href="#hero" 
              className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              DEV<span className="text-primary">PORT</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack & AI Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#about" className="text-sm hover:text-primary">About</a>
            <a href="#skills" className="text-sm hover:text-primary">Skills</a>
            <a href="#experience" className="text-sm hover:text-primary">Experience</a>
            <a href="#projects" className="text-sm hover:text-primary">Projects</a>
            <a href="#contact" className="text-sm hover:text-primary">Contact</a>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed and built with <span className="text-red-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
