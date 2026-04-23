import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm text-brand-accent/90 max-w-xs leading-relaxed">
            A product studio built on the continent, working with teams globally.
          </p>
        </div>
        <div>
          <div className="label-caps text-brand-accent mb-4">Pages</div>
          <ul className="space-y-2.5 text-sm text-white/85">
            {["Home", "About", "Case Studies", "Academy", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-caps text-brand-accent mb-4">Connect</div>
          <ul className="space-y-2.5 text-sm text-white/85">
            {["LinkedIn", "Twitter / X", "Instagram"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-brand-strip">
        <div className="container py-5 text-center text-xs text-white/70">
          © 2025 Evogue Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
