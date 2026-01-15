import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import { Surface } from "./ui";

const flowItems = [
  { type: "node", label: "Product / Application" },
  { type: "arrow", label: "→" },
  { type: "node", label: "Usage Events" },
  { type: "arrow", label: "→" },
  { type: "node", label: "Meters" },
  { type: "join", label: "+" },
  { type: "node", label: "Subscription & Entitlements" },
  { type: "arrow", label: "→" },
  { type: "node", label: "Pricing Rules" },
  { type: "arrow", label: "→" },
  { type: "node", label: "Ledger" },
  { type: "arrow", label: "→" },
  { type: "node", label: "Invoice" },
] as const;

function BillingFlowSection() {
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
            Architecture overview
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Hybrid pricing flow, end to end
          </h2>
          <p className="text-base text-text-secondary">
            Railzway supports subscriptions and usage together: entitlements and
            metered events both feed pricing rules. Pricing logic is explicit
            and inspectable, and invoices are derived from ledgered source data,
            not mutable state.
          </p>
        </motion.div>

        <motion.div className="mt-10" variants={item}>
          <Surface tone="subtle" className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary sm:text-sm">
              {flowItems.map((item) =>
                item.type === "node" ? (
                  <span
                    key={item.label}
                    className="rounded-full border border-border-subtle bg-bg-surface/60 px-3 py-1 font-mono text-text-primary"
                  >
                    {item.label}
                  </span>
                ) : (
                  <span key={`${item.type}-${item.label}`} className="text-text-muted">
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </Surface>
          <p className="mt-4 text-xs text-text-muted">
            Hybrid charges stay correct because every invoice traces to
            entitlements and usage in the ledger.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BillingFlowSection;
