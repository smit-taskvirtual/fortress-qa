import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cpu, Eye, Building2, AlertTriangle, Globe2, Sparkles, Network, Landmark, Banknote, Plane, Zap } from "lucide-react";
import heroTowers from "@/assets/hero-towers.jpg";
import abstractNetwork from "@/assets/abstract-network.jpg";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortress Consulting — Cybersecurity & Strategic Advisory in the GCC" },
      { name: "description", content: "Board-level cybersecurity strategy, intelligence-led risk monitoring, and AI-driven cyber risk assessment for government, defense and critical infrastructure across the GCC." },
      { property: "og:title", content: "Fortress Consulting — Cybersecurity & Strategic Advisory" },
      { property: "og:description", content: "AI-driven cyber risk, intelligence and strategic advisory for the GCC." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Cpu, title: "Cyber Risk Advisory", tag: "AI-Enhanced", desc: "Enterprise risk assessments, AI-assisted vulnerability scanning, red-team penetration testing, maturity benchmarking and resilience scoring." },
  { icon: ShieldCheck, title: "Governance, Risk & Compliance", tag: "GRC", desc: "Policy and control frameworks, ISO 27001 / NIST alignment, and regulatory compliance advisory across GCC jurisdictions." },
  { icon: Network, title: "Security Architecture & Strategy", tag: "Architecture", desc: "Enterprise security strategy, Zero Trust architecture, and cloud & infrastructure security design." },
  { icon: Eye, title: "Intelligence & Risk Monitoring", tag: "Subscription", desc: "Weekly geopolitical briefings, AI-driven threat monitoring, supply chain and sanctions intelligence, and threat actor tracking." },
  { icon: AlertTriangle, title: "Incident Advisory & Crisis", tag: "Response", desc: "Executive incident response, cyber crisis management and post-incident recovery for high-stakes environments." },
];

const sectors = [
  { icon: Landmark, label: "Government & Public Sector" },
  { icon: ShieldCheck, label: "Defense & National Security" },
  { icon: Banknote, label: "Banking & Financial Services" },
  { icon: Zap, label: "Energy & Critical Infrastructure" },
  { icon: Plane, label: "Aviation & Logistics" },
  { icon: Globe2, label: "Sovereign Funds" },
];

const differentiators = [
  "AI-driven risk assessment",
  "Intelligence-led advisory",
  "Advisory + execution hybrid model",
  "Strategic partnerships (Wattlecorp)",
  "Deep GCC expertise",
  "Vendor-neutral positioning",
];

const insights = [
  { cat: "Cybersecurity", title: "Cyber Risk Trends in GCC Government Entities", desc: "An assessment of evolving threat surfaces facing public sector institutions across the Gulf." },
  { cat: "Intelligence", title: "Geopolitical Risk Impact on Infrastructure", desc: "How regional tensions are reshaping operational risk for energy and transport networks." },
  { cat: "GCC Risk", title: "Supply Chain Risk Analysis", desc: "Mapping concentration risk and sanctions exposure across critical procurement networks." },
  { cat: "Strategy", title: "Executive Cybersecurity Frameworks", desc: "Translating cyber posture into board-level governance and resilience metrics." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroTowers}
          alt="Dark monumental skyscrapers"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.18 0.025 250 / 70%) 0%, oklch(0.18 0.025 250 / 40%) 40%, oklch(0.18 0.025 250) 100%)" }} />
        <div className="absolute inset-0 -z-10 mix-blend-screen opacity-40"
          style={{ background: "radial-gradient(ellipse at 80% 60%, oklch(0.58 0.21 25 / 40%) 0%, transparent 50%)" }}
        />

        <div className="container-x pb-20 md:pb-28 pt-32 relative">
          <div className="max-w-4xl fade-in">
            <p className="eyebrow mb-6 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" /> Fortress Consulting · Doha, Qatar
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Cybersecurity, Intelligence & <span className="text-primary">AI-Driven</span> Strategic Advisory for Government, Defense & Critical Infrastructure in the GCC
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Fortress Consulting delivers board-level cybersecurity strategy, intelligence-led risk
              monitoring, and AI-driven cyber risk assessment capabilities to help organizations
              protect national assets, manage complex threats, and operate securely across the GCC.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]">
                Schedule Advisory Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background/40 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-secondary transition">
                Request Strategic Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-y border-border bg-[color:var(--surface)]">
        <div className="container-x py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <p className="eyebrow lg:col-span-3">Positioning</p>
            <div className="lg:col-span-9 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Trusted Advisors for High-Stakes Security & Strategic Environments
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We combine cybersecurity advisory, geopolitical intelligence, and advanced technical
                execution capabilities through strategic partnerships to deliver end-to-end risk
                visibility, resilience, and market enablement across the GCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Five practice areas. One integrated advisory platform."
          description="From AI-driven cyber risk assessment to executive crisis response, every engagement is led by senior advisors with operational experience in regulated GCC environments."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="bg-[color:var(--surface)] p-8 hover:bg-[color:var(--surface-elevated)] transition group">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 transition">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground px-2 py-1 border border-border rounded-sm">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
          <div className="bg-[color:var(--surface-elevated)] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-accent)" }} />
            <div className="relative">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="mt-6 text-xl font-semibold">Fortress AI Cyber Risk Index</h3>
              <p className="mt-3 text-sm text-muted-foreground">Quarterly benchmark report scoring sector-wide cyber resilience across the GCC.</p>
            </div>
            <Link to="/services" className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">Framework alignment: NIST · ISO 27001 · GCC regulatory frameworks</p>
      </Section>

      {/* WHO WE SERVE */}
      <section className="relative border-y border-border overflow-hidden">
        <img src={abstractNetwork} alt="" width={1600} height={1000} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background), oklch(0.18 0.025 250 / 90%))" }} />
        <div className="container-x py-20 md:py-28 relative">
          <SectionHeader eyebrow="Who We Serve" title="Sectors where security failure is not an option." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {sectors.map((s) => (
              <div key={s.label} className="bg-[color:var(--surface)] p-7 flex items-center gap-4">
                <s.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Differentiation</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              A Strategic Advisory Platform — <span className="text-primary">Not Just Cybersecurity Consulting.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Fortress operates at the intersection of cyber, intelligence and geopolitics — bringing
              the rigor of a top-tier strategy firm with the operational depth of a national security
              team.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {differentiators.map((d) => (
                <div key={d} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-lg p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30" style={{ background: "var(--gradient-accent)", filter: "blur(60px)" }} />
            <p className="eyebrow mb-4">The Credibility Bridge</p>
            <h3 className="text-2xl font-semibold tracking-tight">Helping global firms enter GCC markets.</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Fortress provides international firms a credible, locally-rooted entry path into Gulf
              markets where trust, relationships and regulatory fluency are non-negotiable.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Regulatory alignment",
                "Government access",
                "Cultural navigation",
                "Trusted relationships",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 pb-3 border-b border-border last:border-0">
                  <Building2 className="h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CREDIBILITY */}
      <section className="border-y border-border bg-[color:var(--surface)]">
        <div className="container-x py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Credibility</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Thought Leadership & Strategic Partnerships
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl">
                Our methodologies are informed by published research, partner execution capability,
                and continuous engagement with government and enterprise leaders.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link to="/partners" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Explore Publications <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {[
              { t: "AI-Driven Cyber Risk", d: "Proprietary models for continuous risk quantification." },
              { t: "Penetration Testing & Red Teaming", d: "Delivered through vetted technical partners." },
              { t: "Strategic Partner: Wattlecorp", d: "Joint execution capability for offensive security." },
            ].map((c) => (
              <div key={c.t} className="bg-[color:var(--surface-elevated)] p-8">
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader eyebrow="Insights" title="Thinking from the Fortress desk." />
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            All insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((i) => (
            <article key={i.title} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-md overflow-hidden border border-border relative bg-[color:var(--surface)]">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition" style={{ background: "var(--gradient-hero)" }} />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary">{i.cat}</span>
                </div>
              </div>
              <h3 className="mt-5 font-semibold leading-snug group-hover:text-primary transition">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{i.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
