export const GlobalBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-x-clip bg-background">
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-noise opacity-[0.05] mix-blend-soft-light"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[75vh] bg-[radial-gradient(75%_60%_at_50%_-15%,hsl(var(--primary)/0.08),transparent_70%)]"
    />

    <div className="relative z-10">{children}</div>
  </div>
);
