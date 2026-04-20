import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-border">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-x">
        <p className="eyebrow mb-5 fade-in">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-4xl fade-in">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl fade-in">{description}</p>
        )}
      </div>
    </div>
  );
}
