import * as React from "react";

import { cn } from "@/lib/utils";

function BigInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type="text"
      data-slot="big-input"
      className={cn(
        "flex h-14 w-full min-w-0 rounded-full border border-input bg-transparent px-6 text-lg shadow-xs outline-none transition-colors placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { BigInput };
