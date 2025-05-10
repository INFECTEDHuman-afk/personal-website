
import React from "react";
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
        
        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 hidden md:block" />
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div key={exp.title + exp.company} className="relative reveal">
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
              )}>
                {/* Left side (even indexes) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:pr-12">
                      <div className="bg-card rounded-lg p-6 shadow-sm border relative">
                        {/* Timeline dot */}
                        <div className={cn(
                          "hidden md:block absolute top-1/2 -right-4 w-4 h-4 rounded-full border-4",
                          exp.isCurrent 
                            ? "bg-primary border-primary/30" 
                            : "bg-background border-border"
                        )} />
                        
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                        <div className="flex items-center mt-2 mb-4">
                          <span className="text-muted-foreground">{exp.period}</span>
                          {exp.isCurrent && (
                            <Badge className="ml-2 bg-primary/10 text-primary">Current</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-secondary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block" /> {/* Empty right side */}
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" /> {/* Empty left side */}
                    <div className="md:pl-12">
                      <div className="bg-card rounded-lg p-6 shadow-sm border relative">
                        {/* Timeline dot */}
                        <div className={cn(
                          "hidden md:block absolute top-1/2 -left-4 w-4 h-4 rounded-full border-4",
                          exp.isCurrent 
                            ? "bg-primary border-primary/30" 
                            : "bg-background border-border"
                        )} />
                        
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                        <div className="flex items-center mt-2 mb-4">
                          <span className="text-muted-foreground">{exp.period}</span>
                          {exp.isCurrent && (
                            <Badge className="ml-2 bg-primary/10 text-primary">Current</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-secondary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Mobile timeline dots */}
              <div className={cn(
                "absolute left-6 top-6 w-3 h-3 rounded-full border-2 md:hidden",
                exp.isCurrent 
                  ? "bg-primary border-primary/30" 
                  : "bg-background border-border"
              )} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
