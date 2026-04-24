import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    title: "Working with us",
    items: [
      {
        q: "How do I hire Evogue Consulting?",
        a: "Fill out the contact form on our website or book a free 30-minute discovery call. We will get back to you within 24 hours on business days to discuss your project and propose a way forward.",
      },
      {
        q: "Does Evogue offer free consultations?",
        a: "Yes. We offer a free 30-minute discovery call for new clients. Use the booking link on our Contact page to schedule a call.",
      },
      {
        q: "What size projects do you take on?",
        a: "We work with early-stage startups, growing businesses, and established organisations. What matters most is that the problem is real and the team is ready to move.",
      },
      {
        q: "Do you work with clients outside Africa?",
        a: "Yes. We have clients across Africa, Europe, and beyond. We're remote-first and work across time zones without any issues.",
      },
    ],
  },
  {
    title: "Services & process",
    items: [
      {
        q: "What services do you offer?",
        a: "Product Design and Engineering, Strategy and Consulting, AI Agents and Automation, and Training and Advisory. We can take a product from idea to launch, or plug into an existing team.",
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
        q: "Who owns the work you produce?",
        a: "You do. On project completion and final payment, all design files, source code, and IP transfer to you in full.",
      },
    ],
  },
  {
    title: "Pricing & payments",
    items: [
      {
        q: "What is Evogue Consulting's budget range?",
        a: "We work with a range of budgets depending on project scope. Our engagements start from $5,000 for focused builds and scale up for larger product engagements. Contact us to discuss your specific needs.",
      },
      {
        q: "How do you structure payments?",
        a: "Most projects are split across milestones — typically a deposit to start, progress payments at key stages, and a final payment on delivery. We agree on the schedule in writing before kickoff.",
      },
      {
        q: "What currencies do you accept?",
        a: "We invoice in USD, EUR, GBP, or NGN depending on your location and preference.",
      },
    ],
  },
  {
    title: "Evogue Academy",
    items: [
      {
        q: "What about the Academy?",
        a: "The Academy is a separate programme for individuals, not businesses. Visit www.evogueacademy.com for full details on programmes and enrollment.",
      },
      {
        q: "Can my team take Academy courses?",
        a: "Yes. We offer team and corporate training packages. Reach out via the contact form and mention team training.",
      },
    ],
  },
];

const FAQ = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Helmet>
        <title>FAQ | Evogue Consulting</title>
        <meta
          name="description"
          content="Answers to common questions about working with Evogue Consulting — services, pricing, timelines, and process."
        />
        <link rel="canonical" href="https://www.evogue.co/faq" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Evogue Consulting" />
        <meta property="og:title" content="FAQ | Evogue Consulting" />
        <meta
          property="og:description"
          content="Answers to common questions about working with Evogue Consulting — services, pricing, timelines, and process."
        />
        <meta property="og:url" content="https://www.evogue.co/faq" />
        <meta property="og:image" content="https://www.evogue.co/og-image.jpg" />
        <meta property="og:image:alt" content="Evogue Consulting — FAQ" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Evogue Consulting" />
        <meta
          name="twitter:description"
          content="Answers to common questions about working with Evogue Consulting — services, pricing, timelines, and process."
        />
        <meta name="twitter:image" content="https://www.evogue.co/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Nav />

      <main className="pt-32 md:pt-40">
        <section className="container max-w-4xl">
          <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-primary/60 mb-4">
              Frequently asked questions
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Answers, before you ask.
            </h1>
            <p className="mt-6 text-lg text-brand-primary/75 max-w-2xl">
              If something isn't covered here, reach out — we usually reply within 24 hours.
            </p>
          </Reveal>
        </section>

        <section className="container max-w-4xl mt-16 md:mt-24 space-y-14">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 50}>
              <div>
                <h2 className="text-sm uppercase tracking-[0.18em] text-brand-primary/60 mb-4">
                  {group.title}
                </h2>
                <Accordion type="single" collapsible className="border-t border-brand-border/70">
                  {group.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${gi}-${i}`}
                      className="border-b border-brand-border/70"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium py-5 hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-primary/75 leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="container max-w-4xl mt-24 md:mt-32 mb-24">
          <Reveal>
            <div className="rounded-2xl border border-brand-border/70 bg-brand-surface/50 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Still have a question?</h2>
              <p className="mt-3 text-brand-primary/75 max-w-xl mx-auto">
                Tell us about your project and we'll get back to you within one business day.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-7 bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
