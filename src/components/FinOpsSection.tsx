import type { ReactElement, SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

type Feature = {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const finOpsFeatures: Feature[] = [
  {
    title: "FinOps Scoring",
    description:
      "Score billing performance based on Responsiveness, Completion, Effectiveness, and Risk.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "Workload Management",
    description:
      "Automated assignment for handling due invoices and payment issues.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Exposure Analysis",
    description:
      "Analyze financial risk and categorize receivables by aging buckets (0-30, 31-60, etc.).",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Collection Queue",
    description:
      "Manage collections queue for unpaid invoices efficiently.",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
  },
];

function FinOpsSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20 bg-bg-surface/20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="max-w-2xl space-y-4" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Operations
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Financial Operations (FinOps)
          </h2>
          <p className="text-base text-text-secondary">
            Tools to monitor team performance, assess financial health, and manage billing operations.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
        >
          {finOpsFeatures.map((feature) => (
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
                  Ops
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

export default FinOpsSection;
