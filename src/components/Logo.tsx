type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const main = variant === "dark" ? "text-brand-primary" : "text-white";
  const sub = variant === "dark" ? "text-brand-secondary" : "text-brand-accent";
  const mark = variant === "dark" ? "hsl(var(--brand-primary))" : "hsl(var(--brand-accent))";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="8" stroke={mark} strokeWidth="1.5" />
        <path d="M10 11h14M10 17h10M10 23h14" stroke={mark} strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="17" r="2" fill={mark} />
      </svg>
      <div className="leading-none">
        <div className={`font-bold tracking-tight text-[1.05rem] ${main}`}>EVOGUE</div>
        <div className={`label-caps text-[0.55rem] mt-0.5 ${sub}`}>Consulting</div>
      </div>
    </div>
  );
};

export default Logo;
