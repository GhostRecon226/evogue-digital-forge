import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const beliefs = [
  {
    n: "01",
    title: "Clear communication",
    body: "We say what we mean. No jargon, no runaround. You always know where your project stands.",
  },
  {
    n: "02",
    title: "Sensible timelines",
    body: "We don't overpromise. We scope carefully and deliver on what we commit to.",
  },
  {
    n: "03",
    title: "Shipping things that move metrics",
    body: "Vanity work doesn't interest us. We care about outcomes, not output.",
  },
];

const services = [
  {
    title: "Product Design and Engineering",
    body: "Websites, web apps, and mobile products built to perform and built to last.",
    icon: <path d="M4 6h16v10H4zM2 20h20M9 16v4M15 16v4" strokeWidth="1.6" />,
  },
  {
    title: "Strategy and Consulting",
    body: "We help teams think clearly about what to build, why, and how to get there.",
    icon: <path d="M3 12l4-4 4 4 4-6 6 8M3 20h18" strokeWidth="1.6" />,
  },
  {
    title: "AI Agents and Automation",
    body: "Custom AI agents and workflow automations tailored to your brand and operations.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          strokeWidth="1.6"
        />
      </>
    ),
  },
  {
    title: "Training and Advisory",
    body: "Upskilling teams and advising organisations on product, tech, and digital transformation.",
    icon: <path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c2 1.5 8 1.5 10 0v-5M21 9v6" strokeWidth="1.6" />,
  },
];

const team = [
  { initials: "EO", name: "Team Member One", role: "Founder & Strategy Lead", desc: "Leads engagements end to end." },
  { initials: "AK", name: "Team Member Two", role: "Design Director", desc: "Owns product and brand design." },
  { initials: "TM", name: "Team Member Three", role: "Engineering Lead", desc: "Ships systems that don't break." },
  { initials: "NA", name: "Team Member Four", role: "AI & Automation", desc: "Builds agents that earn their keep." },
];

const stats = [
  { value: 40, suffix: "+", label: "Products Shipped" },
  { value: 3, suffix: "", label: "Continents Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 200, suffix: "+", label: "Academy Graduates" },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="label-caps text-brand-secondary mb-4">{children}</div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-surface overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-90 pointer-events-none" />
        <div className="container relative">
          <Reveal>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-secondary/40 text-brand-secondary label-caps">
              About Us
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-primary leading-[1.05] max-w-4xl">
              We build products. We raise standards.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-secondary/90 max-w-2xl leading-relaxed">
              Evogue is a product studio and consulting firm with one goal: to raise the standard of digital product development on the African continent and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <div className="mt-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary tracking-tight leading-[1.15]"
                style={{ fontStyle: "italic" }}
              >
                "We started with one goal. Everything else followed."
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-5 text-brand-secondary/90 text-base md:text-lg leading-relaxed">
                <p>
                  Great products don't happen by accident. They come from a tight blend of strategy, engineering, and human-centered design. That blend is what we bring to every engagement.
                </p>
                <p>
                  We started Evogue because we believed the continent deserved better digital products. Not just functional ones. Products people actually want to use.
                </p>
                <p>
                  That conviction hasn't changed. What's grown is our reach. Today we work with teams across Africa and globally, bringing the same standard to every project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container">
          <Reveal>
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-2xl">
              A few things we won't compromise on.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 0.12} y={32}>
                <div className="bg-white border border-brand-border rounded-[10px] p-7 h-full hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div className="text-brand-secondary font-bold tracking-widest text-sm">{b.n}</div>
                  <h3 className="mt-4 text-xl font-semibold text-brand-primary">{b.title}</h3>
                  <p className="mt-2.5 text-brand-secondary/90 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Four ways we show up for our clients.
            </h2>
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

      {/* OUR TEAM */}
      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container">
          <Reveal>
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Strategists, designers, and engineers.
            </h2>
            <p className="mt-3 text-brand-secondary/90 max-w-xl">
              We like solving hard problems and dislike vanity work.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1} y={28}>
                <div className="bg-white border border-brand-border rounded-[10px] p-6 h-full text-center hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div
                    className="mx-auto w-20 h-20 rounded-full flex items-center justify-center text-brand-primary font-bold text-lg tracking-wider"
                    style={{ background: "hsl(var(--brand-accent) / 0.25)" }}
                  >
                    {m.initials}
                  </div>
                  <div className="mt-5 font-semibold text-brand-primary">{m.name}</div>
                  <div className="mt-1 text-sm text-brand-secondary">{m.role}</div>
                  <p className="mt-3 text-xs text-brand-secondary/70 leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <SectionLabel>By The Numbers</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              The work, in numbers.
            </h2>
          </Reveal>
          <div className="mt-12 pt-10 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-y-8">
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

      {/* THE AFRICA ANGLE */}
      <section className="py-20 md:py-28 bg-brand-primary">
        <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="label-caps text-brand-accent mb-4">Our Mission</div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Origin: Africa. Reach: Global.
            </h2>
            <div className="mt-8 space-y-5 text-brand-accent/90 leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                We started with a conviction that the African continent deserved a higher standard of digital product development. That's still true.
              </p>
              <p>
                But ambition doesn't have a geography. We work with teams anywhere in the world, and we bring the same standard to every engagement.
              </p>
              <p>That perspective, built from the continent outward, is what makes us different.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                fill="none"
                stroke="hsl(var(--brand-accent))"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {/* concentric rings */}
                <circle cx="100" cy="100" r="92" opacity="0.25" />
                <circle cx="100" cy="100" r="70" opacity="0.4" />
                <circle cx="100" cy="100" r="48" opacity="0.6" />
                {/* simplified africa silhouette */}
                <path
                  d="M95 30 C112 28 128 36 134 50 C141 65 138 78 142 92 C146 106 152 116 148 132 C144 148 130 162 118 172 C108 180 96 178 90 168 C84 158 82 148 74 140 C66 132 56 122 56 108 C56 92 60 76 70 62 C78 50 84 38 95 30 Z"
                  fill="hsl(var(--brand-accent) / 0.18)"
                  stroke="hsl(var(--brand-accent))"
                  strokeWidth="1.8"
                />
                {/* origin dot */}
                <circle cx="100" cy="105" r="4" fill="hsl(var(--brand-accent))" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container text-center">
          <Reveal>
            <div className="label-caps text-brand-secondary">Let's Work Together</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
              Like what you see? Let's build something.
            </h2>
            <p className="mt-5 text-brand-secondary/90 max-w-xl mx-auto leading-relaxed">
              Tell us about your project and we'll take it from there.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-7 py-3.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
            >
              Start a Project
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
