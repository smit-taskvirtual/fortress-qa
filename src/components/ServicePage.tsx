import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { FinalCTA } from "@/components/CTA";
import { SERVICES, type ServiceMeta } from "@/lib/services-data";

export type ApproachStep = { title: string; description: string };
export type Deliverable = { title: string; description: string };
export type AudienceProfile = { description: string };
export type Differentiator = { title: string; description: string };
export type EngagementStep = {
  title: string;
  bullets: string[];
  description: string;
};

export type ServicePageData = {
  slug: string;
  heroTitle: string;
  heroSubtext: string;
  overview: string[];
  capabilities: string[];
  approachHeading?: string;
  approach: ApproachStep[];
  deliverables: Deliverable[];
  audiences: AudienceProfile[];
  differentiators: Differentiator[];
  relatedSlugs: string[];
  engagementSteps?: EngagementStep[];
};

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function ServicePage({
  data,
}: {
  data: ServicePageData;
}) {
  const meta = SERVICES.find((s) => s.slug === data.slug)!;
  const Icon = meta.icon;
  const related = data.relatedSlugs
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((s): s is ServiceMeta => Boolean(s));

  return (
    <>
      {/* A. Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, oklch(0.58 0.21 25 / 28%) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 100%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 100%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container-x pt-36 md:pt-44 pb-20 md:pb-28">
          <div className="flex items-center gap-3 mb-6 fade-in">
            <span className="eyebrow">
              Practice {meta.number} · {meta.label}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl fade-in">
            {data.heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed fade-in">
            {data.heroSubtext}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 fade-in">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
            >
              Schedule Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* B. Service Overview */}
      <SectionShell>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              {meta.name}
            </h2>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              {data.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-md border border-border bg-[color:var(--surface-elevated)] p-8 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">
                  What's Included
                </h3>
              </div>
              <ul className="space-y-4">
                {data.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/90">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* C. The Fortress Approach */}
      <SectionShell className="border-t border-border">
        <div className="rounded-md border border-border bg-[color:var(--surface)] p-8 md:p-14">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">The Fortress Approach</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {data.approachHeading ?? `How We Deliver ${meta.name}`}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {data.approach.map((step, i) => (
              <div
                key={step.title}
                className="bg-[color:var(--surface-elevated)] p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-primary">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* D. Deliverables */}
      <SectionShell>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Deliverables</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
              What you receive
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Each engagement produces decision-grade artifacts built for
            executive, board and operational audiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {data.deliverables.map((d, i) => (
            <div
              key={d.title}
              className="group rounded-md border border-border bg-[color:var(--surface)] p-8 hover:border-primary/40 transition"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30 text-primary text-xs font-mono">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* E. Who This Is For */}
      <SectionShell className="border-t border-border">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">Audience</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Who Engages This Service
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {data.audiences.map((a, i) => (
            <div
              key={i}
              className="rounded-md bg-[color:var(--surface)] border border-border border-l-2 border-l-primary p-7"
            >
              <p className="text-xs font-mono text-primary mb-4">
                Profile 0{i + 1}
              </p>
              <p className="text-sm leading-relaxed text-foreground/90">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* F. Why Fortress */}
      <SectionShell>
        <div className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">Why Fortress</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            The Fortress difference
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {data.differentiators.map((d) => (
            <div key={d.title}>
              <div className="h-px w-12 bg-primary mb-5" />
              <h3 className="text-lg font-semibold tracking-tight mb-3">
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Engagement Steps (only on Page 6) */}
      {data.engagementSteps && (
        <SectionShell className="border-t border-border">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Engagement Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Six Steps for the Engagement Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {data.engagementSteps.map((s, i) => (
              <div
                key={s.title}
                className="bg-[color:var(--surface)] p-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-semibold text-primary font-mono">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                    Step
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {s.title}
                </h3>
                <ul className="mb-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {/* G. Related Services */}
      <SectionShell className="border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">Related</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              You May Also Need
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group rounded-md border border-border bg-[color:var(--surface)] p-7 hover:border-primary/50 hover:bg-[color:var(--surface-elevated)] transition"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                    <RIcon className="h-5 w-5 text-primary" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  {r.name}
                </h3>
                <p className="text-sm text-muted-foreground">{r.blurb}</p>
              </Link>
            );
          })}
        </div>
      </SectionShell>

      {/* H. CTA */}
      <FinalCTA />
    </>
  );
}
