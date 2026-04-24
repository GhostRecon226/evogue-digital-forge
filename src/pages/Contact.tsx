import Seo from "@/components/Seo";
import { useState } from "react";
import { z } from "zod";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Mail, MapPin, Clock, Linkedin, Twitter, Instagram, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const helpOptions = [
  "Product Design and Engineering",
  "Strategy and Consulting",
  "AI Agents and Automation",
  "Training and Advisory",
  "Evogue Academy",
  "Something else",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 to $15,000",
  "$15,000 to $50,000",
  "$50,000 and above",
  "Not sure yet",
];

const faqs = [
  {
    q: "How do we get started?",
    a: "Fill out the form above or book a discovery call. We'll schedule a short conversation to understand your needs and propose a way forward.",
  },
  {
    q: "How do I hire Evogue Consulting?",
    a: "Fill out the contact form on our website or book a free 30-minute discovery call. We will get back to you within 24 hours on business days to discuss your project and propose a way forward.",
  },
  {
    q: "Does Evogue offer free consultations?",
    a: "Yes. We offer a free 30-minute discovery call for new clients. Use the booking link on our Contact page to schedule a call.",
  },
  {
    q: "What is Evogue Consulting's budget range?",
    a: "We work with a range of budgets depending on project scope. Our engagements start from $5,000 for focused builds and scale up for larger product engagements. Contact us to discuss your specific needs.",
  },
  {
    q: "What size projects do you take on?",
    a: "We work with early-stage startups, growing businesses, and established organisations. Project size varies. What matters most is that the problem is real and the team is ready to move.",
  },
  {
    q: "Do you work with clients outside Africa?",
    a: "Yes. We have clients across Africa, Europe, and beyond. We're remote-first and work across time zones without any issues.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A focused web build might take 6 to 8 weeks. A full product engagement can run 3 to 6 months. We scope every project carefully before committing to timelines.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes. Some clients work with us on an ongoing basis for product strategy, design, or engineering support. Ask us about this during your discovery call.",
  },
  {
    q: "What about the Academy?",
    a: "The Academy is a separate programme for individuals, not businesses. Visit www.evogueacademy.com for full details on programmes and enrollment.",
  },
];

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  helpWith: z.string().min(1, "Please select an option"),
  message: z.string().trim().min(1, "Please tell us about your project").max(2000),
  budget: z.string().min(1, "Please select a budget range"),
  source: z.string().trim().max(150).optional().or(z.literal("")),
});

const fieldClass =
  "w-full rounded-[4px] border border-brand bg-white px-3.5 py-2.5 text-sm text-brand-primary placeholder:text-brand-primary/40 transition-colors focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";

const labelClass = "block text-sm font-medium text-brand-primary mb-1.5";

const SelectField = ({
  id,
  name,
  options,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) => (
  <div className="relative">
    <select
      id={id}
      name={name}
      defaultValue=""
      required={required}
      className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
    <ChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary/60"
    />
  </div>
);

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast.error(first?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Placeholder submit — wire to backend later
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      form.reset();
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contact Evogue Consulting | Start a Project | Lagos, Nigeria</title>
        <meta
          name="description"
          content="Get in touch with Evogue Consulting to start a project. We are a product studio and consulting firm based in Lagos, Nigeria working with clients across Africa and globally."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Nav />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="bg-brand-surface dot-grid">
          <div className="container pt-40 md:pt-48 pb-20 md:pb-28">
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-brand bg-white px-3 py-1 label-caps text-brand-primary">
                Contact
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-brand-primary leading-[1.05]">
                Let's build something worth using.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-brand-secondary max-w-2xl leading-relaxed">
                Tell us about your project. We are based in Lagos, Nigeria and work with clients across Africa, Europe, and beyond. We respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Split Layout */}
        <section id="contact" className="bg-background">
          <div className="container py-20 md:py-28 grid gap-12 md:gap-16 md:grid-cols-5">
            {/* Form — 60% */}
            <Reveal className="md:col-span-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-primary">
                  Start a Project
                </h2>
                <form onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate>
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company or Organisation{" "}
                      <span className="text-brand-primary/50 font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      maxLength={150}
                      className={fieldClass}
                      placeholder="Where you work"
                    />
                  </div>

                  <div>
                    <label htmlFor="helpWith" className={labelClass}>
                      What do you need help with?
                    </label>
                    <SelectField
                      id="helpWith"
                      name="helpWith"
                      options={helpOptions}
                      placeholder="Select an option"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      maxLength={2000}
                      className={`${fieldClass} resize-y min-h-[120px]`}
                      placeholder="Goals, timeline, anything that helps us understand the work."
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget range
                    </label>
                    <SelectField
                      id="budget"
                      name="budget"
                      options={budgetOptions}
                      placeholder="Select a budget"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="source" className={labelClass}>
                      How did you hear about us?{" "}
                      <span className="text-brand-primary/50 font-normal">(optional)</span>
                    </label>
                    <input
                      id="source"
                      name="source"
                      type="text"
                      maxLength={150}
                      className={fieldClass}
                      placeholder="Referral, search, social…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 w-full inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-5 py-3.5 rounded-[4px] hover:bg-brand-secondary transition-colors disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                  <p className="text-xs text-brand-primary/55 text-center">
                    We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </Reveal>

            {/* Details — 40% */}
            <Reveal className="md:col-span-2" delay={0.15}>
              <div className="md:pl-4 lg:pl-8">
                <div className="label-caps text-brand-secondary">Get in touch</div>
                <p className="mt-4 text-sm md:text-base text-brand-secondary/90 leading-relaxed">
                  Evogue Consulting is headquartered in Lagos, Nigeria. We are a remote-first team and collaborate with clients across Africa, Europe, and global markets.
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@evogue.com.ng",
                      href: "mailto:hello@evogue.com.ng",
                    },
                    {
                      icon: MapPin,
                      label: "Based In",
                      value: "Lagos, Nigeria. Working globally.",
                    },
                    {
                      icon: Clock,
                      label: "Response Time",
                      value: "Within 24 hours on business days.",
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-surface border border-brand inline-flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="mt-0.5 inline-block text-brand-primary hover:text-brand-secondary transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <div className="mt-0.5 text-brand-primary">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-8 h-px bg-brand-border" />

                <div className="label-caps text-brand-secondary">Follow Us</div>
                <ul className="mt-4 space-y-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/evogueconsulting/" },
                    { icon: Twitter, label: "Twitter / X", href: "#" },
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/evogueconsult" },
                  ].map(({ icon: Icon, label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-3 text-brand-primary hover:text-brand-secondary transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="my-8 h-px bg-brand-border" />

                <div className="label-caps text-brand-secondary">Book a Call</div>
                <p className="mt-3 text-brand-primary/80 text-sm leading-relaxed">
                  Prefer to talk first? Book a free 30-minute discovery call.
                </p>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center border-2 border-brand-primary text-brand-primary text-sm font-semibold px-5 py-2.5 rounded-[4px] hover:bg-brand-primary hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section className="bg-brand-surface">
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="max-w-2xl">
                <div className="label-caps text-brand-secondary">Common Questions</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-brand-primary leading-tight">
                  Things people usually ask.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Accordion type="single" collapsible className="mt-10 max-w-3xl">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="border-b border-brand"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-brand-primary hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-secondary text-base leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* Section 4: CTA Banner */}
        <section className="bg-brand-primary">
          <div className="container py-20 md:py-24 text-center">
            <Reveal>
              <div className="label-caps text-brand-accent">Ready when you are</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
                No long forms. No long waits.
              </h2>
              <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
                Just tell us what you're building and we'll take it from there.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center bg-white text-brand-primary text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-accent hover:text-brand-primary transition-colors"
              >
                Start a Project
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
