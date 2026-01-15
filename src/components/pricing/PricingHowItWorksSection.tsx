const steps = [
  "Choose a subscription plan",
  "Each plan includes usage quotas",
  "Usage beyond quota is billed per meter",
  "Invoices are generated per billing cycle",
];

function PricingHowItWorksSection() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-4xl px-6">
        <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
          How Railzway pricing works
        </h2>
        <ol className="mt-6 space-y-4 text-sm text-text-secondary">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle bg-bg-surface/70 font-mono text-xs text-text-muted">
                {index + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default PricingHowItWorksSection;
