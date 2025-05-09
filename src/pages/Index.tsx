
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Teaching from '@/components/Teaching';
import OpenSource from '@/components/OpenSource';
import Education from '@/components/Education';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import ResumeCTA from '@/components/ResumeCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "John Doe | Full-Stack & AI Engineer";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Teaching />
        <OpenSource />
        <Education />
        <Blog />
        <Testimonials />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
