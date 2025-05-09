
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
          <div className="md:col-span-8 space-y-6 reveal">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Full-Stack & AI Engineer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building <span className="text-primary">intelligent</span> digital experiences
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              I create robust web applications and AI-powered solutions that solve real-world problems
              and deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end reveal">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl animate-float" />
              <div className="absolute inset-4 bg-card rounded-full border shadow-xl backdrop-blur" />
              <div className="absolute inset-0 flex items-center justify-center">
                <code className="text-3xl md:text-4xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {"</>"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur">
          <ChevronDown className="h-6 w-6 text-primary" />
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
