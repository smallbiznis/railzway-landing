import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type BadgeVariant = "neutral" | "accent";
type BadgeSize = "sm" | "md";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-border-subtle bg-bg-surface/60 text-text-muted",
  accent: "border-accent-primary/30 bg-accent-primary/10 text-accent-primary",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-3 py-1 text-[11px] uppercase tracking-[0.2em]",
  md: "px-3.5 py-1.5 text-xs uppercase tracking-[0.18em]",
};

function Badge({
  variant = "neutral",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export default Badge;
