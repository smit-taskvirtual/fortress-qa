import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Fortress Consulting" },
      {
        name: "description",
        content:
          "Six integrated cybersecurity and strategic advisory practices delivered to government and enterprise clients across the GCC.",
      },
      { property: "og:title", content: "Fortress Services" },
      {
        property: "og:description",
        content: "Detailed service breakdown across six practice areas.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six integrated practices. One advisory standard."
        description="Each practice is delivered by senior advisors and supported by AI-driven analytics and trusted technical execution partners."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-md border border-border bg-[color:var(--surface)] p-8 hover:border-primary/50 hover:bg-[color:var(--surface-elevated)] transition"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <p className="eyebrow mb-3">
                  Practice {s.number} · {s.label}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  {s.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.blurb}
                </p>
                <p className="mt-6 text-xs text-primary font-medium">
                  {s.short}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
