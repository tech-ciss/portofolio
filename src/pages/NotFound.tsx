import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col justify-center bg-background px-5 sm:px-8">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="eyebrow">Erreur — page introuvable</p>
        <p className="outline-type mt-6 font-display text-[clamp(5rem,22vw,16rem)] font-semibold leading-[0.8] tracking-[-0.05em]">
          404
        </p>
        <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
          Cette page n’existe pas — ou plus. Le portfolio, lui, est toujours là.
        </p>
        <a
          href="/"
          className="group mt-10 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary/70 hover:text-primary"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
};

export default NotFound;
