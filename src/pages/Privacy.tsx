import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "Evogue Consulting (\"Evogue\", \"we\", \"us\", \"our\") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when interacting with our website and services.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Information you provide: When you contact us, request a proposal, book a discovery call, or sign up to our communications, we collect details such as your name, email address, phone number, company name, and the contents of your message.",
      "Information collected automatically: When you visit our website we may collect technical data such as your IP address, browser type, device information, referring URL, and pages viewed. We use this for security and to understand how our site is used.",
      "Cookies & similar technologies: We use a small number of cookies to keep the site working correctly and to measure traffic. You can control cookies through your browser settings.",
    ],
  },
  {
    title: "3. How we use your information",
    body: [
      "To respond to your enquiries and deliver the services you have requested.",
      "To send transactional communications related to a project or engagement.",
      "To send occasional updates about our work, only where you have opted in.",
      "To improve the website, our services, and our security posture.",
      "To comply with legal obligations.",
    ],
  },
  {
    title: "4. Legal bases for processing",
    body: [
      "Where applicable law (such as the Nigeria Data Protection Act and the EU GDPR) requires it, we process personal data on the basis of your consent, the performance of a contract with you, our legitimate interests in operating our business, or to comply with a legal obligation.",
    ],
  },
  {
    title: "5. Sharing your information",
    body: [
      "We do not sell your personal information. We share data only with trusted service providers that help us run our business — such as hosting, email, analytics, and scheduling tools — and only to the extent necessary. We may also disclose information where required by law.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "We keep personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we delete or anonymise it.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      "Subject to applicable law, you have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing. You may also withdraw consent at any time where processing is based on consent.",
      "To exercise any of these rights, please email Hello@evogueconsulting.com.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse. No method of transmission over the internet is 100% secure, but we work continuously to safeguard the data we hold.",
    ],
  },
  {
    title: "9. International transfers",
    body: [
      "Some of our service providers may be located outside Nigeria. Where personal data is transferred internationally, we take steps to ensure appropriate safeguards are in place.",
    ],
  },
  {
    title: "10. Children's privacy",
    body: [
      "Our website and services are not directed to children under 16, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "11. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The most current version will always be posted on this page, with the \"Last updated\" date reflecting the latest revision.",
    ],
  },
  {
    title: "12. Contact us",
    body: [
      "If you have questions or concerns about this policy or how we handle your information, contact us at Hello@evogueconsulting.com or +234 706 565 2820.",
    ],
  },
];

const Privacy = () => (
  <div className="min-h-screen bg-brand-bg text-brand-primary">
    <Helmet>
      <title>Privacy Policy | Evogue Consulting</title>
      <meta
        name="description"
        content="How Evogue Consulting collects, uses, and protects your personal information when you interact with our website and services."
      />
      <link rel="canonical" href="https://www.evogue.co/privacy" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Evogue Consulting" />
      <meta property="og:title" content="Privacy Policy | Evogue Consulting" />
      <meta
        property="og:description"
        content="How Evogue Consulting collects, uses, and protects your personal information when you interact with our website and services."
      />
      <meta property="og:url" content="https://www.evogue.co/privacy" />
      <meta property="og:image" content="https://www.evogue.co/og-image.jpg" />
      <meta property="og:image:alt" content="Evogue Consulting — Privacy Policy" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Privacy Policy | Evogue Consulting" />
      <meta
        name="twitter:description"
        content="How Evogue Consulting collects, uses, and protects your personal information when you interact with our website and services."
      />
      <meta name="twitter:image" content="https://www.evogue.co/og-image.jpg" />
    </Helmet>
    <Nav />

    <main className="pt-32 md:pt-40">
      <section className="container max-w-3xl">
        <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-primary/60 mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Privacy Policy</h1>
          <p className="mt-5 text-sm text-brand-primary/60">Last updated: 24 April 2026</p>
        </Reveal>
      </section>

      <section className="container max-w-3xl mt-14 md:mt-20 mb-24 space-y-12">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 30}>
            <article>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">{s.title}</h2>
              <div className="space-y-4 text-brand-primary/80 leading-relaxed">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </main>

    <Footer />
  </div>
);

export default Privacy;
