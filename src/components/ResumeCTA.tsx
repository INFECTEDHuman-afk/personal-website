
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto text-center reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More?</h2>
        <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          Download my full resume to see my complete experience, skills, 
          and qualifications in detail.
        </p>
        <Button size="lg" variant="secondary" className="group">
          <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
          Download Resume (PDF)
        </Button>
      </div>
    </section>
  );
};

export default ResumeCTA;
