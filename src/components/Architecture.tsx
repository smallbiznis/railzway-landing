import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

const bulletPoints = [
  "Ledger-based accounting",
  "Org-scoped workspace (Grafana-style)",
  "Event-driven billing pipeline",
  "API-first & OSS-friendly",
];

function Architecture() {
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
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div className="space-y-6" variants={item}>
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Architecture
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Built for scale, clarity, and control
            </h2>
            <p className="text-base text-text-secondary">
              Every piece of Valora is designed for auditable billing and
              predictable revenue workflows across teams.
            </p>
            <ul className="space-y-3 text-sm text-text-secondary">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-primary/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6"
            variants={item}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-muted">
              <span>billing.pipeline.ts</span>
              <span>v1.4</span>
            </div>
            <div className="mt-5 rounded-2xl border border-border-subtle bg-bg-primary/80 p-5">
              <pre className="whitespace-pre-wrap text-xs text-text-secondary font-mono">
                {`pipeline("usage")
  .ingest("events")
  .rate("meter")
  .ledger("commit")
  .invoice("monthly")`}
              </pre>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-text-muted">
              {["Ledger", "Rating", "Proration", "Invoices"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-subtle bg-bg-surface/60 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Architecture;
