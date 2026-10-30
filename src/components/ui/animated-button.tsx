import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const animatedButtonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[2px] font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        outline:
          "border border-border text-foreground hover:border-primary/70 hover:text-primary",
        ghost: "text-muted-foreground hover:text-foreground",
        link: "gap-1.5 p-0 tracking-[0.18em] text-foreground hover:text-primary",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-9 px-4 text-[10px]",
        lg: "h-14 px-9",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
