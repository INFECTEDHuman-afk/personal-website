
"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      padding: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export type IconCloudProps = {
  iconSlugs: string[]
  className?: string;
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

const DEFAULT_ICONS = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "express",
  "nextdotjs",
  "tailwindcss",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "git",
  "github",
  "visualstudiocode",
];

export function IconCloud({ iconSlugs = DEFAULT_ICONS, className }: IconCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme = "light" } = useTheme()
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        setIsLoading(true);
        const iconData = await fetchSimpleIcons({ slugs: iconSlugs });
        setData(iconData);
        setHasError(false);
      } catch (error) {
        console.error("Failed to fetch icons:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme),
    );
  }, [data, theme]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-muted-foreground mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-sm text-muted-foreground">Failed to load icons</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* @ts-ignore - The Cloud component has incomplete type definitions */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
