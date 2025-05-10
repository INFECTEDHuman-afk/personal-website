
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Southern California",
      period: "2023 - 2025",
      description: "Specialized in Machine Learning, Artificial Intelligence, Analysis of Algorithms, Natural Language Processing, Web Technologies, Data Management, and Information Retrieval.",
      achievements: [
        "Capstone projects included an AlphaGo-inspired reinforcement-learning agent ",
        "Teaching Assistant at Various STEM related courses",
        "SmartSolve, a DaSLAM-powered LLM research system for solving complex domain-adaptive problems."
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SRM Institute of Science and Technology",
      period: "2019 - 2023",
      description: " Major in Computer Engineering with a specialization in Artificial Intelligence and Machine Learning.",
      achievements: [
        "Dean's Merit Scholarship",
        "Led student robotics team to regional championship",
        "Undergraduate research in Object Recognition and Computer Vision, authored two research papers and published them in IEEE journals"
      ],
    },
  ];
  
  const certifications = [
    {
      name: "Azure Cloud Fundamentals",
      issuer: "Microsoft Azure",
      date: "2022",
      logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
      logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2022",
      logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    },
    {
      name: "Full Stack Developer Certification",
      issuer: "GUVI, Indian Institute of Technology, Madras",
      date: "2022",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "SQL Certification",
      issuer: "University of California, Davis",
      date: "2022",
      logo: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    },
    {
      name: "Pyton For Data Science",
      issuer: "IBM",
      date: "2022",
      logo: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg",
    },
  ];

  return (
    <section id="education" className="bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground">
            Academic foundations and professional credentials
          </p>
        </div>
        
        <div className="space-y-16">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Academic Background</h3>
            
            <div className="space-y-6">
              {educations.map((edu) => (
                <Card key={edu.degree} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-muted p-6 flex flex-col justify-center">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium mt-1">{edu.institution}</p>
                      <p className="text-muted-foreground mt-2">{edu.period}</p>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <h5 className="font-medium mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Professional Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.name} className="flex flex-col text-center">
                  <CardHeader className="pb-2 flex justify-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.name} 
                      className="h-32 object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-lg">{cert.name}</h4>
                    <p className="text-primary">{cert.issuer}</p>
                    <Badge variant="outline" className="mt-2">{cert.date}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
