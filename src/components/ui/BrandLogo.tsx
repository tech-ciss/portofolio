import brandMark from "@/assets/brand-mark.svg";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export const BrandLogo = ({ className, showWordmark = true }: BrandLogoProps) => (
  <span className={cn("inline-flex items-center gap-2.5", className)}>
    <img src={brandMark} alt="" aria-hidden="true" className="h-8 w-8 shrink-0" />
    {showWordmark && (
      <span className="font-display text-sm font-semibold tracking-[0.12em] text-foreground">
        CISS <span className="text-primary">TECH</span>
      </span>
    )}
  </span>
);
