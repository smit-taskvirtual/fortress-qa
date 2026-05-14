import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import founder from "@/assets/founder.jpg";
import gcc from "@/assets/gcc-skyline.jpg";
import {
  Award,
  GraduationCap,
  Globe2,
  Shield,
  BookOpen,
  Radio,
  Building2,
  Briefcase,
  Mic,
  Mail,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Mohammed Al-Dorani — Fortress Consulting" },
      {
        name: "description",
        content:
          "Dr. Mohammed Al-Dorani — Qatari cybersecurity and telecommunications strategist with three decades of leadership across government, multinationals, telecom and academia. Founder of Fortress Consulting.",
      },
      { property: "og:title", content: "Dr. Mohammed Al-Dorani — Founder, Fortress Consulting" },
      {
        property: "og:description",
        content:
          "Pioneering Qatari cybersecurity leader, former GCC Director of Computers & Telecommunications, ex-Acting CEO of Iridium Middle East, and Qatar's first professor of cybersecurity.",
      },
    ],
  }),
  component: AboutPage,
});

const competencies = [
  "Cybersecurity Strategy & Governance",
  "National Cyber Defense & Threat Analysis",
  "Telecommunications Policy, Licensing & Regulatory Affairs",
  "Spectrum Negotiation & Telecommunications Strategy",
  "Executive Leadership & Organizational Transformation",
  "Government Relations & Stakeholder Engagement",
  "Digital Transformation & Enterprise Technology",
  "Academic Leadership & Cybersecurity Education",
  "Strategic Planning & Business Development",
  "Financial Management & Budget Planning",
  "Bilingual Communication (Arabic & English)",
];

const achievements = [
  {
    icon: GraduationCap,
    text: "First Qatari to earn a Ph.D. in Information Systems & Telecommunications and to serve as Director of Computers & Telecommunications at the GCC Secretariat.",
  },
  {
    icon: Award,
    text: "First Qatari professor to teach Cybersecurity, Cyber Crime, Hacking, and Intrusion at university level.",
  },
  {
    icon: Shield,
    text: "Managed and enhanced Qatar's first Bachelor program in Cybersecurity & Networking.",
  },
  {
    icon: Radio,
    text: "Negotiated satellite telecommunications agreements across 19 countries as Acting CEO of Iridium Middle East.",
  },
  {
    icon: Globe2,
    text: "Secured Saudi Arabia's first license for constructing a satellite mobile gateway and negotiated Iridium spectrum approvals.",
  },
  {
    icon: Building2,
    text: "Led strategic and operational transformation initiatives at Toyota & Lexus Qatar.",
  },
  {
    icon: Briefcase,
    text: "Established Oracle Qatar and developed strategic public-sector and enterprise relationships.",
  },
  {
    icon: BookOpen,
    text: "Published three books on cybersecurity and GCC digital threats; frequent commentator on Al-Jazeera Arabic.",
  },
];

const experience = [
  {
    period: "2016 — Present",
    org: "Community College of Qatar",
    role: "Chair of Information Technology Department & Professor in Cybersecurity & Networking",
    detail:
      "Teaching advanced cybersecurity courses including Cyber Crime, Hacking and Intrusion techniques. Manages and enhanced Qatar's first Bachelor program in Cybersecurity & Networking — covering curriculum enhancement, faculty supervision, recruitment oversight, committee participation, and strategic academic development. Supports cybersecurity curriculum initiatives for government and academic institutions.",
  },
  {
    period: "2013 — 2017",
    org: "Al-Dorani Trading Co. WLL",
    role: "Chairman & Founder",
    detail:
      "Led diversified business operations across automotive trading, consultancy, food products, and public relations. Expanded international trading activities and supported local and regional business development.",
  },
  {
    period: "2012 — 2013",
    org: "SAP",
    role: "Senior Government Relations Consultant",
    detail:
      "Created and developed public-sector business opportunities and strengthened government engagement channels in Qatar.",
  },
  {
    period: "2011 — 2012",
    org: "Oracle Qatar",
    role: "Country Manager",
    detail:
      "Established Oracle's operations in Qatar, recruited and managed staff, developed strategic relationships with ministries and enterprise clients, and contributed to major regional growth initiatives.",
  },
  {
    period: "2001 — 2010",
    org: "Abdullah Abdulghani & Bros. (Toyota & Lexus Qatar)",
    role: "General Manager",
    detail:
      "Led strategic, operational, and organizational transformation initiatives. Introduced advanced management systems, strengthened corporate relationships with Toyota Motor Corporation, and elevated overall organizational performance.",
  },
  {
    period: "2001",
    org: "Andersen Consulting & Oracle Middle East",
    role: "Consultant",
    detail:
      "Conducted market, financial, and technology research and prepared strategic recommendations for regional business initiatives.",
  },
  {
    period: "1995 — 2001",
    org: "Iridium Middle East",
    role: "Acting CEO / Deputy CEO / Executive Vice President",
    detail:
      "Directed telecommunications strategy and market expansion across the Middle East and Asia. Negotiated spectrum and licensing agreements across 19 countries, secured Saudi Arabia's first satellite mobile gateway license, and supported the rollout of regional satellite communication infrastructure.",
  },
  {
    period: "1987 — 1995",
    org: "GCC Secretariat",
    role: "Director of Computers & Telecommunications",
    detail:
      "Managed telecommunications policy, systems integration, and regional IT coordination for GCC member states. Established and linked regional information systems and databases across the Gulf region.",
  },
  {
    period: "Academic Roles",
    org: "King Saud University & University of Qatar",
    role: "Faculty",
    detail:
      "Taught computing, information technology, programming, and cybersecurity-related subjects while supporting regional technology awareness and academic development.",
  },
];

const education = [
  {
    degree: "Ph.D., Information Systems & Telecommunications",
    school: "George Washington University, USA",
  },
  {
    degree: "Post-Graduate Studies, Operations Research",
    school: "Wharton School, University of Pennsylvania, USA",
  },
  {
    degree: "MBA, Finance & Investment",
    school: "University of San Francisco, USA",
  },
  {
    degree: "BBA, Accounting",
    school: "Beirut Arab University",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Founder"
        title="Dr. Mohammed Al-Dorani — three decades shaping cybersecurity, telecom and statecraft in the Gulf."
        description="Senior cybersecurity and telecommunications strategist. Pioneering Qatari leader across government, multinational technology, telecom and higher education — and the founder of Fortress Consulting."
      />

      {/* PROFILE */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-md overflow-hidden border border-border">
              <img
                src={founder}
                alt="Dr. Mohammed Al-Dorani, Founder & Managing Partner of Fortress Consulting"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, oklch(0.18 0.025 250 / 95%))",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="eyebrow mb-1">Founder & Managing Partner</p>
                <p className="text-xl font-semibold">Dr. Mohammed Al-Dorani</p>
                <p className="text-sm text-muted-foreground mt-1">Qatari national</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm">
              <a
                href="mailto:maldorani2014@gmail.com"
                className="flex items-center gap-3 p-4 bg-[color:var(--surface)] border border-border rounded-md hover:border-primary/60 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">maldorani2014@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 p-4 bg-[color:var(--surface)] border border-border rounded-md">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  +974 6664 3000 &nbsp;·&nbsp; +974 5586 8473
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Professional Summary</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A pioneering figure in Qatari cybersecurity, telecommunications policy and digital transformation.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dr. Al-Dorani brings more than three decades of leadership across government
              institutions, multinational technology companies, telecommunications operators,
              and higher education. He is recognized as one of Qatar's pioneering figures in
              cybersecurity education, telecommunications policy, digital transformation, and
              regional technology strategy.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-4">Core Competencies</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {competencies.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 p-3 border border-border rounded-md bg-[color:var(--surface)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* KEY ACHIEVEMENTS */}
      <section className="border-t border-border bg-[color:var(--surface)]/40">
        <div className="container-x py-20 md:py-28">
          <SectionHeader
            eyebrow="Key Achievements"
            title="Firsts, milestones and high-consequence mandates."
            description="A career defined by founding mandates, sovereign-level negotiations, and pioneering academic programs across Qatar and the wider GCC."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
            {achievements.map((a) => (
              <div
                key={a.text}
                className="bg-[color:var(--background)] p-6 flex gap-4 items-start"
              >
                <div className="h-10 w-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <Section>
        <SectionHeader
          eyebrow="Professional Experience"
          title="A career across government, multinationals, telecom and academia."
        />
        <div className="mt-14 relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <div
                key={e.org + e.period}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="md:text-right pl-10 md:pl-0 md:pr-10">
                  <span className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  <p className="eyebrow">{e.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">{e.org}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.role}</p>
                </div>
                <div className="pl-10 md:pl-10 md:pr-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION + MISSION BAND */}
      <section className="relative border-y border-border overflow-hidden">
        <img
          src={gcc}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.18 0.025 250 / 88%), var(--background))",
          }}
        />
        <div className="container-x py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">Education</p>
              <ul className="space-y-6">
                {education.map((ed) => (
                  <li key={ed.degree} className="border-l-2 border-primary pl-5">
                    <p className="font-semibold text-lg">{ed.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">Publications & Media</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                Author of three books on cybersecurity and GCC digital threats.
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Published through Amazon and HBKU Press, with regular appearances as a
                cybersecurity expert and commentator on Al-Jazeera Arabic and other
                regional media platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: BookOpen, label: "3 Published Books" },
                  { icon: Mic, label: "Al-Jazeera Arabic" },
                  { icon: BookOpen, label: "HBKU Press" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-[color:var(--surface)] text-xs"
                  >
                    <t.icon className="h-3.5 w-3.5 text-primary" />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
