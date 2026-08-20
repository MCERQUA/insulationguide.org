import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for InsulationGuide.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section band="base" className="pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold text-foreground">Terms of Use</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Educational Purpose</h2>
            <p className="mt-3">
              InsulationGuide provides general educational information about home insulation
              types, R-value, cost, and installation methods. It is not professional engineering,
              construction, or insurance advice, and it does not endorse any specific
              manufacturer or product. Costs and figures referenced are general ranges, not
              quotes — always confirm specifics with a qualified contractor for your property.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">No Guarantee of Match</h2>
            <p className="mt-3">
              Submitting the Get Matched form does not guarantee you will be connected with a
              contractor, and does not obligate you to hire any contractor we introduce you to.
              Contractors Choice Agency reviews license and insurance documentation for
              contractors in its network but is not a party to, and is not liable for, any
              agreement you enter into with a contractor.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Third-Party References</h2>
            <p className="mt-3">
              This site may reference general industry data, government resources, and material
              categories for illustrative purposes. We do not control and are not responsible for
              the content, accuracy, or availability of external sites or products.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-3">
              InsulationGuide and Contractors Choice Agency are not liable for any damages arising
              from your use of this site, any DIY installation you perform based on this content,
              or your decision to hire any contractor, whether or not introduced through our
              matching service.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">Questions about these terms: {EMAIL} — {HQ_ADDRESS}.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
