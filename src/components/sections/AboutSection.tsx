import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { highlights, stats } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const AboutSection = () => (
  <section id="about" aria-labelledby="about-title" className="border-t border-border/70 py-20 md:py-28">
    <div className="shell">
      <SectionHeading
        index="01"
        label="Profil"
        titleId="about-title"
        title={
          <>
            Un développeur qui <span className="text-primary">pense produit</span>
          </>
        }
        lede="Je travaille à l’endroit où l’interface, la performance et la maintenabilité se rencontrent — pas seulement là où le ticket est fermé."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              Je suis développeur full-stack et concepteur UI/UX, basé à Abidjan. Depuis deux
              ans, je conçois des applications web et mobiles : je pars du besoin, je dessine
              l’interface, puis je l’implémente jusqu’au déploiement.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Mon terrain de jeu : React et TypeScript côté client, Node, Laravel ou Python côté
              serveur. J’accorde autant d’attention à la lisibilité d’un composant qu’au poids
              d’une page, parce que les deux décident de la qualité perçue.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <blockquote className="mt-8 border-l border-primary pl-5">
              <p className="display-3 text-foreground/90">
                « Une interface finie, c’est une interface où l’on ne remarque plus les détails —
                seulement qu’elle répond juste. »
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 border-y border-border/70">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn("py-5", index > 0 && "border-l border-border/70 pl-6")}
                >
                  <dt className="eyebrow">{stat.label}</dt>
                  <dd className="mt-2 font-display text-4xl font-semibold tabular tracking-tight text-foreground sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div>
          <p className="eyebrow mb-4">Ce que je vise à chaque livraison</p>
          <ol className="border-t border-border/70">
            {highlights.map((item, index) => (
              <li key={item.title} className="group relative overflow-hidden border-b border-border/70">
                <Reveal delay={index * 0.07} className="relative">
                  <div className="flex gap-4 py-5 sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="mt-1 font-mono text-[10px] tabular text-muted-foreground/60 transition-colors group-hover:text-primary"
                    >
                      {`0${index + 1}`}
                    </span>
                    <div>
                      <h3 className="display-3 transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.15} className="mt-8">
            <div className="flex flex-col gap-4 border border-border/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow">Document</p>
                <p className="display-3 mt-2">Mon parcours en un coup d’œil</p>
              </div>
              <AnimatedButton variant="outline" asChild className="shrink-0">
                <a href={siteConfig.cvPath} download>
                  <Download />
                  Télécharger mon CV
                </a>
              </AnimatedButton>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
