import type { Metadata } from "next";
import { ShieldCheck, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Matched with a Vetted, Insured Insulation Contractor",
  description:
    "Skip the guesswork. Get matched with a vetted, insured insulation contractor near you — free, no obligation, backed by Contractors Choice Agency.",
  alternates: { canonical: "/get-matched" },
};

const STEPS = [
  { title: "Tell Us About Your Project", description: "Attic, wall, crawl space, or whole-house — and which material you're leaning toward, if any." },
  { title: "We Match You", description: "We connect you with a vetted, insured insulation contractor in your area." },
  { title: "Get Your Quote", description: "The contractor assesses the job and gives you a real number. No pressure, no obligation." },
];

const FAQS = [
  {
    question: "Does this cost anything?",
    answer:
      "No. Getting matched with a contractor is free, and you're never obligated to hire anyone we introduce you to.",
  },
  {
    question: "How fast will I hear back?",
    answer:
      "We work to connect you with a contractor as quickly as possible. Response times vary by location and contractor availability.",
  },
  {
    question: "What if I'm not sure what insulation I need?",
    answer:
      "That's fine — that's exactly what this guide and the matching process are for. \"Not sure yet\" is a completely normal answer on the form, and a good contractor will help you figure it out during the assessment.",
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

export default function GetMatchedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Section band="charcoal" className="pb-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
            <ShieldCheck className="h-4 w-4 text-accent" /> Free. No obligation.
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground">
            Get Matched with a Vetted, Insured Insulation Contractor
          </h1>
          <p className="mt-5 text-charcoal-foreground/80 leading-relaxed">
            Skip the guesswork. Tell us about your project and we&apos;ll connect you with a
            licensed, insured contractor from CCA&apos;s network.
          </p>
        </FadeIn>
      </Section>

      <Section band="base" className="pt-0 -mt-8">
        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-md">
          <LeadForm />
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground">How It Works</h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center">
            What &quot;Vetted and Insured&quot; Actually Means
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">
            Every contractor in CCA&apos;s network is checked for proper licensing and insurance
            coverage before joining — not a vague badge, a real verification step. As an
            insurance agency, contractor coverage is something we&apos;re actually positioned to
            confirm.
          </p>
          <ul className="mt-8 inline-flex flex-col gap-2 text-left mx-auto">
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> License verified before you ever hear from them
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> General liability &amp; workers&apos; comp confirmed
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> You still make the final call — no obligation to hire
            </li>
          </ul>
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Frequently Asked Questions</h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold text-charcoal-foreground">
            Prefer to talk it through first?
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal-foreground/90 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {HQ_ADDRESS}
            </span>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
