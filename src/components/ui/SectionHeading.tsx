import { cn } from "@/lib/utils";
import { MaskLine, Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  titleId: string;
  lede?: string;
  className?: string;
};

export const SectionHeading = ({
  index,
  label,
  title,
  titleId,
  lede,
  className,
}: SectionHeadingProps) => (
  <div className={cn("grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12", className)}>
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tabular text-primary">{index}</span>
        <span className="h-px w-10 bg-border" aria-hidden="true" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2 id={titleId} className="display-2 mt-5">
        <MaskLine>{title}</MaskLine>
      </h2>
    </div>

    {lede && (
      <Reveal delay={0.1}>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-[15px]">
          {lede}
        </p>
      </Reveal>
    )}
  </div>
);
