import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  end: number;
  suffix?: string;
  duration?: number;
};

const CountUp = ({ end, suffix = "", duration = 1600 }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

export default CountUp;
