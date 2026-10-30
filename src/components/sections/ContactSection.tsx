import { useState } from "react";
import { ArrowUpRight, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/site-config";

const fieldClassName =
  "h-11 rounded-none border-0 border-b border-border bg-transparent px-0 font-sans text-[15px] placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0";

const contactRows = [
  { icon: Phone, label: "Téléphone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Localisation", value: "Abidjan, Côte d’Ivoire" },
];

const formEndpoint = `https://formsubmit.co/ajax/${siteConfig.contactEmail}`;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("La transmission du formulaire a échoué.");
      }

      toast({
        title: "Message envoyé",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Message non envoyé",
        description: `Une erreur est survenue. Vous pouvez m’écrire directement à ${siteConfig.contactEmail}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-border/70 py-20 md:py-28"
    >
      <div className="shell">
        <SectionHeading
          index="04"
          label="Contact"
          titleId="contact-title"
          title={
            <>
              Travaillons <span className="text-primary">ensemble</span>
            </>
          }
          lede="Une idée, un projet, une équipe à renforcer ? Écrivez-moi — je réponds sous 24 h ouvrées."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 border border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Disponible pour missions freelance
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="display-3 mt-7 block break-words text-foreground transition-colors hover:text-primary"
              >
                {siteConfig.contactEmail}
              </a>
            </Reveal>

            <dl className="mt-9 border-t border-border/70">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="group flex items-center justify-between gap-4 border-b border-border/70 py-4"
                >
                  <dt className="eyebrow flex items-center gap-2">
                    <row.icon size={13} className="text-primary" aria-hidden="true" />
                    {row.label}
                  </dt>
                  <dd className="text-sm text-foreground/90 transition-colors group-hover:text-primary">
                    {row.href ? (
                      <a href={row.href} className="link-sweep">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 border border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                GitHub
                <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 border border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                LinkedIn
                <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-7 border border-border/70 p-5 sm:p-7"
              aria-describedby="contact-privacy"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  Formulaire direct
                </p>
                <Mail size={14} className="text-primary" aria-hidden="true" />
              </div>

              <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow mb-2 block">
                  Objet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="De quoi s’agit-il ?"
                  maxLength={150}
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-moi de votre projet…"
                  rows={5}
                  maxLength={3000}
                  required
                  className={`${fieldClassName} min-h-[7rem] resize-none`}
                />
              </div>

              <AnimatedButton
                type="submit"
                size="lg"
                className="w-full justify-between px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Envoi…
                    <Loader2 className="animate-spin" />
                  </>
                ) : (
                  <>
                    Envoyer un message
                    <Send className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </AnimatedButton>

              <p id="contact-privacy" className="text-xs leading-relaxed text-muted-foreground">
                Les informations envoyées servent uniquement à répondre à votre demande.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
