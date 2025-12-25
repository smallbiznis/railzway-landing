import type { Transition, Variants } from "motion/react";

export const motionTokens = {
  durationFast: 0.15,
  durationBase: 0.22,
  durationSlow: 0.32,
  easeStandard: [0.16, 1, 0.3, 1],
  easeEmphasized: [0.4, 0, 0.2, 1],
  stagger: 0.12,
  delay: 0.08,
} as const;

const baseTransition: Transition = {
  duration: motionTokens.durationBase,
  ease: motionTokens.easeStandard,
};

export const motionPresets = {
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: baseTransition },
  },
  slideUp: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.durationSlow, ease: motionTokens.easeStandard },
    },
  },
  glow: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: motionTokens.durationSlow, ease: motionTokens.easeEmphasized },
    },
  },
} satisfies Record<string, Variants>;

export const getSectionVariants = (reducedMotion: boolean) => {
  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reducedMotion
        ? {}
        : {
            staggerChildren: motionTokens.stagger,
            delayChildren: motionTokens.delay,
          },
    },
  };

  const item: Variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: baseTransition },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionTokens.durationSlow,
            ease: motionTokens.easeStandard,
          },
        },
      };

  return { container, item };
};

export const defaultViewport = { once: true, amount: 0.35 };
