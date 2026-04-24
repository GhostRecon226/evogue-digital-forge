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
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[15px] font-medium tracking-tight text-brand-primary/85 hover:text-brand-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary mb-5">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[15px] font-medium tracking-tight text-brand-primary/85 hover:text-brand-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@evogueconsulting.com"
                  className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-brand-primary/85 hover:text-brand-primary transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  hello@evogueconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347065652820"
                  className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-brand-primary/85 hover:text-brand-primary transition-colors"
                >
                  <Phone size={16} aria-hidden="true" />
                  +234 706 565 2820
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-brand-primary/85 hover:text-brand-accent transition-colors"
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
