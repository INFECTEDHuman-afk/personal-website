
import React from "react";
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

const Testimonials = () => {
  const isMobile = useIsMobile();
  
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

  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">
            What colleagues and clients have to say
          </p>
        </div>
        
        <div className="reveal">
          <Carousel opts={{ loop: true, align: isMobile ? "start" : "center" }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                            <AvatarImage src={testimonial.image} />
                          </Avatar>
                          <div className="ml-4">
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -top-3 -left-2 text-4xl text-primary/20">"</div>
                          <p className="relative z-10 italic text-muted-foreground">
                            {testimonial.content}
                          </p>
                          <div className="absolute -bottom-6 -right-2 text-4xl text-primary/20">"</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
