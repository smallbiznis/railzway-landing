import { CTA } from "../design-system/cta";
import { Badge, Button } from "./ui";

const tiers = [
  {
    label: "Free",
    badge: "Free tier",
    price: "$0",
    description: "Get started with Valora Cloud and explore usage-based billing.",
    features: [
      "Managed Valora Cloud",
      "Free tier included",
      "Usage ingestion & metering",
      "Basic dashboards",
      "Community support",
      "No credit card required",
    ],
    cta: CTA.primary.startFree,
    ctaVariant: "secondary",
  },
  {
    label: "Growth",
    badge: "Most popular",
    price: "Usage-based",
    description: "For production workloads and growing SaaS teams.",
    features: [
      "Everything in Free, plus:",
      "Higher usage limits",
      "Advanced pricing models",
      "Org-scoped workspaces",
      "Invoices & billing cycles",
      "Email support",
    ],
    cta: CTA.primary.upgradeToGrowth,
    ctaVariant: "primary",
    highlighted: true,
  },
  {
    label: "Scale",
    badge: "For high-volume teams",
    price: "Usage-based",
    description: "For teams operating billing at high scale.",
    features: [
      "Everything in Growth, plus:",
      "Higher throughput limits",
      "Advanced reporting & analytics",
      "Priority support",
      "Usage export & integrations",
    ],
    cta: CTA.primary.contactSales,
    ctaVariant: "outline",
  },
  {
    label: "Enterprise",
    badge: "Custom",
    price: "Custom",
    description:
      "For organizations with security, compliance, and SLA requirements.",
    features: [
      "SLA & priority support",
      "Dedicated environments",
      "Custom billing workflows",
      "Security & compliance support",
      "Deployment flexibility",
    ],
    cta: CTA.primary.contactSales,
    ctaVariant: "dark",
  },
];

function PricingSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Pricing that scales with your usage
          </h2>
          <p className="text-base text-text-secondary">
            Start free. Upgrade when your billing grows. No lock-in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {tiers.map((tier) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.label}
                className={[
                  "flex h-full flex-col justify-between rounded-xl border bg-bg-surface/50 p-6 backdrop-blur-sm",
                  "transition duration-base ease-standard",
                  isHighlighted
                    ? "border-accent-primary/50 bg-bg-surface-strong/60 shadow-glow lg:scale-105"
                    : "border-border-subtle hover:border-border-strong",
                ].join(" ")}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {tier.label}
                      </h3>
                      <p className="text-sm text-text-muted">{tier.price}</p>
                    </div>
                    <Badge
                      variant={isHighlighted ? "accent" : "neutral"}
                      size="sm"
                    >
                      {tier.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-secondary">
                    {tier.description}
                  </p>

                  <ul className="space-y-2 text-sm text-text-secondary">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text-muted" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  {tier.ctaVariant === "primary" && (
                    <Button as="a" href="#get-started">
                      {tier.cta}
                    </Button>
                  )}
                  {tier.ctaVariant === "secondary" && (
                    <Button as="a" href="#get-started" variant="secondary">
                      {tier.cta}
                    </Button>
                  )}
                  {tier.ctaVariant === "outline" && (
                    <Button
                      as="a"
                      href="#get-started"
                      variant="secondary"
                      className="bg-transparent text-text-secondary hover:bg-bg-surface/30"
                    >
                      {tier.cta}
                    </Button>
                  )}
                  {tier.ctaVariant === "dark" && (
                    <Button
                      as="a"
                      href="#get-started"
                      variant="secondary"
                      className="bg-bg-surface-strong text-text-primary hover:bg-bg-surface-strong/80"
                    >
                      {tier.cta}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          All plans are usage-based. You only pay for what you use as your
          business grows.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
