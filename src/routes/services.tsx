import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import { Cpu, ShieldCheck, Network, Eye, AlertTriangle, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fortress Consulting" },
      { name: "description", content: "Cyber risk advisory, GRC, security architecture, intelligence monitoring and incident advisory delivered to government and enterprise clients across the GCC." },
      { property: "og:title", content: "Fortress Services" },
      { property: "og:description", content: "Detailed service breakdown across five practice areas." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cpu,
    eyebrow: "Practice 01 · AI-Enhanced",
    title: "Cyber Risk Advisory",
    price: "$40K – $120K per engagement",
    desc: "Senior-led cyber risk programs combining AI-assisted analytics with manual expert review to deliver decision-grade risk visibility.",
    items: [
      "Enterprise cyber risk assessments",
      "AI-assisted vulnerability scanning",
      "Red-team penetration testing (via partners)",
      "Cyber maturity benchmarking",
      "Resilience scoring models",
      "Risk governance frameworks",
    ],
    align: "NIST · ISO 27001 · GCC regulatory frameworks",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Practice 02",
    title: "Governance, Risk & Compliance (GRC)",
    desc: "End-to-end GRC programs aligning policy, control design and audit readiness with international and regional frameworks.",
    items: [
      "Policy and control frameworks",
      "ISO 27001 / NIST alignment",
      "Regulatory compliance advisory",
      "Internal audit support",
      "Third-party risk programs",
    ],
  },
  {
    icon: Network,
    eyebrow: "Practice 03",
    title: "Security Architecture & Strategy",
    desc: "Forward-looking security architecture aligned to enterprise strategy, M&A activity and digital transformation programs.",
    items: [
      "Enterprise security strategy",
      "Zero Trust architecture",
      "Cloud & infrastructure security",
      "Identity & access architecture",
      "OT / ICS security advisory",
    ],
  },
  {
    icon: Eye,
    eyebrow: "Practice 04 · Subscription",
    title: "Intelligence & Risk Monitoring",
    desc: "An always-on intelligence capability combining geopolitical analysis, AI-driven threat monitoring and supply-chain risk surveillance.",
    items: [
      "Weekly geopolitical briefings",
      "AI-driven threat monitoring",
      "Supply chain risk intelligence",
      "Sanctions & regulatory analysis",
      "Threat actor tracking",
    ],
    align: "Target clients: banks, sovereign funds, logistics, airlines, energy companies",
  },
  {
    icon: AlertTriangle,
    eyebrow: "Practice 05",
    title: "Incident Advisory & Crisis Management",
    desc: "Trusted counsel during the most consequential moments — from first detection through executive recovery and lessons-learned.",
    items: [
      "Executive incident response",
      "Cyber crisis management",
      "Post-incident recovery",
      "Board and regulator communications",
      "Tabletop exercises and simulations",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five integrated practices. One advisory standard."
        description="Each practice is delivered by senior advisors and supported by AI-driven analytics and trusted technical execution partners."
      />

      <Section>
        <div className="space-y-px bg-border rounded-md overflow-hidden">
          {services.map((s, i) => (
            <div key={s.title} className="bg-[color:var(--surface)] p-8 md:p-12">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30 mb-6">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="eyebrow mb-3">{s.eyebrow}</p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h2>
                  {s.price && (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      {s.price}
                    </div>
                  )}
                </div>
                <div className="lg:col-span-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  {s.align && (
                    <p className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
                      {s.align}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-8 text-xs text-muted-foreground">— {String(i + 1).padStart(2, "0")} / 05</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
