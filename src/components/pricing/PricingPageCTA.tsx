import { CTA } from "../../design-system/cta";
import { Button } from "../ui";

function PricingPageCTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/70 p-10">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-accent-primary/10 blur-lg" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Railzway Cloud
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Start billing with a predictable hybrid model
            </h2>
            <p className="text-base text-text-secondary">
              Choose a plan, monitor usage, and keep billing operations clear
              for every workspace.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#get-started">
                {CTA.primary.getStarted}
              </Button>
              <Button as="a" href="#docs" variant="secondary">
                {CTA.secondary.viewDocs}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPageCTA;
