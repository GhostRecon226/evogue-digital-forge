import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import heroPortrait from "@/assets/hero-portrait.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const stats = [
  { value: 40, suffix: "+", label: "Products Shipped" },
  { value: 3, suffix: "", label: "Continents Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 200, suffix: "+", label: "Academy Graduates" },
];

const services = [
  {
    title: "Product Design and Engineering",
    body: "Websites, web apps, and mobile products built to perform and built to last.",
    icon: (
      <path d="M4 6h16v10H4zM2 20h20M9 16v4M15 16v4" strokeWidth="1.6" />
    ),
  },
  {
    title: "Strategy and Consulting",
    body: "We help teams think clearly about what to build, why, and how to get there.",
    icon: (
      <path d="M3 12l4-4 4 4 4-6 6 8M3 20h18" strokeWidth="1.6" />
    ),
  },
  {
    title: "AI Agents and Automation",
    body: "Custom AI agents and workflow automations tailored to your brand and operations.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: "Training and Advisory",
    body: "Upskilling teams and advising organisations on product, tech, and digital transformation.",
    icon: (
      <path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c2 1.5 8 1.5 10 0v-5M21 9v6" strokeWidth="1.6" />
    ),
  },
];

const why = [
  {
    n: "01",
    title: "Origin with context",
    body: "Built on the African continent, working with teams globally. We bring perspective most studios don't have.",
  },
  {
    n: "02",
    title: "No vanity work",
    body: "Clear communication, sensible timelines, and shipping things that move metrics. That's the standard.",
  },
  {
    n: "03",
    title: "End to end",
    body: "Strategy through engineering through design. One team, full coverage, no handoff chaos.",
  },
];

const cases = [
  {
    tags: ["Web App", "Strategy"],
    title: "Project Alpha",
    body: "A fintech platform serving users across West Africa. Designed, built, and launched in 12 weeks.",
    client: "Confidential Fintech",
    year: "2024",
    role: "Strategy · Product Design · Engineering",
    challenge:
      "A regional fintech needed to launch a consumer wallet across three West African markets without a clear product hypothesis or design system.",
    approach:
      "We ran a two-week discovery, defined the MVP scope, designed a modular UI system, and shipped a production-grade web app in 12 weeks with weekly stakeholder demos.",
    outcomes: [
      "12 week launch from kickoff",
      "Onboarded users across 3 markets in week one",
      "Design system reused across web and mobile",
    ],
    images: [
      { alt: "Wallet dashboard overview", gradient: "linear-gradient(135deg, hsl(var(--brand-primary)) 0%, hsl(var(--brand-secondary)) 100%)" },
      { alt: "Onboarding flow screen", gradient: "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-accent) / 0.6) 100%)" },
      { alt: "Transaction details view", gradient: "linear-gradient(160deg, hsl(var(--brand-secondary)) 0%, hsl(var(--brand-accent) / 0.4) 100%)" },
      { alt: "Mobile wallet home", gradient: "linear-gradient(135deg, hsl(var(--brand-border)) 0%, hsl(var(--brand-primary) / 0.7) 100%)", orientation: "portrait" as const },
    ],
  },
  {
    tags: ["Branding", "Design"],
    title: "Project Beta",
    body: "Brand identity and digital presence for a global logistics company.",
    client: "Global Logistics Group",
    year: "2024",
    role: "Brand Strategy · Identity · Web",
    challenge:
      "A 30-year-old logistics company felt invisible online and was losing enterprise pitches to younger competitors.",
    approach:
      "We rebuilt their positioning, designed a confident identity system, and shipped a marketing site that finally matched the scale of their operation.",
    outcomes: [
      "New identity rolled out across 8 regions",
      "Marketing site launched in 9 weeks",
      "Inbound enterprise leads up materially in Q1 post-launch",
    ],
    images: [
      { alt: "Logo lockup and identity system", gradient: "linear-gradient(135deg, hsl(var(--brand-primary)) 0%, hsl(var(--brand-secondary)) 100%)" },
      { alt: "Brand color palette", gradient: "linear-gradient(135deg, hsl(var(--brand-accent) / 0.6) 0%, hsl(var(--brand-surface)) 100%)", orientation: "square" as const },
      { alt: "Marketing site home page", gradient: "linear-gradient(160deg, hsl(var(--brand-secondary)) 0%, hsl(var(--brand-border)) 100%)" },
      { alt: "Service detail page", gradient: "linear-gradient(135deg, hsl(var(--brand-primary) / 0.85) 0%, hsl(var(--brand-accent) / 0.5) 100%)" },
      { alt: "Brand guidelines spread", gradient: "linear-gradient(135deg, hsl(var(--brand-border)) 0%, hsl(var(--brand-primary)) 100%)" },
    ],
  },
  {
    tags: ["AI", "Automation"],
    title: "Project Gamma",
    body: "Custom AI agents and workflow automation for an e-commerce operation.",
    client: "Mid-market E-commerce",
    year: "2025",
    role: "AI Engineering · Automation · Advisory",
    challenge:
      "Customer ops were drowning in repetitive tickets and manual order workflows that didn't scale past a few thousand orders a week.",
    approach:
      "We mapped the highest-cost workflows, deployed custom AI agents for tier-1 support, and automated reconciliation between their storefront, ERP, and 3PL.",
    outcomes: [
      "60%+ of tier-1 tickets handled by agents",
      "Hours of manual reconciliation eliminated weekly",
      "Ops team refocused on growth, not firefighting",
    ],
    images: [
      { alt: "AI agent conversation interface", gradient: "linear-gradient(135deg, hsl(var(--brand-primary)) 0%, hsl(var(--brand-accent) / 0.6) 100%)" },
      { alt: "Workflow automation map", gradient: "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-secondary)) 100%)" },
      { alt: "Ops dashboard analytics", gradient: "linear-gradient(160deg, hsl(var(--brand-secondary)) 0%, hsl(var(--brand-primary) / 0.7) 100%)" },
    ],
  },
];

type CaseStudy = (typeof cases)[number];

const process = [
  {
    n: "01",
    title: "Discover",
    body: "We sit with your team, study the problem, and map the terrain before drawing a single line.",
  },
  {
    n: "02",
    title: "Define",
    body: "We turn ambiguity into a sharp brief: scope, success metrics, timelines, and trade-offs on the table.",
  },
  {
    n: "03",
    title: "Design & Build",
    body: "Designers and engineers ship in tight loops. You see progress weekly, not at the end.",
  },
  {
    n: "04",
    title: "Launch & Learn",
    body: "We ship, instrument, and stay close. The work isn't done until it's earning its place.",
  },
];

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Typically within two weeks of signing. We protect quality by keeping our active engagements small.",
  },
  {
    q: "Do you work with non-African clients?",
    a: "Yes. We're built on the continent, but more than half of our clients are based in Europe and North America.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most projects run 8 to 16 weeks, fixed scope, weekly demos. Longer retainers available for ongoing product work.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Absolutely. We embed cleanly with in-house designers, engineers, and PMs and hand off as much as you want.",
  },
];

const testimonials = [
  {
    quote:
      "Evogue felt less like a vendor and more like a co-founder. They moved fast, asked the right questions, and shipped a product our users love.",
    name: "Ade Okonkwo",
    role: "CEO, Fintech Startup",
    initials: "AO",
  },
  {
    quote:
      "The automations they built saved us hours every week. Practical, well-thought-out, and zero hype. Exactly what we needed.",
    name: "Sarah M.",
    role: "Operations Lead, E-Commerce Co.",
    initials: "SM",
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="label-caps text-brand-secondary mb-4">{children}</div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-wider uppercase border border-brand-border text-brand-secondary bg-brand-surface">
    {children}
  </span>
);

const Index = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-surface overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-90 pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-secondary/40 text-brand-secondary label-caps">
                  Product Studio + Consulting Firm
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-primary leading-[1.05]">
                  Building digital products that earn their place.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg md:text-xl text-brand-secondary/90 max-w-2xl leading-relaxed">
                  We partner with ambitious teams to design, engineer, and scale software people actually want to use. Origin: Africa. Reach: Global.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
                  >
                    See Our Work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center border border-brand-primary text-brand-primary text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-primary hover:text-white transition-colors"
                  >
                    Start a Project
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none lg:ml-auto px-4 sm:px-6 lg:px-0">
                {/* Soft brand-tinted glow that bleeds into the surface */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 md:-inset-12 rounded-full bg-gradient-to-br from-brand-primary/10 via-brand-accent/[0.06] to-transparent blur-3xl"
                />
                <div className="relative aspect-[4/5] rotate-[10deg] transition-transform duration-500 hover:rotate-[8deg]">
                  <img
                    src={heroPortrait}
                    alt="Evogue Consulting team member"
                    loading="eager"
                    className="relative w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 pt-10 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="px-2">
                  <div className="text-3xl md:text-4xl font-bold text-brand-primary">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm text-brand-secondary/80">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Strategy. Engineering. Design.
            </h2>
            <p className="mt-3 text-brand-secondary/90 max-w-xl">
              No vanity work. Just products that move metrics.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 border border-brand-border rounded-[10px] overflow-hidden">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} y={32}>
                <div
                  className={`group p-8 md:p-10 bg-white hover:bg-brand-surface transition-colors h-full
                    border-brand-border
                    ${i % 2 === 0 ? "sm:border-r" : ""}
                    ${i < 2 ? "border-b" : ""}
                  `}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--brand-primary))"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                  <h3 className="mt-5 text-xl font-semibold text-brand-primary">{s.title}</h3>
                  <p className="mt-2.5 text-brand-secondary/90 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EVOGUE */}
      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container">
          <Reveal>
            <SectionLabel>Why Evogue</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-2xl">
              Built different, on purpose.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {why.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.12} y={32}>
                <div className="bg-white border border-brand-border rounded-[10px] p-7 h-full hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div className="text-brand-accent font-bold tracking-widest text-sm">{w.n}</div>
                  <h3 className="mt-4 text-xl font-semibold text-brand-primary">{w.title}</h3>
                  <p className="mt-2.5 text-brand-secondary/90 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              A few things we've built.
            </h2>
            <p className="mt-3 text-brand-secondary/90">
              Real projects. Documentation coming soon.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <button
                  type="button"
                  onClick={() => setActiveCase(c)}
                  className="group text-left w-full bg-white border border-brand-border rounded-[10px] overflow-hidden hover:-translate-y-1 hover:shadow-card transition-all duration-300 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  aria-label={`View case study: ${c.title}`}
                >
                  <div
                    className="h-44 w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-border)) 60%, hsl(var(--brand-accent) / 0.35) 100%)",
                    }}
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-brand-primary">{c.title}</h3>
                    <p className="mt-2 text-brand-secondary/90 leading-relaxed">{c.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                      View case study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="academy" className="py-20 md:py-28 bg-brand-surface">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel>Evogue Academy</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Building the next generation of African tech talent.
            </h2>
            <p className="mt-5 text-brand-secondary/90 leading-relaxed max-w-lg">
              The Academy is where we hand-hold non-tech individuals into tech career paths. Project management, business analysis, and more. Practical, structured, and built for the continent.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
            >
              Visit the Academy
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white border border-brand-border rounded-[10px] p-8 md:p-10">
              <div className="text-6xl md:text-7xl font-bold text-brand-primary leading-none">
                <CountUp end={200} suffix="+" />
              </div>
              <div className="mt-2 label-caps text-brand-secondary">Graduates</div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Project Management", "Business Analysis", "Product Management", "Digital Strategy"].map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-2xl">
              A process that respects your time.
            </h2>
            <p className="mt-3 text-brand-secondary/90 max-w-xl">
              Four phases. Tight loops. No surprises at the end.
            </p>
          </Reveal>

          <div className="mt-14 relative grid md:grid-cols-4 gap-6">
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-0 right-0 top-[26px] h-px"
              style={{
                background:
                  "repeating-linear-gradient(to right, hsl(var(--brand-border)) 0 8px, transparent 8px 16px)",
              }}
            />
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-primary font-bold tracking-wider text-sm shadow-card">
                    {p.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-secondary/90 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI BANNER */}
      <section className="py-20 md:py-24">
        <div className="container">
          <Reveal>
            <div className="bg-brand-primary rounded-[10px] p-8 md:p-14 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
              <div>
                <div className="label-caps text-brand-accent mb-3">AI Services</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  We're infusing AI into everything.
                </h2>
                <p className="mt-4 text-brand-accent/90 max-w-xl leading-relaxed">
                  From custom AI agents for your brand to workflow automations that save real hours. We help teams work smarter without the hype.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-brand-primary text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-accent transition-colors whitespace-nowrap"
              >
                Explore AI Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container">
          <Reveal>
            <SectionLabel>What Clients Say</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Straight from the people we work with.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <figure className="relative bg-white border border-brand-border rounded-[10px] p-8 md:p-10 h-full">
                  <div
                    className="absolute top-4 right-6 text-7xl leading-none font-serif select-none"
                    style={{ color: "hsl(var(--brand-border))" }}
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <blockquote className="text-brand-primary/90 text-lg leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center font-semibold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-primary text-sm">{t.name}</div>
                      <div className="text-xs text-brand-secondary/80">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              The questions we get most.
            </h2>
            <p className="mt-4 text-brand-secondary/90 max-w-md leading-relaxed">
              Don't see yours? Drop us a note and we'll get back within one business day.
            </p>
          </Reveal>
          <div className="divide-y divide-brand-border border-y border-brand-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                    <span className="text-base md:text-lg font-semibold text-brand-primary">
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-brand-secondary/90 leading-relaxed pr-12">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-90 pointer-events-none" />
        <div className="container relative grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>Let's Build</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Ready to build something worth using?
            </h2>
            <p className="mt-5 text-brand-secondary/90 max-w-md leading-relaxed">
              Tell us about your product, your goals, and where you're stuck. We'll come back with thoughts and next steps within one business day.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16v12H4z" /><path d="M4 6l8 7 8-7" />
                  </svg>
                </div>
                <div>
                  <div className="label-caps text-brand-secondary">Email</div>
                  <a href="mailto:hello@evogue.consulting" className="mt-1 block text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
                    hello@evogue.consulting
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.2-7-12a7 7 0 1114 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="label-caps text-brand-secondary">Based In</div>
                  <div className="mt-1 text-brand-primary font-semibold">Lagos, Nigeria · Working Globally</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const email = fd.get("email");
                const company = fd.get("company") || "";
                const message = fd.get("message") || "";
                const subject = encodeURIComponent(`Project enquiry from ${name}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
                );
                window.location.href = `mailto:hello@evogue.consulting?subject=${subject}&body=${body}`;
              }}
              className="bg-white border border-brand-border rounded-[10px] p-7 md:p-9 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="label-caps text-brand-secondary">Name</span>
                  <input
                    name="name"
                    required
                    type="text"
                    className="mt-2 w-full bg-brand-surface border border-brand-border rounded-[6px] px-4 py-3 text-sm text-brand-primary placeholder:text-brand-secondary/50 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="block">
                  <span className="label-caps text-brand-secondary">Email</span>
                  <input
                    name="email"
                    required
                    type="email"
                    className="mt-2 w-full bg-brand-surface border border-brand-border rounded-[6px] px-4 py-3 text-sm text-brand-primary placeholder:text-brand-secondary/50 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block mt-5">
                <span className="label-caps text-brand-secondary">Company</span>
                <input
                  name="company"
                  type="text"
                  className="mt-2 w-full bg-brand-surface border border-brand-border rounded-[6px] px-4 py-3 text-sm text-brand-primary placeholder:text-brand-secondary/50 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Optional"
                />
              </label>
              <label className="block mt-5">
                <span className="label-caps text-brand-secondary">What can we help with?</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full bg-brand-surface border border-brand-border rounded-[6px] px-4 py-3 text-sm text-brand-primary placeholder:text-brand-secondary/50 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="A short paragraph about your product, goals, and timeline."
                />
              </label>
              <button
                type="submit"
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-7 py-3.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
              >
                Send Enquiry
              </button>
              <p className="mt-4 text-xs text-brand-secondary/70">
                We reply within one business day.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />

      <Dialog open={!!activeCase} onOpenChange={(open) => !open && setActiveCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-brand-border p-0">
          {activeCase && (
            <>
              <div
                className="h-40 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-border)) 60%, hsl(var(--brand-accent) / 0.35) 100%)",
                }}
              />
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap gap-2">
                  {activeCase.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <DialogHeader className="mt-4 space-y-2 text-left">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight">
                    {activeCase.title}
                  </DialogTitle>
                  <DialogDescription className="text-brand-secondary/90 leading-relaxed">
                    {activeCase.body}
                  </DialogDescription>
                </DialogHeader>

                <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-brand-border py-4">
                  <div>
                    <dt className="label-caps text-brand-secondary">Client</dt>
                    <dd className="mt-1 text-sm font-semibold text-brand-primary">{activeCase.client}</dd>
                  </div>
                  <div>
                    <dt className="label-caps text-brand-secondary">Year</dt>
                    <dd className="mt-1 text-sm font-semibold text-brand-primary">{activeCase.year}</dd>
                  </div>
                  <div>
                    <dt className="label-caps text-brand-secondary">Role</dt>
                    <dd className="mt-1 text-sm font-semibold text-brand-primary">{activeCase.role}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <div className="label-caps text-brand-secondary">The Challenge</div>
                  <p className="mt-2 text-brand-primary/90 leading-relaxed">{activeCase.challenge}</p>
                </div>
                <div className="mt-5">
                  <div className="label-caps text-brand-secondary">Our Approach</div>
                  <p className="mt-2 text-brand-primary/90 leading-relaxed">{activeCase.approach}</p>
                </div>
                <div className="mt-5">
                  <div className="label-caps text-brand-secondary">Outcomes</div>
                  <ul className="mt-3 space-y-2">
                    {activeCase.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-brand-primary/90">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        <span className="leading-relaxed">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeCase.images && activeCase.images.length > 0 && (
                  <div className="mt-7">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="label-caps text-brand-secondary">Gallery</div>
                      <div className="text-xs text-brand-secondary/70">{activeCase.images.length} screenshots</div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
                      {activeCase.images.map((img, idx) => {
                        const orientation = (img as { orientation?: "landscape" | "portrait" | "square" }).orientation ?? "landscape";
                        const aspectClass =
                          orientation === "portrait"
                            ? "aspect-[3/4]"
                            : orientation === "square"
                              ? "aspect-square"
                              : "aspect-[16/10] sm:aspect-[4/3]";
                        const spanClass =
                          orientation === "portrait"
                            ? "row-span-2"
                            : "";
                        return (
                          <figure
                            key={idx}
                            className={`group relative ${aspectClass} ${spanClass} rounded-[8px] overflow-hidden border border-brand-border bg-brand-surface`}
                          >
                            <div
                              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
                              style={{ background: img.gradient }}
                              role="img"
                              aria-label={img.alt}
                            />
                            <figcaption className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 text-[0.7rem] font-medium text-white bg-gradient-to-t from-brand-primary/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              {img.alt}
                            </figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
