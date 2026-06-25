import { Link } from "@tanstack/react-router";
import { Shield, Mail, MapPin, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[color:var(--surface)]">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
              <Shield className="h-4 w-4 text-primary" strokeWidth={2.4} />
            </span>
            <span className="font-semibold tracking-tight">
              Fortress<span className="text-muted-foreground font-normal"> Consulting</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-md">
            Fortress Consulting is a cybersecurity, intelligence, and strategic advisory firm in
            Qatar providing services across the GCC. Our expertise includes cyber risk advisory,
            GRC, security architecture, AI-driven risk assessment, intelligence monitoring, and
            market entry advisory.
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Doha, Qatar</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> advisory@fortress.qa</span>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/insights" className="text-muted-foreground hover:text-foreground">Insights</Link></li>
            <li><Link to="/books" className="text-muted-foreground hover:text-foreground">Books</Link></li>
            <li><Link to="/partners" className="text-muted-foreground hover:text-foreground">Partners</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Engage</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Schedule Consultation</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Strategic Assessment</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Intelligence Subscription</Link></li>
          </ul>
          <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Fortress Consulting. All rights reserved.</p>
          <p>Cybersecurity · Intelligence · Strategic Advisory · GCC</p>
        </div>
      </div>
    </footer>
  );
}
