"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AEOFields } from "./AEOFields";

const PROJECT_TYPES = [
  "New Insulation Installation",
  "Replacing Old Insulation",
  "Attic",
  "Walls",
  "Crawl Space / Basement",
  "Not Sure — Need Advice",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function LeadForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { "form-name": "quote" };
    formData.forEach((v, k) => (data[k] = String(v)));

    if (data["company"]) {
      setStatus("done");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accentDark" />
        <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
          You&apos;re all set.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll match you with a vetted, insured insulation contractor and reach out
          shortly. No spam, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value="quote" />
      <div className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <AEOFields />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Jordan Homeowner"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="project_type" className="mb-1.5 block text-sm font-medium text-foreground">
            Project Type
          </label>
          <select
            id="project_type"
            name="project_type"
            required
            defaultValue=""
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="street_address" className="mb-1.5 block text-sm font-medium text-foreground">Job / property address</label>
          <input id="street_address" name="street_address" type="text" required autoComplete="address-line1" className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">City</label>
          <input id="city" name="city" type="text" required autoComplete="address-level2" className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <div>
          <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-foreground">State</label>
          <select id="state" name="state" required defaultValue="" autoComplete="address-level1" className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option value="" disabled>Select a state</option><option key="AL" value="AL">Alabama</option><option key="AK" value="AK">Alaska</option><option key="AZ" value="AZ">Arizona</option><option key="AR" value="AR">Arkansas</option><option key="CA" value="CA">California</option><option key="CO" value="CO">Colorado</option><option key="CT" value="CT">Connecticut</option><option key="DE" value="DE">Delaware</option><option key="DC" value="DC">District of Columbia</option><option key="FL" value="FL">Florida</option><option key="GA" value="GA">Georgia</option><option key="HI" value="HI">Hawaii</option><option key="ID" value="ID">Idaho</option><option key="IL" value="IL">Illinois</option><option key="IN" value="IN">Indiana</option><option key="IA" value="IA">Iowa</option><option key="KS" value="KS">Kansas</option><option key="KY" value="KY">Kentucky</option><option key="LA" value="LA">Louisiana</option><option key="ME" value="ME">Maine</option><option key="MD" value="MD">Maryland</option><option key="MA" value="MA">Massachusetts</option><option key="MI" value="MI">Michigan</option><option key="MN" value="MN">Minnesota</option><option key="MS" value="MS">Mississippi</option><option key="MO" value="MO">Missouri</option><option key="MT" value="MT">Montana</option><option key="NE" value="NE">Nebraska</option><option key="NV" value="NV">Nevada</option><option key="NH" value="NH">New Hampshire</option><option key="NJ" value="NJ">New Jersey</option><option key="NM" value="NM">New Mexico</option><option key="NY" value="NY">New York</option><option key="NC" value="NC">North Carolina</option><option key="ND" value="ND">North Dakota</option><option key="OH" value="OH">Ohio</option><option key="OK" value="OK">Oklahoma</option><option key="OR" value="OR">Oregon</option><option key="PA" value="PA">Pennsylvania</option><option key="RI" value="RI">Rhode Island</option><option key="SC" value="SC">South Carolina</option><option key="SD" value="SD">South Dakota</option><option key="TN" value="TN">Tennessee</option><option key="TX" value="TX">Texas</option><option key="UT" value="UT">Utah</option><option key="VT" value="VT">Vermont</option><option key="VA" value="VA">Virginia</option><option key="WA" value="WA">Washington</option><option key="WV" value="WV">West Virginia</option><option key="WI" value="WI">Wisconsin</option><option key="WY" value="WY">Wyoming</option>
          </select>
        </div>
        <div>
          <label htmlFor="zip" className="mb-1.5 block text-sm font-medium text-foreground">ZIP Code</label>
          <input id="zip" name="zip" type="text" required autoComplete="postal-code" inputMode="numeric" pattern="\\d{5}(-\\d{4})?" maxLength={10} className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primaryDark transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Get Matched with a Vetted Contractor
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">
          Something went wrong. Please call us at 844-967-5247 instead.
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        No spam. No obligation. Just a job done right.
      </p>
    </form>
  );
}
