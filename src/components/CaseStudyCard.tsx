import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: CaseStudy;
  index?: number;
};

const CaseStudyCard = ({ study, index = 0 }: Props) => {
  const headingId = `case-${study.slug}-title`;
  const clientId = `case-${study.slug}-client`;
  const tagsId = `case-${study.slug}-tags`;
  const metricsId = `case-${study.slug}-metrics`;
  const href = `/case-studies/${study.slug}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
      }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      aria-labelledby={headingId}
      aria-describedby={`${clientId} ${tagsId} ${metricsId}`}
      className="group relative h-full bg-white border border-brand rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-brand-secondary focus-within:-translate-y-1 focus-within:shadow-card focus-within:border-brand-secondary"
    >
      {/* Decorative thumbnail */}
      <div
        role="presentation"
        aria-hidden="true"
        className="h-[200px] w-full"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand-surface)) 0%, hsl(var(--brand-border)) 55%, hsl(var(--brand-accent) / 0.35) 100%)",
        }}
      />

      <div className="p-6 md:p-7 flex flex-col gap-4">
        {/* Tags */}
        <ul
          id={tagsId}
          aria-label={`Categories for ${study.name}`}
          className="flex flex-wrap gap-1.5 list-none p-0 m-0"
        >
          {study.tags.map((t) => (
            <li
              key={t}
              className="inline-flex items-center rounded-full bg-brand-surface text-brand-primary border border-brand px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em]"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Name + client */}
        <header>
          <h3
            id={headingId}
            className="text-xl md:text-2xl font-semibold text-brand-primary leading-tight"
          >
            {study.name}
          </h3>
          <p id={clientId} className="mt-1 text-sm text-brand-secondary">
            <span className="sr-only">Client: </span>
            {study.client}
          </p>
        </header>

        {/* Summary */}
        <p className="text-sm text-brand-primary/75 leading-relaxed line-clamp-2">
          {study.summary}
        </p>

        {/* Metrics */}
        <ul
          id={metricsId}
          aria-label={`Key outcomes for ${study.name}`}
          className="flex flex-wrap gap-1.5 pt-1 list-none p-0 m-0"
        >
          {study.metrics.map((m) => (
            <li
              key={m}
              className="inline-flex items-center rounded-full bg-brand-accent/10 text-brand-primary px-3 py-1 text-xs font-medium"
            >
              {m}
            </li>
          ))}
        </ul>

        {/*
          Single focusable, link-styled target. The whole card lifts on hover
          and on keyboard focus (via focus-within on the article), but the
          actual click/focus target is this clearly-styled link — giving
          keyboard users one obvious destination instead of a phantom card
          link with no visible focus indicator on its text.
        */}
        <Link
          to={href}
          aria-label={`View case study: ${study.name} — ${study.client}`}
          className="mt-2 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary rounded-[4px] px-1.5 py-0.5 -mx-1.5 underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-secondary hover:decoration-brand-secondary focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;
