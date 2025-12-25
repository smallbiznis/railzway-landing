import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-border-subtle", className)} {...props} />;
}

export default Divider;
