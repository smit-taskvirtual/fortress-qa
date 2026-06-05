import {
  Cpu,
  ShieldCheck,
  Network,
  Eye,
  AlertTriangle,
  Target,
} from "lucide-react";
import type { ComponentType } from "react";

export type ServiceMeta = {
  slug: string;
  number: string;
  label: string;
  name: string;
  short: string;
  blurb: string;
  icon: ComponentType<{ className?: string }>;
};

export const SERVICES: ServiceMeta[] = [
  {
    slug: "cyber-risk",
    number: "01",
    label: "AI-Enhanced",
    name: "AI-Enhanced Cyber Risk",
    short: "Enterprise risk. AI precision.",
    blurb: "Senior-led cyber risk programs combining AI analytics with expert judgment.",
    icon: Cpu,
  },
  {
    slug: "grc",
    number: "02",
    label: "Compliance",
    name: "Governance, Risk & Compliance",
    short: "Policy. Control. Audit readiness.",
    blurb: "End-to-end GRC programs aligned to GCC and international frameworks.",
    icon: ShieldCheck,
  },
  {
    slug: "security-architecture",
    number: "03",
    label: "Architecture",
    name: "Security Architecture & Strategy",
    short: "Architecture built for transformation.",
    blurb: "Forward-looking architecture aligned to enterprise strategy and growth.",
    icon: Network,
  },
  {
    slug: "intelligence-monitoring",
    number: "04",
    label: "Subscription",
    name: "Intelligence & Risk Monitoring",
    short: "Always-on threat awareness.",
    blurb: "Continuous geopolitical, threat and supply-chain intelligence.",
    icon: Eye,
  },
  {
    slug: "incident-advisory",
    number: "05",
    label: "Crisis",
    name: "Incident Advisory & Crisis Management",
    short: "From detection to recovery.",
    blurb: "Executive-level counsel through every phase of a cyber crisis.",
    icon: AlertTriangle,
  },
  {
    slug: "risk-assessment",
    number: "06",
    label: "Partner-Led",
    name: "Risk Assessment & Security Program",
    short: "Offensive testing. Real-world simulation.",
    blurb: "Adversarial penetration testing delivered with Wattlecorp Labs.",
    icon: Target,
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug)!;
