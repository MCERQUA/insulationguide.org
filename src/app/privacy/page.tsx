import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { EMAIL, PHONE_DISPLAY, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How InsulationGuide collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section band="base" className="pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold text-foreground">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-3">
              When you submit our Get Matched or Contact forms, we collect the information you
              provide directly: name, phone number, email address, and project details. We do
              not collect information about you from other sources.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p className="mt-3">
              Information submitted through the Get Matched form is used solely to connect you
              with a vetted, insured insulation contractor from the Contractors Choice Agency
              network. Information submitted through the Contact form is used only to respond to
              your message. We do not sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Cookies</h2>
            <p className="mt-3">
              We use minimal, functional cookies necessary for the site to operate. We do not
              use cookies for cross-site advertising.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Your Rights</h2>
            <p className="mt-3">
              You may request that we delete any information you&apos;ve submitted at any time by
              contacting us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2">
                {EMAIL}
              </a>{" "}
              or {PHONE_DISPLAY}.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">InsulationGuide is operated by Contractors Choice Agency, {HQ_ADDRESS}.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
