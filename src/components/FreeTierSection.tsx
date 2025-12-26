import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import { CTA } from "../design-system/cta";
import { Badge, Button, Surface } from "./ui";

const features = [
  "Usage event ingestion (monthly quota)",
  "Metered products & pricing models",
  "Subscription lifecycle management",
  "Invoice previews & dry-run billing",
  "Org-scoped dashboard",
  "API keys per organization",
];

const limits = [
  "Up to 1M usage events / month",
  "Up to 20 active products",
  "Up to 25k active subscriptions",
  "1 organization",
  "Community support",
];

function FreeTierSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="border-y border-border-subtle bg-bg-primary py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="space-y-4" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Valora Cloud Free Tier
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Valora Cloud Free Tier
          </h2>
          <p className="max-w-2xl text-base text-text-secondary">
            A practical free tier for building and testing usage-based billing
            at scale.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
          variants={container}
        >
          <motion.div className="space-y-6" variants={item}>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-text-primary">
                An actually usable free tier
              </h3>
              <p className="text-sm text-text-muted">
                Build with real constraints that match production billing
                patterns.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-text-secondary">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle bg-bg-surface/60 text-text-muted">
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <Surface
              tone="strong"
              className="space-y-6 border-border-strong p-6 shadow-sm transition duration-base ease-standard hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Free Tier
                  </h3>
                  <p className="text-sm text-text-muted">Valora Cloud</p>
                </div>
                <Badge variant="neutral" size="sm">
                  No credit card required
                </Badge>
              </div>

              <ul className="space-y-3 text-sm text-text-secondary">
                {limits.map((limit) => (
                  <li key={limit} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary/60" />
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <Button as="a" href="#get-started">
                  {CTA.primary.startFree}
                </Button>
                <Button as="a" href="#limits" variant="ghost">
                  {CTA.secondary.viewLimits}
                </Button>
              </div>
            </Surface>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FreeTierSection;
