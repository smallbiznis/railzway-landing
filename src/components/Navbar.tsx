import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "../lib/cn";
import { Button } from "./ui";
import logo from "../assets/primary.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-header transition-all duration-300",
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle py-3"
          : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Railzway" className="h-10" />
          <span className="text-lg font-semibold text-text-primary">Railzway</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#architecture"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Architecture
          </a>
          {/* Note: In a real app we might use react-router-dom Link for internal routes */}
          <a
            href="/pricing"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="https://docs.railzway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://railzway.com"
            className="hidden sm:block text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Log in
          </a>
          <Button as="a" href="https://railzway.com/signup" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
