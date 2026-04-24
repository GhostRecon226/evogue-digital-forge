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

        {/* Process */}
        <section className="bg-brand-surface">
          <div className="container py-20 md:py-28">
            <Reveal>
              <div className="label-caps text-brand-secondary mb-4">How we work</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl">
                A clear path from idea to production.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.06}>
                  <div className="h-full bg-white border border-brand rounded-[6px] p-7">
                    <div className="text-brand-accent label-caps">{p.step}</div>
                    <h3 className="mt-3 text-xl font-semibold text-brand-primary tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-brand-secondary/90 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
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
