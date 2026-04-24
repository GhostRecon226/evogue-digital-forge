import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Academy", to: "/#academy" },
  { label: "Contact", to: "/contact" },
];

const supportLinks = [
  { label: "FAQ", to: "/#faq" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

// Matches the navbar's animated underline + opacity transition
const footerLinkClass =
  "group relative inline-flex text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors duration-200";

const underlineClass =
  "pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-brand-primary w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-5 group-hover:opacity-100";

const Footer = () => {
  return (
    <footer className="bg-[hsl(138_40%_92%)] text-brand-primary border-t-2 border-brand-primary/20">
      <div className="container pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Logo variant="dark" />
            <p className="mt-5 text-sm text-brand-primary/85 max-w-xs leading-relaxed">
              A product studio built on the continent, working with teams globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-brand-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={footerLinkClass}>
                    {l.label}
                    <span aria-hidden="true" className={underlineClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-brand-primary mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={footerLinkClass}>
                    {l.label}
                    <span aria-hidden="true" className={underlineClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-brand-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@evogueconsulting.com"
                  className="group relative inline-flex items-center gap-2.5 text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors duration-200"
                >
                  <Mail size={16} aria-hidden="true" />
                  <span className="relative">
                    hello@evogueconsulting.com
                    <span aria-hidden="true" className={underlineClass} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347065652820"
                  className="group relative inline-flex items-center gap-2.5 text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors duration-200"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span className="relative">
                    +234 706 565 2820
                    <span aria-hidden="true" className={underlineClass} />
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-brand-border/70">
          <p className="text-center text-xs text-brand-primary/75">
            © 2025 Evogue Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
