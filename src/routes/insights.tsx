import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Fortress Consulting" },
      { name: "description", content: "Thought leadership on cybersecurity, intelligence, GCC risk, and strategy from the Fortress advisory desk." },
      { property: "og:title", content: "Fortress Insights" },
      { property: "og:description", content: "Cybersecurity, intelligence and GCC risk analysis." },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", "Cybersecurity", "Intelligence", "GCC Risk", "Strategy"] as const;

const posts = [
  { cat: "Cybersecurity", title: "Cyber Risk Trends in GCC Government Entities", desc: "An assessment of evolving threat surfaces facing public sector institutions across the Gulf — from supply-chain compromise to AI-augmented social engineering.", date: "Apr 2026", read: "8 min" },
  { cat: "Intelligence", title: "Geopolitical Risk Impact on Infrastructure", desc: "How regional tensions are reshaping operational risk for energy and transport networks — and what boards should monitor.", date: "Mar 2026", read: "6 min" },
  { cat: "GCC Risk", title: "Supply Chain Risk Analysis: Concentration & Sanctions Exposure", desc: "Mapping single-vendor concentration and indirect sanctions exposure across critical procurement networks in the Gulf.", date: "Mar 2026", read: "10 min" },
  { cat: "Strategy", title: "Executive Cybersecurity Frameworks", desc: "Translating cyber posture into board-level governance and resilience metrics that align with enterprise strategy.", date: "Feb 2026", read: "7 min" },
  { cat: "Cybersecurity", title: "AI-Driven Red Teaming: From Hype to Operational Reality", desc: "How AI-augmented adversary simulation is changing the economics of penetration testing for regulated entities.", date: "Feb 2026", read: "9 min" },
  { cat: "Intelligence", title: "Threat Actor Tracking in the Energy Sector", desc: "Profiling the most persistent state-aligned and criminal threat actors targeting GCC energy operators.", date: "Jan 2026", read: "11 min" },
];

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thought leadership for boards, regulators and security leaders."
        description="Briefings, analyses and frameworks from the Fortress advisory desk. Independent. Vendor-neutral. GCC-focused."
      />

      <Section>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`text-xs font-medium tracking-wide uppercase px-4 py-2 rounded-sm border transition ${
                i === 0
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        <article className="group cursor-pointer mb-16 grid lg:grid-cols-2 gap-10 items-center pb-16 border-b border-border">
          <div className="aspect-[16/10] rounded-md border border-border relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
            <div className="absolute inset-0 mix-blend-screen opacity-50" style={{ background: "radial-gradient(ellipse at 70% 50%, oklch(0.58 0.21 25 / 50%), transparent 60%)" }} />
          </div>
          <div>
            <p className="eyebrow mb-4">{posts[0].cat} · Featured</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-primary transition">{posts[0].title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{posts[0].desc}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{posts[0].date}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{posts[0].read} read</span>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Read briefing <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          {posts.slice(1).map((p) => (
            <article key={p.title} className="bg-[color:var(--surface)] p-7 group cursor-pointer hover:bg-[color:var(--surface-elevated)] transition">
              <p className="eyebrow mb-4">{p.cat}</p>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read} read</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
