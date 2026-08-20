import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  XCircle,
  Wrench,
  ShieldCheck,
  Thermometer,
  DollarSign,
  ArrowRight,
  Volume2,
  Home,
  Building2,
  Warehouse,
  Boxes,
  Leaf,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: "Types of Insulation Explained: Fiberglass, Spray Foam, Cellulose & More",
  description:
    "A complete, neutral guide to every insulation type — R-value, cost tier, DIY vs. pro, and honest pros/cons for fiberglass, spray foam, cellulose, mineral wool, and eco-friendly options.",
  alternates: { canonical: "/types-of-insulation" },
};

const MATERIALS = [
  {
    name: "Fiberglass",
    image: "/images/fiberglass-batt-insulation.jpg",
    alt: "Pink fiberglass batt insulation installed between wall studs",
    madeOf:
      "Extremely fine strands of spun glass, sold as batts/rolls or as loose-fill for blown-in applications.",
    rValue: "R-2.9 to R-3.8 per inch (batts); R-2.2 to R-2.7 per inch (blown-in loose-fill)",
    bestFor: "Standard stud-bay walls, attic floors, floors over unheated spaces.",
    skill: "DIY-friendly",
    cost: "$ (lowest cost tier)",
    pros: [
      "Widely available and generally the least expensive option per square foot",
      "Non-combustible and won't absorb moisture the way some organic materials can",
      "Batts are cut to fit standard stud and joist spacing, making them approachable for a first DIY project",
    ],
    cons: [
      "Doesn't seal air leaks on its own — gaps and compression reduce real-world performance well below the rated R-value",
      "Fibers can irritate skin, eyes, and lungs during handling, so proper PPE matters",
      "Lower R-value per inch than foam options, so it needs more depth to hit the same target",
    ],
  },
  {
    name: "Cellulose",
    image: "/images/blown-in-cellulose-insulation.jpg",
    alt: "Blown-in cellulose insulation filling an attic floor between joists",
    madeOf:
      "Mostly recycled paper fiber (often 80%+ post-consumer newsprint), treated with borate compounds for fire and pest resistance.",
    rValue: "R-3.2 to R-3.8 per inch (dense-packed or loose-fill, blown-in)",
    bestFor:
      "Attic floors, retrofitting closed existing walls (dense-packed through small drilled holes), open new-construction wall cavities.",
    skill: "DIY-friendly with a rented blower",
    cost: "$$",
    pros: [
      "High recycled content and one of the more genuinely eco-friendly mainstream options",
      "Settles into irregular spaces and around obstructions better than batts",
      "Dense-packing does a reasonable job reducing air infiltration compared to loose fiberglass",
    ],
    cons: [
      "Can settle and lose some loft (and R-value) over time if not installed at the right density",
      "Absorbs and holds moisture more than fiberglass, which is a concern in humid climates or leak-prone areas",
      "Blown-in equipment rental and cleanup add friction to a DIY attempt",
    ],
  },
  {
    name: "Spray Foam",
    image: "/images/spray-foam-application.jpg",
    alt: "A contractor spray-applying polyurethane foam insulation to a roof deck",
    madeOf:
      "Liquid polyurethane components (a resin and an isocyanate) that react and expand on contact, curing into a rigid or semi-rigid foam.",
    rValue:
      "Open-cell: R-3.5 to R-3.6 per inch. Closed-cell: R-6.0 to R-7.0 per inch.",
    bestFor:
      "Rim joists, hard-to-reach cavities, roof decks (unvented assemblies), and anywhere air sealing matters as much as R-value.",
    skill: "Professional-only",
    cost: "$$$ to $$$$",
    pros: [
      "Air-seals and insulates in a single step — no other material does both at once as effectively",
      "Closed-cell foam has the highest R-value per inch of any common insulation, useful in space-limited cavities",
      "Adds meaningful structural rigidity (closed-cell) and a degree of moisture resistance",
    ],
    cons: [
      "The most expensive option per square foot by a wide margin",
      "Mixing ratios, temperature, and application technique all have to be right — installation quality is the single biggest variable in how it performs and off-gasses",
      "Once cured and covered, it's difficult and costly to remove if a problem is found later",
    ],
    sub: {
      heading: "Open-cell vs. closed-cell, in short",
      body: "Open-cell foam is softer, less expensive, and more vapor-permeable — often used on interior walls and roof decks where a vapor barrier isn't the goal. Closed-cell foam is denser, roughly double the R-value per inch, and acts as its own vapor barrier and rigid air/moisture seal — the usual choice for rim joists, below-grade walls, and tight cavities where every inch of depth counts.",
    },
  },
  {
    name: "Rigid Foam Board",
    image: "/images/rigid-foam-board-insulation.jpg",
    alt: "Rigid foam board insulation panels installed against a foundation wall",
    madeOf:
      "Panels of expanded polystyrene (EPS), extruded polystyrene (XPS), or polyisocyanurate (polyiso), cut to size and fastened or adhered in place.",
    rValue: "R-3.8 to R-4.4 per inch (EPS/XPS); up to R-6 to R-6.5 per inch (polyiso)",
    bestFor:
      "Basement and foundation walls, exterior continuous insulation, unvented low-slope roofs, garage doors.",
    skill: "DIY-friendly",
    cost: "$$",
    pros: [
      "High R-value per inch relative to fiberglass or cellulose, useful where wall depth is limited",
      "Rigid panels are straightforward to measure, cut, and install with basic tools",
      "Naturally resists moisture better than fibrous materials, which is valuable below grade",
    ],
    cons: [
      "Seams between panels need to be taped or sealed or you lose much of the air-sealing benefit",
      "Doesn't conform to irregular spaces or obstructions the way loose-fill materials do",
      "Some types require a fire-rated cover (like drywall) when used on interior living spaces per code",
    ],
  },
  {
    name: "Mineral Wool",
    image: "/images/r-value-comparison-materials.jpg",
    alt: "Rock wool mineral wool insulation batts stacked for installation",
    madeOf:
      "Spun rock (basalt) or industrial slag fibers, sold as batts, rolls, or rigid boards.",
    rValue: "R-3.0 to R-3.3 per inch",
    bestFor:
      "Fire-rated wall and floor assemblies, acoustic/soundproofing applications, standard stud walls.",
    skill: "DIY-friendly",
    cost: "$$$",
    pros: [
      "Naturally fire-resistant — rock wool can withstand extremely high temperatures without supporting combustion",
      "Denser than fiberglass, which makes it noticeably better at blocking sound transmission",
      "Water-repellent and won't wick moisture the way cellulose can",
    ],
    cons: [
      "Costs more than fiberglass for a similar R-value",
      "Heavier and denser, which can make cutting and fitting slightly more physical work",
      "Less widely stocked at big-box retailers than fiberglass, so sourcing can take extra steps",
    ],
  },
];

const SPECIALTY = [
  {
    icon: Leaf,
    name: "Radiant Barrier",
    body: "A reflective foil-faced material installed in attics to reflect radiant heat rather than absorb it. It doesn't add much R-value on its own, but in hot climates it can meaningfully reduce attic heat gain when paired with standard insulation underneath.",
  },
  {
    icon: Leaf,
    name: "Sheep Wool",
    body: "A natural fiber insulation that can absorb and release moisture without losing insulating performance, and it's naturally fire-resistant without heavy chemical treatment. It costs more than mainstream options and is harder to find locally.",
  },
  {
    icon: Leaf,
    name: "Recycled Denim (Cotton)",
    body: "Made from post-industrial cotton and denim scraps, treated with borate for fire and pest resistance. No fiberglass-style itch during handling and no VOCs, which makes it appealing for DIYers sensitive to standard batts — at a premium cost.",
  },
];

const LOCATIONS = [
  {
    icon: Home,
    name: "Attic",
    body: "The highest-ROI place to insulate in most homes. Blown-in cellulose or fiberglass are the most common choices for open attic floors; spray foam or rigid foam are used when the roof deck itself is being insulated (a \"conditioned attic\") instead of the floor.",
  },
  {
    icon: Building2,
    name: "Walls",
    body: "New-construction or open walls take batts, blown-in loose-fill, or spray foam. Existing finished walls usually call for dense-packed cellulose or fiberglass blown in through small drilled holes — a job that's realistically professional territory.",
  },
  {
    icon: Warehouse,
    name: "Crawl Space",
    body: "Moisture control matters as much as R-value here. Rigid foam board on the walls (as part of a sealed/encapsulated crawl space) is increasingly preferred over batts between the floor joists, which can sag and let air through over time.",
  },
  {
    icon: Boxes,
    name: "Basement",
    body: "Rigid foam board against foundation walls handles the moisture-prone below-grade environment better than fibrous batts. Closed-cell spray foam is a common upgrade where budget allows, since it insulates and air-seals masonry in one step.",
  },
];

const COMPARISON = [
  { material: "Fiberglass Batts", rValue: "R-2.9–R-3.8", diy: "Yes", cost: "$", bestFor: "Standard stud cavities, budget-conscious projects" },
  { material: "Cellulose (Blown-In)", rValue: "R-3.2–R-3.8", diy: "Yes (rented blower)", cost: "$$", bestFor: "Attic floors, retrofitting closed walls" },
  { material: "Open-Cell Spray Foam", rValue: "R-3.5–R-3.6", diy: "No", cost: "$$$", bestFor: "Air sealing, roof decks, interior cavities" },
  { material: "Closed-Cell Spray Foam", rValue: "R-6.0–R-7.0", diy: "No", cost: "$$$$", bestFor: "Rim joists, tight cavities, below-grade walls" },
  { material: "Rigid Foam Board", rValue: "R-3.8–R-6.5", diy: "Yes", cost: "$$", bestFor: "Basements, exterior continuous insulation" },
  { material: "Mineral Wool", rValue: "R-3.0–R-3.3", diy: "Yes", cost: "$$$", bestFor: "Fire-rated assemblies, soundproofing" },
];

const FAQS = [
  {
    question: "What is the best insulation for an attic?",
    answer:
      "There's no single best choice — for an open attic floor, blown-in cellulose or fiberglass are the most common and cost-effective options because they settle around joists and obstructions easily. If you're insulating the roof deck itself (a conditioned attic), spray foam or rigid foam board is more typical because the space works differently.",
  },
  {
    question: "Is spray foam insulation worth it?",
    answer:
      "It depends on the application and your budget. Spray foam costs significantly more per square foot than fiberglass or cellulose, but it air-seals and insulates in one step and has the highest R-value per inch of any common material. It tends to be worth the premium in tight or leak-prone spaces (rim joists, roof decks, additions) rather than as a blanket choice for an entire home.",
  },
  {
    question: "Which insulation type is easiest to DIY?",
    answer:
      "Fiberglass batts and rigid foam board are generally the most approachable for a homeowner, since they're precut or easily cut with basic tools and don't require specialized equipment. Blown-in cellulose or fiberglass is doable with a rented blower for a straightforward attic top-up. Spray foam is not a realistic DIY project for most homeowners.",
  },
  {
    question: "Fiberglass vs. cellulose — which is actually better?",
    answer:
      "Neither is universally better. Fiberglass is typically less expensive and won't absorb moisture, while cellulose has higher recycled content, packs more densely (helping with air sealing), and fills irregular spaces well. In practice, many installers choose based on the specific application, local pricing, and climate rather than a fixed preference.",
  },
  {
    question: "Do I need special insulation for soundproofing?",
    answer:
      "Any insulation reduces some sound transmission compared to an empty wall cavity, but density matters most for acoustic performance. Mineral wool is generally the strongest standard option for blocking noise, with dense-packed cellulose a reasonable second choice.",
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

export default function TypesOfInsulationPage() {
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
            <Layers className="h-4 w-4" /> Types of Insulation
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold leading-[1.1] text-foreground">
            Types of Insulation Explained
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            There&apos;s no single &quot;best&quot; insulation. The right material for your home
            depends on where you&apos;re insulating, your climate, your budget, and how much of
            the work you want to take on yourself. This guide walks through every major type
            honestly — what it&apos;s made of, what it costs relative to the others, and the real
            pros and cons — so you can talk to a contractor (or take on a project yourself) with
            actual information instead of a sales pitch.
          </p>
        </FadeIn>
      </Section>

      {/* MAIN MATERIAL TYPES */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            The Main Insulation Types
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Five materials cover the vast majority of residential insulation projects. Each has a
            real place — the trade-offs are what matter.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-16">
          {MATERIALS.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.05}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={m.image} alt={m.alt} fill className="object-cover" />
                </div>
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {m.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">
                      {m.skill === "DIY-friendly" || m.skill.startsWith("DIY-friendly") ? (
                        <Wrench className="h-3.5 w-3.5" />
                      ) : (
                        <ShieldCheck className="h-3.5 w-3.5" />
                      )}
                      {m.skill}
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{m.madeOf}</p>

                  <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold text-foreground shrink-0">R-value/inch:</dt>
                      <dd className="text-muted-foreground">{m.rValue}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-foreground shrink-0">Relative cost:</dt>
                      <dd className="text-muted-foreground">{m.cost}</dd>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <dt className="font-semibold text-foreground shrink-0">Best for:</dt>
                      <dd className="text-muted-foreground">{m.bestFor}</dd>
                    </div>
                  </dl>

                  {m.sub && (
                    <div className="mt-4 rounded-lg border border-border bg-card p-4">
                      <p className="font-heading text-sm font-semibold text-foreground">
                        {m.sub.heading}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {m.sub.body}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      {m.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {m.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                          <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SPECIALTY / ECO-FRIENDLY */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Specialty & Eco-Friendly Options
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Beyond the five mainstream materials, a handful of specialty products come up
            regularly for homeowners who want lower VOCs, higher recycled content, or a specific
            performance edge.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SPECIALTY.map((s) => (
            <StaggerItem key={s.name}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* CHOOSING BY LOCATION */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Choosing by Location
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The right material often depends more on where in the house you&apos;re insulating
            than any single material&apos;s overall reputation.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LOCATIONS.map((l) => (
            <StaggerItem key={l.name}>
              <div className="h-full flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <l.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {l.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not sure how much R-value you need in each of these spaces?{" "}
          <Link href="/understanding-r-value" className="font-semibold text-primary hover:underline">
            See the full R-value chart by climate zone →
          </Link>
        </p>
      </Section>

      {/* SPRAY FOAM SAFETY / REPUTATION — trust-concern content followed immediately by CTA */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground text-center">
            Is Spray Foam Insulation Safe? Addressing the Reputation Questions Honestly
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed">
              Spray foam has picked up a mixed reputation — some homebuyers walk away from
              listings that mention it, some insurers ask extra questions about it, and there are
              real stories of homes needing spray foam removed. Those concerns are legitimate, but
              the material itself isn&apos;t usually the root cause.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                Installation quality is the actual variable that matters.
              </strong>{" "}
              Spray foam is a two-part chemical reaction happening on-site, in real time. If the
              mixing ratio is off, the substrate temperature is wrong, or ventilation during
              application is inadequate, the foam can cure improperly and off-gas longer than it
              should. Insurers scrutinize spray foam partly because improperly cured foam has
              caused real problems in a subset of homes — and partly because foam can hide roof
              decking or framing from a routine inspection, which is a legitimate concern
              regardless of how well the foam itself was applied.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              None of that means spray foam is a bad material — closed-cell foam in particular
              remains one of the most effective air-sealing and insulating products available. It
              means the installer matters as much as the product. A correctly mixed, properly
              ventilated, code-compliant spray foam job performs exactly as intended and doesn&apos;t
              carry the risks associated with the horror stories.
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-foreground font-medium">
              This is exactly why vetted, insured installation matters.
            </p>
            <div className="mt-5">
              <Button href="/get-matched" size="lg" icon={ArrowRight}>
                Get Matched with a Vetted, Insured Contractor
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ACOUSTIC CALLOUT */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <Volume2 className="h-6 w-6 shrink-0 text-primary mt-1" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Does insulation reduce noise?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Yes, to a degree — though R-value and sound-blocking (measured separately as STC,
                or Sound Transmission Class) aren&apos;t the same thing. Density is what matters
                most for noise, which is why mineral wool and dense-packed cellulose outperform
                standard fiberglass for acoustic purposes even at a similar R-value. If
                soundproofing is your main goal (a shared wall, a home office, a media room),
                factor that in separately from the R-value target.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* COMPARISON TABLE */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Quick Comparison
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Everything above, in one place.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-4 pl-5 pr-4 font-semibold">Material</th>
                <th className="py-4 px-4 font-semibold">R-Value / Inch</th>
                <th className="py-4 px-4 font-semibold">DIY-Friendly</th>
                <th className="py-4 px-4 font-semibold">Relative Cost</th>
                <th className="py-4 pl-4 pr-5 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.material} className="border-b border-border last:border-0">
                  <td className="py-4 pl-5 pr-4 font-semibold text-foreground">{row.material}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.rValue}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.diy}</td>
                  <td className="py-4 px-4 font-semibold text-primary">{row.cost}</td>
                  <td className="py-4 pl-4 pr-5 text-muted-foreground">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want real dollar figures instead of relative cost tiers?{" "}
          <Link href="/insulation-cost-and-roi" className="font-semibold text-primary hover:underline">
            See the full cost breakdown →
          </Link>
        </p>
      </Section>

      {/* FAQ */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FadeIn className="mt-10">
          <FAQAccordion items={FAQS} />
        </FadeIn>
      </Section>

      {/* CROSS-LINKS */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Keep Going
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/understanding-r-value"
              className="group rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Thermometer className="h-5 w-5 text-primary" />
              <p className="mt-3 font-heading font-semibold text-foreground">
                Understanding R-Value
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                What that number means and how much you actually need.
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
                Real cost ranges by material and by project.
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
                Which of these materials you can realistically install yourself.
              </p>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* FINAL CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Not Sure Which Material Is Right for Your Home?
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            A vetted, insured local contractor can assess your space and recommend the right
            material for your climate, budget, and goals — no pressure, no obligation.
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
