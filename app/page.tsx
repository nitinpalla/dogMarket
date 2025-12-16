"use client";

import * as React from "react";
import { Accordion } from "@/components/Accordion";

const faqs = [
  {
    q: "Is this a medical service?",
    a: "No. We provide nutrition guidance and product recommendations. If your dog has a medical condition, consult your veterinarian first.",
  },
  {
    q: "Can you handle allergies or sensitive stomachs?",
    a: "Yes—tell us known triggers and symptoms. We’ll suggest ingredient filters and gentle transition steps.",
  },
  {
    q: "How fast do I get a plan?",
    a: "Typically within 24–48 hours for a first response, depending on volume.",
  },
  {
    q: "Do you sell food?",
    a: "You can choose: we can recommend products you can buy anywhere, or we can offer a curated bundle if/when you’re ready.",
  },
];

function Field({
  label,
  children,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="font-medium text-neutral-900">
        {label} {required ? <span className="text-neutral-500">(required)</span> : null}
      </label>
      {children}
      {hint ? <p className="text-sm text-neutral-500">{hint}</p> : null}
    </div>
  );
}

export default function Page() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const payload = { ...data, consent: data.consent === "on" };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const out = await res.json();
      if (!res.ok) throw new Error(out?.error || "Something went wrong");

      setStatus("success");
      setMsg("Submitted! We’ll reach out soon with next steps.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Submission failed.");
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-white border border-neutral-200 rounded-xl px-4 py-2 shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-neutral-900" aria-hidden="true" />
            <span className="font-semibold">PawFuel</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded" href="#how">
              How it works
            </a>
            <a className="hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded" href="#products">
              Products
            </a>
            <a className="hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href="#intake"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            Get a plan
          </a>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm text-neutral-600">Personalized dog nutrition—without the confusion.</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Food that fits your dog’s body, budget, and belly.</h1>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Tell us your dog’s age, weight, activity level, allergies, and goals. We’ll send a practical plan and product picks that are easy to follow—and easy to buy.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#intake"
                  className="rounded-xl bg-neutral-900 text-white px-5 py-3 font-medium text-center hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  Start the 2-minute intake
                </a>
                <a
                  href="#how"
                  className="rounded-xl border border-neutral-300 bg-white px-5 py-3 font-medium text-center hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  See how it works
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1">No spam</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1">Sensitive-stomach friendly</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1">Clear ingredients</span>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Sample plan preview</p>
                  <span className="text-xs text-neutral-500">Example</span>
                </div>
                <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                  <p className="text-sm text-neutral-600">Goal</p>
                  <p className="font-medium">Healthy weight + better digestion</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                    <p className="text-sm text-neutral-600">Protein focus</p>
                    <p className="font-medium">Salmon / Turkey</p>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                    <p className="text-sm text-neutral-600">Avoid</p>
                    <p className="font-medium">Chicken + Dairy</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                  <p className="text-sm text-neutral-600">Transition</p>
                  <p className="font-medium">7-day gradual mix-in schedule</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">Simple, low-friction, and practical. You’ll get a plan you can actually keep.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { t: "1) Intake", d: "Share your dog’s basics, preferences, sensitivities, and goals." },
              { t: "2) Match", d: "We filter ingredients + macros and shortlist options that fit." },
              { t: "3) Plan", d: "You receive recommendations + a transition schedule + portion guidance." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-neutral-200 bg-white p-6">
                <p className="font-semibold">{x.t}</p>
                <p className="text-neutral-700 mt-2 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="bg-white border-y border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold">What we recommend</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl">Product picks are based on your dog’s profile—not trends.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  t: "Everyday Kibble (Clean Labels)",
                  d: "Budget-friendly options with clear protein sources and fewer fillers.",
                },
                {
                  t: "Sensitive Stomach & Allergy Filters",
                  d: "Limited-ingredient choices and alternative proteins when needed.",
                },
                {
                  t: "Boosters & Treats (Goal-Based)",
                  d: "Joint support, skin/coat, or training treats that won’t wreck the diet.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="font-semibold">{x.t}</p>
                  <p className="text-neutral-700 mt-2 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="intake" className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Get your dog’s nutrition plan</h2>
              <p className="text-neutral-600 leading-relaxed">Fill this out once. We’ll reply with recommended options + a simple feeding plan.</p>
              <p className="text-sm text-neutral-500">By submitting, you agree to our Privacy Policy and Terms.</p>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl border border-neutral-200 bg-white p-6 space-y-5" aria-describedby="form-status">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Dog name" required>
                  <input
                    name="dog_name"
                    required
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    autoComplete="off"
                  />
                </Field>

                <Field label="Breed (optional)">
                  <input
                    name="breed"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  />
                </Field>

                <Field label="Age (years)">
                  <input
                    name="dog_age_years"
                    inputMode="decimal"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    placeholder="e.g., 3.5"
                  />
                </Field>

                <Field label="Weight (lbs)">
                  <input
                    name="dog_weight_lbs"
                    inputMode="decimal"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    placeholder="e.g., 42"
                  />
                </Field>

                <Field label="Activity level">
                  <select
                    name="activity_level"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    defaultValue="Moderate"
                  >
                    <option>Sedentary</option>
                    <option>Moderate</option>
                    <option>High</option>
                    <option>Working/Athletic</option>
                  </select>
                </Field>

                <Field label="Diet type preference">
                  <select
                    name="diet_type"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    defaultValue="No preference"
                  >
                    <option>No preference</option>
                    <option>Kibble</option>
                    <option>Wet</option>
                    <option>Fresh / gently cooked</option>
                    <option>Mixed</option>
                  </select>
                </Field>
              </div>

              <Field label="Allergies / sensitivities" hint="Ingredients to avoid (if any).">
                <textarea
                  name="allergies"
                  rows={3}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  placeholder="e.g., chicken, beef, dairy, grains…"
                />
              </Field>

              <Field label="Goals" hint="Pick one or list multiple.">
                <input
                  name="goals"
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  placeholder="weight loss, better digestion, shinier coat, energy…"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Preferred proteins">
                  <input
                    name="proteins"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    placeholder="salmon, turkey, lamb…"
                  />
                </Field>

                <Field label="Dislikes / picky eater notes">
                  <input
                    name="dislikes"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    placeholder="won’t touch fish, hates kibble…"
                  />
                </Field>
              </div>

              <Field label="Anything else we should know?">
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  placeholder="medical notes, current food brand, transition concerns…"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your email" required>
                  <input
                    name="contact_email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Phone (optional)">
                  <input
                    name="phone"
                    inputMode="tel"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <div className="flex items-start gap-3">
                <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4" required />
                <label htmlFor="consent" className="text-sm text-neutral-700">
                  I agree to be contacted about my submission and I accept the Privacy Policy and Terms.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-neutral-900 text-white px-5 py-3 font-medium hover:bg-neutral-800 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                {status === "loading" ? "Submitting…" : "Submit"}
              </button>

              <div id="form-status" aria-live="polite" className="text-sm">
                {status === "success" ? <p className="text-green-700">{msg}</p> : null}
                {status === "error" ? <p className="text-red-700">{msg}</p> : null}
              </div>

              <p className="text-xs text-neutral-500">
                Having trouble? Email us at {" "}
                <a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_OWNER_EMAIL ?? "you@yourdomain.com"}`}>
                  support
                </a>
                .
              </p>
            </form>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">Quick answers. If you don’t see yours, submit the intake and ask in the notes.</p>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} PawFuel. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a className="underline hover:text-neutral-600" href="/privacy">
              Privacy
            </a>
            <a className="underline hover:text-neutral-600" href="/terms">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
