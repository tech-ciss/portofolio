import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactSection } from "./ContactSection";
import { siteConfig } from "@/lib/site-config";

const { toastMock } = vi.hoisted(() => ({ toastMock: vi.fn() }));

vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: toastMock }),
}));

const fetchMock = vi.fn();

const fillAndSubmitForm = () => {
  fireEvent.change(screen.getByLabelText("Nom"), { target: { value: "Awa Koné" } });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "awa@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Objet"), {
    target: { value: "Création d’un site" },
  });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "Bonjour, je souhaite discuter de mon projet." },
  });
  fireEvent.click(screen.getByRole("button", { name: "Envoyer un message" }));
};

describe("ContactSection", () => {
  beforeEach(() => {
    toastMock.mockReset();
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("envoie les données vers FormSubmit puis réinitialise le formulaire", async () => {
    fetchMock.mockResolvedValue({ ok: true });
    render(<ContactSection />);

    fillAndSubmitForm();

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const [endpoint, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const body = options.body as FormData;

    expect(endpoint).toBe(`https://formsubmit.co/ajax/${siteConfig.contactEmail}`);
    expect(options.method).toBe("POST");
    expect(body.get("name")).toBe("Awa Koné");
    expect(body.get("email")).toBe("awa@example.com");
    expect(body.get("subject")).toBe("Création d’un site");
    expect(toastMock).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Message envoyé" }),
    );
    expect(screen.getByLabelText("Nom")).toHaveValue("");
  });

  it("conserve les données et propose l’email direct lorsque l’envoi échoue", async () => {
    fetchMock.mockResolvedValue({ ok: false });
    render(<ContactSection />);

    fillAndSubmitForm();

    await waitFor(() => {
      expect(toastMock).toHaveBeenCalledWith(
        expect.objectContaining({
          variant: "destructive",
          title: "Message non envoyé",
        }),
      );
    });
    expect(screen.getByLabelText("Nom")).toHaveValue("Awa Koné");
  });
});
