import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

type NavItem = { to: string; label: string; dropdown?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", dropdown: true },
  { to: "/insights", label: "Insights" },
  { to: "/books", label: "Books" },
  { to: "/partners", label: "Partners" },
  { to: "/media-kit", label: "Media Kit" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40 group-hover:bg-primary/25 transition">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2.4} />
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            Fortress
            <span className="text-muted-foreground font-normal"> Consulting</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) =>
            n.dropdown ? (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to={n.to as any}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  activeProps={{ className: "text-foreground" }}
                >
                  {n.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {servicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div className="w-[640px] rounded-md border border-border bg-background/95 backdrop-blur-xl shadow-[var(--shadow-elegant)] p-3 grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 rounded-sm p-3 hover:bg-[color:var(--surface-elevated)] transition"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 transition">
                              <Icon className="h-4 w-4 text-primary" />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-sm font-medium text-foreground leading-tight">
                                {s.name}
                              </span>
                              <span className="text-xs text-muted-foreground mt-1">
                                {s.short}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                      <div className="col-span-2 mt-1 pt-3 border-t border-border px-3 pb-1 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Six integrated practices
                        </span>
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-medium text-primary hover:text-primary/80"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to as any}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) =>
              n.dropdown ? (
                <div key={n.to} className="flex flex-col">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between py-2.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span>{n.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 border-l border-border ml-1 flex flex-col gap-2 py-2">
                      <Link
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="text-xs font-medium text-primary py-1"
                      >
                        All services →
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="py-1.5"
                        >
                          <span className="block text-sm text-foreground">
                            {s.name}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {s.short}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to as any}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
