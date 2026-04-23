import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Academy", href: "/#academy" },
  { label: "Contact", href: "/#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/75 border-b border-brand-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" aria-label="Evogue Consulting home">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-primary/80 hover:text-brand-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-4 py-2.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
};

export default Nav;
