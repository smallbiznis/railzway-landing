import type { ReactElement, SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

type Feature = {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const features: Feature[] = [
  {
    title: "Subscription billing",
    description: "Flexible plans with proration, trials, and upgrades.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Usage-based pricing",
    description: "Metered usage with tiered and volume pricing models.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-3 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Metering & rating",
    description: "Real-time aggregation with precise rating windows.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 12l3-3" />
        <path d="M5 12h2" />
        <path d="M17 12h2" />
      </svg>
    ),
  },
  {
    title: "Invoices & ledger",
    description: "Ledger-backed invoices, credits, and adjustments.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M7 4h8l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M14 4v4h4" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Org-scoped dashboard",
    description: "Workspace views with role-aware billing controls.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="4" y="5" width="7" height="7" rx="1.5" />
        <rect x="13" y="5" width="7" height="5" rx="1.5" />
        <rect x="13" y="12" width="7" height="7" rx="1.5" />
        <rect x="4" y="14" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "OSS-first architecture",
    description: "Open-core primitives with clean extension points.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M12 4l4 4-4 4-4-4 4-4z" />
        <path d="M8 12l-4 4 4 4" />
        <path d="M16 12l4 4-4 4" />
      </svg>
    ),
  },
];

function Features() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="max-w-2xl space-y-4" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Core features
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Billing primitives, composable APIs
          </h2>
          <p className="text-base text-text-secondary">
            Build pricing models with granular control across subscription,
            usage, and ledger workflows.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-2xl border border-border-subtle bg-bg-surface/30 p-6 transition duration-base ease-standard hover:-translate-y-1 hover:border-border-strong hover:bg-bg-surface/60"
            >
              <div className="flex items-center justify-between">
                <feature.icon
                  className="h-6 w-6 text-text-primary"
                  strokeWidth={1.5}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Valora
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Features;
