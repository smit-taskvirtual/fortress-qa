import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/Section";
import {
  Mic,
  Users,
  Radio,
  GraduationCap,
  Briefcase,
  PenTool,
  Download,
  FileText,
  Globe,
  Calendar,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Public Speaking & PR Events — Fortress Consulting" },
      {
        name: "description",
        content:
          "Book Dr. Mohammed Al-Dorani for keynotes, panels, workshops, executive briefings and media interviews on cybersecurity, AI risk and digital transformation in the GCC.",
      },
      { property: "og:title", content: "Speaking Engagements & Public Events" },
      {
        property: "og:description",
        content:
          "Bring Dr. Mohammed Al-Dorani's expertise to your conference, event, or media platform.",
      },
      { property: "og:image", content: founder },
    ],
  }),
  component: SpeakingPage,
});

const topics = [
  {
    title: "Cybersecurity in the GCC",
    area: "Regional Strategy",
    desc: "How Gulf states are building sovereign cyber capability and the policy lessons emerging from Qatar, KSA and the UAE.",
  },
  {
    title: "AI, Cyber Risk & the Boardroom",
    area: "Executive Briefing",
    desc: "Translating AI-era threats and opportunities into language directors, regulators and CEOs can act on.",
  },
  {
    title: "Cyber War & National Resilience",
    area: "Geopolitics",
    desc: "Drawn from the book Cyber War — state-level threats, critical infrastructure and the doctrine of digital defense.",
  },
  {
    title: "Cyber Danger for Citizens & Families",
    area: "Public Awareness",
    desc: "From the book Cyber Danger — practical, human-centered talks on digital safety, scams and online identity.",
  },
  {
    title: "Building a National Cyber Workforce",
    area: "Education & Policy",
    desc: "Lessons from Qatar's academic ecosystem on producing the next generation of cyber leaders.",
  },
  {
    title: "Foreign Tech in Sovereign Markets",
    area: "Market Entry",
    desc: "The Credibility Bridge — how global vendors earn trust, contracts and policy access across the Gulf.",
  },
];

const formats = [
  { icon: Mic, label: "Keynote Speeches", desc: "Plenary and opening addresses for international conferences." },
  { icon: Users, label: "Panel Discussions", desc: "Moderated panels and executive roundtables." },
  { icon: Radio, label: "Interviews & Podcasts", desc: "Television, print and long-form audio appearances." },
  { icon: GraduationCap, label: "Workshops & Training", desc: "Half- and full-day sessions for leadership teams." },
  { icon: Briefcase, label: "Executive Briefings", desc: "Closed-door briefings for boards, ministries and regulators." },
  { icon: PenTool, label: "Article Contributions", desc: "Op-eds, foreword writing and editorial collaboration." },
];

const pastEngagements = [
  { event: "Al-Jazeera — Cybersecurity Commentary", year: "Recurring", note: "Subject-matter analyst on regional cyber affairs." },
  { event: "HBKU Press — Book Launch & Lecture Series", year: "2023", note: "Launch program for the Arabic cybersecurity volume." },
  { event: "GCC Cybersecurity Committee Briefings", year: "2018–2022", note: "Closed sessions across member states." },
  { event: "Qatar University & CCQ Guest Lectures", year: "Ongoing", note: "Graduate seminars on cyber doctrine and AI risk." },
];

function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Speaking & PR Events"
        title="Speaking Engagements & Public Events."
        description="Bring Dr. Mohammed Al-Dorani's expertise to your conference, event, or media platform."
      />

      {/* Hero intro with portrait */}
      <section className="pb-16 md:pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              For over three decades, Dr. Mohammed Al-Dorani has shaped cybersecurity
              discourse across the GCC — as the first Qatari professor of cybersecurity,
              a published author, and a senior advisor to ministries, regulators and
              global technology firms.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              He accepts a limited number of speaking engagements each year — including
              keynotes, panels, media interviews, executive workshops and closed-door
              briefings — on cybersecurity, AI risk, digital sovereignty and the
              geopolitics of technology in the Gulf.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                search={{ topic: "speaking" } as any}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
              >
                Request a Speaking Engagement <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/Fortress-Consulting-Media-Kit.pdf"
                download
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium hover:bg-[color:var(--surface-elevated)] transition"
              >
                <Download className="h-4 w-4" /> Download Media Kit
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-md overflow-hidden border border-border">
              <img
                src={founder}
                alt="Dr. Mohammed Al-Dorani speaking portrait"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="eyebrow text-primary mb-1">Featured Speaker</p>
                <p className="text-lg font-semibold">Dr. Mohammed Al-Dorani</p>
                <p className="text-xs text-muted-foreground">
                  Founder, Fortress Consulting · Author, Educator, Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <Section>
        <SectionHeader eyebrow="Signature Topics" title="What he speaks about." />
        <div className="mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t) => (
            <article
              key={t.title}
              className="group rounded-md border border-border bg-[color:var(--surface)] p-6 hover:border-primary/40 transition"
            >
              <p className="eyebrow text-primary mb-3">{t.area}</p>
              <h3 className="text-lg font-semibold leading-snug">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
      </Section>

      {/* Formats */}
      <Section>
        <SectionHeader eyebrow="Engagement Formats" title="Formats offered." />
        <div className="mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {formats.map((f) => (
            <div
              key={f.label}
              className="flex items-start gap-4 rounded-md border border-border p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                <f.icon className="h-4 w-4 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium">{f.label}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Section>

      {/* Past engagements */}
      <Section>
        <SectionHeader eyebrow="Selected Appearances" title="Previous engagements." />
        <div className="mt-12">
        <div className="rounded-md border border-border divide-y divide-border">
          {pastEngagements.map((e) => (
            <div
              key={e.event}
              className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_auto_2fr] items-baseline gap-4 p-5"
            >
              <p className="text-sm font-medium truncate">{e.event}</p>
              <p className="text-xs text-muted-foreground tabular-nums">{e.year}</p>
              <p className="col-span-2 sm:col-span-1 text-xs text-muted-foreground">
                {e.note}
              </p>
            </div>
          ))}
        </div>
      </div>
      </Section>

      {/* Media kit */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="rounded-md border border-border bg-gradient-to-br from-[color:var(--surface)] to-background p-8 md:p-12 grid lg:grid-cols-[auto_1fr_auto] items-center gap-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
              <FileText className="h-6 w-6 text-primary" />
            </span>
            <div className="min-w-0">
              <p className="eyebrow text-primary mb-2">Media Package</p>
              <h3 className="text-2xl font-semibold">Download the complete media kit.</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Bio, high-resolution photos, credentials, published books, speaking
                topics and engagement options — formatted for event organizers and
                media outlets.
              </p>
            </div>
            <a
              href="/Fortress-Consulting-Media-Kit.pdf"
              download
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <Section>
        <SectionHeader eyebrow="For Organizers" title="Logistics & booking notes." />
        <div className="mt-12">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: DollarSign,
              title: "Speaking Fee",
              body: "Honorarium available upon request and varies by format, audience and geography. Pro-bono appearances considered for academic and public-interest programs.",
            },
            {
              icon: Globe,
              title: "Geography",
              body: "Global availability with a focus on the GCC, MENA and Europe. Remote keynotes and recorded interviews accepted.",
            },
            {
              icon: Calendar,
              title: "Lead Time",
              body: "A minimum of 6–8 weeks notice is preferred for keynotes and workshops. Media interviews can typically be accommodated within days.",
            },
          ].map((l) => (
            <div
              key={l.title}
              className="rounded-md border border-border p-6 bg-[color:var(--surface)]"
            >
              <l.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm font-medium">{l.title}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="rounded-md border border-border bg-[color:var(--surface)] p-10 md:p-16 text-center">
            <p className="eyebrow text-primary mb-4">Ready to Book?</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let's discuss your event.
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Share the details of your conference, panel or interview and a senior
              member of the office will respond within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                search={{ topic: "speaking" } as any}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
              >
                Request a Speaking Engagement <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/Fortress-Consulting-Media-Kit.pdf"
                download
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium hover:bg-[color:var(--surface-elevated)] transition"
              >
                <Download className="h-4 w-4" /> Download Media Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
