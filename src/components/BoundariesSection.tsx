import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

const boundaries = [
  {
    title: "Payment Execution",
    description: "Determines what to bill, not how to collect payment.",
    items: [
      "No credit card processing (except via Stripe adapter)",
      "Supports Stripe for payment collection",
      "Post-v1.0: additional payment adapter interfaces"
    ]
  },
  {
    title: "Merchant of Record",
    description: "Focuses on computation, not regulatory compliance.",
    items: [
      "No tax calculation (VAT/GST)",
      "No PCI-DSS automation",
      "No regulatory filings"
    ]
  },
  {
    title: "Dunning & Collections",
    description: "Manages state, not recovery workflows.",
    items: [
      "No automated email retries",
      "No recovery workflows",
      "Past-due state tracking only"
    ]
  }
];

function BoundariesSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20 border-y border-border-subtle bg-bg-surface/50"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="max-w-3xl space-y-4 mb-16" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Scope & Boundaries
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What Railzway Is Not (v1.0)
          </h2>
          <p className="text-base text-text-secondary">
            To preserve correctness and clarity, Railzway maintains explicit boundaries.
            It is a deterministic computation engine, not an all-in-one billing platform.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={container}
        >
          {boundaries.map((boundary) => (
            <motion.div
              key={boundary.title}
              variants={item}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-status-error/10 text-status-error text-xs">✕</span>
                {boundary.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {boundary.description}
              </p>
              <ul className="space-y-2">
                {boundary.items.map((item, i) => (
                  <li key={i} className="text-sm text-text-muted pl-8 relative before:absolute before:left-2 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-text-muted/40">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BoundariesSection;
