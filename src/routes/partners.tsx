import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import {
  ExternalLink,
  ShieldCheck,
  Search,
  FileCheck2,
  ServerCog,
  Target,
  Bug,
  ClipboardList,
  Globe2,
} from "lucide-react";

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

const otherPartners = [
  { name: "Regional Academic Network", role: "Research Collaboration", desc: "Joint research on AI-driven cyber risk modeling and resilience benchmarking." },
  { name: "Government Liaison Network", role: "Regulatory & Policy", desc: "Trusted relationships supporting market entry and regulatory engagement across GCC jurisdictions." },
];

const wattlecorpServices = [
  {
    icon: Search,
    title: "Vulnerability Assessment & Penetration Testing",
    desc: "Deep-dive offensive testing across web, mobile, network, cloud, and API surfaces to surface exploitable weaknesses before adversaries do.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Risk & Compliance Consulting",
    desc: "Advisory engagements aligned to ISO 27001, SOC 2, PCI-DSS, HIPAA, GDPR and regional regulators — turning compliance into operational resilience.",
  },
  {
    icon: FileCheck2,
    title: "Annual Security Program",
    desc: "Continuous, retainer-based security partnership — ongoing testing, advisory, and incident readiness across the full year.",
  },
  {
    icon: ServerCog,
    title: "Server & Infrastructure Hardening",
    desc: "Configuration hardening for servers, endpoints, and cloud workloads benchmarked to CIS, NIST, and vendor best practice.",
  },
];

const wattlecorpProtocol = [
  { icon: Target, label: "Assess", desc: "Threat modeling and reconnaissance to define the precise attack surface in scope." },
  { icon: Bug, label: "Hook", desc: "Hands-on adversary simulation — chaining vulnerabilities the way real attackers do." },
  { icon: ClipboardList, label: "Report", desc: "Executive and technical reporting with prioritized remediation and re-test validation." },
];

const wattlecorpStats = [
  { k: "11,185+", v: "Websites hacked daily — the threat we counter" },
  { k: "Fortune 500", v: "Caliber of organizations relying on Wattlecorp expertise" },
  { k: "Global", v: "Delivery footprint across UAE, Bahrain, Saudi Arabia, India & Singapore" },
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

      {/* ─── Wattlecorp featured partner ─── */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Featured Strategic Partner</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Wattlecorp
            </h2>
            <p className="mt-3 text-sm uppercase tracking-widest text-primary font-semibold">
              Offensive Security · VAPT · DPO Services
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wattlecorp is Fortress Consulting's execution partner for offensive
              cybersecurity. Recognized among the world's leading penetration
              testing firms, Wattlecorp specializes in identifying and eliminating
              exploitable vulnerabilities across digital infrastructure for Fortune
              500 enterprises, governments, and regulated sectors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The partnership combines Fortress's strategic advisory and governance
              capability with Wattlecorp's deep technical red-team and compliance
              execution — delivering end-to-end cyber assurance from boardroom
              strategy to adversary simulation.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
              {wattlecorpStats.map((s) => (
                <div key={s.k} className="bg-[color:var(--surface)] p-5">
                  <p className="text-xl font-semibold text-foreground">{s.k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground leading-snug">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.wattlecorp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Visit Wattlecorp <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Joint Service Capability</p>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
              {wattlecorpServices.map((s) => (
                <div key={s.title} className="bg-[color:var(--surface)] p-6">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="eyebrow mt-10 mb-5">Engagement Protocol</p>
            <div className="grid sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
              {wattlecorpProtocol.map((p, i) => (
                <div key={p.label} className="bg-[color:var(--surface)] p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono">
                      0{i + 1}
                    </span>
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="mt-3 font-semibold">{p.label}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <Globe2 className="h-4 w-4 text-primary" />
              Delivery presence — UAE · Bahrain · Saudi Arabia · India · Singapore
            </div>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* ─── Other strategic partners ─── */}
      <Section>
        <p className="eyebrow mb-8">Additional Strategic Partners</p>
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
          {otherPartners.map((p) => (
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
