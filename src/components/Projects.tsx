
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubLink?: string;
  liveLink?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Conversational Assistant",
      description: "A smart chatbot that leverages LLMs to provide contextual responses and assist users with complex tasks.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["Python", "TensorFlow", "React", "WebSockets"],
      category: "ai",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "fullstack",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Interactive dashboard with data visualization tools for monitoring business metrics and user behavior.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
      category: "frontend",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "Image Recognition API",
      description: "A machine learning API that can identify objects, scenes, and faces in images with high accuracy.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["Python", "PyTorch", "Flask", "Docker"],
      category: "ai",
      githubLink: "https://github.com",
    },
    {
      id: 5,
      title: "Social Media Scheduler",
      description: "A tool for planning and automating posts across multiple social media platforms with analytics.",
      image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["React", "Redux", "Node.js", "OAuth"],
      category: "fullstack",
      liveLink: "https://example.com",
    },
    {
      id: 6,
      title: "Developer Portfolio Template",
      description: "A customizable portfolio website template for developers to showcase their work and skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500&h=350",
      tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
      category: "frontend",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
  ];
  
  const categories = ["all", "frontend", "fullstack", "ai"];
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A showcase of my technical work and creative solutions
          </p>
        </div>
        
        <div className="flex justify-center mb-10 reveal">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
                className="reveal"
              >
                <Card className="overflow-hidden flex flex-col h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 pt-0">
                    {project.githubLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
