import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => (
  <GlobalBackground>
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-24 bg-primary px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-transform focus:translate-y-0"
    >
      Aller au contenu principal
    </a>

    <Navigation />

    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <Footer />
  </GlobalBackground>
);

export default Index;
