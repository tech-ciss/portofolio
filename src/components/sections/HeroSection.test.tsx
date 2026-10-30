import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";
import { siteConfig } from "@/lib/site-config";

describe("HeroSection", () => {
  it("présente l’identité et les appels à l’action principaux", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Alassane Cissé" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Voir mes projets" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Me contacter" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("expose le vrai CV et les profils sociaux", () => {
    render(<HeroSection />);

    expect(screen.getByRole("link", { name: "Télécharger CV" })).toHaveAttribute(
      "href",
      siteConfig.cvPath,
    );
    expect(screen.getByRole("link", { name: "Profil GitHub" })).toHaveAttribute(
      "href",
      siteConfig.social.github,
    );
    expect(screen.getByRole("link", { name: "Profil LinkedIn" })).toHaveAttribute(
      "href",
      siteConfig.social.linkedin,
    );
  });
});
