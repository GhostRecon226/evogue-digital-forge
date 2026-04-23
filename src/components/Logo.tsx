import logoSrc from "@/assets/evogue-logo.png";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  const sizeClasses = isLight ? "h-14 w-auto" : "h-10 md:h-11 w-auto";
  return (
    <img
      src={logoSrc}
      alt="Evogue Consulting"
      loading="eager"
      decoding="async"
      className={`${sizeClasses} ${isLight ? "brightness-0 invert" : ""} ${className}`}
    />
  );
};

export default Logo;
