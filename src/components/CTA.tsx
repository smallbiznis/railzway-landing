import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import { CTA as CTA_LABELS } from "../design-system/cta";
import { Button } from "./ui";

function CTA() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      id="get-started"
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-surface/80 via-bg-surface/50 to-bg-primary p-10"
          variants={item}
        >
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-accent-primary/10 blur-lg" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Ready to launch
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Start building billing the right way
            </h2>
            <p className="text-base text-text-secondary">
              Self-host Valora or ship with Valora Cloud. Keep control over your
              pricing logic as you scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#get-started">
                {CTA_LABELS.primary.getStarted}
              </Button>
              <Button as="a" href="#docs" variant="secondary">
                {CTA_LABELS.secondary.viewDocs}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CTA;
