import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Sparkle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
const About = () => {
  const isMobile = useIsMobile();
  return <section id="about" className="bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-primary"></span>
            <span className="text-primary font-medium">About Me</span>
            <span className="h-px w-6 bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            Getting to know the mind behind the code
            <Sparkle className="h-5 w-5 text-accent animate-pulse-slow" />
          </h2>
          <p className="text-muted-foreground">Passionate about crafting exceptional digital experiences</p>
        </div>
        
        <Card className="overflow-hidden border-none shadow-lg reveal">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, #fff 1px, transparent 1px), 
                                   linear-gradient(135deg, #fff 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
                </div>
                <div className="mx-auto text-center relative z-10">
                  <Avatar className="h-48 w-48 mb-6 mx-auto ring-4 ring-white/20 transition-all hover:ring-white/40 border-4 border-transparent">
                    <AvatarFallback className="bg-primary-foreground text-4xl font-bold">
                      JD
                    </AvatarFallback>
                    <AvatarImage src="/lovable-uploads/b68b3b1e-eb06-406f-aec6-d9c38e93dd04.jpg" />
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white mb-2">Chetan Sah
                </h3>
                  <p className="text-primary-foreground/80 mb-6 flex items-center justify-center gap-1">
                    <span>Full-Stack & AI Engineer</span>
                  </p>
                  
                  <div className="flex justify-center gap-3">
                    <Button size="icon" variant="secondary" className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-10 space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">The Journey</h3>
                    <Star className="h-4 w-4 text-accent fill-accent" />
                  </div>
                  <p className="text-muted-foreground">I’m passionate about building end-to-end, AI-driven software solutions—a drive I deepened during my M.S. in Computer Science at USC through hands-on AI and full-stack projects. After crafting interactive curricula that inspired hundreds of young learners, I transitioned into a Software Engineer role at the USC Viterbi K–12 STEM Center, where I built lesson portals and integrated transformer-based tutoring features.</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">My Approach</h3>
                    <Star className="h-4 w-4 text-accent fill-accent" />
                  </div>
                  <p className="text-muted-foreground">I master core fundamentals—algorithms, data models, API design—before writing any code, ensuring every solution is reliable, maintainable, and ready for complex AI-driven features.</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Beyond Coding</h3>
                    <Star className="h-4 w-4 text-accent fill-accent" />
                  </div>
                  <p className="text-muted-foreground">When I'm not immersed in code, I enjoy  inspiring and mentoring young minds in STEM through hands-on curriculum development and engaging, project-based learning.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#D946EF]/5 rounded-full blur-3xl" />
    </section>;
};
export default About;