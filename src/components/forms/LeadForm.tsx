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
