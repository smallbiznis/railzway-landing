import Architecture from "./components/Architecture";
import BillingFlowSection from "./components/BillingFlowSection";
import CTA from "./components/CTA";
import CapabilitiesSection from "./components/CapabilitiesSection";
import Features from "./components/Features";
import FreeTierSection from "./components/FreeTierSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import UsagePhilosophySection from "./components/UsagePhilosophySection";
import { CTA as CTA_LABELS } from "./design-system/cta";
import { Button, Surface } from "./components/ui";
import PricingPage from "./pages/PricingPage";

const ossHighlights = [
  {
    title: "OSS core",
    description: "Billing primitives and ledger logic available in the open.",
  },
  {
    title: "Self-host or Cloud",
    description: "Run it yourself or let Valora manage the control plane.",
  },
  {
    title: "No vendor lock-in",
    description: "Portable data models and clean export APIs.",
  },
];

function App() {
  const isPricingRoute =
    typeof window !== "undefined" && window.location.pathname === "/valora-landing/pricing";
  if (isPricingRoute) {
    return <PricingPage />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-15%] h-80 w-80 rounded-full bg-accent-primary/10 blur-lg" />
        <div className="absolute top-40 left-[-10%] h-96 w-96 rounded-full bg-accent-glow/10 blur-lg" />
        <div className="absolute bottom-[-25%] right-10 h-96 w-96 rounded-full bg-bg-subtle/20 blur-lg" />
      </div>

      <Hero />
      <FreeTierSection />

      <Features />
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Predictable billing by design
            </h2>
            <div className="space-y-4 text-base text-text-secondary">
              <p>
                Valora Cloud prices a base platform subscription, then adds
                metered usage based on the events you send and the meters you
                define. This keeps billing tied to real system activity instead
                of assumptions.
              </p>
              <p>
                Quotas set expected throughput and protect both your service and
                ours. They are guardrails with visibility, not sudden blockers.
              </p>
              <p>
                When usage grows, you can raise limits or move to a higher level
                without downtime or re-architecture. Entitlements update in
                place while your meters stay stable.
              </p>
              <p>
                Usage is measured, aggregated, and rated with versioned,
                append-only logic so pricing can evolve without breaking
                existing behavior. Charges remain traceable and predictable as
                your product scales.
              </p>
            </div>
            <p className="text-sm text-text-muted">
              Detailed pricing lives on the pricing page; this section explains
              the model, not numbers.
            </p>
          </div>
        </div>
      </section>
      <BillingFlowSection />
      <UsagePhilosophySection />
      <Architecture />
      <CapabilitiesSection />

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Open source
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Open-core by default, flexible by design
            </h2>
            <p className="text-base text-text-secondary">
              Valora gives you the primitives to own billing internally without
              losing velocity. Keep control of your data while shipping faster.
            </p>
            <Button as="a" href="https://github.com" variant="secondary">
              {CTA_LABELS.secondary.learnMore}
            </Button>
          </div>
          <div className="grid gap-4">
            {ossHighlights.map((highlight) => (
              <Surface key={highlight.title} tone="subtle" className="p-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {highlight.description}
                </p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

export default App;
