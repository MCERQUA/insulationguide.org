import type { Metadata } from "next";
import Image from "next/image";
import { Layers, ShieldCheck, Handshake, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About InsulationGuide",
  description:
    "InsulationGuide is an independent, neutral insulation education resource from Contractors Choice Agency — built to help you understand your options before you hire.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/r-value-comparison-materials.jpg"
            alt="A comparison of different insulation material samples"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-charcoal-foreground/70">Home / About</p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground">
              About InsulationGuide
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl space-y-6 text-foreground/90 leading-relaxed">
          <p>
            InsulationGuide is a resource from Contractors Choice Agency (CCA), an established
            agency that also operates a network of specialized insulation-industry properties —
            covering spray foam building science, post-install problem diagnosis, and regional
            removal services. This isn&apos;t a single-contractor site with a material to push;
            it&apos;s a genuinely broader vantage point on the insulation industry.
          </p>
          <p>
            We built this guide because most homeowners start researching insulation with four
            questions — what type, how much R-value, what it costs, and whether to DIY or hire
            someone — and most of what&apos;s out there online either sells a specific product or
            skips the practical details entirely. We wanted a start-here guide with no product to
            sell and no single material to push.
          </p>
        </FadeIn>
      </Section>

      <Section band="tan">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center">
              How We Stay Neutral
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FadeIn delay={0.05} className="text-center">
              <Layers className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">No Material to Sell</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We don&apos;t sell insulation, so there&apos;s no reason to steer you toward one
                material over another.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="text-center">
              <ShieldCheck className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">Verified, Not Just Claimed</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                CCA earns by connecting homeowners with vetted, insured contractors — a business
                model that rewards honesty, not upselling.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="text-center">
              <Handshake className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">No Pressure</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Getting matched is free, and you&apos;re never obligated to hire anyone we
                introduce you to.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal-foreground">
            Ready to get started?
          </h2>
          <Button href="/get-matched" variant="secondary" size="lg" className="mt-6" icon={ArrowRight}>
            Get Matched
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
