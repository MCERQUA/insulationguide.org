import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Thermometer,
  ArrowRight,
  Layers,
  DollarSign,
  HelpCircle,
  Ruler,
  Map,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Insulation R-Value Explained: Chart, Climate Zones & How Much You Need",
  description:
    "What R-value actually means, a full R-value-per-inch chart by material, and how much insulation your home needs by climate zone — explained in plain English.",
  alternates: { canonical: "/understanding-r-value" },
};

const R_VALUE_CHART = [
  { material: "Fiberglass batts", perInch: "R-2.9 – R-3.8" },
  { material: "Fiberglass blown-in (loose-fill)", perInch: "R-2.2 – R-2.7" },
  { material: "Cellulose (blown-in)", perInch: "R-3.2 – R-3.8" },
  { material: "Mineral wool", perInch: "R-3.0 – R-3.3" },
  { material: "Open-cell spray foam", perInch: "R-3.5 – R-3.6" },
  { material: "Closed-cell spray foam", perInch: "R-6.0 – R-7.0" },
  { material: "Rigid foam board (EPS/XPS)", perInch: "R-3.8 – R-4.4" },
  { material: "Rigid foam board (polyiso)", perInch: "R-5.6 – R-6.5" },
];

const CLIMATE_ZONES = [
  { zone: "Zone 1–2 (Hot: South FL, South TX, Southern AZ)", attic: "R-30 – R-49", wall: "R-13 – R-15", floor: "R-13 – R-19" },
  { zone: "Zone 3 (Warm: much of the South, Northern CA, higher-elevation AZ)", attic: "R-30 – R-60", wall: "R-13 – R-21", floor: "R-19 – R-25" },
  { zone: "Zone 4 (Mixed: Mid-Atlantic, Pacific NW, parts of TN/OK)", attic: "R-38 – R-60", wall: "R-13 – R-21", floor: "R-25 – R-30" },
  { zone: "Zone 5 (Cool: Midwest, Northeast, mountain regions)", attic: "R-38 – R-60", wall: "R-13 – R-21", floor: "R-25 – R-30" },
  { zone: "Zone 6–7 (Cold: Northern Midwest, New England, Rockies)", attic: "R-49 – R-60", wall: "R-20 – R-21", floor: "R-25 – R-30" },
  { zone: "Zone 8 (Subarctic: Alaska)", attic: "R-49 – R-60", wall: "R-21 – R-25", floor: "R-25 – R-30" },
];

const THICKNESS = [
  { material: "Fiberglass batts (~R-3.2/in)", r30: '~9.4"', r38: '~11.9"', r49: '~15.3"' },
  { material: "Blown cellulose (~R-3.5/in)", r30: '~8.6"', r38: '~10.9"', r49: '~14"' },
  { material: "Closed-cell spray foam (~R-6.5/in)", r30: '~4.6"', r38: '~5.8"', r49: '~7.5"' },
];

const FAQS = [
  {
    question: "Is R-30 enough for an attic?",
    answer:
      "In the warmest U.S. climate zones, R-30 can meet minimum recommendations, but most of the country is now guided toward R-38 to R-60 for attics. Check the climate-zone table above for a general target, and keep in mind local building codes can set a different minimum than these general guidelines.",
  },
  {
    question: "Is R-13 or R-19 better for walls?",
    answer:
      "R-19 provides more resistance to heat flow than R-13 and is the more common current recommendation for standard 2x4 or 2x6 wall cavities in most climate zones. R-13 is still used in some warmer zones or shallower wall cavities where R-19 batts won't physically fit without compressing (which reduces their effective R-value).",
  },
  {
    question: "Can you have too much R-value?",
    answer:
      "Practically, no — you don't lose performance by exceeding the recommended R-value, but you do hit diminishing financial returns. Each additional inch saves less energy than the one before it, so beyond the recommended range for your climate zone, the extra cost typically doesn't pay itself back as quickly.",
  },
  {
    question: "What's a good R-value for a home overall?",
    answer:
      "There isn't one single number — a \"good\" R-value depends on the assembly (attic vs. wall vs. floor) and your climate zone. Use the climate-zone table above as a general starting point, and treat air sealing as equally important; a well-sealed home with moderate R-value often outperforms a leaky home with a very high R-value.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function UnderstandingRValuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO — educational framing only, no CTA */}
      <Section band="base" className="pt-20 sm:pt-24">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Thermometer className="h-4 w-4" /> Understanding R-Value
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold leading-[1.1] text-foreground">
            Insulation R-Value, Explained in Plain English
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            You&apos;ve probably seen &quot;R-30&quot; or &quot;R-value&quot; on a bag of
            insulation and had no real sense of what it meant for your home. This guide breaks it
            down in plain language — what the number measures, how it varies by material, and how
            much your home actually needs based on where you live.
          </p>
        </FadeIn>
      </Section>

      {/* WHAT IS R-VALUE */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              What Is R-Value, Really?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              R-value measures a material&apos;s resistance to heat flow — how well it slows heat
              from moving through it. Think of your home&apos;s walls and attic in winter as
              constantly trying to leak warm indoor air out into the cold, and in summer as
              constantly trying to let hot outdoor air in. Insulation resists that flow. The
              higher the R-value, the stronger that resistance, and the slower heat moves through.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              R-value is cumulative and additive — two layers of R-15 insulation give you roughly
              R-30 total. It&apos;s also specific to the material and its installed thickness,
              which is why the same material at different depths carries a different total
              R-value, and why different materials need different amounts of depth to reach the
              same number.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              One important caveat: R-value only measures resistance to conductive heat flow. It
              doesn&apos;t measure air leakage. A home can have a high R-value and still lose
              significant energy through gaps, cracks, and poorly sealed penetrations — which is
              part of why materials like spray foam that air-seal and insulate at once have become
              popular despite costing more per inch.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/r-value-comparison-materials.jpg"
              alt="A side-by-side comparison of different insulation material samples showing varying thickness"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* R-VALUE CHART BY MATERIAL */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            R-Value Per Inch, by Material
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This is why some materials need much less depth than others to hit the same target.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-4 pl-5 pr-4 font-semibold">Material</th>
                <th className="py-4 pl-4 pr-5 font-semibold">R-Value Per Inch</th>
              </tr>
            </thead>
            <tbody>
              {R_VALUE_CHART.map((row) => (
                <tr key={row.material} className="border-b border-border last:border-0">
                  <td className="py-4 pl-5 pr-4 font-semibold text-foreground">{row.material}</td>
                  <td className="py-4 pl-4 pr-5 text-muted-foreground">{row.perInch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want the full pros-and-cons breakdown for each of these materials?{" "}
          <Link href="/types-of-insulation" className="font-semibold text-primary hover:underline">
            See the Types of Insulation guide →
          </Link>
        </p>
      </Section>

      {/* HOW MUCH DO YOU NEED — CLIMATE ZONE TABLE */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-2 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
            <Map className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            How Much R-Value Do You Actually Need?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            General guidance based on DOE and ENERGY STAR climate-zone recommendations. Local
            building codes can set different minimums, so treat this as a starting point for the
            conversation, not a final number.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-4 pl-5 pr-4 font-semibold">Climate Zone</th>
                <th className="py-4 px-4 font-semibold">Attic</th>
                <th className="py-4 px-4 font-semibold">Wall</th>
                <th className="py-4 pl-4 pr-5 font-semibold">Floor / Crawl Space</th>
              </tr>
            </thead>
            <tbody>
              {CLIMATE_ZONES.map((row) => (
                <tr key={row.zone} className="border-b border-border last:border-0">
                  <td className="py-4 pl-5 pr-4 font-semibold text-foreground">{row.zone}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.attic}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.wall}</td>
                  <td className="py-4 pl-4 pr-5 text-muted-foreground">{row.floor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Section>

      {/* ATTIC SPECIFICS */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Attic R-Value Specifics
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Is R-30 enough for an attic?
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                It depends on your climate zone. R-30 satisfies the general guidance in the
                hottest zones, but most of the country now falls into the R-38 to R-60 range. If
                your attic is currently at R-30 and you&apos;re in a colder zone, you&apos;re
                likely under-insulated relative to current recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Is R-13 or R-19 better?
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                R-19 resists heat flow more effectively than R-13 — higher is better, all else
                equal. R-13 shows up mainly where cavity depth is limited (a shallow 2x4 wall) or
                in warmer climate zones where the extra R-value from R-19 isn&apos;t worth the
                added cost or the compression issues that come with forcing too-thick batts into a
                too-shallow cavity.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Can you have too much R-value?
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Not in a way that hurts performance — but the financial return diminishes fast.
                Going from R-0 to R-30 saves dramatically more energy than going from R-30 to
                R-60. Past your climate zone&apos;s recommended range, extra insulation usually
                isn&apos;t the best next dollar spent on efficiency (air sealing often is).
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* WALL SPECIFICS */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Wall R-Value Specifics
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Standard 2x4 walls typically max out around R-13 to R-15 with fiberglass batts simply
            because of cavity depth — you&apos;d need a foam product to get higher R-value in the
            same space. 2x6 construction (common in colder climates and some newer builds) allows
            for R-19 to R-21 batts. If you want more than your framing depth allows, continuous
            exterior rigid foam board is the typical way to add R-value without gutting interior
            walls.
          </p>
        </FadeIn>
      </Section>

      {/* CHECKING CURRENT R-VALUE / THICKNESS CHART */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-2 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
            <Ruler className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            How to Check Your Current R-Value
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            In an accessible attic, you can often estimate your current R-value just by measuring
            the depth of the insulation and matching it to the material.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-4 pl-5 pr-4 font-semibold">Material (approx. R/inch)</th>
                <th className="py-4 px-4 font-semibold">Depth for R-30</th>
                <th className="py-4 px-4 font-semibold">Depth for R-38</th>
                <th className="py-4 pl-4 pr-5 font-semibold">Depth for R-49</th>
              </tr>
            </thead>
            <tbody>
              {THICKNESS.map((row) => (
                <tr key={row.material} className="border-b border-border last:border-0">
                  <td className="py-4 pl-5 pr-4 font-semibold text-foreground">{row.material}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.r30}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.r38}</td>
                  <td className="py-4 pl-4 pr-5 text-muted-foreground">{row.r49}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Depth alone won&apos;t tell you about settling, compression, or gaps — the things that
          quietly reduce real-world performance below the rated R-value. If you&apos;re seeing
          uneven temperatures, high bills, or it&apos;s been over 15 years since your last
          insulation upgrade, that&apos;s worth having assessed in person.
        </p>
      </Section>

      {/* R-VALUE AND COST BRIDGE */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <DollarSign className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            R-Value and Cost Trade-Offs
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Higher R-value per inch usually costs more per inch, too — closed-cell spray foam has
            nearly double the R-value per inch of fiberglass, but it also costs several times more
            per square foot installed. The right balance depends on how much depth you have
            available and your budget, not just the highest number on the chart.
          </p>
          <Link
            href="/insulation-cost-and-roi"
            className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            See the full cost breakdown by material <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <HelpCircle className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FadeIn className="mt-10">
          <FAQAccordion items={FAQS} />
        </FadeIn>
      </Section>

      {/* CROSS-LINKS */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/types-of-insulation"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Layers className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                Types of Insulation Explained
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Every material, honestly compared.
              </p>
            </Link>
            <Link
              href="/insulation-cost-and-roi"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <DollarSign className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                Insulation Cost & ROI
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Real cost ranges and the federal tax credit.
              </p>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Not Sure What R-Value Your Home Currently Has?
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            A vetted local installer can assess your current insulation and tell you exactly what
            it would take to reach the recommended level for your climate zone.
          </p>
          <div className="mt-8">
            <Button href="/get-matched" size="lg" variant="secondary" icon={ArrowRight}>
              Get Matched with a Vetted, Insured Contractor
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
