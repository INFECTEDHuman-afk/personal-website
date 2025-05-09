
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add theme transition styles dynamically
  useEffect(() => {
    // Add CSS for theme transition effects
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      :root {
        --theme-transition-duration: 0.4s;
      }
      
      /* Smooth transition for theme changes */
      *, *::before, *::after {
        transition: background-color var(--theme-transition-duration) ease, 
                   border-color var(--theme-transition-duration) ease,
                   color var(--theme-transition-duration) ease,
                   fill var(--theme-transition-duration) ease,
                   stroke var(--theme-transition-duration) ease;
      }
      
      /* Theme change sparkle animation */
      .sparkle-container.active .sparkle {
        opacity: 1;
        transform: translate(calc(cos(var(--angle)) * var(--distance)), 
                           calc(sin(var(--angle)) * var(--distance))) scale(1);
      }
      
      .sparkle {
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: hsl(var(--primary));
        box-shadow: 0 0 5px 1px hsl(var(--primary) / 0.7);
        opacity: 0;
        top: 50%;
        left: 50%;
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: translate(0, 0) scale(0);
        transition-delay: var(--delay);
        z-index: 100;
        pointer-events: none;
      }
      
      /* Add shimmer effect */
      @keyframes shimmer {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(100%);
        }
      }
      
      .animate-shimmer {
        animation: shimmer 1.5s infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return (
    <NextThemesProvider 
      {...props}
      enableSystem
      enableColorScheme
      attribute="class"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
