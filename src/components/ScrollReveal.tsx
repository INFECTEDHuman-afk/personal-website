
import React, { useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
  children?: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  reset?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  reset = false,
  direction = 'up'
}) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    
    const getDirectionTransform = (dir: string) => {
      switch(dir) {
        case 'up': return 'translateY(20px)';
        case 'down': return 'translateY(-20px)';
        case 'left': return 'translateX(20px)';
        case 'right': return 'translateX(-20px)';
        default: return 'translateY(0)';
      }
    };
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = windowHeight * threshold;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else if (reset) {
          element.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, [threshold, reset]);
  
  if (children) {
    const directionClass = direction !== 'none' ? `reveal-${direction}` : '';
    const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};
    
    return (
      <div 
        className={`reveal ${directionClass} ${className}`} 
        style={delayStyle}
      >
        {children}
      </div>
    );
  }
  
  return null;
};

export default ScrollReveal;
