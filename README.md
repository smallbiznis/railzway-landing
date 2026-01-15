# Railzway Design System

Shared, token-based design system for both `railzway-landing` and
`railzway-dashboard`. The goal is a calm, confident, infrastructure-grade UI that
stays consistent across marketing and product surfaces.

## Philosophy

- Dark-first, neutral palette with a single Railzway green accent.
- Tokens first. No hardcoded colors in components.
- Simple, composable primitives that do not assume layout or business logic.
- Motion is supportive, not decorative. Respect reduced motion.

## Files

- `design-tokens.css`: source of truth for CSS variables.
- `tailwind.config.ts`: maps tokens into Tailwind utilities.
- `src/components/ui/*`: core primitives (Surface, Button, Badge, Divider, Text).
- `src/lib/motion.ts`: shared motion presets and section variants.

## Token Usage

Use Tailwind utilities mapped to tokens:

- Backgrounds: `bg-bg-primary`, `bg-bg-surface`, `bg-bg-subtle`
- Text: `text-text-primary`, `text-text-secondary`, `text-text-muted`
- Borders: `border-border-subtle`, `border-border-strong`
- Accent: `bg-accent-primary`, `text-accent-primary`, `ring-accent-primary/50`
- Status: `text-status-success`, `text-status-warning`, `text-status-error`

Avoid `text-white`, `bg-black`, or hex colors inside components.

## Motion Guidelines

When to animate:

- Section entry on scroll (fade or slide up).
- Hover feedback on interactive elements.
- Progress or state changes that need clarity.

When not to animate:

- Continuous loops or background motion.
- Large parallax or heavy scale changes.
- Dense layouts where motion reduces legibility.

Defaults:

- Use `motion/react` with `useReducedMotion`.
- Prefer the shared presets from `src/lib/motion.ts`.

Example:

```tsx
import { motion, useReducedMotion } from "motion/react";
import { motionPresets, getSectionVariants } from "../lib/motion";

const reducedMotion = useReducedMotion();
const { container, item } = getSectionVariants(reducedMotion);

<motion.section variants={container} initial="hidden" whileInView="show">
  <motion.div variants={item}>...</motion.div>
  <motion.div variants={motionPresets.fade}>...</motion.div>
</motion.section>;
```

## Core Primitives

- `Surface`: Card/panel base with tokens for border, background, radius, shadow.
- `Button`: Primary, secondary, and ghost variants.
- `Badge`: Neutral or accent tags.
- `Divider`: Subtle separator line.
- `Text`: Optional helper for tone and size.

## Usage Examples

Landing page usage:

```tsx
import { Badge, Button, Surface } from "./components/ui";

<Badge variant="neutral">Nimbus</Badge>
<Button as="a" href="#get-started">Get started</Button>
<Surface tone="subtle" className="p-6">
  <h3 className="text-text-primary">Open-core by default</h3>
  <p className="text-text-muted">Portable billing primitives.</p>
</Surface>
```

Dashboard usage (same primitives, no changes):

```tsx
import { Badge, Button, Divider, Surface, Text } from "./components/ui";

<Surface className="p-6">
  <Text as="h2" size="lg" weight="semibold">
    Billing overview
  </Text>
  <Text tone="muted" size="sm">
    Usage updates every 5 minutes
  </Text>
  <Divider className="my-4" />
  <div className="flex items-center gap-3">
    <Badge variant="accent">Live</Badge>
    <Button variant="secondary">Configure meters</Button>
  </div>
</Surface>
```
