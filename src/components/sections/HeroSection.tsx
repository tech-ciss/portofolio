import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Marquee } from "@/components/ui/Marquee";
import { MaskLine } from "@/components/motion/Reveal";
import { EASE_OUT_EXPO } from "@/lib/utils";
import profileImage from "@/assets/profile.jpeg";
import { siteConfig } from "@/lib/site-config";

const ticker = [
  "Full-Stack",
  "Interfaces produit",
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Abidjan",
  "Disponible",
];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -56]);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      aria-labelledby="hero-title"
      className="relative pt-24 md:pt-28"
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border/70 pb-4"
        >
          <span className="eyebrow">Portfolio — 2026</span>
          <span className="eyebrow flex items-center gap-2 text-foreground/80">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Disponible pour missions
          </span>
          <span className="eyebrow hidden sm:block">Abidjan · 5°19′N 4°01′W</span>
        </motion.div>

        <div className="grid gap-12 pt-8 sm:pt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14 lg:pt-16">
          <div>
            <h1
              id="hero-title"
              aria-label="Alassane Cissé"
              className="display-1 font-semibold"
            >
              <span aria-hidden="true">
                <MaskLine onMount>Alassane</MaskLine>
                <MaskLine onMount delay={0.1} className="outline-type">
                  Cissé<span className="text-primary [-webkit-text-stroke:0]">.</span>
                </MaskLine>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE_OUT_EXPO }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <span className="text-foreground">Développeur full-stack & UI engineer.</span>{" "}
              Je conçois et construis des produits web rapides, accessibles et soignés — de
              l’interface à l’architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT_EXPO }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <AnimatedButton size="lg" asChild>
                <a href="#projects">
                  Voir mes projets
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </AnimatedButton>

              <AnimatedButton variant="outline" size="lg" asChild>
                <a href="#contact">
                  Me contacter
                  <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-border/70 pt-5"
            >
              <a
                href={siteConfig.cvPath}
                download
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground"
              >
                <Download size={14} className="text-primary" />
                Télécharger CV
              </a>

              <span className="flex items-center gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil GitHub"
                  className="group flex items-center gap-1.5 border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github size={13} />
                  GitHub
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil LinkedIn"
                  className="group flex items-center gap-1.5 border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin size={13} />
                  LinkedIn
                </a>
              </span>
            </motion.div>
          </div>

          <motion.figure
            style={{ y: portraitY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="relative mx-auto w-full max-w-[300px] self-start lg:max-w-none"
          >
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-5 w-5 border-l border-t border-primary/70"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-5 w-5 border-b border-r border-primary/70"
            />

            <div className="relative overflow-hidden bg-card">
              <img
                src={profileImage}
                alt="Portrait d’Alassane Cissé, développeur web"
                width={768}
                height={960}
                className="aspect-[4/5] w-full object-cover object-top contrast-[1.02] grayscale-[0.25] transition-all duration-700 hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
              />
            </div>

            <figcaption className="mt-3 flex items-center justify-between border-t border-border/70 pt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Portrait_01</span>
              <span className="text-primary">Abidjan, CI</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <div className="mt-14 border-y border-border/70 py-3 sm:mt-20">
        <Marquee duration={38}>
          {ticker.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:text-xs"
            >
              {item}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
