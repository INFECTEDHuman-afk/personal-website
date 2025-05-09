
import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      content: "John's expertise in both front-end and AI technologies enabled our team to build a cutting-edge product that exceeded our expectations. His technical skills are matched only by his ability to communicate complex concepts clearly.",
      avatar: "SJ",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer, InnovateLabs",
      content: "Working with John on our machine learning infrastructure was a game-changer. He not only delivered an elegant solution but also took the time to ensure our team understood how to maintain and extend it.",
      avatar: "MC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "Aisha Patel",
      role: "Product Manager, DataViz",
      content: "John has a rare combination of technical depth and user empathy. He transformed our data visualization tool by implementing complex algorithms while keeping the user interface intuitive and accessible.",
      avatar: "AP",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "David Wilson",
      role: "Founder, EdTech Solutions",
      content: "John's mentorship has been invaluable to our junior developers. He doesn't just solve problems – he teaches others how to approach them methodically, making our entire team stronger.",
      avatar: "DW",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ];
  
  const onCarouselChange = useCallback((api) => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, []);

  return (
    <section id="testimonials" className="bg-background relative overflow-hidden py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-4 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-muted-foreground">
              Feedback from colleagues and clients who have worked with me
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative">
            <Carousel 
              opts={{ 
                loop: true, 
                align: isMobile ? "start" : "center" 
              }}
              onApiChange={onCarouselChange}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name} className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                      <Card className={`border-none transition-all duration-500 h-full ${activeIndex === index ? 'shadow-lg scale-105' : 'shadow-md scale-100'}`}>
                        <CardContent className="p-6 h-full flex flex-col">
                          <div className="flex items-center mb-6">
                            <div className="relative">
                              <div className={`absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-70 blur transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}></div>
                              <Avatar className="h-12 w-12 relative border-2 border-background">
                                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                <AvatarImage src={testimonial.image} />
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <h3 className="font-semibold">{testimonial.name}</h3>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="relative flex-grow">
                            <div className="absolute -top-3 -left-2 text-5xl text-primary/10">"</div>
                            <p className="relative z-10 italic text-muted-foreground">
                              {testimonial.content}
                            </p>
                            <div className="absolute -bottom-6 -right-2 text-5xl text-primary/10">"</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-10">
                <CarouselPrevious className="relative mr-2 hover:bg-primary hover:text-primary-foreground" />
                <div className="flex items-center gap-2 px-4">
                  {testimonials.map((_, index) => (
                    <span 
                      key={index} 
                      className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <CarouselNext className="relative ml-2 hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
