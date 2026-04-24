import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AiReadinessChecklistForm from "@/components/AiReadinessChecklistForm";

const capabilities = [
  {
    title: "AI Agents",
    description:
      "Custom agents that handle real workflows: customer support, internal operations, research, and lead qualification. Built to plug into the tools your team already uses.",
  },
  {
    title: "Workflow Automation",
    description:
      "Replace repetitive, manual tasks with reliable automated pipelines. From document processing to data sync across systems, we design automations that actually run in production.",
  },
  {
    title: "AI Integrations",
    description:
      "We embed AI into your existing products and stack — CRMs, dashboards, internal tools, and customer-facing apps — so the intelligence lives where your team already works.",
  },
  {
    title: "Custom Models and RAG",
    description:
      "Retrieval-augmented systems and tuned models grounded in your own data. Your team gets answers from your documents, policies, and history, not a generic chatbot.",
  },
  {
    title: "AI Strategy and Advisory",
    description:
      "Where to start, what to build, what to avoid. We help leadership teams pick the AI investments that move real numbers — not the ones that just look good in a deck.",
  },
  {
    title: "Training and Enablement",
    description:
      "Hands-on training for your team so AI adoption sticks. Practical workshops on prompting, tool building, and integrating AI into day-to-day work.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map your workflows, data, and goals. We identify the highest-leverage places where AI changes the math — and the places where it does not.",
  },
  {
    step: "02",
    title: "Design",
    body: "We define the agent, automation, or integration in detail: inputs, outputs, edge cases, guardrails, and how humans stay in the loop.",
  },
  {
    step: "03",
    title: "Build",
    body: "We engineer, test, and deploy. Real systems that run in production, monitored and measurable, not demos that fall apart on day two.",
  },
  {
    step: "04",
    title: "Iterate",
    body: "We track performance, refine prompts and models, and expand scope as your team builds confidence. AI that gets better the longer it runs.",
  },
];

const AiServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="AI Services | AI Agents, Automation and Integrations | Evogue Consulting"
        description="Evogue Consulting designs and builds AI agents, automations, and integrations for ambitious teams. Practical AI engineering, strategy, and enablement for businesses across Africa and globally."
        path="/ai-services"
      />

      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#0D3D25" }}
        >
          {/* Animated dot grid background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 196, 122, 0.55) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              animation: "dotDrift 18s linear infinite",
            }}
          />
          {/* Soft vignette to fade dots toward edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(13, 61, 37, 0.55) 70%, rgba(13, 61, 37, 0.9) 100%)",
            }}
          />

          <div className="relative container pt-40 md:pt-48 pb-20 md:pb-28">
            <div className="max-w-3xl animate-fade-in">
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 label-caps"
                style={{
                  color: "#00C47A",
                  borderColor: "rgba(0, 196, 122, 0.35)",
                  backgroundColor: "rgba(0, 196, 122, 0.08)",
                }}
              >
                AI Services
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                AI that works for your business. Not just around it.
              </h1>
              <p
                className="mt-5 text-lg md:text-xl max-w-2xl leading-relaxed"
                style={{ color: "#B8E5CC" }}
              >
                Most businesses are sitting on hours of work that AI can handle right now. We find those hours, build the solution, and deploy it. You keep the humans for the work that actually needs them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
                  style={{ color: "#0D3D25" }}
                >
                  Start a Project
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center bg-transparent text-white border border-white/70 text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-white/10 hover:border-white transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes dotDrift {
              0% { background-position: 0 0; }
              100% { background-position: 22px 22px; }
            }
          `}</style>
        </section>

        {/* What We Build */}
        <section className="bg-white">
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="label-caps text-brand-accent mb-4">What We Build</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl">
                Three ways we bring AI into your business.
              </h2>
              <p className="mt-5 text-lg text-brand-secondary/90 max-w-2xl leading-relaxed">
                We start with your operations. Not a product catalogue.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Custom AI Agents",
                  body: "Your own AI, trained on your business, your tone, and your workflows. It handles customer queries, internal requests, and routine tasks around the clock. It sounds like you. It works like you. It never calls in sick.",
                },
                {
                  title: "Workflow Automation",
                  body: "Every business has a graveyard of manual tasks that eat hours and produce errors. We find them, map them, and replace them with automations that run quietly in the background while your team focuses on work that actually requires a human.",
                },
                {
                  title: "AI Strategy and Advisory",
                  body: "Most companies waste their first AI budget on the wrong problem. We help you find the right one. One focused session can save you months of expensive guesswork and point you toward the opportunities your competitors haven't found yet.",
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 0.06}>
                  <article
                    className="group h-full bg-white rounded-[8px] p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,196,122,0.25)]"
                    style={{ borderColor: "#d0e8da" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f3faf5";
                      e.currentTarget.style.borderColor = "#00C47A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#d0e8da";
                    }}
                  >
                    <h3 className="text-xl font-semibold text-brand-primary tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-brand-secondary/90 leading-relaxed">
                      {card.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI Digital Workers */}
        <section style={{ backgroundColor: "#f7fdf9" }}>
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="label-caps text-brand-accent mb-4">AI Digital Workers</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl">
                Hire AI. Not headcount.
              </h2>
              <p className="mt-5 text-lg text-brand-secondary/90 max-w-3xl leading-relaxed">
                These aren&rsquo;t tools you buy and figure out yourself. These are deployable AI workers with defined roles, measurable outputs, and zero onboarding time. You tell us which role you need filled. We deploy it in weeks.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "SDR Agent", category: "Sales", body: "Books meetings while you sleep. Handles outreach, qualifies leads, updates your CRM, and follows up without you lifting a finger." },
                { title: "Receptionist Agent", category: "Operations", body: "Your front desk, always on. Answers inbound enquiries, qualifies leads, and books appointments at 2am if needed." },
                { title: "Customer Success Agent", category: "Customer Success", body: "Monitors every client relationship in your portfolio. Spots churn before it happens and escalates to your team before it's too late." },
                { title: "Content and Social Agent", category: "Marketing", body: "Keeps your brand presence consistent without consuming your week. Generates, schedules, and publishes content across your platforms automatically." },
                { title: "AR and Collections Agent", category: "Finance", body: "Chases invoices so your team doesn't have to. Consistent, firm, and entirely without awkwardness." },
                { title: "Onboarding Agent", category: "Operations", body: "Turns a chaotic first week into a smooth, guided experience. Every new client gets the same high-quality onboarding, every time." },
              ].map((worker, i) => (
                <Reveal key={worker.title} delay={i * 0.05}>
                  <article
                    className="h-full bg-white rounded-[8px] p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,196,122,0.25)]"
                    style={{ borderColor: "#d0e8da" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00C47A"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#d0e8da"; }}
                  >
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase"
                      style={{ color: "#00C47A", backgroundColor: "rgba(0, 196, 122, 0.10)", border: "1px solid rgba(0, 196, 122, 0.25)" }}
                    >
                      {worker.category}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-brand-primary tracking-tight">{worker.title}</h3>
                    <p className="mt-3 text-brand-secondary/90 leading-relaxed">{worker.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Cost comparison strip */}
          <div style={{ backgroundColor: "#0D3D25" }}>
            <div className="container py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <p className="text-white text-base md:text-lg leading-relaxed md:flex-1">
                A full-time employee costs $55,000 to $85,000 a year. An AI Digital Worker costs a fraction of that and never takes a day off.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:opacity-90 transition-opacity self-start md:self-auto whitespace-nowrap"
                style={{ color: "#0D3D25" }}
              >
                See Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-background border-b border-brand">
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="label-caps text-brand-secondary mb-4">What we do</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl">
                Capabilities, end to end.
              </h2>
              <p className="mt-5 text-brand-secondary/90 max-w-2xl leading-relaxed">
                From a single automation to a full AI roadmap. We work with founders, operators, and enterprise teams who want AI that actually moves the needle.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05}>
                  <article className="h-full bg-white border border-brand rounded-[6px] p-7 hover:border-brand-secondary transition-colors">
                    <h3 className="text-xl font-semibold text-brand-primary tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-brand-secondary/90 leading-relaxed">
                      {c.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-white scroll-mt-24">
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="label-caps text-brand-accent mb-4">How It Works</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl">
                From first conversation to live deployment.
              </h2>
              <p className="mt-5 text-lg text-brand-secondary/90 max-w-2xl leading-relaxed">
                Four steps. No surprises.
              </p>
            </Reveal>

            <div className="mt-16 relative">
              {/* Connecting line (desktop) */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-7 left-0 right-0 h-px"
                style={{ backgroundColor: "#d0e8da" }}
              />

              <ol className="grid gap-10 lg:gap-6 lg:grid-cols-4 relative">
                {[
                  { n: "1", title: "Discover", body: "We get into your business. We understand your team, your bottlenecks, and where AI can move the needle fastest." },
                  { n: "2", title: "Design", body: "We map the solution in plain language before we write a single line of code. You approve the plan. Then we build." },
                  { n: "3", title: "Build", body: "We build, train, and test against real scenarios from your business. Not hypothetical ones." },
                  { n: "4", title: "Deploy", body: "We go live, hand over the keys, and stay close. If something needs improving, we improve it." },
                ].map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.12}>
                    <li className="relative flex flex-col items-start lg:items-center lg:text-center">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-full text-white text-lg font-semibold shadow-[0_6px_18px_-6px_rgba(13,61,37,0.45)]"
                        style={{ backgroundColor: "#0D3D25" }}
                      >
                        {step.n}
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-brand-primary tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-brand-secondary/90 leading-relaxed lg:px-2">
                        {step.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-background border-y border-brand">
          <div className="container py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
            <Reveal>
              <div className="label-caps text-brand-secondary mb-4">Who we work with</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
                Built for teams ready to operate differently.
              </h2>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  t: "Founders and startups",
                  d: "Use AI to do more with a smaller team. Customer support, lead qualification, content operations, internal tooling — all running without adding headcount.",
                },
                {
                  t: "Scaling operators",
                  d: "Replace fragile spreadsheets and manual handoffs with automations that scale. Free your team to focus on the work only humans can do.",
                },
                {
                  t: "Enterprise and established teams",
                  d: "Pilot, prove, and roll out AI inside an existing organization. Strategy, governance, and the engineering to back it up.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 0.06}>
                  <div className="border-l-2 border-brand-accent pl-6 py-1">
                    <h3 className="text-lg md:text-xl font-semibold text-brand-primary">{item.t}</h3>
                    <p className="mt-2 text-brand-secondary/90 leading-relaxed">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand-primary">
          <div className="container py-20 md:py-24 text-center">
            <Reveal>
              <div className="label-caps text-brand-accent">Start a Project</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
                Have an AI idea? Let's pressure-test it.
              </h2>
              <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
                Tell us what you're trying to solve. We'll tell you honestly whether AI is the right tool — and if so, what to build.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center bg-white text-brand-primary text-sm font-semibold px-6 py-3.5 rounded-[4px] hover:bg-brand-accent hover:text-brand-primary transition-colors"
              >
                Start a Project
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiServices;
