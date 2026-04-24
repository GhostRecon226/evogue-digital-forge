import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const beliefs = [
  {
    n: "01",
    title: "We say what we mean.",
    body: "No jargon, no runaround. You always know where your project stands, what's next, and why. If something changes, you hear it from us first.",
  },
  {
    n: "02",
    title: "We scope before we promise.",
    body: "Timelines only mean something if they're built on honest scoping. We take the time to understand what we're actually building before we commit to when it ships.",
  },
  {
    n: "03",
    title: "We care about the outcome, not the output.",
    body: "Shipping a product is the easy part. Shipping one that moves metrics, retains users, and solves a real problem is what we're actually here to do. Vanity work bores us.",
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
      <Seo
        title="About Evogue Consulting | Product Studio Based in Lagos, Nigeria"
        description="Learn about Evogue Consulting, a product studio and consulting firm founded in Lagos, Nigeria. We design, build, and scale digital products for teams across Africa and globally."
        path="/about"
      />
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta
          name="keywords"
          content="Evogue Consulting, product studio Africa, digital product development, product design, software engineering, AI agents, automation, strategy consulting, African tech, Lagos product studio"
        />

        {/* JSON-LD graph: Organization + WebSite + AboutPage + FAQPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://evogue.consulting/#organization",
              name: "Evogue Consulting",
              legalName: "Evogue Consulting",
              url: "https://evogue.consulting",
              logo: {
                "@type": "ImageObject",
                "@id": "https://evogue.consulting/#logo",
                url: "https://evogue.consulting/logo.png",
                contentUrl: "https://evogue.consulting/logo.png",
                width: 512,
                height: 512,
                caption: "Evogue Consulting",
              },
              image: { "@id": "https://evogue.consulting/#logo" },
              description:
                "Evogue is a product studio and consulting firm raising the standard of digital product development across Africa and globally.",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressCountry: "NG",
                },
              },
              areaServed: ["Africa", "Europe", "North America", "Worldwide"],
              knowsAbout: [
                "Product Design",
                "Software Engineering",
                "Strategy Consulting",
                "AI Agents",
                "Workflow Automation",
                "Digital Transformation",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "hello@evogue.com.ng",
                  url: "https://evogue.consulting/#contact",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/evogueconsulting/",
                "https://x.com/evogueconsulting",
                "https://www.instagram.com/evogueconsult",
                "https://github.com/evogue-consulting",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://evogue.consulting/#website",
              url: "https://evogue.consulting",
              name: "Evogue Consulting",
              publisher: { "@id": "https://evogue.consulting/#organization" },
              inLanguage: "en",
            },
            {
              "@type": "AboutPage",
              "@id": "https://evogue.consulting/about#aboutpage",
              url: "https://evogue.consulting/about",
              name: "About Evogue Consulting",
              description:
                "Evogue is a product studio and consulting firm raising the standard of digital product development across Africa and globally.",
              inLanguage: "en",
              isPartOf: { "@id": "https://evogue.consulting/#website" },
              about: { "@id": "https://evogue.consulting/#organization" },
              publisher: { "@id": "https://evogue.consulting/#organization" },
              primaryImageOfPage: { "@id": "https://evogue.consulting/#logo" },
            },
            {
              "@type": "FAQPage",
              "@id": "https://evogue.consulting/about#faq",
              isPartOf: { "@id": "https://evogue.consulting/about#aboutpage" },
              about: { "@id": "https://evogue.consulting/#organization" },
              publisher: { "@id": "https://evogue.consulting/#organization" },
              inLanguage: "en",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does Evogue Consulting do?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Evogue is a product studio and consulting firm offering product design and engineering, strategy and consulting, AI agents and automation, and training and advisory services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is Evogue based?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Evogue is built on the African continent and works with teams globally. Our origin is Africa, and our reach is global.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with clients outside of Africa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. More than half of our clients are based in Europe and North America. We bring the same standard to every engagement, regardless of geography.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly can a new project start?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Typically within two weeks of signing. We protect quality by keeping our active engagements small.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does a typical engagement look like?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Most projects run 8 to 16 weeks with fixed scope and weekly demos. Longer retainers are available for ongoing product work.",
                  },
                },
              ],
            },
          ],
        })}</script>
      </Helmet>
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
              Evogue Consulting is a product studio and consulting with one goal: to raise the standard of digital product development on the African continent and beyond.
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
                  We started Evogue out of frustration, honestly. We kept seeing digital products built on the continent that were technically functional but genuinely painful to use. Products that looked like they were built to tick a box rather than solve a problem.
                </p>
                <p>
                  We believed teams here deserved better. Better thinking, better design, better engineering. Not a cut-price version of what global studios were doing, but the real thing built with the same rigour and the same standards.
                </p>
                <figure className="my-2 border-l-4 border-brand-accent pl-5 md:pl-6 py-2">
                  <blockquote className="text-xl md:text-2xl font-semibold text-brand-primary leading-snug tracking-tight">
                    "Not a cut-price version of what global studios were doing — the real thing, built with the same rigour and the same standards."
                  </blockquote>
                </figure>
                <p>
                  So we built the kind of studio we wished existed. One that combines strategy, engineering, and design under one roof, communicates clearly, ships on time, and cares about whether the product actually moves the needle.
                </p>
                <p>
                  Today we work with founders, product teams, and organisations across Africa, Europe, and beyond. The continent is still our home and our conviction. The reach has just grown.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IDEAL CLIENT CALLOUT */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <svg
                aria-hidden="true"
                className="mx-auto h-8 w-8 text-brand-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V6zm10 0a5.17 5.17 0 00-5.17 5.17V18h6.83v-6.83H15.5a1.67 1.67 0 011.67-1.67V6z" />
              </svg>
              <blockquote className="mt-5 text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-primary leading-snug tracking-tight">
                We work best with teams who have a clear problem, a real budget, and the appetite to move. If that's you, we'll get on well.
              </blockquote>
              <span
                aria-hidden="true"
                className="mt-7 mx-auto block h-[3px] w-16 bg-brand-accent rounded-full"
              />
            </figure>
          </Reveal>
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
          <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 0.12} y={32}>
                <div className="group relative h-full bg-white border border-brand-border rounded-[10px] p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-card hover:border-brand-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Top accent bar grows on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-[3px] w-10 bg-brand-accent rounded-r-full transition-all duration-300 group-hover:w-full"
                  />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary font-bold tracking-wider text-sm shrink-0 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-300">
                      {b.n}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary leading-snug">
                      {b.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-brand-secondary/90 leading-relaxed">
                    {b.body}
                  </p>
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
          <div className="mt-12 pt-10 border-t border-brand-border">
            <Reveal>
              <p className="label-caps text-brand-secondary text-center">
                We let the numbers do some of the talking.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
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
                Evogue was founded with a specific mission: to raise the standard of digital product development on the African continent. We believe Africa's tech ecosystem deserves the same quality of product thinking, engineering, and design that global markets expect.
              </p>
              <p>
                That conviction has not changed. What has grown is our reach. We now work with teams across Africa, Europe, and globally, bringing the same standard to every project regardless of geography.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="evogue-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="hsl(var(--brand-accent) / 0.22)" />
                  </pattern>
                  <clipPath id="africa-clip">
                    {/* Geographically faithful Africa silhouette */}
                    <path d="M205 38 C228 36 252 40 274 50 C292 58 304 70 312 86 C318 100 316 114 318 128 C320 142 326 152 332 164 C338 178 340 192 336 206 C332 220 322 232 316 246 C312 258 314 270 308 282 C302 296 290 308 278 320 C268 332 258 344 246 354 C234 362 220 366 206 364 C194 362 184 354 178 342 C170 326 168 308 160 294 C150 278 134 268 124 254 C114 240 110 224 106 208 C102 192 100 176 102 160 C104 142 110 126 116 110 C124 92 138 78 154 66 C170 54 188 44 205 38 Z" />
                  </clipPath>
                </defs>

                {/* concentric guide rings */}
                <g stroke="hsl(var(--brand-accent))" fill="none" strokeWidth="0.8">
                  <circle cx="200" cy="200" r="186" opacity="0.18" />
                  <circle cx="200" cy="200" r="150" opacity="0.22" strokeDasharray="2 6" />
                  <circle cx="200" cy="200" r="110" opacity="0.28" strokeDasharray="2 6" />
                  <circle cx="200" cy="200" r="70" opacity="0.32" strokeDasharray="2 6" />
                </g>

                {/* crosshair axes */}
                <g stroke="hsl(var(--brand-accent))" strokeWidth="0.6" opacity="0.35">
                  <line x1="200" y1="14" x2="200" y2="386" />
                  <line x1="14" y1="200" x2="386" y2="200" />
                </g>

                {/* continent: dotted fill clipped to outline */}
                <g clipPath="url(#africa-clip)">
                  <rect x="0" y="0" width="400" height="400" fill="url(#evogue-dots)" />
                </g>

                {/* continent outline */}
                <path
                  d="M205 38 C228 36 252 40 274 50 C292 58 304 70 312 86 C318 100 316 114 318 128 C320 142 326 152 332 164 C338 178 340 192 336 206 C332 220 322 232 316 246 C312 258 314 270 308 282 C302 296 290 308 278 320 C268 332 258 344 246 354 C234 362 220 366 206 364 C194 362 184 354 178 342 C170 326 168 308 160 294 C150 278 134 268 124 254 C114 240 110 224 106 208 C102 192 100 176 102 160 C104 142 110 126 116 110 C124 92 138 78 154 66 C170 54 188 44 205 38 Z"
                  stroke="hsl(var(--brand-accent))"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />

                {/* madagascar */}
                <path
                  d="M334 270 C342 274 346 286 344 298 C342 310 336 318 330 322 C326 318 326 304 328 292 C330 282 332 274 334 270 Z"
                  stroke="hsl(var(--brand-accent))"
                  strokeWidth="1.2"
                  fill="hsl(var(--brand-accent) / 0.08)"
                  strokeLinejoin="round"
                />

                {/* origin marker */}
                <g>
                  <circle cx="200" cy="220" r="14" fill="none" stroke="hsl(var(--brand-accent))" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="200" cy="220" r="6" fill="none" stroke="hsl(var(--brand-accent))" strokeWidth="1" />
                  <circle cx="200" cy="220" r="2.5" fill="hsl(var(--brand-accent))" />
                </g>

                {/* corner ticks */}
                <g stroke="hsl(var(--brand-accent))" strokeWidth="1" opacity="0.5">
                  <path d="M14 14 L14 30 M14 14 L30 14" />
                  <path d="M386 14 L386 30 M386 14 L370 14" />
                  <path d="M14 386 L14 370 M14 386 L30 386" />
                  <path d="M386 386 L386 370 M386 386 L370 386" />
                </g>

                {/* hairline label */}
                <text
                  x="200"
                  y="394"
                  textAnchor="middle"
                  fill="hsl(var(--brand-accent))"
                  opacity="0.6"
                  style={{ fontSize: 8, letterSpacing: 4, fontFamily: "ui-sans-serif, system-ui" }}
                >
                  ORIGIN · 00°00′
                </text>
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
              Think we're a good fit?
            </h2>
            <p className="mt-5 text-brand-secondary/90 max-w-xl mx-auto leading-relaxed">
              One conversation is usually enough to find out.
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
