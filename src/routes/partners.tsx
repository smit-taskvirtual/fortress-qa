import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Publications — Fortress Consulting" },
      { name: "description", content: "Strategic partnerships and published research underpinning Fortress Consulting's advisory capability." },
      { property: "og:title", content: "Partners & Publications" },
      { property: "og:description", content: "Strategic partners and Fortress publications." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "Wattlecorp", role: "Offensive Security & Penetration Testing", desc: "Joint execution capability for red teaming, application security, and advanced adversary simulation." },
  { name: "Regional Academic Network", role: "Research Collaboration", desc: "Joint research on AI-driven cyber risk modeling and resilience benchmarking." },
  { name: "Government Liaison Network", role: "Regulatory & Policy", desc: "Trusted relationships supporting market entry and regulatory engagement across GCC jurisdictions." },
];

const publications = [
  { t: "The Fortress AI Cyber Risk Index", d: "Quarterly benchmark scoring sector-wide cyber resilience across the GCC." },
  { t: "GCC Threat Actor Landscape Report", d: "Annual profile of the most persistent threats facing regional critical infrastructure." },
  { t: "Board Cyber Governance Playbook", d: "Decision framework for directors overseeing cyber risk in regulated entities." },
  { t: "Supply Chain Risk Bulletin", d: "Monthly briefing on concentration, sanctions, and geopolitical exposure." },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Publications"
        title="Independent counsel. Reinforced by trusted partners and published research."
        description="Fortress is vendor-neutral by design. We partner selectively where execution depth and credibility add measurable value to clients."
      />

      <Section>
        <p className="eyebrow mb-8">Strategic Partners</p>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          {partners.map((p) => (
            <div key={p.name} className="bg-[color:var(--surface)] p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.role}</p>
              <h3 className="mt-3 text-2xl font-semibold">{p.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <p className="eyebrow mb-8">Publications</p>
        <div className="space-y-px bg-border rounded-md overflow-hidden">
          {publications.map((p) => (
            <a key={p.t} href="#" className="bg-[color:var(--surface)] hover:bg-[color:var(--surface-elevated)] transition p-7 flex items-center justify-between gap-6 group">
              <div>
                <h3 className="font-semibold group-hover:text-primary transition">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
