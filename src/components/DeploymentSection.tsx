import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import { Button, Surface } from "./ui";

function DeploymentSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <motion.div className="space-y-6" variants={item}>
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Deployment
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Self-hosted software
            </h2>
            <div className="space-y-4 text-base text-text-secondary">
              <p>
                Railzway makes minimal assumptions about the runtime environment.
                You are responsible for infrastructure, networking, TLS termination,
                and secrets management.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-text-primary">Persistent Storage</h4>
                <p className="text-sm">
                  Uses <code className="bg-bg-subtle px-1.5 py-0.5 rounded text-text-primary">/var/lib/railzway</code> for persistent data storage.
                  This directory should be mounted as a volume.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button as="a" href="https://github.com/smallbiznis/railzway" variant="primary">
                View Deployment Docs
              </Button>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <Surface tone="subtle" className="p-0 overflow-hidden bg-bg-primary border-border-strong">
              <div className="flex items-center gap-4 border-b border-border-subtle bg-bg-subtle/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-status-error/40" />
                  <div className="h-3 w-3 rounded-full bg-status-warning/40" />
                  <div className="h-3 w-3 rounded-full bg-status-success/40" />
                </div>
                <span className="text-xs font-medium text-text-muted">docker-compose.yml</span>
              </div>
              <div className="overflow-x-auto p-4">
                <pre className="text-xs font-mono text-text-secondary leading-relaxed">
                  {`services:
  railzway:
    image: ghcr.io/smallbiznis/railzway:latest
    volumes:
      - railzway-data:/var/lib/railzway
      # Optional: Custom billing config
      - ./billing.yml:/var/lib/railzway/config/billing.yml:ro
    ports:
      - "8080:8080"

volumes:
  railzway-data:`}
                </pre>
              </div>
            </Surface>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default DeploymentSection;
