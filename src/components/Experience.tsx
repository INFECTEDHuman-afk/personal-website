
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechInnovate Solutions",
      period: "2022 - Present",
      description: "Lead the development of AI-powered features for enterprise clients, including recommendation systems and natural language processing solutions. Collaborate with cross-functional teams to integrate AI capabilities into existing products.",
      skills: ["PyTorch", "TensorFlow", "LangChain", "AWS", "MLOps"],
      isCurrent: true,
    },
    {
      title: "Full-Stack Developer",
      company: "WebScale Dynamics",
      period: "2019 - 2022",
      description: "Architected and implemented scalable web applications using React and Node.js. Led the migration from monolithic architecture to microservices, resulting in a 40% performance improvement.",
      skills: ["React", "Node.js", "MongoDB", "Docker", "GraphQL"],
      isCurrent: false,
    },
    {
      title: "Frontend Developer",
      company: "Digital Craft Studio",
      period: "2017 - 2019",
      description: "Developed responsive web interfaces for clients in various industries. Implemented modern CSS techniques and optimized web performance, reducing load times by 60%.",
      skills: ["JavaScript", "CSS", "Vue.js", "Webpack", "SASS"],
      isCurrent: false,
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2015 - 2017",
      description: "Contributed to the development of a SaaS platform for small businesses. Worked on both frontend and backend features, gaining valuable experience in full-stack development.",
      skills: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap"],
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">
            My journey through the tech industry
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border md:left-1/2 md:-ml-0.5" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title + exp.company} className="relative reveal">
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-6 w-3 h-3 rounded-full border-2 md:left-1/2 md:-ml-1.5 z-10",
                    exp.isCurrent
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground/50"
                  )}
                  style={{ top: "1.625rem" }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left column (date for even items on desktop) */}
                  <div className={cn(
                    "md:text-right md:pr-10",
                    index % 2 === 1 ? "md:order-1" : "md:order-none"
                  )}>
                    {index % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground mt-1">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-secondary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {index % 2 === 1 && (
                      <div className="pl-12 md:pl-0">
                        <span className="text-lg font-medium">{exp.period}</span>
                        {exp.isCurrent && (
                          <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">Current</Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Right column */}
                  <div className={cn(
                    "pl-12 md:pl-10",
                    index % 2 === 1 ? "md:order-none" : "md:order-1"
                  )}>
                    {index % 2 === 1 && (
                      <div className="md:block">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground mt-1">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-secondary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {index % 2 === 0 && (
                      <div>
                        <span className="text-lg font-medium">{exp.period}</span>
                        {exp.isCurrent && (
                          <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">Current</Badge>
                        )}
                        <div className="md:hidden mt-4">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-muted-foreground mt-1">{exp.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="bg-secondary/10">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
