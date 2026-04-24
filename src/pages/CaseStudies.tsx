import Seo from "@/components/Seo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, filterCategories, type CaseStudy } from "@/data/caseStudies";
import caseStudiesHero from "@/assets/case-studies-hero.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CaseStudies = () => {
  const [active, setActive] = useState<(typeof filterCategories)[number]>("All");

  const visible: CaseStudy[] =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Case Studies | Evogue Consulting | Digital Products Built in Africa and Globally"
        description="Explore Evogue Consulting's project case studies. We have designed, built, and shipped digital products across fintech, e-commerce, logistics, SaaS, and more for clients in Africa and globally."
        path="/case-studies"
      />

      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-surface dot-grid">
          <div className="container pt-40 md:pt-48 pb-20 md:pb-28">
            <div className="grid gap-10 md:gap-12 md:grid-cols-12 items-center">
              <div className="md:col-span-7 animate-fade-in">
                <span className="inline-flex items-center rounded-full border border-brand bg-white px-3 py-1 label-caps text-brand-primary">
                  Case Studies
                </span>
                <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-brand-primary leading-[1.05]">
                  Work that speaks for itself.
                </h1>
                <p className="mt-5 text-lg md:text-xl text-brand-secondary max-w-2xl leading-relaxed">
                  A selection of projects Evogue Consulting has designed, built, and shipped. Real problems, real teams, real outcomes across Africa and global markets.
                </p>
                <p className="mt-5 text-base md:text-lg text-brand-secondary/85 max-w-2xl leading-relaxed">
                  Evogue Consulting has delivered digital products across multiple industries including fintech, e-commerce, logistics, SaaS, and the nonprofit sector. Our engagements span product design and engineering, brand identity, AI automation, strategy consulting, and team training.
                </p>
              </div>
              <div className="md:col-span-5 animate-fade-in order-first md:order-last">
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        tabIndex={0}
                        role="img"
                        aria-label="Abstract illustration of layered project cards symbolising a portfolio of shipped client work"
                        className="group relative mx-auto w-full max-w-[260px] sm:max-w-sm md:max-w-none aspect-[5/4] sm:aspect-[4/3] md:aspect-square overflow-hidden rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface cursor-default"
                      >
                        <img
                          src={caseStudiesHero}
                          alt=""
                          width={1024}
                          height={1024}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-contain object-center scale-[1.35] sm:scale-125 md:scale-100 select-none pointer-events-none transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.45] sm:group-hover:scale-[1.35] md:group-hover:scale-[1.07] group-focus-visible:scale-[1.45] sm:group-focus-visible:scale-[1.35] md:group-focus-visible:scale-[1.07]"
                          draggable={false}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs text-center">
                      Layered project cards — a glimpse of the work Evogue has shipped across fintech, e-commerce, logistics, SaaS, and more.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-background border-b border-brand">
          <div className="container py-6">
            <div className="flex gap-2.5 overflow-x-auto snap-x scrollbar-none -mx-2 px-2">
              {filterCategories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`shrink-0 snap-start inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-brand-primary text-white border border-brand-primary"
                        : "bg-white text-brand-primary border border-brand hover:border-brand-secondary hover:text-brand-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-background">
          <div className="container py-16 md:py-20">
            <motion.div layout className="grid gap-6 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.map((c, i) => (
                  <CaseStudyCard key={c.slug} study={c} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {visible.length === 0 && (
              <div className="text-center py-16 text-brand-secondary">
                No case studies in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background border-t border-brand">
          <div className="container py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
            <Reveal>
              <div className="label-caps text-brand-secondary mb-4">FAQ</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
                Common questions about our work.
              </h2>
              <p className="mt-4 text-brand-secondary/90 max-w-md leading-relaxed">
                A quick look at the kinds of projects we take on and how we run them.
              </p>
            </Reveal>
            <div className="divide-y divide-brand-border border-y border-brand-border">
              {[
                {
                  q: "What kind of projects has Evogue Consulting worked on?",
                  a: "Evogue has worked on fintech platforms, e-commerce tools, SaaS products, brand identity systems, AI automation workflows, and digital strategy engagements. Our clients range from early-stage startups to established enterprises across Africa and globally.",
                },
                {
                  q: "Has Evogue worked with African startups?",
                  a: "Yes. A significant portion of our work is with African startups and scaleups, particularly in West and East Africa. We also work with international clients who want to build products for African markets.",
                },
                {
                  q: "How long does a typical Evogue project take?",
                  a: "Project timelines vary by scope. A focused web build typically takes 6 to 8 weeks. A full product engagement from discovery through launch can run 3 to 6 months. We scope every project carefully before committing to timelines.",
                },
              ].map((f, i) => (
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

        {/* CTA Banner */}
        <section className="bg-brand-primary">
          <div className="container py-20 md:py-24 text-center">
            <Reveal>
              <div className="label-caps text-brand-accent">Start a Project</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
                Seen enough?
              </h2>
              <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
                Tell us about your project and we'll take it from there.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center bg-white text-brand-primary text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-accent hover:text-brand-primary transition-colors"
              >
                Start a Project
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
