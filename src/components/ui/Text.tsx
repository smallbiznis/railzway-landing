import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../lib/cn";

type TextTone = "primary" | "secondary" | "muted" | "accent";
type TextSize = "sm" | "base" | "lg" | "xl";
type TextWeight = "regular" | "medium" | "semibold";

type TextProps<C extends ElementType = "p"> = {
  as?: C;
  tone?: TextTone;
  size?: TextSize;
  weight?: TextWeight;
} & Omit<ComponentPropsWithoutRef<C>, "as">;

const toneClasses: Record<TextTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent-primary",
};

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const Text = <C extends ElementType = "p">({
  as,
  tone = "primary",
  size = "base",
  weight = "regular",
  className,
  ...props
}: TextProps<C>) => {
  const Component = as ?? "p";
  return (
    <Component
      className={cn(
        toneClasses[tone],
        sizeClasses[size],
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  );
};

export default Text;
