import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const [active, setActive] = useState("#");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = navLinks.flatMap((link) => {
      const section = document.querySelector<HTMLElement>(link.href);
      return section ? [{ href: link.href as string, section }] : [];
    });

    const update = () => {
      const current = window.scrollY;

      setHidden(current > lastScroll.current && current > 80);
      lastScroll.current = current;

      const marker = window.innerHeight * 0.35;
      const visible = sections.filter(
        ({ section }) => section.getBoundingClientRect().top <= marker,
      );
      setActive(visible.length > 0 ? visible[visible.length - 1].href : "#");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const dialog = mobileMenuRef.current;
    const menuItems = dialog
      ? Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];
    const focusables = menuButton ? [menuButton, ...menuItems] : menuItems;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const index = focusables.indexOf(document.activeElement as HTMLElement);
      const nextIndex = event.shiftKey
        ? index <= 0
          ? focusables.length - 1
          : index - 1
        : index === -1 || index === focusables.length - 1
          ? 0
          : index + 1;

      event.preventDefault();
      focusables[nextIndex].focus();
    };

    setHidden(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    menuItems[0]?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus({ preventScroll: true });
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden && !isMobileMenuOpen ? -88 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="border-b border-border/70 bg-background/85 backdrop-blur-xl">
          <nav className="shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
            <a href="#" aria-label="Retour en haut de la page" className="flex items-center">
              <BrandLogo />
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={clsx(
                      "relative flex items-baseline gap-1.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "text-[9px] tabular transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground/50",
                      )}
                    >
                      {link.index}
                    </span>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-rule"
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                      />
                    )}
                  </a>
                );
              })}

              <AnimatedButton size="sm" asChild className="ml-1">
                <a href="#contact">
                  Discutons
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </AnimatedButton>
            </div>

            <button
              ref={menuButtonRef}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-foreground md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-background px-5 pb-10 pt-24 sm:px-8"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />

            <nav className="relative flex flex-col border-t border-border/70">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-border/70 py-5"
                >
                  <span aria-hidden="true" className="font-mono text-[10px] text-primary">
                    {link.index}
                  </span>
                  <span className="display-2 text-foreground">{link.label}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    className="ml-auto text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="relative mt-10 space-y-5"
            >
              <AnimatedButton size="lg" asChild className="w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Discutons
                  <ArrowUpRight />
                </a>
              </AnimatedButton>

              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <a href={`mailto:${siteConfig.contactEmail}`} className="link-sweep">
                  {siteConfig.contactEmail}
                </a>
                <span className="flex gap-4">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
