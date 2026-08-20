import { cn } from "@/lib/utils";

type Band = "base" | "tan" | "charcoal" | "accent-wash" | "card";

const bandClasses: Record<Band, string> = {
  base: "bg-background text-foreground",
  tan: "bg-secondary text-foreground band-texture",
  charcoal: "bg-charcoal text-charcoal-foreground",
  "accent-wash": "bg-accent/15 text-foreground",
  card: "bg-card text-foreground",
};

interface SectionProps {
  band?: Band;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export function Section({ band = "base", className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", bandClasses[band], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
