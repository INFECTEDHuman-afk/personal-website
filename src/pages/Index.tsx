
import React, { useEffect } from 'react';
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

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Chetan Sah | Full-Stack & AI Engineer";
    
    // Add cursor effect
    const createCursorEffect = () => {
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: hsl(var(--primary));
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: transform 0.1s ease, opacity 0.3s ease;
        mix-blend-mode: difference;
      `;
      
      const cursorBorder = document.createElement('div');
      cursorBorder.classList.add('cursor-border');
      cursorBorder.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid hsl(var(--primary) / 0.3);
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: width 0.2s ease, height 0.2s ease, opacity 0.3s ease;
        transform: translate(-50%, -50%);
      `;
      
      document.body.appendChild(cursor);
      document.body.appendChild(cursorBorder);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        cursorBorder.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        if (cursor.style.opacity === '0') {
          cursor.style.opacity = '1';
          cursorBorder.style.opacity = '1';
        }
      });
      
      document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
        cursorBorder.style.opacity = '0';
      });
      
      // Interactive effect on clickable elements
      const handleInteraction = (element, enter) => {
        if (enter) {
          cursorBorder.style.width = '60px';
          cursorBorder.style.height = '60px';
          cursorBorder.style.backgroundColor = 'hsla(var(--primary) / 0.1)';
        } else {
          cursorBorder.style.width = '40px';
          cursorBorder.style.height = '40px';
          cursorBorder.style.backgroundColor = 'transparent';
        }
      };
      
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => handleInteraction(el, true));
        el.addEventListener('mouseleave', () => handleInteraction(el, false));
      });
    };
    
    // Only create cursor effect on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      createCursorEffect();
    }
    
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      const cursorBorder = document.querySelector('.cursor-border');
      if (cursor) cursor.remove();
      if (cursorBorder) cursorBorder.remove();
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default Index;
