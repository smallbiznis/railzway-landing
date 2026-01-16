import { Surface } from "./ui";
import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import stripeLogo from "../assets/stripe.svg";
import adyenLogo from "../assets/adyen.svg";
import braintreeLogo from "../assets/braintree.svg";

const integrations = [
  {
    title: "Public Invoice Portal",
    description: "Secure public pages for customers to view and pay invoices.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Admin Dashboard",
    description: "Control Plane UI for organization config, pricing plans, and analytics.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Telemetry",
    description: "Anonymous usage statistics collection for system health.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
];

function IntegrationsSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20 border-t border-white/5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Ecosystem
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Integrations & Tools
          </h2>
          <p className="text-base text-text-secondary">
            Everything you need to operate billing in production.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-3 mb-20"
          variants={container}
        >
          {integrations.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-2xl border border-border-subtle bg-bg-surface/30 p-6 text-center transition duration-base ease-standard hover:-translate-y-1 hover:border-border-strong hover:bg-bg-surface/60"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-text-primary">
              Supported Payment Providers
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={stripeLogo} alt="Stripe" className="h-8 w-auto" />
              </Surface>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={adyenLogo} alt="Adyen" className="h-8 w-auto" />
              </Surface>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={braintreeLogo} alt="Braintree" className="h-8 w-auto" />
              </Surface>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default IntegrationsSection;
