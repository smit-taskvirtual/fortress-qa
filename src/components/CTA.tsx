import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.58 0.21 25 / 35%) 0%, transparent 60%)" }}
      />
      <div className="container-x py-24 md:py-32 text-center">
        <p className="eyebrow mb-5">Engage Fortress</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
          Engage with a Strategic Cybersecurity & Intelligence Advisor
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Discreet, executive-level engagement. Confidentiality and discretion are the foundation
          of every Fortress relationship.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
          >
            Schedule Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
          >
            Request Advisory Session
          </Link>
        </div>
      </div>
    </section>
  );
}
