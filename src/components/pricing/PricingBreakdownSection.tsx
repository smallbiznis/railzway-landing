import { motion, useReducedMotion } from "motion/react";
import { CTA } from "../../design-system/cta";
import { defaultViewport, getSectionVariants } from "../../lib/motion";

const breakdownCards = [
  {
    title: "Usage ingestion",
    description:
      "Track incoming usage with clear visibility into what is accepted and what is queued for the next window.",
    bullets: [
      "Metered events are ingested with schema validation",
      "Usage summaries update in near real time",
      "Limits are visible before enforcement",
      "Audit trails remain accessible in history",
    ],
  },
  {
    title: "Invoices & billing cycles",
    description:
      "Generate invoices from deterministic cycles and preview them before they are finalized.",
    bullets: [
      "Draft invoices can be previewed and shared",
      "Billing periods can be simulated safely",
      "Credit notes are reflected in ledger views",
      "Invoice previews remain available for audit",
    ],
  },
  {
    title: "Workspace & access",
    description:
      "Control access by organization and keep billing operations scoped to each workspace.",
    bullets: [
      "Org-scoped workspaces with isolated configs",
      "API keys are unique per organization",
      "Role-based access for billing actions",
      "Usage and limits are scoped to each org",
    ],
  },
];

const limitBehavior = [
  {
    label: "Soft limit",
    description: "Warning in dashboard with current usage and reset window.",
  },
  {
    label: "Hard limit",
    description: "Informative error with next reset and upgrade hint.",
  },
];

function PricingBreakdownSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      id="limits"
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          variants={item}
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Pricing breakdown
            </h2>
            <p className="text-base text-text-secondary">
              Transparent limits, visible before enforcement. No surprise 409s.
            </p>
          </div>
          <a
            href="#limits"
            className="text-sm font-medium text-text-secondary transition duration-base ease-standard hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
          >
            {CTA.secondary.learnMore}
          </a>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={container}
        >
          {breakdownCards.map((card) => (
            <motion.article
              key={card.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-bg-surface/80 p-6 shadow-sm backdrop-blur-sm transition duration-base ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-glow"
              variants={item}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {card.description}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle bg-bg-surface-strong/60 text-text-muted">
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3.5 8.2l2.4 2.4 6.6-6.6" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-border-subtle bg-bg-surface-strong/70 p-4 text-sm text-text-secondary">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  How limits behave
                </p>
                <div className="mt-3 space-y-2">
                  {limitBehavior.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text-muted" />
                      <div>
                        <p className="font-medium text-text-primary">
                          {item.label}
                        </p>
                        <p className="text-sm text-text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl border border-border-subtle bg-bg-surface/60 p-6"
          variants={item}
        >
          <div className="space-y-2 text-sm text-text-secondary">
            <p>
              Limits are plan-based and shown in dashboard before enforced.
            </p>
            <p>
              API responses include current usage, limit, and reset window when
              blocked.
            </p>
          </div>
          <div className="mt-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Example response
            </p>
            <pre className="overflow-x-auto rounded-xl border border-border-subtle bg-bg-surface-strong p-4 text-xs text-text-secondary">
              <code className="font-mono">{`{
  "error": "usage_limit_reached",
  "resource": "usage_ingest",
  "current": 98234,
  "limit": 100000,
  "period": "monthly",
  "next_reset": "2026-01-01",
  "upgrade_required": true
}`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PricingBreakdownSection;
