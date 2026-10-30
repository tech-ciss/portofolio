import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
  it("ouvre le menu mobile et le ferme avec la touche Échap", async () => {
    render(<Navigation />);

    const menuButton = screen.getByRole("button", { name: "Ouvrir le menu" });
    fireEvent.click(menuButton);

    expect(screen.getByRole("dialog", { name: "Menu principal" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Ouvrir le menu" })).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });
    expect(document.body.style.overflow).toBe("");
  });

  it("contient les quatre destinations principales", () => {
    render(<Navigation />);

    expect(screen.getByRole("link", { name: "À propos" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Projets" })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: "Compétences" })).toHaveAttribute("href", "#skills");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });
});
