"use client";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: React.ReactNode;
  lerp?: number;
  duration?: number;
}

export function SmoothScroll({
  children,
  lerp = 0.1,
  duration = 1.2,
}: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp,
        duration,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
