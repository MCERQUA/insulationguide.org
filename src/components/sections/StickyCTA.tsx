"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Layers } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="grid grid-cols-2 gap-px bg-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center gap-2 bg-card py-3.5 text-sm font-semibold text-foreground cursor-pointer"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          href="/get-matched"
          className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground cursor-pointer"
        >
          <Layers className="h-4 w-4" /> Get Matched
        </Link>
      </div>
    </div>
  );
}
