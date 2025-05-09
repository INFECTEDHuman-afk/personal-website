
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OpenSource = () => {
  const contributions = [
    {
      title: "React Hooks Library",
      description: "A collection of custom React hooks for common UI patterns and data management.",
      stars: 578,
      forks: 73,
      link: "https://github.com",
      demoLink: "https://example.com",
      tags: ["React", "TypeScript", "npm package"]
    },
    {
      title: "Python ML Utilities",
      description: "Utility functions for data preprocessing and model evaluation in machine learning projects.",
      stars: 342,
      forks: 47,
      link: "https://github.com",
      tags: ["Python", "Machine Learning", "Data Science"]
    },
    {
      title: "WebAssembly Experiments",
      description: "Collection of experiments exploring WebAssembly for high-performance web applications.",
      stars: 289,
      forks: 31,
      link: "https://github.com",
      demoLink: "https://example.com",
      tags: ["WebAssembly", "C++", "JavaScript"]
    },
    {
      title: "GraphQL Starter Kit",
      description: "A boilerplate for building GraphQL APIs with authentication and caching.",
      stars: 419,
      forks: 62,
      link: "https://github.com",
      tags: ["GraphQL", "Node.js", "Apollo"]
    }
  ];
  
  const talks = [
    {
      title: "Building Scalable AI Systems",
      event: "TechConf 2023",
      link: "https://example.com"
    },
    {
      title: "React Performance Optimization",
      event: "Frontend Meetup",
      link: "https://example.com"
    },
    {
      title: "From Concept to Production: ML Workflow",
      event: "AI Summit 2022",
      link: "https://example.com"
    }
  ];

  return (
    <section id="opensource" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source & Community</h2>
          <p className="text-muted-foreground">
            Contributing to the broader development ecosystem
          </p>
        </div>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 reveal">Featured Repositories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributions.map((repo) => (
                <Card key={repo.title} className="flex flex-col reveal">
                  <CardHeader className="pb-2">
                    <h4 className="text-xl font-semibold">{repo.title}</h4>
                  </CardHeader>
                  <CardContent className="pb-3 flex-grow">
                    <p className="text-muted-foreground">{repo.description}</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm">{repo.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{repo.forks}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {repo.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/10">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 pt-0">
                    <Button variant="outline" size="sm" asChild>
                      <a href={repo.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                    {repo.demoLink && (
                      <Button size="sm" variant="ghost" asChild>
                        <a href={repo.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Community Talks & Articles</h3>
            
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {talks.map((talk) => (
                    <li key={talk.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b last:border-0">
                      <div>
                        <h4 className="font-medium">{talk.title}</h4>
                        <p className="text-sm text-muted-foreground">{talk.event}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2 sm:mt-0" asChild>
                        <a href={talk.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
