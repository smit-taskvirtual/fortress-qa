import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import { ArrowUpRight, BookOpen, Award, Globe, Quote, ShoppingCart, Library } from "lucide-react";
import bookCyberDanger from "@/assets/book-cyber-danger.png";
import bookWhatYouShouldKnow from "@/assets/book-what-you-should-know.png";
import bookCyberWar from "@/assets/book-cyber-war.png";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Published Books — Dr. Mohammed Al-Dorani | Fortress Consulting" },
      {
        name: "description",
        content:
          "Explore the published works of Dr. Mohammed Al-Dorani on cybersecurity, GCC geopolitics and digital sovereignty. Available on Amazon and HBKU Press.",
      },
      { property: "og:title", content: "Books by Dr. Mohammed Al-Dorani" },
      {
        property: "og:description",
        content:
          "Three published volumes on cybersecurity and GCC digital risk — available on Amazon and HBKU Press.",
      },
    ],
  }),
  component: BooksPage,
});

type Book = {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  cover: string;
  publisher: string;
  pages?: string;
  isbn?: string;
  formats: { label: string; url: string; price?: string }[];
  primaryUrl: string;
  description: string;
  topics: string[];
  praise?: string;
  featured?: boolean;
};

const books: Book[] = [
  {
    id: "what-you-should-know",
    title: "What You Should Know About Cybersecurity",
    subtitle: "Unveiling Key Concepts and Real-World Implications",
    year: "2022",
    cover: bookWhatYouShouldKnow,
    publisher: "HBKU Press — Simply Said Series",
    pages: "164 pages",
    isbn: "978-9927-161-07-0",
    primaryUrl:
      "https://www.amazon.com/What-should-know-about-Cybersecurity/dp/9927161077",
    formats: [
      {
        label: "Paperback on Amazon",
        url: "https://www.amazon.com/What-should-know-about-Cybersecurity/dp/9927161077",
      },
      {
        label: "Kindle Edition",
        url: "https://www.amazon.com/What-Should-Know-About-Cybersecurity-ebook/dp/B0BGP1XHS4",
        price: "$9.99",
      },
      {
        label: "HBKU Press",
        url: "https://hbkupress.com/products/what-you-should-know-about-cybersecurity",
      },
    ],
    description:
      "Part of HBKU Press' acclaimed Simply Said series, this volume distills the vast field of cybersecurity into clear, accessible language for executives, students and inquisitive readers. Key terms are defined, real-world case studies are dissected, and the strategic implications for individuals, organizations and governments are made explicit — without sacrificing technical precision.",
    topics: [
      "Foundational cyber concepts",
      "Case studies & real-world impact",
      "Risk to individuals & enterprises",
      "Policy & governance perspective",
    ],
    praise:
      "A rare cybersecurity primer that respects the reader's intelligence while remaining genuinely accessible.",
    featured: true,
  },
  {
    id: "cyber-war",
    title: "Cyber War",
    subtitle: "Qatar Blockade — GCC Countries",
    year: "2019",
    cover: bookCyberWar,
    publisher: "Independent / Amazon",
    primaryUrl:
      "https://www.amazon.com/Cyber-War-Qatar-Blockade-Countries/dp/1792995954",
    formats: [
      {
        label: "Paperback on Amazon",
        url: "https://www.amazon.com/Cyber-War-Qatar-Blockade-Countries/dp/1792995954",
        price: "$49.95",
      },
      {
        label: "Kindle Edition",
        url: "https://www.amazon.com/Cyber-War-Qatar-Blockade-Countries-ebook/dp/B07MRHRY28",
        price: "$19.95",
      },
    ],
    description:
      "A first-hand strategic account of the cyber dimension of the 2017 Qatar diplomatic crisis. Drawing on three decades of GCC technology leadership, Dr. Al-Dorani analyses how information operations, infrastructure resilience and digital sovereignty became decisive instruments in a modern regional confrontation — and what other Gulf states should learn from the episode.",
    topics: [
      "Information warfare in the GCC",
      "Critical infrastructure resilience",
      "State-aligned threat actors",
      "Digital sovereignty doctrine",
    ],
    praise:
      "A definitive regional reference on how cyber operations now shape Gulf geopolitics.",
  },
  {
    id: "cyber-danger",
    title: "Cyber Danger",
    subtitle: "GCC Countries & Qatar",
    year: "2015",
    cover: bookCyberDanger,
    publisher: "Independent / Amazon",
    primaryUrl:
      "https://www.amazon.com/Cyber-Danger-GCC-Countries-Qatar/dp/1518785824",
    formats: [
      {
        label: "Paperback on Amazon",
        url: "https://www.amazon.com/Cyber-Danger-GCC-Countries-Qatar/dp/1518785824",
        price: "$25.95",
      },
      {
        label: "Kindle Edition",
        url: "https://www.amazon.com/Cyber-Danger-GCC-Countries-Qatar-ebook/dp/B017I9EVD2",
        price: "$12.95",
      },
    ],
    description:
      "The foundational volume that established Dr. Al-Dorani as a leading regional voice on cybersecurity. The book maps the emerging threat landscape facing GCC governments and critical industries, surveys attacker motivations, and proposes a strategic posture for Gulf nations confronting a fast-maturing digital threat environment.",
    topics: [
      "GCC-specific threat landscape",
      "Public sector cyber posture",
      "Critical industry exposure",
      "Strategic recommendations",
    ],
    praise:
      "One of the earliest serious treatments of cybersecurity strategy written from inside the Gulf.",
  },
];

function BookCover({ book, large = false }: { book: Book; large?: boolean }) {
  return (
    <div
      className={`relative group ${large ? "max-w-md" : ""}`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="absolute -inset-6 -z-10 opacity-50 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary) / 0.35), transparent 65%)",
        }}
      />
      <img
        src={book.cover}
        alt={`${book.title} — book cover`}
        loading="lazy"
        width={1024}
        height={1536}
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1"
        style={{
          transform: "rotateY(-8deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}

function BooksPage() {
  const featured = books.find((b) => b.featured)!;
  const rest = books.filter((b) => !b.featured);

  return (
    <>
      <PageHero
        eyebrow="Published Works"
        title="Three volumes on cybersecurity, sovereignty, and the GCC."
        description="Dr. Mohammed Al-Dorani has authored three published books on cybersecurity strategy and GCC digital risk — including a flagship title with HBKU Press' Simply Said series. Each volume is available worldwide on Amazon."
      />

      {/* Stats strip */}
      <Section className="!py-12 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Library, label: "Published Volumes", value: "3" },
            { icon: Award, label: "Major Publisher", value: "HBKU Press" },
            { icon: Globe, label: "Distribution", value: "Worldwide" },
            { icon: BookOpen, label: "Languages", value: "English" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30">
                <s.icon className="h-4 w-4 text-primary" />
              </span>
              <div>
                <div className="text-lg font-semibold text-foreground leading-tight">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured book */}
      <Section>
        <SectionHeader
          eyebrow="Featured Publication"
          title="The flagship cybersecurity primer — published by HBKU Press."
          description="The most recent and widely distributed of Dr. Al-Dorani's works, anchoring his thought leadership for boards, regulators and the general reader."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <BookCover book={featured} large />
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">
              {featured.year} · {featured.publisher}
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {featured.title}
            </h3>
            {featured.subtitle && (
              <p className="mt-3 text-lg text-muted-foreground">
                {featured.subtitle}
              </p>
            )}

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {featured.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-2">
              {featured.topics.map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {featured.praise && (
              <blockquote className="mt-8 border-l-2 border-primary pl-5 italic text-foreground/90">
                <Quote className="h-4 w-4 text-primary mb-2" />
                {featured.praise}
              </blockquote>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={featured.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
              >
                <ShoppingCart className="h-4 w-4" />
                Buy on Amazon
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {featured.formats
                .filter((f) => f.url !== featured.primaryUrl)
                .map((f) => (
                  <a
                    key={f.url}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-[color:var(--surface-elevated)] transition"
                  >
                    {f.label}
                    {f.price && (
                      <span className="text-muted-foreground">· {f.price}</span>
                    )}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-sm border-t border-border pt-6">
              {featured.pages && (
                <div>
                  <dt className="text-muted-foreground">Length</dt>
                  <dd className="text-foreground mt-0.5">{featured.pages}</dd>
                </div>
              )}
              {featured.isbn && (
                <div>
                  <dt className="text-muted-foreground">ISBN</dt>
                  <dd className="text-foreground mt-0.5">{featured.isbn}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted-foreground">First Published</dt>
                <dd className="text-foreground mt-0.5">{featured.year}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Remaining catalogue */}
      <Section className="bg-[color:var(--surface)] border-y border-border">
        <SectionHeader
          eyebrow="The Catalogue"
          title="Complete published works."
          description="Earlier volumes that established Dr. Al-Dorani's voice on GCC cybersecurity and information warfare."
        />

        <div className="mt-16 space-y-20">
          {rest.map((book, idx) => (
            <article
              key={book.id}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-4 flex justify-center">
                <BookCover book={book} />
              </div>

              <div className="lg:col-span-8">
                <p className="eyebrow mb-3">
                  {book.year} · {book.publisher}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="mt-2 text-base text-muted-foreground">
                    {book.subtitle}
                  </p>
                )}

                <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  {book.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {book.topics.map((t) => (
                    <li
                      key={t}
                      className="text-xs rounded-sm border border-border bg-background px-3 py-1.5 text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={book.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy on Amazon
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {book.formats
                    .filter((f) => f.url !== book.primaryUrl)
                    .map((f) => (
                      <a
                        key={f.url}
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm text-foreground hover:bg-background transition"
                      >
                        {f.label}
                        {f.price && (
                          <span className="text-muted-foreground">
                            · {f.price}
                          </span>
                        )}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Author note */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">About the Author</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Dr. Mohammed Al-Dorani
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            The first Qatari Ph.D. in Information Systems &amp; Telecommunications
            and the first Qatari professor of cybersecurity. Founder of Fortress
            Consulting, former GCC Director of Communications &amp; Information,
            and a regular voice in regional media on cybersecurity policy and
            digital sovereignty.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Read the full biography
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
