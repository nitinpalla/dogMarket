export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-neutral-700">
          We collect the information you submit (dog details + your contact info) to respond with recommendations.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">What we collect</h2>
          <ul className="list-disc pl-6 text-neutral-700 space-y-1">
            <li>Dog details (age, weight, breed, activity, allergies, goals)</li>
            <li>Your contact info (email, optional phone)</li>
            <li>Submission metadata (timestamp)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">How we use it</h2>
          <ul className="list-disc pl-6 text-neutral-700 space-y-1">
            <li>To respond to your request and provide recommendations</li>
            <li>To improve our guidance and FAQs (in aggregate)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Sharing</h2>
          <p className="text-neutral-700">
            We don’t sell your personal information. We may use service providers (e.g., database hosting) to store submissions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Data retention</h2>
          <p className="text-neutral-700">
            We keep submissions as long as needed to provide support and meet basic operational requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-neutral-700">
            Email us to request deletion or ask questions: <span className="font-medium">support@yourdomain.com</span>
          </p>
        </section>

        <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
      </main>
    </div>
  );
}
