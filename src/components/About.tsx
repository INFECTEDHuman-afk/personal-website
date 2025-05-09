
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Getting to know the mind behind the code
          </p>
        </div>
        
        <Card className="overflow-hidden border-none shadow-lg reveal">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/80 to-accent/80 p-6 md:p-10 flex flex-col justify-center">
                <div className="mx-auto text-center">
                  <Avatar className="h-48 w-48 mb-6 mx-auto ring-4 ring-white/20">
                    <AvatarFallback className="bg-primary-foreground text-4xl font-bold">
                      JD
                    </AvatarFallback>
                    <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=250&h=250" />
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
                  <p className="text-primary-foreground/80 mb-6">Full-Stack & AI Engineer</p>
                  
                  <div className="flex justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-10 space-y-6 flex flex-col justify-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Journey</h3>
                  <p className="text-muted-foreground">
                    With over 8 years of experience in software development, I've evolved from a curious coder to a seasoned engineer who thrives at the intersection of web development and artificial intelligence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">My Approach</h3>
                  <p className="text-muted-foreground">
                    I believe in building solutions that are not only technically sound but also intuitive and accessible. My work combines cutting-edge technologies with thoughtful user experience design.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Beyond Coding</h3>
                  <p className="text-muted-foreground">
                    When I'm not immersed in code, I enjoy teaching the next generation of developers, contributing to open-source projects, and exploring the latest advancements in AI and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
