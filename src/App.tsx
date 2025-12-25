import Architecture from "./components/Architecture";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Badge, Button, Surface } from "./components/ui";

const trustMarkers = [
  "Nimbus",
  "Flux",
  "Northwind",
  "OpenByte",
  "Aperture",
];

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
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-15%] h-80 w-80 rounded-full bg-accent-primary/10 blur-lg" />
        <div className="absolute top-40 left-[-10%] h-96 w-96 rounded-full bg-accent-glow/10 blur-lg" />
        <div className="absolute bottom-[-25%] right-10 h-96 w-96 rounded-full bg-bg-subtle/20 blur-lg" />
      </div>

      <Hero />

      <section className="border-y border-border-subtle bg-bg-primary/60 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>Designed for teams building serious SaaS infrastructure</p>
          <div className="flex flex-wrap gap-3">
            {trustMarkers.map((marker) => (
              <Badge key={marker} variant="neutral">
                {marker}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Architecture />

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
              Explore the repository
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
