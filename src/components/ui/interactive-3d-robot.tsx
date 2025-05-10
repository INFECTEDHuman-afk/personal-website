
'use client';

import { Suspense, lazy, useState, useEffect } from 'react';
import { Code } from "lucide-react";

// Import React explicitly for the error boundary
import React from 'react';

// Use dynamic import with error handling
const Spline = lazy(() => 
  import('@splinetool/react-spline')
    .catch(() => {
      // Return a simple component when import fails
      return { 
        default: () => <FallbackComponent /> 
      };
    })
);

// Simple fallback component
const FallbackComponent = () => (
  <div className="w-full h-full flex items-center justify-center">
    <Code className="h-12 w-12 text-primary animate-pulse" />
  </div>
);

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [hasError, setHasError] = useState(false);

  // Add error boundary fallback
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Check if Spline is loaded within a reasonable time
      if (typeof window !== 'undefined' && !(window as any).spline) {
        console.log('Spline loading timeout, showing fallback');
        setHasError(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, []);

  if (hasError) {
    return <FallbackComponent />;
  }

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <svg className="animate-spin h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
        </div>
      }
    >
      <ErrorBoundaryComponent fallback={<FallbackComponent />}>
        <Spline
          scene={scene}
          className={className}
          onError={() => setHasError(true)}
        />
      </ErrorBoundaryComponent>
    </Suspense>
  );
}

// Simple React error boundary component with proper TypeScript interface
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundaryComponent extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Spline component error:", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
