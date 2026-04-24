import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

const sections = [
  {
    title: "1. Agreement to terms",
    body: [
      "These Terms & Conditions (\"Terms\") govern your access to and use of the website operated by Evogue Consulting (\"Evogue\", \"we\", \"us\", \"our\") and any services provided through it. By using this website or engaging our services, you agree to be bound by these Terms.",
      "If you do not agree with any part of these Terms, please do not use this website.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Evogue Consulting is a product studio and consulting firm offering Product Design and Engineering, Strategy and Consulting, AI Agents and Automation, and Training and Advisory services.",
      "Specific deliverables, timelines, and fees for any engagement are governed by a separate Statement of Work, proposal, or service agreement signed by both parties. In the event of a conflict between these Terms and a signed agreement, the signed agreement prevails.",
    ],
  },
  {
    title: "3. Use of the website",
    body: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of, this website by any third party.",
      "You may not attempt to gain unauthorised access to any part of the website, the servers it runs on, or any database connected to it.",
    ],
  },
  {
    title: "4. Intellectual property",
    body: [
      "All content on this website — including text, graphics, logos, icons, images, and software — is the property of Evogue Consulting or its licensors and is protected by applicable intellectual property laws.",
      "Project deliverables produced under a paid engagement transfer to the client upon final payment, as set out in the relevant agreement. Pre-existing tools, frameworks, and methodologies developed by Evogue remain our property.",
    ],
  },
  {
    title: "5. Payments",
    body: [
      "Fees, payment schedules, and accepted currencies are defined in the project agreement. Invoices are due within the period specified on the invoice. Late payments may incur interest and may result in a pause of work.",
    ],
  },
  {
    title: "6. Confidentiality",
    body: [
      "We treat client information shared during an engagement as confidential and only use it for the purposes of delivering the agreed services. We are happy to sign a mutual NDA prior to detailed discussions where required.",
    ],
  },
  {
    title: "7. Third-party links and tools",
    body: [
      "This website and our services may reference or integrate third-party products and tools. We are not responsible for the content, policies, or practices of third parties.",
    ],
  },
  {
    title: "8. Disclaimer & limitation of liability",
    body: [
      "This website and its content are provided on an \"as is\" basis without warranties of any kind, express or implied. To the fullest extent permitted by law, Evogue Consulting shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.",
    ],
  },
  {
    title: "9. Governing law",
    body: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising in connection with these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria, unless otherwise agreed in writing.",
    ],
  },
  {
    title: "10. Changes to these Terms",
    body: [
      "We may update these Terms from time to time. The current version will always be available on this page, with the \"Last updated\" date reflecting the most recent change.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      "Questions about these Terms can be sent to hello@evogue.com.ng.",
    ],
  },
];

const Terms = () => (
  <div className="min-h-screen bg-brand-bg text-brand-primary">
    <Helmet>
      <title>Terms & Conditions | Evogue Consulting</title>
      <meta
        name="description"
        content="The terms and conditions governing the use of the Evogue Consulting website and our services."
      />
      <link rel="canonical" href="https://www.evogue.co/terms" />
    </Helmet>
    <Nav />

    <main className="pt-32 md:pt-40">
      <section className="container max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-primary/60 mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Terms &amp; Conditions
          </h1>
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

export default Terms;
