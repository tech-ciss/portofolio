import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
};

/** CSS-driven infinite ticker. Second copy is hidden from assistive tech. */
export const Marquee = ({ children, reverse = false, duration = 42, className }: MarqueeProps) => (
  <div className={cn("marquee-mask group flex overflow-hidden", className)}>
    <div
      className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]"
      style={
        {
          "--marquee-duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : undefined,
        } as React.CSSProperties
      }
    >
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);
