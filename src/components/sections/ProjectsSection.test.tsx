import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsSection } from "./ProjectsSection";

describe("ProjectsSection", () => {
  it("affiche uniquement les liens de projets réellement disponibles", () => {
    render(<ProjectsSection />);

    expect(
      screen.getByRole("link", { name: "Voir la démonstration de Show Time" }),
    ).toHaveAttribute("href", "https://movies-zeta-eight-84.vercel.app/");
    expect(
      screen.queryByRole("link", { name: "Voir la démonstration de My Contacts" }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByText("Présentation bientôt disponible")).toHaveLength(3);
  });
});
