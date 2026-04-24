import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const SOURCE = "ai-readiness-checklist";
const DOWNLOAD_URL = "/downloads/evogue-ai-readiness-checklist.pdf";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  // Honeypot — bots fill this; humans don't see it
  company: z.string().max(0).optional().or(z.literal("")),
});

type Status = "idle" | "submitting" | "success" | "error";

const AiReadinessChecklistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const parsed = schema.safeParse({ name, email, company });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setFieldErrors({ name: flat.name?.[0], email: flat.email?.[0] });
      return;
    }

    // Silently drop bot submissions but show success
    if (parsed.data.company) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase
        .from("leads")
        .insert({ id, email: parsed.data.email, source: SOURCE });

      if (insertError) {
        console.error("Lead insert failed", insertError);
        throw new Error("We couldn't save your details. Please try again.");
      }

      // Fire-and-forget confirmation email — don't block download on email errors
      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "ai-readiness-checklist",
            recipientEmail: parsed.data.email,
            idempotencyKey: `ai-readiness-${id}`,
            templateData: { name: parsed.data.name },
          },
        })
        .catch((err) => console.warn("Confirmation email failed", err));

      setStatus("success");

      // Trigger download immediately
      const link = document.createElement("a");
      link.href = DOWNLOAD_URL;
      link.setAttribute("download", "evogue-ai-readiness-checklist.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-brand rounded-[6px] p-7">
        <div className="label-caps text-brand-accent">Download started</div>
        <h3 className="mt-3 text-2xl font-semibold text-brand-primary tracking-tight">
          Your checklist is on the way.
        </h3>
        <p className="mt-3 text-brand-secondary leading-relaxed">
          The PDF should download automatically. We&rsquo;ve also sent a confirmation
          email with the download link to <strong className="text-brand-primary">{email}</strong>.
        </p>
        <a
          href={DOWNLOAD_URL}
          download
          className="mt-6 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors"
        >
          Download Again
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-brand rounded-[6px] p-7" noValidate>
      <div className="label-caps text-brand-accent">Free Download</div>
      <h3 className="mt-3 text-2xl font-semibold text-brand-primary tracking-tight">
        AI Readiness Checklist
      </h3>
      <p className="mt-3 text-brand-secondary leading-relaxed">
        A practical 1-page assessment across data, team, governance, infrastructure and ROI.
        Enter your details and we&rsquo;ll send it straight to your inbox.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="ai-name" className="block text-sm font-medium text-brand-primary mb-1.5">
            Your name
          </label>
          <input
            id="ai-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
            autoComplete="name"
            className="w-full bg-white border border-brand rounded-[4px] px-3 py-2.5 text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none focus:border-brand-primary"
            placeholder="Sade Adekunle"
          />
          {fieldErrors.name && <p className="mt-1.5 text-sm text-destructive">{fieldErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="ai-email" className="block text-sm font-medium text-brand-primary mb-1.5">
            Work email
          </label>
          <input
            id="ai-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            required
            autoComplete="email"
            className="w-full bg-white border border-brand rounded-[4px] px-3 py-2.5 text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none focus:border-brand-primary"
            placeholder="you@company.com"
          />
          {fieldErrors.email && <p className="mt-1.5 text-sm text-destructive">{fieldErrors.email}</p>}
        </div>

        {/* Honeypot — hidden from real users */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
          <label htmlFor="ai-company">Company (leave blank)</label>
          <input
            id="ai-company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Get the Checklist"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">{errorMsg}</p>
      )}

      <p className="mt-4 text-xs text-brand-secondary/80">
        We&rsquo;ll email you the checklist and occasional notes from Evogue. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default AiReadinessChecklistForm;
