"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  label: string;
  className?: string;
}

/** Harvest-gold checkmark — simpler 2-color palette this build, no dedicated third trust hue. */
export function TrustBadge({ label, className }: TrustBadgeProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
        <circle cx="11" cy="11" r="10" className="fill-accent/15 stroke-accentDark" strokeWidth="1.5" />
        <motion.path
          d="M6.5 11.5L9.5 14.5L15.5 8"
          stroke="hsl(var(--accent-dark))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={prefersReduced ? undefined : { pathLength: 0 }}
          whileInView={prefersReduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}
