import { CTA } from "../../design-system/cta";
import { Badge, Button } from "../ui";

const plans = [
  {
    label: "Free",
    badge: "Free Tier",
    platformFee: "$0",
    description: "For prototyping and early-stage usage.",
    usageLine: "Included usage quota (usage events/month).",
    overage: "Hard limits with no overage billing.",
    bullets: [
      "Included usage quota (usage events/month)",
      "Limited products and subscriptions",
      "Org-scoped dashboard",
      "API keys per organization",
      "Hard limits enforced at quota",
    ],
    note: "Designed for testing real billing flows with production-like constraints.",
    cta: CTA.primary.startFree,
    ctaVariant: "secondary",
  },
  {
    label: "Growth",
    badge: "Most popular",
    platformFee: "$XX / month",
    description: "For production SaaS teams with growing usage.",
    usageLine: "Includes monthly usage quota.",
    overage: "Additional usage billed per meter.",
    bullets: [
      "Everything in Free, plus:",
      "Higher included usage quota",
      "Advanced pricing models (tiered, volume)",
      "Invoices & billing cycles",
      "Email support",
    ],
    cta: CTA.primary.upgradeToGrowth,
    ctaVariant: "primary",
    highlighted: true,
  },
  {
    label: "Scale",
    badge: "Scale",
    platformFee: "$XXX / month",
    description: "For high-volume billing workloads.",
    usageLine: "Includes usage quota with volume options.",
    overage: "Usage beyond quota billed per meter.",
    bullets: [
      "Higher throughput limits",
      "Advanced analytics & exports",
      "Priority support",
      "Volume-based pricing options",
    ],
    cta: CTA.primary.contactSales,
    ctaVariant: "outline",
  },
  {
    label: "Enterprise",
    badge: "Custom",
    platformFee: "Custom / Annual commit",
    description:
      "For organizations with compliance, security, and SLA requirements.",
    usageLine: "Custom usage quotas and billing terms.",
    overage: "Contracted limits with tailored overage policy.",
    bullets: [
      "Dedicated environments",
      "Custom billing workflows",
      "Security & compliance support",
      "Custom limits & contracts",
    ],
    cta: CTA.primary.talkToSales,
    ctaVariant: "dark",
  },
];

function PricingPlansSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Pricing model
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Predictable plans. Flexible usage-based billing.
          </h1>
          <p className="text-base text-text-secondary">
            Start with a subscription plan. Scale with metered usage as your
            business grows. No lock-in.
          </p>
          <p className="text-xs text-text-muted">
            Each plan includes usage quotas. Additional usage is billed per
            meter.
          </p>
          <p className="text-xs font-mono text-text-muted">
            Total monthly bill = platform plan fee + usage charges
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => {
            const isHighlighted = plan.highlighted;
            return (
              <article
                key={plan.label}
                className={[
                  "flex h-full flex-col justify-between rounded-2xl border bg-bg-surface/70 p-6 shadow-sm backdrop-blur-sm",
                  "transition duration-base ease-standard",
                  isHighlighted
                    ? "border-accent-primary/50 bg-bg-surface-strong/70 shadow-glow lg:scale-105"
                    : "border-border-subtle hover:border-border-strong hover:shadow-md",
                ].join(" ")}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-text-primary">
                        {plan.label}
                      </h2>
                      <p className="text-sm text-text-muted">
                        Platform fee (subscription)
                      </p>
                      <p className="text-base font-semibold text-text-primary font-mono">
                        {plan.platformFee}
                      </p>
                    </div>
                    <Badge
                      variant={isHighlighted ? "accent" : "neutral"}
                      size="sm"
                    >
                      {plan.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-secondary">
                    {plan.description}
                  </p>

                  <div className="rounded-xl border border-border-subtle bg-bg-surface-strong/60 p-3 text-xs text-text-muted">
                    <p className="font-medium text-text-primary">
                      {plan.usageLine}
                    </p>
                    <p className="mt-1 text-text-muted">{plan.overage}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-text-secondary">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text-muted" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.note && (
                    <p className="text-xs text-text-muted">{plan.note}</p>
                  )}
                </div>

                <div className="mt-8">
                  {plan.ctaVariant === "primary" && (
                    <Button as="a" href="#get-started">
                      {plan.cta}
                    </Button>
                  )}
                  {plan.ctaVariant === "secondary" && (
                    <Button as="a" href="#get-started" variant="secondary">
                      {plan.cta}
                    </Button>
                  )}
                  {plan.ctaVariant === "outline" && (
                    <Button
                      as="a"
                      href="#get-started"
                      variant="secondary"
                      className="bg-transparent text-text-secondary hover:bg-bg-surface/30"
                    >
                      {plan.cta}
                    </Button>
                  )}
                  {plan.ctaVariant === "dark" && (
                    <Button
                      as="a"
                      href="#get-started"
                      variant="secondary"
                      className="bg-bg-surface-strong text-text-primary hover:bg-bg-surface-strong/80"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingPlansSection;
