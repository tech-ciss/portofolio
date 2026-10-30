import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Theme } from "@/hooks/use-theme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export const ThemeToggle = ({ theme, onToggle, className }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
    className={cn(
      "group flex h-9 w-9 shrink-0 items-center justify-center border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary",
      className,
    )}
  >
    {theme === "dark" ? (
      <Sun
        size={15}
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:rotate-90"
      />
    ) : (
      <Moon
        size={15}
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:-rotate-12"
      />
    )}
  </button>
);
