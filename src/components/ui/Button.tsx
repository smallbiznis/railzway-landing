import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & Omit<ComponentPropsWithoutRef<C>, "as">;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-text-inverse hover:bg-accent-glow focus-visible:ring-accent-primary/50",
  secondary:
    "border border-border-strong bg-bg-surface text-text-primary hover:border-border-strong/80 hover:bg-bg-surface-strong focus-visible:ring-accent-primary/40",
  ghost:
    "text-text-primary hover:bg-bg-surface/60 focus-visible:ring-accent-primary/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = <C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps<C>) => {
  const Component = as ?? "button";
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-base ease-standard focus-visible:outline-none focus-visible:ring-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  const componentProps = {
    className: classes,
    ...props,
  } as ComponentPropsWithoutRef<C>;

  if (Component === "button") {
    const buttonProps =
      componentProps as ComponentPropsWithoutRef<"button"> & {
        type?: "button" | "submit" | "reset";
      };
    if (!buttonProps.type) {
      buttonProps.type = "button";
    }
  }

  return <Component {...componentProps} />;
};

export default Button;
