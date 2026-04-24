import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = caseStudies.findIndex((c) => c.slug === slug);
  const study = index >= 0 ? caseStudies[index] : undefined;
  const next = study ? caseStudies[(index + 1) % caseStudies.length] : undefined;

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Helmet>
          <title>Case Study Not Found | Evogue Consulting</title>
        </Helmet>
        <Nav />
        <main className="flex-1 flex items-center justify-center">
          <div className="container py-32 text-center">
            <h1 className="text-3xl font-semibold text-brand-primary">Case study not found.</h1>
            <Link
              to="/case-studies"
              className="mt-6 inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{study.seo.title}</title>
        <meta name="description" content={study.seo.description} />
        <link rel="canonical" href={`/case-studies/${study.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={study.seo.title} />
        <meta property="og:description" content={study.seo.description} />
        <meta property="og:url" content={`/case-studies/${study.slug}`} />
        <meta property="og:image" content={study.seo.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${study.name} — ${study.client}`} />
        <meta property="article:section" content={study.categories[0]} />
        {study.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={study.seo.title} />
        <meta name="twitter:description" content={study.seo.description} />
        <meta name="twitter:image" content={study.seo.ogImage} />
        <meta name="twitter:image:alt" content={`${study.name} — ${study.client}`} />
      </Helmet>

      <Nav />

      <main className="flex-1">
        <section className="bg-background">
          <div className="container pt-32 md:pt-40 pb-12 md:pb-16">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <Reveal className="mt-10">
              <div className="flex flex-wrap gap-1.5">
                {(study.detailTags ?? study.tags).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-brand-surface text-brand-primary border border-brand px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-brand-primary leading-[1.05]">
                {study.name}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-brand-secondary max-w-3xl leading-relaxed">
                {study.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center rounded-full bg-brand-accent/10 text-brand-primary px-3.5 py-1.5 text-sm font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Hero image */}
            <Reveal delay={0.1} className="mt-10">
              <div className="relative w-full h-[320px] md:h-[460px] rounded-[12px] overflow-hidden border border-brand bg-brand-surface">
                {study.thumbnail ? (
                  <img
                    src={study.thumbnail}
                    alt={study.thumbnailAlt ?? `${study.name} — ${study.client}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center px-6 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-border)) 55%, hsl(var(--brand-accent) / 0.35) 100%)",
                    }}
                    aria-hidden="true"
                  >
                    <span className="text-2xl md:text-3xl font-semibold text-brand-primary tracking-tight">
                      {study.name}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="bg-background">
          <div className="container pb-20 md:pb-28 grid gap-12 lg:gap-16 lg:grid-cols-3">
            {/* Left */}
            <div className="lg:col-span-2 space-y-12">
              {[
                { label: "The Problem", body: study.problem },
                { label: "Our Approach", body: study.approach },
                { label: "The Outcome", body: study.outcome },
              ].map((block) => (
                <Reveal key={block.label}>
                  <div className="label-caps text-brand-secondary">{block.label}</div>
                  <div className="mt-4 space-y-4">
                    {block.body.map((p, i) => (
                      <p key={i} className="text-base md:text-lg text-brand-primary/85 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}

              {study.testimonial && (
                <Reveal>
                  <figure className="border-l-4 border-brand-accent bg-brand-surface rounded-r-[10px] p-6 md:p-8">
                    <blockquote className="text-lg md:text-xl text-brand-primary leading-relaxed italic">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 text-sm font-semibold text-brand-secondary">
                      — {study.testimonial.name}
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </div>

            {/* Right sticky */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="bg-white border border-brand rounded-[10px] p-6">
                  <div className="label-caps text-brand-secondary">Project Details</div>
                  <dl className="mt-5 space-y-4">
                    {[
                      { k: "Client", v: study.details.client },
                      { k: "Industry", v: study.details.industry },
                      { k: "Services", v: study.details.services },
                      study.details.duration ? { k: "Duration", v: study.details.duration } : null,
                      study.details.year ? { k: "Year", v: study.details.year } : null,
                      study.details.location ? { k: "Location", v: study.details.location } : null,
                      study.details.website
                        ? {
                            k: "Website",
                            v: (
                              <a
                                href={`https://${study.details.website.replace(/^https?:\/\//, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-secondary hover:decoration-brand-secondary break-all"
                              >
                                {study.details.website}
                              </a>
                            ),
                          }
                        : null,
                    ]
                      .filter((row) => row !== null)
                      .map((row) => (
                        <div key={row.k} className="flex flex-col">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60">
                            {row.k}
                          </dt>
                          <dd className="mt-1 text-sm text-brand-primary">{row.v}</dd>
                        </div>
                      ))}
                  </dl>
                </div>

                <div className="bg-brand-surface border border-brand rounded-[10px] p-6">
                  <h3 className="text-lg font-semibold text-brand-primary">
                    Have a similar project?
                  </h3>
                  <p className="mt-2 text-sm text-brand-secondary">
                    Tell us what you're building. We'll get back within 24 hours.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center justify-center w-full bg-brand-primary text-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Next case study */}
        {next && (
          <section className="bg-background border-t border-brand">
            <div className="container py-10 flex justify-end">
              <Link
                to={`/case-studies/${next.slug}`}
                className="group inline-flex items-center gap-2 text-base font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
              >
                Next Case Study: {next.name}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        )}

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

export default CaseStudyDetail;
