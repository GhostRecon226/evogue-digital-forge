import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

type NavProps = {
  /** When true, the nav starts transparent with white text/logo, then switches
   *  to the solid white state once the user scrolls past the hero. Use on
   *  pages with a dark hero (e.g. AI Services). */
  transparentOnDarkHero?: boolean;
};

type NavLink = { label: string; href: string; section?: string; external?: boolean };

const links: NavLink[] = [
  { label: "Home", href: "/#home", section: "home" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "AI Services", href: "/ai-services" },
  { label: "Academy ↗", href: "https://www.evogueacademy.com", external: true },
  { label: "Contact", href: "/contact" },
];

const Nav = ({ transparentOnDarkHero = false }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { pathname, hash } = useLocation();

  // Sticky glass state — threshold lowered to 80px so the dark-hero pages
  // swap to the solid state right after the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll-spy: only on the home page
  useEffect(() => {
    if (pathname !== "/") return;
    const sectionIds = links.map((l) => l.section).filter(Boolean) as string[];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      {
        // Account for sticky header; "active" when a section enters middle of viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: NavLink) => {
    if (link.href.startsWith("/") && !link.href.includes("#")) return pathname === link.href;
    if (pathname !== "/") return false;
    if (link.section) {
      if (hash === `#${link.section}`) return true;
      return activeSection === link.section;
    }
    return false;
  };

  const headerClass = `fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
    scrolled
      ? "bg-white/70 backdrop-blur-xl border-b border-brand-border/80 shadow-[0_1px_0_0_hsl(var(--brand-border)/0.4)]"
      : "bg-white/0 backdrop-blur-0 border-b border-transparent"
  }`;

  return (
    <header className={headerClass}>
      <div className="container flex items-center gap-4 sm:gap-6 py-3 md:py-4 min-h-[88px] md:min-h-[112px] leading-none">
        <Link
          to="/"
          aria-label="Evogue Consulting home"
          onClick={() => setOpen(false)}
          className="inline-flex items-center shrink-0 py-1"
        >
          <Logo />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto" aria-label="Primary">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active ? "text-brand-primary" : "text-brand-primary/70 hover:text-brand-primary"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-1.5 left-0 right-0 mx-auto h-[2px] rounded-full bg-brand-primary transition-all duration-300 ease-out ${
                    active ? "w-5 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex ml-4 lg:ml-6 items-center justify-center bg-brand-primary text-white text-sm font-semibold px-4 lg:px-5 py-2.5 rounded-[4px] hover:bg-brand-secondary transition-colors"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-[6px] text-brand-primary hover:bg-brand-surface transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t ${
          open
            ? "max-h-[80vh] opacity-100 border-brand-border/80 bg-white/85 backdrop-blur-xl"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="container py-4 flex flex-col" aria-label="Mobile">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between py-3 border-b border-brand-border/60 last:border-b-0 text-base font-medium transition-colors ${
                  active ? "text-brand-primary" : "text-brand-primary/80 hover:text-brand-primary"
                }`}
              >
                <span>{l.label}</span>
                {active && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
