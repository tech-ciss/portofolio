import { ArrowUp, Github, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export const Footer = () => (
  <footer className="border-t border-border/70">
    <div className="shell">
      <div className="flex flex-wrap items-end justify-between gap-8 pt-14">
        <div>
          <p className="eyebrow">Disponible pour missions — Abidjan, CI</p>
          <p className="outline-type mt-4 font-display text-[clamp(2.75rem,12.5vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.045em] transition-colors duration-500 hover:text-foreground">
            CISS TECH
          </p>
        </div>

        <a
          href="#accueil"
          aria-label="Retour en haut de la page"
          className="group mb-2 flex h-12 w-12 items-center justify-center border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-border/70 py-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          © {new Date().getFullYear()} CISS TECH — Conçu et codé à Abidjan
        </p>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-sweep font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
