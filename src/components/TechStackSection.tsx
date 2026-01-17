import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

// Reusing the "Surface" style from other components for consistency
// but making it more minimal for a "logo strip" feel.

function TechStackSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-12 border-b border-white/5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          variants={item}
        >
          <div className="text-sm font-medium text-text-muted uppercase tracking-widest whitespace-nowrap">
            Built on giants
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {/* Go Logo Replacement - Text based for safety/speed */}
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-2xl font-bold tracking-tighter text-text-primary group-hover:text-[#00ADD8] transition-colors">GO</span>
            </div>

            {/* PostgreSQL Logo Replacement */}
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-xl font-bold text-text-primary group-hover:text-[#336791] transition-colors">PostgreSQL</span>
            </div>

            {/* Nomad Logo Replacement */}
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-xl font-bold text-text-primary group-hover:text-[#00CA8E] transition-colors">Nomad</span>
            </div>

            {/* Open Source Badge */}
            <div className="flex items-center gap-2 group cursor-default border border-border-subtle px-3 py-1 rounded-full">
              <span className="text-xs font-mono text-text-secondary">MIT / AGPLv3</span>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TechStackSection;
