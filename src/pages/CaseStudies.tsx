import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { caseStudies, filterCategories, type CaseStudy } from "@/data/caseStudies";

const CaseStudies = () => {
  const [active, setActive] = useState<(typeof filterCategories)[number]>("All");

  const visible: CaseStudy[] =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Case Studies | Evogue Consulting</title>
        <meta
          name="description"
          content="A selection of projects we've designed, built, and shipped. Real problems. Real outcomes."
        />
        <link rel="canonical" href="/case-studies" />
      </Helmet>

      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-surface dot-grid">
          <div className="container pt-40 md:pt-48 pb-20 md:pb-28">
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-brand bg-white px-3 py-1 label-caps text-brand-primary">
                Case Studies
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-brand-primary leading-[1.05]">
                Work that speaks for itself.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-brand-secondary max-w-2xl leading-relaxed">
                A selection of projects we've designed, built, and shipped. Real problems. Real outcomes.
              </p>
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
                  <motion.div
                    key={c.slug}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
                    }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  >
                    <Link
                      to={`/case-studies/${c.slug}`}
                      className="group block h-full bg-white border border-brand rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-brand-secondary"
                    >
                      {/* Thumbnail */}
                      <div
                        className="h-[200px] w-full"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-border)) 55%, hsl(var(--brand-accent) / 0.35) 100%)",
                        }}
                        aria-hidden="true"
                      />

                      <div className="p-6 md:p-7 flex flex-col gap-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center rounded-full bg-brand-surface text-brand-primary border border-brand px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Name + client */}
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-brand-primary leading-tight">
                            {c.name}
                          </h3>
                          <p className="mt-1 text-sm text-brand-secondary">{c.client}</p>
                        </div>

                        {/* Summary */}
                        <p className="text-sm text-brand-primary/75 leading-relaxed line-clamp-2">
                          {c.summary}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {c.metrics.map((m) => (
                            <span
                              key={m}
                              className="inline-flex items-center rounded-full bg-brand-accent/10 text-brand-primary px-3 py-1 text-xs font-medium"
                            >
                              {m}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
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

        {/* CTA Banner */}
        <section className="bg-brand-primary">
          <div className="container py-20 md:py-24 text-center">
            <Reveal>
              <div className="label-caps text-brand-accent">Start a Project</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
                Seen enough? Let's talk.
              </h2>
              <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
                Tell us what you're building and we'll take it from there.
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
