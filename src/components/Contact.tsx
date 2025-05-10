
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your server or an API
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    
    // Reset the form
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:csah@usc.edu",
      icon: Mail,
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chetan-sah-024469114/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/INFECTEDHuman-afk",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="reveal">
            <CardHeader>
              <h3 className="text-xl font-bold">Send Me a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, question, or opportunity..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  I'll respond as soon as possible, usually within 24-48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-10 reveal">
            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 border rounded-lg transition-all hover:shadow-md hover:border-primary/50"
                  >
                    <link.icon className={`h-8 w-8 mb-3 transition-colors ${link.color}`} />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Let's Collaborate</h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    I'm always open to discussing:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Full-stack development projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>AI and machine learning opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Technical workshops and speaking engagements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Mentoring and educational initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
