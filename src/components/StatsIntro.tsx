import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text?: string;
};

/**
 * Animated intro line above stats rows.
 * Triggers a "tracking-in" letter-spacing reveal and a growing accent rule
 * only when scrolled into view.
 */
const StatsIntro = ({
  text = "We let the numbers do some of the talking.",
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="label-caps text-brand-secondary inline-block"
        initial={{ opacity: 0, letterSpacing: "-0.02em", filter: "blur(2px)" }}
        animate={
          inView
            ? { opacity: 1, letterSpacing: "0.18em", filter: "blur(0px)" }
            : {}
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.p>
      <motion.span
        aria-hidden="true"
        className="block mx-auto mt-3 h-[2px] w-12 bg-brand-accent rounded-full origin-center"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.7,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
};

export default StatsIntro;
