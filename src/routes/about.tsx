import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { FinalCTA } from "@/components/CTA";
import founder from "@/assets/founder.jpg";
import gcc from "@/assets/gcc-skyline.jpg";
import { Award, GraduationCap, Globe2, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fortress Consulting" },
      { name: "description", content: "Founded by Dr. Mohammed Al-Dorani, Fortress Consulting brings senior cybersecurity, intelligence and strategic advisory leadership to government and enterprise clients across the GCC." },
      { property: "og:title", content: "About Fortress Consulting" },
      { property: "og:description", content: "Founder-led advisory firm with deep GCC expertise." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fortress"
        title="A founder-led advisory firm built for high-stakes environments."
        description="Fortress was founded to bring senior, board-level cybersecurity, intelligence and strategic counsel to organizations protecting national assets across the GCC."
      />

      {/* FOUNDER */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-md overflow-hidden border border-border">
              <img src={founder} alt="Dr. Mohammed Al-Dorani, Founder" width={1024} height={1024} loading="lazy" className="w-full h-auto" />
              <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(180deg, transparent, oklch(0.18 0.025 250 / 90%))" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="eyebrow mb-1">Founder & Managing Partner</p>
                <p className="text-xl font-semibold">Dr. Mohammed Al-Dorani</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Three decades at the intersection of cybersecurity, intelligence and statecraft.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dr. Al-Dorani has advised ministries, sovereign institutions, and global enterprises on
              cyber strategy, national resilience programs, and high-consequence incident response.
              His work spans regulated banking environments, defense agencies, and critical
              infrastructure operators across the Gulf and beyond.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
              {[
                { icon: GraduationCap, t: "Doctorate in Cyber Strategy" },
                { icon: Award, t: "20+ years senior advisory" },
                { icon: Globe2, t: "GCC-wide engagements" },
                { icon: Shield, t: "Government & defense cleared" },
              ].map((c) => (
                <div key={c.t} className="bg-[color:var(--surface)] p-5 flex items-center gap-3">
                  <c.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <section className="relative border-y border-border overflow-hidden">
        <img src={gcc} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.025 250 / 80%), var(--background))" }} />
        <div className="container-x py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Mission</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              To help organizations across the GCC operate securely, resiliently, and with strategic clarity in an era of compounding risk.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
              We bring together cybersecurity rigor, intelligence-grade analysis, and the discretion
              required of advisors to leadership teams making decisions of national consequence.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          {[
            { t: "GCC Focus", d: "Headquartered in Qatar with engagements across Saudi Arabia, the UAE, Bahrain, Oman and Kuwait." },
            { t: "Vendor-Neutral", d: "We sell no software and represent no vendor — our counsel is independent by design." },
            { t: "Discreet by Default", d: "Confidentiality, NDAs, and information compartmentalization are foundational to every engagement." },
          ].map((b) => (
            <div key={b.t} className="bg-[color:var(--surface)] p-8">
              <h3 className="text-xl font-semibold">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
