import { Surface } from "./ui";
import stripeLogo from "../assets/stripe.svg";
import adyenLogo from "../assets/adyen.svg";
import braintreeLogo from "../assets/braintree.svg";

const PaymentProviders = () => {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Supported Payment Providers
            </h2>
            <p className="max-w-2xl text-base text-text-secondary">
              Railzway provides first-class support for major payment gateways, allowing you to switch or combine providers with zero friction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={stripeLogo} alt="Stripe" className="h-8 w-auto" />
              </Surface>
              <span className="text-sm font-medium text-text-muted">Stripe</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={adyenLogo} alt="Adyen" className="h-8 w-auto" />
              </Surface>
              <span className="text-sm font-medium text-text-muted">Adyen</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Surface tone="subtle" className="flex h-24 w-40 items-center justify-center p-6">
                <img src={braintreeLogo} alt="Braintree" className="h-8 w-auto" />
              </Surface>
              <span className="text-sm font-medium text-text-muted">Braintree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProviders;
