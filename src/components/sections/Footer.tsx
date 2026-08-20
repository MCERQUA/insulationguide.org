import Link from "next/link";
import { Phone, Mail, MapPin, Layers } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  HQ_ADDRESS,
  FOOTER_GUIDES,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-semibold">InsulationGuide</span>
            </Link>
            <p className="mt-4 text-sm text-charcoal-foreground/70 leading-relaxed">
              A Contractors Choice Agency resource helping homeowners understand insulation
              types, R-value, cost, and whether to DIY or hire a professional.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Guides
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_GUIDES.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-charcoal-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-charcoal-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-charcoal-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 text-sm text-charcoal-foreground/80 hover:text-accent transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4 shrink-0" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-charcoal-foreground/80 hover:text-accent transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4 shrink-0" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-charcoal-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {HQ_ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-foreground/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal-foreground/60">
            &copy; {new Date().getFullYear()} InsulationGuide. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-foreground/60">
            A Contractors Choice Agency resource.
          </p>
        </div>
      </div>
    </footer>
  );
}
