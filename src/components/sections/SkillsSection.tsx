import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { skillCategories, technologies } from "@/lib/content";

const TechItem = ({ name, icon, invert }: { name: string; icon: string; invert?: boolean }) => (
  <span className="mr-7 flex shrink-0 items-center gap-2.5">
    <img
      src={icon}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={cn("h-5 w-5 object-contain opacity-75", invert && "invert")}
    />
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {name}
    </span>
  </span>
);

export const SkillsSection = () => (
  <section
    id="skills"
    aria-labelledby="skills-title"
    className="border-t border-border/70 py-20 md:py-28"
  >
    <div className="shell">
      <SectionHeading
        index="03"
        label="Stack"
        titleId="skills-title"
        title={
          <>
            Compétences & <span className="text-primary">technologies</span>
          </>
        }
        lede="Une boîte à outils présentée selon mon usage réel, plutôt qu’avec des pourcentages arbitraires."
      />

      <div className="mt-12 grid gap-px bg-border/70 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06} className="bg-background">
            <div className="h-full p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3 border-b border-border/70 pb-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  {category.title}
                </h3>
                <span aria-hidden="true" className="font-mono text-[10px] text-primary">
                  {`0${index + 1}`}
                </span>
              </div>

              <ul className="divide-y divide-border/50">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group flex items-baseline justify-between gap-3 py-3"
                  >
                    <span className="text-sm text-foreground/90 transition-colors group-hover:text-foreground">
                      {skill.name}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <p className="eyebrow">Boîte à outils — {technologies.length} technologies</p>
          <p className="eyebrow hidden sm:block">Survolez pour mettre en pause</p>
        </div>

        <div className="space-y-4 border-y border-border/70 py-6">
          <Marquee duration={64}>
            {technologies.slice(0, 12).map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </Marquee>
          <Marquee reverse duration={78}>
            {technologies.slice(12).map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  </section>
);
