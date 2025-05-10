
import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack AI Engineer",
      company: "USC Viterbi K-12 STEM Center",
      period: "2024 - Present",
      description: "Lead the development of AI-powered features for enterprise clients, including recommendation systems and natural language processing solutions. Collaborate with cross-functional teams to integrate AI capabilities into existing products.",
      skills: ["PyTorch", "TensorFlow", "LangChain", "AWS", "React","FastAPI","Pinecone"],
      isCurrent: true,
    },
    {
      title: "Software Engineer",
      company: "USC Viterbi K–12 STEM Center",
      period: "",
      description: "Engineered React/Node.js/MongoDB lesson portals and integrated transformer-based LLM tutoring via LangChain, cutting response latency by 40% and boosting student engagement by 25%.",
      skills: ["React", "Node.js", "MongoDB", "Docker", "GraphQL","JavaScript", "Vue.js"],
      isCurrent: false,
    },
    {
      title: "Machine Learning Intern",
      company: "Corizo Edtech",
      period: "",
      description: "Developed and deployed a predictive-maintenance ML algorithm in Python/TensorFlow, cutting equipment downtime by 15%, reducing maintenance costs, and improving churn-prediction accuracy by 20%.",
      skills: ["React", "Node.js", "MongoDB", "Docker", "GraphQL"],
      isCurrent: false,
    },
    
    {
      title: "Curriculum Developer",
      company: "USC Viterbi K-12 STEM Center",
      period: "",
      description: "Supported hands-on summer workshops for 50+ middle and high-school students, teaching Python fundamentals, robotics, game development, and introductory cybersecurity through guided labs and projects.",
      skills: ["JavaScript", "C#", "Java", "Python"],
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
