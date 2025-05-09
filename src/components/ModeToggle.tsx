
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Add a sparkle animation when theme changes
  const triggerSparkle = () => {
    const sparkleContainer = document.querySelector('.sparkle-container');
    if (sparkleContainer) {
      sparkleContainer.classList.add('active');
      setTimeout(() => {
        sparkleContainer.classList.remove('active');
      }, 1000);
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    triggerSparkle();
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="sparkle-container absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="sparkle" style={{ 
            '--delay': `${i * 100}ms`,
            '--angle': `${i * 60}deg`,
            '--distance': `${20 + Math.random() * 10}px`
           } as React.CSSProperties} />
        ))}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 relative overflow-hidden group"
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent group-hover:animate-shimmer" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            <Sparkles className="absolute h-[1rem] w-[1rem] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glassmorphism animate-fade-in">
          <DropdownMenuItem 
            onClick={() => handleThemeChange("light")} 
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleThemeChange("dark")} 
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Moon className="h-4 w-4 transition-transform hover:rotate-45" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleThemeChange("system")} 
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Monitor className="h-4 w-4 transition-transform hover:rotate-12" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
