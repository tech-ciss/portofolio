import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/content";

export const ProjectsSection = () => (
  <section
    id="projects"
    aria-labelledby="projects-title"
    className="border-t border-border/70 py-20 md:py-28"
  >
    <div className="shell">
      <SectionHeading
        index="02"
        label="Réalisations"
        titleId="projects-title"
        title={
          <>
            Projets <span className="text-primary">sélectionnés</span>
          </>
        }
        lede="Quatre réalisations, du brief à l’interface livrée : web, mobile et design d’interaction."
      />

      <ol className="mt-12">
        {projects.map((project, index) => {
          const hasLiveDemo = project.liveUrl !== "#";
          const hasSource = project.githubUrl !== "#";

          return (
            <li
              key={project.id}
              className="group relative border-t border-border/70 last:border-b"
            >
              <Reveal distance={28}>
                <article className="grid gap-5 py-8 md:grid-cols-[1fr_17rem] md:gap-10 md:py-10 lg:grid-cols-[1fr_20rem]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tabular text-muted-foreground/80 transition-colors group-hover:text-primary"
                      >
                        {`0${index + 1}`}
                      </span>
                      <span aria-hidden="true" className="h-px w-6 bg-border" />
                      <span className="eyebrow">{project.category}</span>
                    </div>

                    <h3 className="display-2 mt-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-border/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {hasLiveDemo ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Voir la démonstration de ${project.title}`}
                          className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
                        >
                          <span className="link-sweep">Voir la démo</span>
                          <ArrowUpRight
                            size={13}
                            className="text-primary transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <span className="border border-border/70 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          Présentation bientôt disponible
                        </span>
                      )}

                      {hasSource && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Voir le code de ${project.title} sur GitHub`}
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github size={13} />
                          <span className="link-sweep">Code source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative overflow-hidden border border-border/70 bg-card">
                    <img
                      src={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] md:grayscale-[0.35] md:group-hover:grayscale-0"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-0"
                    />
                  </div>
                </article>
              </Reveal>

              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 bg-primary transition-[width] duration-700 ease-out group-hover:w-full"
              />
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
