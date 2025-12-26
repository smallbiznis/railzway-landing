import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

const capabilities = [
  {
    title: "Usage-based billing without guesswork",
    description:
      "Ingest usage events, apply pricing rules, and generate invoices from a deterministic pipeline.",
    visual: "Events → Meters → Pricing → Ledger → Invoices",
  },
  {
    title: "Predictable billing workflows",
    description:
      "Preview invoices, simulate billing periods, and audit charges before they are committed.",
    visual: "Dry run → Preview → Commit",
  },
  {
    title: "Multi-tenant, org-scoped billing",
    description:
      "Isolate customers, pricing, and usage by organization with dedicated workspaces.",
    visual: "Org A | Org B | Org C",
  },
];

function CapabilitiesSection() {
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
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What you can build with Valora
          </h2>
          <p className="text-base text-text-secondary">
            Composable billing primitives for predictable revenue workflows.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-12 lg:grid-cols-2"
          variants={container}
        >
          {capabilities.map((capability) => (
            <motion.div key={capability.title} className="space-y-4" variants={item}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-text-primary">
                  {capability.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {capability.description}
                </p>
              </div>
              <div className="rounded-2xl border border-border-subtle bg-bg-surface/40 px-4 py-3 text-sm text-text-muted">
                <span className="font-mono">{capability.visual}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CapabilitiesSection;
