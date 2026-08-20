import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "charcoal-invert";
  size?: "md" | "lg";
  icon?: LucideIcon;
  className?: string;
  external?: boolean;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primaryDark",
  secondary: "bg-accent text-accent-foreground hover:bg-accentDark hover:text-white",
  outline: "border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary bg-transparent",
  "charcoal-invert": "bg-charcoal-foreground text-charcoal hover:bg-accent hover:text-charcoal",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </Link>
  );
}
