import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import founder from "@/assets/founder.jpg";
import bookA from "@/assets/book-what-you-should-know.png";
import bookB from "@/assets/book-cyber-war.png";
import bookC from "@/assets/book-cyber-danger.png";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  FileText,
  Image as ImageIcon,
  BookOpen,
  Mic,
  Radio,
  Newspaper,
  Handshake,
  Share2,
  Award,
  GraduationCap,
  Globe2,
  Building2,
  ArrowUpRight,
  Check,
} from "lucide-react";

const KIT_URL = "/Fortress-Consulting-Media-Kit.pdf";

export const Route = createFileRoute("/media-kit")({
  head: () => ({
    meta: [
      { title: "Media Kit — Dr. Mohammed Al-Dorani | Fortress Consulting" },
      {
        name: "description",
        content:
          "Press & media kit for Dr. Mohammed Al-Dorani: bio, hi-res photos, expertise, speaking topics, executive positions, books, publications and engagement options. Download the full PDF.",
      },
      { property: "og:title", content: "Fortress Consulting — Media Kit" },
      {
        property: "og:description",
        content:
          "Downloadable press kit: biography, portraits, speaking topics, books and engagement options for Dr. Mohammed Al-Dorani.",
      },
      { property: "og:image", content: "/og-media-kit.jpg" },
    ],
  }),
  component: MediaKitPage,
});

const expertise = [
  { t: "Cybersecurity Strategy", d: "National & enterprise posture, governance, board-level cyber risk." },
  { t: "Critical Infrastructure", d: "Resilience for energy, telecom, transport and public-sector systems." },
  { t: "Digital Sovereignty", d: "GCC-specific doctrine on data, cloud and information dependence." },
  { t: "Telecommunications Policy", d: "Spectrum, licensing, satellite and regional regulatory coordination." },
  { t: "Cyber Education", d: "Curriculum design, professorial leadership, executive briefings." },
  { t: "Information Warfare", d: "State-aligned threat actors, regional conflict in the cyber domain." },
];

const speakingTopics = [
  "Cybersecurity in the GCC: a state-of-the-region briefing",
  "Information warfare and the lessons of the Qatar blockade",
  "Building a national cyber doctrine for a small, wealthy state",
  "From threat to resilience: cyber posture for critical infrastructure",
  "Why every board needs a cyber translator (and how to be one)",
  "Cyber education: building the next generation of GCC defenders",
  "AI, cyber risk and the next decade of digital sovereignty",
  "Satellite, spectrum and sovereignty: a telecom strategist's view",
];

const positions = [
  { period: "2016 — Present", org: "Community College of Qatar", role: "Chair, IT Department · Professor of Cybersecurity & Networking" },
  { period: "2013 — 2017", org: "Al-Dorani Trading Co. WLL", role: "Chairman & Founder" },
  { period: "2012 — 2013", org: "SAP", role: "Senior Government Relations Consultant — Qatar" },
  { period: "2011 — 2012", org: "Oracle Qatar", role: "Country Manager" },
  { period: "2001 — 2010", org: "Toyota & Lexus Qatar (Abdullah Abdulghani & Bros.)", role: "General Manager" },
  { period: "1995 — 2001", org: "Iridium Middle East", role: "Acting CEO / Deputy CEO / EVP" },
  { period: "1987 — 1995", org: "GCC Secretariat", role: "Director of Computers & Telecommunications" },
];

const education = [
  { d: "Ph.D.", f: "Information Systems & Telecommunications", s: "George Washington University, USA" },
  { d: "Post-Grad", f: "Operations Research", s: "Wharton School, University of Pennsylvania, USA" },
  { d: "MBA", f: "Finance & Investment", s: "University of San Francisco, USA" },
  { d: "BBA", f: "Accounting", s: "Beirut Arab University" },
];

const books = [
  { cover: bookA, title: "What You Should Know About Cybersecurity", meta: "HBKU Press · 2022", url: "https://www.amazon.com/What-should-know-about-Cybersecurity/dp/9927161077" },
  { cover: bookB, title: "Cyber War — Qatar Blockade", meta: "GCC Countries · 2019", url: "https://www.amazon.com/Cyber-War-Qatar-Blockade-Countries/dp/1792995954" },
  { cover: bookC, title: "Cyber Danger", meta: "GCC Countries & Qatar · 2015", url: "https://www.amazon.com/Cyber-Danger-GCC-Countries-Qatar/dp/1518785824" },
];

const mediaAppearances = [
  { src: "Al-Jazeera Arabic", desc: "Recurring on-air commentator on cybersecurity & GCC technology policy" },
  { src: "HBKU Press", desc: "Featured author, Simply Said Series — cybersecurity volume" },
  { src: "Georgetown University in Qatar", desc: "Co-founder, Cyber Security Research Group with Community College of Qatar" },
  { src: "Regional Press", desc: "Quoted on GCC cyber strategy, satellite policy and digital sovereignty" },
  { src: "Conference Circuit", desc: "Keynote & panel contributions across Doha, Riyadh, Abu Dhabi and Manama" },
  { src: "Academic Journals", desc: "Contributing voice on cybersecurity curriculum and national cyber defense" },
];

const engagements = [
  { icon: Mic, t: "Conference Speaking", d: "Keynotes, panel chairs and closed-door executive briefings for government summits, sector forums and board offsites." },
  { icon: Newspaper, t: "Editorial & Article Contributions", d: "By-lined op-eds, longform analyses, expert commentary and ghost-written executive thought leadership." },
  { icon: BookOpen, t: "Book Promotion & Tours", d: "Author appearances, signings, university lectures and media tours tied to the three published volumes." },
  { icon: Share2, t: "Print & Distribution Deals", d: "Rights inquiries for new editions, translations and bulk academic distribution across GCC universities and ministries." },
  { icon: Handshake, t: "Revenue-Sharing Arrangements", d: "JVs with publishers, training providers and conference operators on co-branded curriculum, certification and content." },
  { icon: Award, t: "Advisory Retainers", d: "Long-form strategic counsel for ministries, regulators, critical-infrastructure operators and family-office investors." },
];

function MediaKitPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title="Official media kit for Dr. Mohammed Al-Dorani."
        description="Bio, hi-res portraits, expertise areas, speaking topics, executive history, published books, selected media and engagement options — bundled into a single downloadable PDF for editors, producers and event programmers."
      />

      {/* DOWNLOAD HERO */}
      <Section className="!pt-12">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 rounded-md border border-border bg-[color:var(--surface)] p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-40"
              style={{ background: "var(--gradient-hero)" }}
            />
            <p className="eyebrow mb-4">Full Press Kit · PDF · 6 pages</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Download the complete Fortress media kit.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              A 6-page editorial-grade brief with short and long bios, expertise
              and speaking topics, executive timeline, academic credentials,
              published works, selected media and engagement options.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={KIT_URL}
                download
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
              >
                <Download className="h-4 w-4" />
                Download PDF Media Kit
              </a>
              <a
                href={KIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-background transition"
              >
                Open in browser
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:advisory@fortress.qa?subject=Press%20inquiry%20%E2%80%94%20Dr.%20Al-Dorani"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-background transition"
              >
                <Mail className="h-4 w-4" />
                Request high-res assets
              </a>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "Short & long-form biography",
                "Hi-res portrait on request",
                "Expertise & speaking topics",
                "Executive timeline & education",
                "Three published books + links",
                "Engagement & partnership options",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-md border border-border bg-[color:var(--surface)] p-6">
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-border bg-background">
              <img
                src={founder}
                alt="Dr. Mohammed Al-Dorani — official portrait"
                width={1024}
                height={1366}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Official Portrait</p>
                <p className="text-xs text-muted-foreground">300 DPI · 4×5 & 16×9 crops available</p>
              </div>
              <a
                href="mailto:advisory@fortress.qa?subject=High-res%20portrait%20request"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80"
              >
                Request <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* BIO */}
      <Section className="bg-[color:var(--surface)] border-y border-border">
        <SectionHeader
          eyebrow="Biography"
          title="Short and long form, ready to publish."
          description="Use as-is or edit for length and style. Please credit as 'Dr. Mohammed Al-Dorani, Founder & Managing Partner, Fortress Consulting'."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <div className="rounded-md border border-border bg-background p-6">
            <p className="eyebrow mb-3">Short bio · 60 words</p>
            <p className="text-sm leading-relaxed text-foreground/90">
              Dr. Mohammed Al-Dorani is the founder of Fortress Consulting and
              one of Qatar's pioneering voices in cybersecurity. The first
              Qatari Ph.D. in Information Systems & Telecommunications, he has
              led at the GCC Secretariat, Iridium, Oracle, Toyota and SAP, and
              now chairs IT at the Community College of Qatar. He has authored
              three books on cybersecurity and GCC digital risk.
            </p>
          </div>
          <div className="rounded-md border border-border bg-background p-6">
            <p className="eyebrow mb-3">Long bio · editorial</p>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Dr. Mohammed Al-Dorani is a Qatari cybersecurity and
                telecommunications strategist with more than three decades of
                leadership across government, multinational technology, telecom
                and academia. He earned his Ph.D. at George Washington
                University at age 30 — the first Qatari national in his field —
                and went on to serve as the first Qatari Director of Computers
                & Telecommunications at the GCC Secretariat.
              </p>
              <p>
                He held senior posts as Acting CEO of Iridium Middle East,
                Country Manager of Oracle Qatar, General Manager at Toyota &
                Lexus Qatar, and Senior Government Relations Consultant at SAP.
                As Qatar's first professor of cybersecurity, he founded the
                country's first Bachelor program in Cybersecurity & Networking.
              </p>
              <p>
                He is a recurring commentator on Al-Jazeera Arabic and a
                regular speaker at regional security and digital transformation
                forums.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERTISE + SPEAKING */}
      <Section>
        <SectionHeader
          eyebrow="Expertise & Speaking"
          title="What Dr. Al-Dorani speaks to."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((e) => (
            <div
              key={e.t}
              className="rounded-md border border-border bg-[color:var(--surface)] p-5 border-l-2 border-l-primary"
            >
              <p className="text-base font-semibold text-foreground">{e.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="eyebrow mb-5">Signature Speaking Topics</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {speakingTopics.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-sm text-foreground/90 border-b border-border pb-3"
              >
                <Mic className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* POSITIONS + EDUCATION */}
      <Section className="bg-[color:var(--surface)] border-y border-border">
        <SectionHeader
          eyebrow="Track Record"
          title="Executive positions & academic credentials."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-3">
            {positions.map((p) => (
              <div
                key={p.period + p.org}
                className="grid grid-cols-12 gap-4 items-start border border-border bg-background rounded-md p-4"
              >
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {p.period}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="text-sm font-semibold text-foreground">{p.org}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow mb-4 flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" /> Education
            </p>
            <div className="space-y-3">
              {education.map((e) => (
                <div
                  key={e.d + e.f}
                  className="border border-border bg-background rounded-md p-4"
                >
                  <p className="text-xs font-semibold text-primary">{e.d}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {e.f}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{e.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BOOKS */}
      <Section>
        <SectionHeader
          eyebrow="Published Works"
          title="Three books on cybersecurity and the GCC."
          description="Available globally on Amazon. Review copies and bulk-distribution inquiries via advisory@fortress.qa."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {books.map((b) => (
            <a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-md border border-border bg-[color:var(--surface)] p-6 hover:border-primary/60 transition"
            >
              <div className="aspect-[3/4] flex items-center justify-center">
                <img
                  src={b.cover}
                  alt={b.title}
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="max-h-full w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform"
                />
              </div>
              <p className="mt-5 text-sm font-semibold text-foreground">
                {b.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{b.meta}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                View on Amazon <ArrowUpRight className="h-3 w-3" />
              </p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Full catalogue & formats <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* MEDIA APPEARANCES */}
      <Section className="bg-[color:var(--surface)] border-y border-border">
        <SectionHeader
          eyebrow="Selected Media"
          title="Publications & on-air appearances."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {mediaAppearances.map((m) => (
            <div
              key={m.src}
              className="rounded-md border border-border bg-background p-5 flex items-start gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                <Radio className="h-4 w-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{m.src}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT OPTIONS */}
      <Section>
        <SectionHeader
          eyebrow="Engagement"
          title="Ways to work together."
          description="From a single keynote to long-form publishing partnerships — the office of the founder handles inquiries directly."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {engagements.map((e, i) => (
            <div
              key={e.t}
              className="rounded-md border border-border bg-[color:var(--surface)] p-6 border-t-2 border-t-primary"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                  <e.icon className="h-4 w-4 text-primary" />
                </span>
                <p className="text-base font-semibold text-foreground">{e.t}</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {e.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section className="bg-[color:var(--surface)] border-y border-border">
        <div className="rounded-md bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-80">
              Press · Booking · Partnership
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Office of the Founder, Fortress Consulting.
            </h3>
            <p className="mt-3 text-sm md:text-base opacity-90 max-w-xl">
              Editors, producers, conference organizers and publishers — write
              once and the founder's office will respond directly.
            </p>
          </div>
          <div className="md:col-span-5 space-y-3 text-sm">
            <a
              href="mailto:advisory@fortress.qa"
              className="flex items-center gap-3 bg-black/15 hover:bg-black/25 transition rounded-sm px-4 py-3"
            >
              <Mail className="h-4 w-4" />
              advisory@fortress.qa
            </a>
            <div className="flex items-center gap-3 bg-black/15 rounded-sm px-4 py-3">
              <Phone className="h-4 w-4" />
              +974 6664 3000 · +974 5586 8473
            </div>
            <div className="flex items-center gap-3 bg-black/15 rounded-sm px-4 py-3">
              <MapPin className="h-4 w-4" />
              Doha, Qatar · fortress.qa
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
