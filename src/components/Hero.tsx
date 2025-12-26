import { motion, useReducedMotion } from "motion/react";
import { getSectionVariants } from "../lib/motion";
import { CTA } from "../design-system/cta";
import { Badge, Button } from "./ui";

const stats = [
  { label: "Event latency", value: "120ms" },
  { label: "Usage accuracy", value: "99.95%" },
  { label: "SDKs", value: "6 languages" },
];

function Hero() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col gap-6" variants={item}>
            <Badge variant="neutral" size="md" className="self-start gap-2">
              <span className="text-text-secondary">Valora</span>
              <span className="h-1 w-1 rounded-full bg-accent-primary/70" />
              <span>Open-core billing</span>
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Billing, pricing, and usage — built for modern SaaS
              </h1>
              <p className="text-balance text-lg text-text-secondary sm:text-xl">
                An open-core billing engine for subscriptions, usage-based
                pricing, and metered products.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#get-started">
                {CTA.primary.getStarted}
              </Button>
              <Button as="a" href="https://github.com" variant="secondary">
                {CTA.secondary.learnMore}
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-text-muted">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-text-secondary">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 shadow-glow backdrop-blur-md"
            variants={item}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-muted">
              <span>Usage pipeline</span>
              <Badge variant="accent" size="sm">
                Live
              </Badge>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4">
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>ingest.events</span>
                  <span>+48k/min</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-bg-subtle">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent-primary/80 via-accent-glow/70 to-accent-primary/40" />
                </div>
              </div>
              <div className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4">
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>rating.window</span>
                  <span>02:14s</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-text-secondary">
                  <div className="rounded-lg bg-bg-surface/60 px-3 py-2">
                    daily
                  </div>
                  <div className="rounded-lg border border-accent-primary/30 bg-accent-primary/10 px-3 py-2 text-accent-primary">
                    realtime
                  </div>
                  <div className="rounded-lg bg-bg-surface/60 px-3 py-2">
                    monthly
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  pricing.yaml
                </p>
                <pre className="mt-3 whitespace-pre-wrap text-xs text-text-secondary font-mono">
                  {`plan: growth
meter: api_calls
tiers:
  - up_to: 10_000
    unit_amount: 0.04`}
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
