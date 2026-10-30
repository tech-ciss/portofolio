import { motion } from "framer-motion";
import { cn, EASE_OUT_EXPO } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

/** Single scroll-reveal primitive: fade + rise, once per element. */
export const Reveal = ({ children, className, delay = 0, distance = 22 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, ease: EASE_OUT_EXPO, delay }}
  >
    {children}
  </motion.div>
);

type MaskLineProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onMount?: boolean;
};

/**
 * Headline line that slides up from behind a mask.
 * The observer sits on the mask: the moving child starts clipped, so it would
 * never report itself as visible.
 */
export const MaskLine = ({ children, className, delay = 0, onMount = false }: MaskLineProps) => (
  <motion.span
    className="block overflow-hidden pb-[0.08em]"
    initial="hidden"
    animate={onMount ? "visible" : undefined}
    whileInView={onMount ? undefined : "visible"}
    viewport={onMount ? undefined : { once: true, margin: "-40px" }}
  >
    <motion.span
      className={cn("block", className)}
      variants={{ hidden: { y: "112%" }, visible: { y: "0%" } }}
      transition={{ duration: 1, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.span>
  </motion.span>
);
