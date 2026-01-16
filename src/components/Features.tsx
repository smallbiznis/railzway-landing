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
    title: "Subscription Management",
    description:
      "Manage lifecycle states (Trial, Active, Past Due, Canceled) with explicit transitions.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Usage Metering",
    description:
      "Idempotent ingestion and deterministic aggregation, supporting late and out-of-order data.",
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
    title: "Pricing & Rating",
    description:
      "Flexible models (Flat, Tiered, Hybrid) with real-time rating calculation.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-3 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Invoicing",
    description:
      "Deterministic invoice creation, proration support, and state machine (Draft, Finalized, Void, Paid).",
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
    title: "Multi-Tenancy",
    description: "Data isolation and logic per organization.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Audit Trail",
    description:
      "Immutable log for every billing state change.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Payment Integrations",
    description:
      "Built-in adapter for Stripe and extensible provider interface.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Taxation",
    description:
      "Configurable tax behavior (inclusive/exclusive) and basic rate application.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Entitlements",
    description:
      "Billing-driven feature provisioning and sync capabilities.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

function Features() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      id="features"
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="max-w-2xl space-y-4" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Features
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Core Billing Engine
          </h2>
          <p className="text-base text-text-secondary">
            Define how events are measured, aggregated, and rated, then tie
            them to subscription entitlements and ledger output.
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
                  Railzway
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
