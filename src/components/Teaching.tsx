
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Teaching = () => {
  const teachingExperiences = [
    {
      id: "Teaching Assistant",
      title: "USC Computer Science Mentor",
      period: "2024 - Present",
      description:
        "Guide undergraduate students through complex programming concepts and projects. Provide career advice and industry insights based on real-world experience.",
      achievements: [
        "Mentored 10+ students through courseworks and provided additional resources",
        "Developed supplementary learning materials for algorithms and data structures",
        "Organized mock technical interviews to prepare students for job applications",
      ],
      tags: ["Computer Science", "Career Development", "Technical Interviews"],
    },
    {
      id: "curriculum-development",
      title: "AI Curriculum Developer",
      period: "2024 - 2025",
      description:
        "Designed and developed comprehensive curriculum for introductory machine learning and AI courses. Created practical exercises that bridge theoretical concepts with real-world applications.",
      achievements: [
        "Developed 12-week machine learning course adopted by 3 educational institutions",
        "Created hands-on projects using TensorFlow and PyTorch",
        "Received 4.8/5 average student satisfaction rating",
      ],
      tags: ["AI Education", "Curriculum Design", "Machine Learning"],
    },
    {
      id: "code-workshops",
      title: "Community Code Workshops",
      period: "2024 - 2025",
      description:
        "Lead free monthly workshops teaching programming fundamentals to underrepresented groups in tech. Focus on practical skills and project-based learning to build confidence and portfolios.",
      achievements: [
        "Taught over 500 participants fundamental coding skills",
        "85% of advanced workshop participants successfully transitioned into tech roles",
        "Developed beginner-friendly projects that emphasize core programming concepts",
      ],
      tags: ["Community Education", "Diversity in Tech", "Web Development"],
    },
    {
      id: "drone-lessons",
      title: "Co-Instructor: Drones & AI",
      period: "2023-2024",
      description:
        "Co-taught a specialized course on programming autonomous drones using computer vision and machine learning algorithms. Combined theoretical knowledge with hands-on flying sessions.",
      achievements: [
        "Developed curriculum combining computer vision and drone programming",
        "Students successfully implemented object tracking and autonomous navigation",
        "Final projects featured in local technology showcase",
      ],
      tags: ["Drones", "Computer Vision", "Robotics"],
    },
  ];

  return (
    <section id="teaching" className="bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Teaching & Mentorship</h2>
          <p className="text-muted-foreground">
            Sharing knowledge and empowering the next generation of developers
          </p>
        </div>
        
        <Card className="reveal">
          <CardContent className="pt-6 pb-2">
            <Accordion type="single" collapsible className="w-full">
              {teachingExperiences.map((exp) => (
                <AccordionItem key={exp.id} value={exp.id} className="border-b">
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center text-left gap-y-2 w-full">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground md:ml-4">
                        {exp.period}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    <div className="space-y-4">
                      <p>{exp.description}</p>
                      
                      <div className="pl-4 border-l-2 border-primary/30">
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-accent/5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Teaching;
