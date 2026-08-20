import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Thermometer,
  DollarSign,
  Wrench,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Insulation Guide: Types, R-Value, Cost & DIY vs. Professional",
  description:
    "A genuinely neutral, start-here guide to home insulation — compare types, understand R-value, see real cost ranges, and decide DIY vs. hiring a pro.",
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    icon: Layers,
    title: "Types of Insulation Explained",
    description: "Not sure fiberglass vs. spray foam vs. cellulose is right for you? Start here.",
    href: "/types-of-insulation",
  },
  {
    icon: Thermometer,
    title: "Understanding R-Value",
    description: "What that number actually means, and how much you need for your climate.",
    href: "/understanding-r-value",
  },
  {
    icon: DollarSign,
    title: "Insulation Cost & ROI",
    description: "Real cost ranges by material and project — plus the federal tax credit.",
    href: "/insulation-cost-and-roi",
  },
  {
    icon: Wrench,
    title: "DIY vs. Professional Installation",
    description: "Which parts of the job you can realistically do yourself, and which need a pro.",
    href: "/diy-vs-professional-installation",
  },
];

const QUICK_FACTS = [
  { fact: "Most homes need R-38 to R-60 in the attic.", href: "/understanding-r-value" },
  { fact: "Spray foam costs about 2-3x more than fiberglass, but seals air leaks fiberglass can't.", href: "/insulation-cost-and-roi" },
  { fact: "Fiberglass batts are the most DIY-friendly option for most homeowners.", href: "/diy-vs-professional-installation" },
  { fact: "There's no single \"best\" insulation — it depends on your climate, budget, and space.", href: "/types-of-insulation" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-attic-fresh-insulation.jpg"
            alt="An attic with fresh insulation visible between the joists"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <FadeIn className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
              <Layers className="h-4 w-4 text-accent" /> A Contractors Choice Agency resource
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-charcoal-foreground">
              Your Honest, Start-Here Guide to Home Insulation
            </h1>
            <p className="mt-6 text-lg text-charcoal-foreground/85 leading-relaxed max-w-xl">
              What type, how much R-value, what it costs, DIY or hire a pro — plain answers to
              the four questions every homeowner asks first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/types-of-insulation" size="lg">
                Explore the Guides <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/get-matched"
                size="lg"
                variant="outline"
                className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              >
                Get Matched with a Vetted Contractor
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PILLAR GRID */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Where Do You Want to Start?
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <ServiceCard icon={p.icon} title={p.title} description={p.description} href={p.href} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHY TRUST THIS GUIDE */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              Why Trust This Guide
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              InsulationGuide is published by Contractors Choice Agency, an insurance agency with
              real, established insulation-industry properties — not a single anonymous lead-gen
              site. We don&apos;t sell insulation and we don&apos;t push one material over
              another. Every guide here is written to be genuinely neutral: honest pros and cons,
              real cost ranges, and straight answers even when they&apos;re not the flashiest
              ones.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When you&apos;re ready for a professional, that neutrality is exactly what makes our{" "}
              <Link href="/get-matched" className="text-primary font-medium hover:underline">
                Get Matched
              </Link>{" "}
              service worth using — every contractor is checked for licensing and insurance
              before joining CCA&apos;s network.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/r-value-comparison-materials.jpg"
              alt="A side-by-side comparison of different insulation material samples"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* QUICK ANSWERS */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Quick Answers
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {QUICK_FACTS.map((q) => (
            <StaggerItem key={q.fact}>
              <Link
                href={q.href}
                className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">
                  {q.fact}{" "}
                  <span className="font-semibold text-primary group-hover:underline">
                    Learn more →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* FINAL CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Ready to Talk to Someone?
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            Get matched with a vetted, insured insulation contractor near you — free, no
            obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-matched" size="lg" variant="secondary" icon={ArrowRight}>
              Get Matched
            </Button>
            <Button
              href="tel:+18449675247"
              size="lg"
              variant="outline"
              className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              icon={Phone}
            >
              Call 844-967-5247
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
