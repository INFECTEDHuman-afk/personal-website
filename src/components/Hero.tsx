
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={200}>
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                  Full-Stack & AI Engineer
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building <span className="text-gradient">intelligent</span> digital experiences
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                I create robust web applications and AI-powered solutions that solve real-world problems
                and deliver exceptional user experiences.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="hover-lift relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 transform -translate-x-full animate-[shimmer_2.5s_infinite] group-hover:animate-[shimmer_1s_infinite]" />
                  <span className="relative z-10">View My Work</span>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <ScrollReveal direction="right" delay={600}>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl animate-pulse-slow" />
                <div className="absolute inset-4 bg-card rounded-full border shadow-xl backdrop-blur glassmorphism" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animated-gradient w-20 h-20 rounded-full flex items-center justify-center">
                    <code className="text-3xl md:text-4xl font-bold font-mono text-white">
                      {"</>"}
                    </code>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur hover:bg-background transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Modern grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, var(--border) 1px, transparent 1px), 
                           linear-gradient(180deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
