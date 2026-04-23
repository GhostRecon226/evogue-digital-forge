import logoDark from "@/assets/evogue-logo.png";
import logoLight from "@/assets/evogue-logo-white.png";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  // Fluid sizing with clamp() so the logo scales smoothly between breakpoints
  // Dark (header): 56px → 96px. Light (footer): fixed 56px.
  const style = isLight
    ? { height: "56px", width: "auto" as const }
    : { height: "clamp(56px, 7vw, 96px)", width: "auto" as const };

  return (
    <img
      src={isLight ? logoLight : logoDark}
      alt="Evogue Consulting"
      loading="eager"
      decoding="async"
      style={style}
      className={`block max-h-full object-contain transition-[filter,opacity] duration-300 ease-out ${
        isLight ? "" : "hover:brightness-110"
      } ${className}`}
    />
  );
};

export default Logo;
