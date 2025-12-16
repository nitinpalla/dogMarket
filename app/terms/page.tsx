export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="text-neutral-700">By using this site and submitting information, you agree to the terms below.</p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Not veterinary advice</h2>
          <p className="text-neutral-700">
            Recommendations are informational and not a substitute for professional veterinary care.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">User responsibility</h2>
          <p className="text-neutral-700">
            You are responsible for confirming ingredient suitability and monitoring your dog during any diet transition.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Limitation of liability</h2>
          <p className="text-neutral-700">
            To the maximum extent allowed by law, we are not liable for damages arising from use of recommendations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="text-neutral-700">We may update these terms from time to time by posting a new version on this page.</p>
        </section>

        <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
      </main>
    </div>
  );
}
