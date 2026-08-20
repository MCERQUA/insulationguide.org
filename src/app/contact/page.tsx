import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact InsulationGuide",
  description:
    "Reach the InsulationGuide team at Contractors Choice Agency — call, email, or send a message. Looking to hire a contractor instead? Get matched here.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section band="base" className="pt-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Questions about the guide, general contractor questions, or press and partnership
            inquiries — reach out below. Looking to hire a contractor?{" "}
            <a href="/get-matched" className="text-primary underline underline-offset-2">
              Get matched here
            </a>{" "}
            instead.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <FadeIn className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2 rounded-2xl bg-charcoal text-charcoal-foreground p-8 space-y-6">
            <div>
              <h2 className="font-heading text-lg font-semibold">Direct Contact</h2>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
              <Phone className="h-5 w-5 shrink-0 text-accent" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
              <Mail className="h-5 w-5 shrink-0 text-accent" /> {EMAIL}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
              <span>{HQ_ADDRESS}</span>
            </div>
            <div className="pt-4 border-t border-charcoal-foreground/15 text-sm text-charcoal-foreground/70">
              Looking for a vetted insulation contractor?{" "}
              <a href="/get-matched" className="text-accent underline underline-offset-2">
                Get matched here
              </a>
              .
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
