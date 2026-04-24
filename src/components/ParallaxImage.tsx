import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxImageProps = {
  children: ReactNode;
  /** Maximum vertical travel in pixels. Kept small so the parent's overflow-hidden absorbs it. */
  distance?: number;
  className?: string;
};

/**
 * Subtle scroll-driven parallax for an image.
 * Wrap the moving element (e.g. an absolutely-positioned <img>).
 * Parent should have `overflow-hidden` to guarantee no layout overflow.
 * Disabled automatically when the user prefers reduced motion.
 */
const ParallaxImage = ({
  children,
  distance = 24,
  className = "",
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [distance, -distance]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxImage;
