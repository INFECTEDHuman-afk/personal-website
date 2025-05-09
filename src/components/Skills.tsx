
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", value: 95 },
    { name: "React & Next.js", value: 90 },
    { name: "Python", value: 85 },
    { name: "Machine Learning", value: 80 },
    { name: "Node.js", value: 85 },
    { name: "AWS/Cloud Infrastructure", value: 75 },
  ];
  
  const languages = [
    "JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "C#", "Java"
  ];
  
  const frontendTech = [
    "React", "Next.js", "TailwindCSS", "Redux", "GraphQL", "Vue", "Angular"
  ];
  
  const backendTech = [
    "Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker"
  ];
  
  const aiMlTech = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "NLTK", "OpenAI API"
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="reveal">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Technical Proficiency</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="px-3 py-1 bg-muted/50">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="reveal">
              <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {frontendTech.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="reveal">
              <h3 className="text-xl font-bold mb-4">Backend & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {backendTech.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1 bg-secondary/10 text-secondary border-secondary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="reveal">
              <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {aiMlTech.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1 bg-accent/10 text-accent border-accent/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
