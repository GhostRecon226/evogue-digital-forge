import logoDark from "@/assets/evogue-logo.png";
import logoLight from "@/assets/evogue-logo-white.png";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  const sizeClasses = isLight ? "h-14 w-auto" : "h-16 md:h-20 lg:h-24 w-auto";
  return (
    <img
      src={isLight ? logoLight : logoDark}
      alt="Evogue Consulting"
      loading="eager"
      decoding="async"
      className={`${sizeClasses} ${className}`}
    />
  );
};

export default Logo;
