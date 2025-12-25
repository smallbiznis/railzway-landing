import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type SurfaceTone = "default" | "subtle" | "strong";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  tone?: SurfaceTone;
};

const toneClasses: Record<SurfaceTone, string> = {
  default: "bg-bg-surface",
  subtle: "bg-bg-surface/40",
  strong: "bg-bg-surface-strong",
};

function Surface({ tone = "default", className, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-subtle text-text-primary shadow-xs",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}

export default Surface;
