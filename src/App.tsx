import Architecture from "./components/Architecture";
import BillingFlowSection from "./components/BillingFlowSection";
import BoundariesSection from "./components/BoundariesSection";
import CTA from "./components/CTA";
import CapabilitiesSection from "./components/CapabilitiesSection";
import DeploymentSection from "./components/DeploymentSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FinOpsSection from "./components/FinOpsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import TechStackSection from "./components/TechStackSection";
import UsagePhilosophySection from "./components/UsagePhilosophySection";
import { CTA as CTA_LABELS } from "./design-system/cta";
import { Button, Surface } from "./components/ui";
import PricingPage from "./pages/PricingPage";

const ossHighlights = [
  {
    title: "Dual Licensing",
    description: "AGPLv3 for open source, Commercial license for proprietary use contexts.",
  },
  {
    title: "Explicit Boundaries",
    description: "Billing logic is separated from payments, identity, and infrastructure concerns.",
  },
  {
    title: "Self-Hosted Ownership",
    description: "Teams retain full control over billing data and logic.",
  },
];

import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  // Normalize path to ignore potential base path issues on GH Pages vs Vercel
  // If we are on root, path is "/"

  // Routing Logic
  if (path.endsWith("/pricing")) {
    return <PricingPage />;
  }

  // Blog Index
  if (path.endsWith("/blog") || path.endsWith("/blog/")) {
    return <BlogIndex />;
  }

  // Blog Post
  if (path.includes("/blog/")) {
    // Extract slug. Assumes format .../blog/slug
    const parts = path.split("/blog/");
    if (parts.length > 1) {
      const slug = parts[1].replace(/\/$/, ""); // remove trailing slash
      return <BlogPost slug={slug} />;
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/5 via-bg-primary to-bg-primary" />
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-accent-primary/5 blur-3xl opacity-50" />
        <div className="absolute top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-accent-glow/10 blur-3xl opacity-40" />
      </div>

      <Navbar />
      <Hero />
      <TechStackSection />
      <Features />
      <FinOpsSection />
      <IntegrationsSection />

      <BoundariesSection />

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Predictable billing by design
            </h2>
            <div className="space-y-4 text-base text-text-secondary">
              <p>
                Railzway takes a deliberate approach: make billing boring, deterministic, and explainable.
                It is a financial truth system, not a convenience feature.
              </p>
              <p>
                In many systems, billing logic is scattered across application code, difficult to audit,
                and tightly coupled with payments. Railzway extracts these concerns into a dedicated engine.
              </p>
              <p>
                Usage is measured, aggregated, and rated with versioned, append-only logic so pricing
                can evolve without breaking existing behavior. Charges remain traceable and predictable.
              </p>
            </div>
            <p className="text-sm text-text-muted">
              Built independently to design systems with clear boundaries, correctness, and accountability.
            </p>
          </div>
        </div>
      </section>
      <BillingFlowSection />
      <DeploymentSection />
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
              Open-core by default
            </h2>
            <p className="text-base text-text-secondary">
              Railzway gives you the primitives to own billing internally without
              losing velocity. Keep control of your data while shipping faster.
            </p>
            <Button as="a" href="https://github.com/smallbiznis/railzway" variant="secondary">
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
