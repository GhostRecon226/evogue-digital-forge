import { useEffect, useState } from "react";

interface HeroCarouselProps {
  images: string[];
  alt?: string;
  intervalMs?: number;
}

const HeroCarousel = ({
  images,
  alt = "Evogue Consulting team member",
  intervalMs = 5000,
}: HeroCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, images.length, intervalMs]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex gap-2 -rotate-0"
          role="tablist"
          aria-label="Hero image carousel"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-brand-primary"
                  : "w-1.5 bg-brand-primary/30 hover:bg-brand-primary/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
