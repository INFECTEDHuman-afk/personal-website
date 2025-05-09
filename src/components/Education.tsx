
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2013 - 2015",
      description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on 'Neural Networks for Natural Language Understanding'.",
      achievements: [
        "Published 2 research papers in leading AI conferences",
        "Teaching Assistant for Advanced Algorithms course",
        "Graduate Student Research Award recipient"
      ],
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Berkeley",
      period: "2009 - 2013",
      description: "Double major in Computer Engineering and Mathematics with honors.",
      achievements: [
        "Summa Cum Laude - top 3% of graduating class",
        "Led student robotics team to regional championship",
        "Undergraduate research in distributed systems"
      ],
    },
  ];
  
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021",
      logo: "https://www.tensorflow.org/site-assets/images/marketing/cert-badge.png",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2020",
      logo: "https://static.scrum.org/web/badges/badge-psmi.svg",
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
