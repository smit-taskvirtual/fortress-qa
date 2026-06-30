import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { MapPin, Mail, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fortress Consulting" },
      { name: "description", content: "Engage Fortress Consulting for strategic cybersecurity, intelligence and advisory services across the GCC. Headquartered in Doha, Qatar." },
      { property: "og:title", content: "Contact Fortress Consulting" },
      { property: "og:description", content: "Schedule a discreet advisory consultation." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search.topic === "string" ? (search.topic as string) : undefined,
  }),
  component: ContactPage,
});

const TOPIC_MAP: Record<string, string> = {
  speaking: "Public Speaking / PR Events",
  "cyber-risk": "Cyber Risk Advisory",
  grc: "Governance, Risk & Compliance",
};

function ContactPage() {
  const { topic } = Route.useSearch();
  const preselected = (topic && TOPIC_MAP[topic]) || "";
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Engage Fortress."
        description="Discreet, executive-level engagement. All inquiries are handled with confidentiality."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="eyebrow mb-4">Headquarters</p>
              <h2 className="text-2xl font-semibold">Doha, Qatar</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
                Fortress Consulting operates across the GCC from its base in Qatar, with engagements
                in Saudi Arabia, the UAE, Bahrain, Oman and Kuwait.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "West Bay, Doha, Qatar" },
                { icon: Mail, label: "advisory@fortress.qa" },
                { icon: Phone, label: "+974 0000 0000" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 py-3 border-b border-border">
                  <c.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="glass rounded-md p-6">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                All inquiries are received under NDA-equivalent confidentiality. Communications can
                be conducted via secure channel on request.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-md border border-border bg-[color:var(--surface)] p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40 mb-6">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Inquiry received.</h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                    A senior advisor will respond within one business day to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div>
                    <p className="eyebrow mb-2">Schedule Consultation</p>
                    <h3 className="text-2xl font-semibold">Request an advisory session.</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Organization" name="org" required />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Country" name="country" />
                  </div>
                  <Field label="Role / Title" name="role" />
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
                      Engagement type
                    </label>
                    <select
                      key={preselected}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                      defaultValue={preselected}
                    >
                      <option value="" disabled>Select an option</option>
                      <option>Public Speaking / PR Events</option>
                      <option>Cyber Risk Advisory</option>
                      <option>Governance, Risk & Compliance</option>
                      <option>Security Architecture & Strategy</option>
                      <option>Intelligence & Risk Monitoring</option>
                      <option>Incident Advisory & Crisis Management</option>
                      <option>Market Entry / Credibility Bridge</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Briefly describe the engagement context (treated as confidential)."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[var(--shadow-glow)]"
                  >
                    Submit Inquiry <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you consent to confidential handling of this inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
