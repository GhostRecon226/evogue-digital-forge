import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: CaseStudy;
  index?: number;
};

const CaseStudyCard = ({ study, index = 0 }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
      }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
    >
      <Link
        to={`/case-studies/${study.slug}`}
        aria-label={`View case study: ${study.name} — ${study.client}`}
        className="group block h-full bg-white border border-brand rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-brand-secondary focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-brand-secondary focus-visible:-translate-y-1 focus-visible:shadow-card"
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
            {study.tags.map((t) => (
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
              {study.name}
            </h3>
            <p className="mt-1 text-sm text-brand-secondary">{study.client}</p>
          </div>

          {/* Summary */}
          <p className="text-sm text-brand-primary/75 leading-relaxed line-clamp-2">
            {study.summary}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {study.metrics.map((m) => (
              <span
                key={m}
                className="inline-flex items-center rounded-full bg-brand-accent/10 text-brand-primary px-3 py-1 text-xs font-medium"
              >
                {m}
              </span>
            ))}
          </div>

          {/* CTA — visible on hover or keyboard focus */}
          <div
            aria-hidden="true"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
