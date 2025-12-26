import Footer from "../components/Footer";
import PricingBreakdownSection from "../components/pricing/PricingBreakdownSection";
import PricingHowItWorksSection from "../components/pricing/PricingHowItWorksSection";
import PricingPageCTA from "../components/pricing/PricingPageCTA";
import PricingPlansSection from "../components/pricing/PricingPlansSection";

function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-15%] h-80 w-80 rounded-full bg-accent-primary/10 blur-lg" />
        <div className="absolute top-40 left-[-10%] h-96 w-96 rounded-full bg-accent-glow/10 blur-lg" />
        <div className="absolute bottom-[-25%] right-10 h-96 w-96 rounded-full bg-bg-subtle/20 blur-lg" />
      </div>

      <PricingPlansSection />
      <PricingHowItWorksSection />
      <PricingBreakdownSection />
      <PricingPageCTA />
      <Footer />
    </div>
  );
}

export default PricingPage;
