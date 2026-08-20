import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  ArrowRight,
  Layers,
  Thermometer,
  Wrench,
  TrendingDown,
  Trash2,
  Percent,
  Settings,
  HelpCircle,
  Home,
  Building2,
  Warehouse,
  Boxes,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: "Insulation Cost Guide 2026: Price Per Sq Ft, Whole-House Estimates & ROI",
  description:
    "Real insulation cost ranges by material and project — attic, walls, crawl space, and whole-house — plus ROI, the federal tax credit, and what drives your quote.",
  alternates: { canonical: "/insulation-cost-and-roi" },
};

const COST_PER_SQFT = [
  { material: "Fiberglass (batts)", low: "$1.00", high: "$2.00" },
  { material: "Cellulose (blown-in)", low: "$1.00", high: "$2.20" },
  { material: "Open-cell spray foam", low: "$1.50", high: "$3.00" },
  { material: "Closed-cell spray foam", low: "$3.00", high: "$5.50" },
  { material: "Rigid foam board", low: "$1.50", high: "$3.50" },
  { material: "Mineral wool", low: "$1.80", high: "$3.00" },
];

const ROOM_COSTS = [
  { icon: Home, name: "Attic", range: "$1,500 – $4,000", note: "Usually the highest-ROI project in the home." },
  { icon: Building2, name: "Walls (whole-house retrofit)", range: "$3,000 – $7,000", note: "Dense-pack blown-in through drilled access holes." },
  { icon: Warehouse, name: "Crawl Space", range: "$1,500 – $4,500", note: "Cost climbs with moisture control / encapsulation." },
  { icon: Boxes, name: "Basement", range: "$2,000 – $5,500", note: "Rigid foam or spray foam against foundation walls." },
];

const FAQS = [
  {
    question: "How much does it cost to insulate a 1,000 sq ft attic?",
    answer:
      "A typical 1,000 sq ft attic runs roughly $1,500 to $3,500 with blown-in fiberglass or cellulose, depending on your target R-value, current insulation levels, and accessibility. Spray foam applications run considerably higher — often $3,000 to $7,000+ for the same footprint.",
  },
  {
    question: "How much does spray foam insulation cost?",
    answer:
      "Spray foam typically runs $1.50 to $3.00 per square foot for open-cell and $3.00 to $5.50 per square foot for closed-cell, installed. A full project cost depends heavily on square footage, foam thickness, and accessibility — a real quote from a local installer is the only way to get an accurate number for your home.",
  },
  {
    question: "Is there a federal tax credit for insulation?",
    answer:
      "Yes, generally — the federal Energy Efficient Home Improvement Credit (Section 25C) has allowed homeowners to claim a percentage of the cost of qualifying insulation materials, subject to an annual cap. Program details, percentages, and caps can change year to year, so check ENERGY STAR's current federal tax credit guidance or consult a tax professional before assuming a specific number applies to you.",
  },
  {
    question: "What's the payback period on new insulation?",
    answer:
      "It varies widely based on your climate, current insulation levels, energy costs, and the project itself, but a commonly cited range for attic insulation upgrades is roughly 3 to 7 years before the energy savings offset the upfront cost. Homes starting from very low or no insulation typically see faster payback than homes doing a smaller incremental upgrade.",
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

export default function InsulationCostAndRoiPage() {
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
            <DollarSign className="h-4 w-4" /> Insulation Cost & ROI
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold leading-[1.1] text-foreground">
            What Insulation Actually Costs
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Insulation cost varies more than most homeowners expect — not just by material, but by
            your target R-value, home size, how accessible the space is, and whether old
            insulation needs to come out first. This guide breaks down real cost ranges by
            material and by project, plus the ROI, the federal tax credit, and what actually moves
            your quote up or down.
          </p>
        </FadeIn>
      </Section>

      {/* COST PER SQ FT BY MATERIAL */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Cost Per Square Foot by Material
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Installed cost ranges (materials + professional labor). Actual pricing varies by
            region and project specifics.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-4 pl-5 pr-4 font-semibold">Material</th>
                <th className="py-4 px-4 font-semibold">Low Range</th>
                <th className="py-4 pl-4 pr-5 font-semibold">High Range</th>
              </tr>
            </thead>
            <tbody>
              {COST_PER_SQFT.map((row) => (
                <tr key={row.material} className="border-b border-border last:border-0">
                  <td className="py-4 pl-5 pr-4 font-semibold text-foreground">{row.material}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.low} / sq ft</td>
                  <td className="py-4 pl-4 pr-5 text-muted-foreground">{row.high} / sq ft</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want to understand why the higher-cost materials perform differently?{" "}
          <Link href="/types-of-insulation" className="font-semibold text-primary hover:underline">
            See the full Types of Insulation guide →
          </Link>
        </p>
      </Section>

      {/* WHOLE-HOUSE / BY-ROOM ESTIMATES */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Whole-House & By-Room Cost Estimates
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Typical project cost ranges for common home sizes. A full whole-house insulation
            project (new construction level, all areas) generally runs $6,000 to $16,000+
            depending on materials chosen and home size.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOM_COSTS.map((r) => (
            <StaggerItem key={r.name}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <r.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {r.name}
                </h3>
                <p className="mt-2 text-2xl font-heading font-semibold text-accent-dark">
                  {r.range}
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* DIY VS PRO COST DELTA */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <Wrench className="h-6 w-6 shrink-0 text-primary mt-1" />
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                DIY vs. Professional Cost Delta
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Professional installation labor typically adds a significant premium over
                materials-only DIY costs — often the difference between paying roughly 40-60% of
                the installed price for materials alone versus the full installed rate with labor
                included. That delta is real, but it&apos;s only half the decision — the other
                half is whether the specific job is one you can safely and effectively do
                yourself.
              </p>
              <Link
                href="/diy-vs-professional-installation"
                className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
              >
                See the full DIY vs. professional decision framework <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* REMOVAL COST */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <Trash2 className="h-6 w-6 shrink-0 text-primary mt-1" />
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Insulation Removal Cost
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Old, contaminated, or damaged insulation (rodent activity, water damage, mold, or
                older materials that may contain asbestos) sometimes needs to come out before new
                insulation goes in — and that&apos;s a distinct cost category from the installation
                itself. Removal costs vary widely based on the extent of contamination and whether
                specialized handling is required, and it&apos;s common for removal to add
                meaningfully to an otherwise straightforward attic or wall project. If your home
                hasn&apos;t had its insulation touched in decades, ask any contractor you talk to
                whether removal is likely to be part of your project before you compare quotes.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ROI / PAYBACK */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <FadeIn>
            <div className="h-full rounded-2xl bg-charcoal p-8 text-charcoal-foreground">
              <TrendingDown className="h-8 w-8 text-accent" />
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold">
                ROI, Payback Period & Energy Savings
              </h2>
              <p className="mt-4 text-charcoal-foreground/85 leading-relaxed">
                Insulation upgrades pay back over time through lower heating and cooling bills —
                but the exact savings depend on your starting point, climate, energy prices, and
                how leaky the rest of your home is. Homes going from very low or no insulation to
                a recommended level tend to see the largest percentage savings on energy bills.
                Homes making a smaller incremental upgrade (say, R-30 to R-49) see real but more
                modest gains.
              </p>
              <p className="mt-4 text-charcoal-foreground/85 leading-relaxed">
                A commonly cited realistic payback window for attic insulation upgrades is roughly
                3 to 7 years, though this isn&apos;t a guarantee — treat any specific savings
                estimate you receive as a projection based on assumptions, not a promise.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <Percent className="h-8 w-8 text-primary" />
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-foreground">
                Federal Tax Credit & Rebates
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The federal Energy Efficient Home Improvement Credit (Section 25C) has generally
                allowed homeowners to claim a percentage of the cost of qualifying insulation
                materials, subject to an annual cap that applies across several efficiency
                categories combined.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Program details, percentages, and caps can change from year to year, and separate
                utility or state-level rebates are sometimes available on top of the federal
                credit. Check ENERGY STAR&apos;s current federal tax credit page and your local
                utility&apos;s rebate programs for exact, up-to-date figures, and confirm eligibility
                with a tax professional before you rely on a specific dollar amount.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* WHAT DRIVES YOUR QUOTE — followed by CTA #1 */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Settings className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            What Drives Your Specific Quote Up or Down
          </h2>
        </FadeIn>
        <FadeIn className="mt-10 mx-auto max-w-3xl">
          <ul className="space-y-4">
            {[
              { label: "Accessibility", body: "A cramped attic, low crawl space, or hard-to-reach walls means more labor time — and higher cost — than an open, walkable attic." },
              { label: "Existing insulation removal", body: "Contaminated or damaged insulation that needs to come out first adds a separate cost line before new material even goes in." },
              { label: "Attic or wall prep", body: "Air sealing, baffle installation (to maintain roof ventilation), and blocking around fixtures all take time that shows up in the final price." },
              { label: "Home age and construction", body: "Older homes often have irregular framing, knob-and-tube wiring concerns, or non-standard cavity depths that complicate a straightforward install." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-muted-foreground">
            The only way to know your real number is a quote based on your actual home.
          </p>
          <div className="mt-6 text-center">
            <Button href="/get-matched" size="lg" icon={ArrowRight}>
              Get Matched with a Vetted, Insured Contractor
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section band="tan">
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
      <Section band="base">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/types-of-insulation"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Layers className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                Types of Insulation Explained
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Compare every material honestly.
              </p>
            </Link>
            <Link
              href="/understanding-r-value"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Thermometer className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                Understanding R-Value
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                What that number means and how much you need.
              </p>
            </Link>
            <Link
              href="/diy-vs-professional-installation"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Wrench className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                DIY vs. Professional
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The risk side of the cost equation.
              </p>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* FINAL CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <DollarSign className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            See What Insulation Actually Costs for Your Home
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            Get matched with a vetted, insured local contractor for a real quote — free, no
            obligation.
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
