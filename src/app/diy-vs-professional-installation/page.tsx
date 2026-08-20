import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ArrowRight,
  Layers,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  ClipboardCheck,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: "DIY vs. Professional Insulation Installation: What You Can (and Can't) Do Yourself",
  description:
    "An honest breakdown of which insulation jobs are safe to DIY, which need a professional, and step-by-step guidance for the DIY-friendly ones.",
  alternates: { canonical: "/diy-vs-professional-installation" },
};

const DIY_FRIENDLY = [
  {
    name: "Fiberglass Batts",
    body: "Precut to standard stud and joist spacing, no special equipment required, and forgiving of minor mistakes. The most approachable material for a first insulation project.",
  },
  {
    name: "Rigid Foam Board",
    body: "Cuts with a utility knife or foam saw, straightforward to measure and fit against basement or foundation walls. Seams need careful taping to get the full air-sealing benefit.",
  },
  {
    name: "Loose-Fill with a Rented Blower",
    body: "Home-improvement stores often rent blower machines for cellulose or fiberglass loose-fill. A straightforward attic top-up over an already-insulated floor is a reasonable weekend DIY project.",
  },
];

const PRO_ONLY = [
  {
    name: "Spray Foam",
    body: "A real-time two-part chemical reaction that requires precise mixing ratios, temperature control, and proper ventilation. Getting it wrong can mean off-gassing, poor cure, and a costly redo — this is the clearest case for hiring a pro.",
  },
  {
    name: "Attic Blown-In at Scale",
    body: "A full attic from bare joists to target R-value (not a simple top-up) requires managing even density across a large area, maintaining soffit ventilation with baffles, and moving a lot of material efficiently — genuinely more involved than it looks.",
  },
  {
    name: "Crawl Space Encapsulation",
    body: "Combines insulation with vapor barriers and moisture control. Done wrong, it can trap moisture against wood framing and cause mold or rot — a bigger risk than most homeowners realize going in.",
  },
];

const CHECKLIST = [
  "The project involves spray foam of any kind",
  "You're insulating a crawl space that needs moisture/vapor control, not just insulation",
  "You're doing a whole attic from scratch, not a simple top-up over existing insulation",
  "You're not comfortable working in a hot, cramped attic for several hours at a stretch",
  "Your home has knob-and-tube wiring or other electrical concerns near the insulation area",
  "You suspect the existing insulation may be contaminated (mold, rodents, or older asbestos-era material)",
];

const FAQS = [
  {
    question: "What's the best way to install insulation yourself?",
    answer:
      "Start with the most forgiving materials — fiberglass batts in an open, accessible space, or rigid foam board against basement walls. Measure carefully, wear proper PPE (gloves, long sleeves, a respirator mask, and eye protection for fiberglass or cellulose), and avoid compressing batts, which reduces their effective R-value.",
  },
  {
    question: "What's the easiest type of insulation to DIY?",
    answer:
      "Fiberglass batts are generally considered the easiest for a first-time DIYer, since they're precut to standard framing dimensions and don't require special equipment. Rigid foam board is a close second for basement and foundation wall projects.",
  },
  {
    question: "Can you install insulation yourself and still be safe?",
    answer:
      "Yes, for the right projects — fiberglass batts, rigid foam board, and a simple attic top-up with a rented blower are all reasonable DIY undertakings with proper safety gear. Spray foam, large-scale attic blow-ins, and crawl space encapsulation carry real enough risk (chemical, structural, or moisture-related) that professional installation is the safer choice.",
  },
  {
    question: "Is it cheaper to install insulation yourself?",
    answer:
      "Materials-only DIY costs are typically lower than a fully installed professional price, since you're not paying for labor. But that savings only holds up if the job is done correctly — under-insulating, compressing batts, blocking attic ventilation, or trapping moisture can cost more to fix later than hiring a pro would have cost upfront.",
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

export default function DiyVsProfessionalPage() {
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
            <Wrench className="h-4 w-4" /> DIY vs. Professional
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold leading-[1.1] text-foreground">
            DIY vs. Professional Insulation Installation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            &quot;Can I do this myself?&quot; isn&apos;t really a yes-or-no question — it depends
            on which part of the job you&apos;re talking about. Some insulation projects are
            genuinely approachable for a homeowner with basic tools. Others carry real risk
            (chemical, structural, or moisture-related) that makes professional installation the
            smarter call. This guide breaks down which is which, honestly, with no pressure toward
            either answer.
          </p>
        </FadeIn>
      </Section>

      {/* WHAT YOU CAN REALISTICALLY DIY */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            What You Can Realistically DIY
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            These share a common thread: accessible, low-hazard, and forgiving of minor mistakes.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DIY_FRIENDLY.map((d) => (
            <StaggerItem key={d.name}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHAT'S PRO-ONLY */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            What&apos;s Professional-Only (and Why)
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Not scare tactics — just an honest look at where the risk genuinely outweighs the
            savings for most homeowners.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRO_ONLY.map((d) => (
            <StaggerItem key={d.name}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* STEP BY STEP: DIY ATTIC WITH BATTS */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <FadeIn className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              Step-by-Step: DIY Attic Insulation with Batts
            </h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="font-semibold text-foreground">1. Gather tools and safety gear</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Long sleeves, gloves, safety glasses, an N95 or better respirator mask, a
                  utility knife, a tape measure, and a headlamp. Fiberglass fibers irritate skin
                  and lungs — don&apos;t skip the PPE.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">2. Check for issues first</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Look for signs of roof leaks, pest activity, or existing damaged insulation
                  before adding new material on top. Address any of those first.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">3. Install baffles at the eaves</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Baffles keep soffit vents clear so air can still flow into the attic — burying
                  them defeats the point of roof ventilation and can cause moisture problems.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4. Lay batts perpendicular to joists</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  If you&apos;re adding a second layer over existing insulation, run it
                  perpendicular to the joists below to cover gaps and thermal bridging. Don&apos;t
                  compress batts to fit — compression reduces R-value.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">5. Work around fixtures carefully</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Keep insulation clear of non-IC-rated recessed lights and maintain any required
                  clearance around flues and chimneys per the manufacturer&apos;s instructions.
                </p>
              </div>
            </div>
            <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Common mistakes:</strong> compressing batts to
              stretch coverage, blocking soffit vents, leaving gaps around the attic hatch, and
              skipping air sealing before insulating (which insulation alone won&apos;t fix).
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-2 relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/diy-homeowner-installing-insulation.jpg"
              alt="A homeowner installing fiberglass batt insulation in an attic wearing safety gear"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* STEP BY STEP: DIY GARAGE */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Step-by-Step: DIY Garage Insulation
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A garage is one of the more approachable DIY projects since walls are usually open
            (unfinished) and easy to access.
          </p>
          <ol className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-heading font-semibold text-primary">1.</span>
              Measure stud bays and buy batts sized for your framing depth (2x4 vs. 2x6).
            </li>
            <li className="flex gap-3">
              <span className="font-heading font-semibold text-primary">2.</span>
              Cut batts to fit around outlets, wiring, and any bracing — friction-fit, don&apos;t
              force or compress.
            </li>
            <li className="flex gap-3">
              <span className="font-heading font-semibold text-primary">3.</span>
              Insulate the garage door with a rigid foam kit if it&apos;s attached to living
              space above or beside it.
            </li>
            <li className="flex gap-3">
              <span className="font-heading font-semibold text-primary">4.</span>
              Cover with drywall if code requires it for fire separation between an attached
              garage and living space — check your local code before skipping this step.
            </li>
          </ol>
        </FadeIn>
      </Section>

      {/* IS DIY SPRAY FOAM SAFE */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Is DIY Spray Foam Safe?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Small DIY spray foam kits do exist, marketed for sealing gaps and small cavities.
              For anything beyond a small crack-and-gap job, though, DIY spray foam carries real
              risk. The foam is a two-part chemical reaction — resin and isocyanate — that has to
              be mixed in the correct ratio and applied within the right temperature range and
              ventilation conditions. Get any of that wrong and the foam can cure improperly,
              leading to lingering off-gassing, a soft or shrinking cure, or a job that has to be
              torn out and redone.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This is the single clearest case for professional installation on this whole page.
              Contractors carry the right personal protective equipment, ventilation setup, and
              experience reading how the foam is curing in real time — none of which a one-time
              DIY kit reliably replicates.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* COST SAVINGS VS RISK */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            DIY Cost Savings vs. the Real Risk of Mistakes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Doing it yourself genuinely saves the labor portion of the cost — often a meaningful
            chunk of the total. But that savings only holds up if the job is done right. The
            realistic downside risks of a DIY mistake include:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Under-insulating without realizing it (compressed batts, gaps, or insufficient depth for your climate zone)",
              "Trapping moisture against framing, which can lead to mold or rot over months or years",
              "Blocking attic ventilation baffles, causing condensation and roof deck problems",
              "Fire-clearance or electrical-clearance mistakes around fixtures and flues",
              "Voiding a manufacturer warranty on materials installed outside the specified guidelines",
            ].map((risk) => (
              <li key={risk} className="flex items-start gap-2 text-sm text-foreground">
                <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            None of these are likely with the DIY-friendly materials and projects described above
            when done carefully. They become much more likely with the professional-only projects
            — which is exactly why that distinction matters.
          </p>
        </FadeIn>
      </Section>

      {/* CHECKLIST — followed immediately by CTA */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <ClipboardCheck className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            How to Tell Your Project Needs a Pro
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If any of these apply to your project, it&apos;s a strong signal to hire a
            professional rather than DIY it.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 mx-auto max-w-2xl">
          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-primary" />
                <span className="text-foreground text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn className="mt-8 text-center">
          <p className="text-foreground font-medium">
            If your project checked any of those boxes, get matched with a vetted, insured
            insulation contractor near you.
          </p>
          <div className="mt-6">
            <Button href="/get-matched" size="lg" icon={ArrowRight}>
              Get Matched with a Vetted, Insured Contractor
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* CONTRACTOR IMAGE / TRUST STRIP */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/contractor-professional-installation.jpg"
                alt="A professional contractor installing insulation in a home"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
                When the Job Calls for It, a Pro Is Worth It
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Hiring a professional isn&apos;t an admission that a project is too hard for
                you — it&apos;s a reasonable choice for the jobs where the equipment, chemical
                handling, or moisture-management expertise genuinely changes the outcome. A vetted,
                insured installer brings the experience to get those higher-risk jobs right the
                first time.
              </p>
            </div>
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
                See which materials are already flagged DIY-friendly vs. pro-only.
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
                The dollar side of the DIY-vs-pro decision.
              </p>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
