import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

function UsagePhilosophySection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="rounded-2xl border border-border-subtle bg-bg-surface/40 p-8 sm:p-10"
          variants={item}
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Usage philosophy
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Quota-aware usage, predictable growth
            </h2>
            <p className="text-sm text-text-secondary">
              Usage is measured, aggregated, and rated continuously so charges
              follow real behavior.
            </p>
            <p className="text-sm text-text-secondary">
              Quotas act as guardrails that expand with customer growth, keeping
              service predictable.
            </p>
            <p className="text-sm text-text-secondary">
              Upgrades adjust entitlements without downtime, and pricing can
              evolve on stable meters without breaking integrations.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default UsagePhilosophySection;
