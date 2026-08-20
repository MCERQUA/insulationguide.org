"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  once?: boolean;
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  className,
  direction = "up",
  distance = 30,
  delay = 0,
  once = true,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const d = directionMap[direction];
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: d.x * distance, y: d.y * distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
