import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const SOURCE = "ai-readiness-checklist";
const DOWNLOAD_URL = "/downloads/evogue-ai-readiness-checklist.pdf";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name so we can personalise it").max(100),
  email: z
    .string()
    .trim()
    .min(1, "We need an email to send your confirmation")
    .email("Hmm, that doesn't look like a valid email")
    .max(255),
  // Honeypot — bots fill this; humans don't see it
  company: z.string().max(0).optional().or(z.literal("")),
});

type Status = "idle" | "submitting" | "success" | "error";
type EmailStatus = "idle" | "sending" | "sent" | "failed";

const triggerDownload = () => {
  const link = document.createElement("a");
  link.href = DOWNLOAD_URL;
  link.setAttribute("download", "evogue-ai-readiness-checklist.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AiReadinessChecklistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [emailStatus, setEmailStatus] = useState<EmailStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});
  const [leadId, setLeadId] = useState<string | null>(null);

  const sendConfirmationEmail = async (id: string, toEmail: string, toName: string) => {
    setEmailStatus("sending");
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "ai-readiness-checklist",
          recipientEmail: toEmail,
          idempotencyKey: `ai-readiness-${id}`,
          templateData: { name: toName },
        },
      });
      if (error) throw error;
      setEmailStatus("sent");
    } catch (err) {
      console.warn("Confirmation email failed", err);
      setEmailStatus("failed");
    }
  };

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
        throw new Error(
          "We couldn't save your details just now. Please check your connection and try again."
        );
      }

      setLeadId(id);
      setStatus("success");

      // Trigger download immediately — don't make this dependent on email success
      triggerDownload();

      // Send confirmation email; surface failure in UI but don't block download
      sendConfirmationEmail(id, parsed.data.email, parsed.data.name);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong on our side. Please try again in a moment."
      );
    }
  };

  const handleRetryEmail = () => {
    if (!leadId) return;
    sendConfirmationEmail(leadId, email, name);
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-brand rounded-[6px] p-7">
        <div className="label-caps text-brand-accent">Download started</div>
        <h3 className="mt-3 text-2xl font-semibold text-brand-primary tracking-tight">
          Your checklist is on the way.
        </h3>

        <p className="mt-3 text-brand-secondary leading-relaxed">
          The PDF should download automatically.{" "}
          {emailStatus === "sending" && (
            <>We&rsquo;re also sending a confirmation email to{" "}
              <strong className="text-brand-primary">{email}</strong>&hellip;</>
          )}
          {emailStatus === "sent" && (
            <>We&rsquo;ve also sent a confirmation email with the download link to{" "}
              <strong className="text-brand-primary">{email}</strong>.</>
          )}
          {emailStatus === "failed" && (
            <>You can download it below anytime.</>
          )}
          {emailStatus === "idle" && (
            <>You can download it again below if needed.</>
          )}
        </p>

        {emailStatus === "failed" && (
          <div className="mt-4 rounded-[4px] border border-destructive/30 bg-destructive/5 p-4">
            <p className="text-sm text-brand-primary">
              We couldn&rsquo;t send the confirmation email to{" "}
              <strong>{email}</strong> just now. Your download still works — want us to try the email again?
            </p>
            <button
              type="button"
              onClick={handleRetryEmail}
              className="mt-3 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-4 py-2 rounded-[4px] hover:bg-brand-secondary transition-colors"
            >
              Resend confirmation email
            </button>
          </div>
        )}

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
            onChange={(e) => {
              setName(e.target.value);
              if (fieldErrors.name) setFieldErrors((f) => ({ ...f, name: undefined }));
            }}
            maxLength={100}
            required
            autoComplete="name"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "ai-name-error" : undefined}
            className={`w-full bg-white border rounded-[4px] px-3 py-2.5 text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none ${
              fieldErrors.name ? "border-destructive focus:border-destructive" : "border-brand focus:border-brand-primary"
            }`}
            placeholder="Sade Adekunle"
          />
          {fieldErrors.name && (
            <p id="ai-name-error" className="mt-1.5 text-sm text-destructive">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="ai-email" className="block text-sm font-medium text-brand-primary mb-1.5">
            Work email
          </label>
          <input
            id="ai-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors((f) => ({ ...f, email: undefined }));
            }}
            maxLength={255}
            required
            autoComplete="email"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "ai-email-error" : undefined}
            className={`w-full bg-white border rounded-[4px] px-3 py-2.5 text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none ${
              fieldErrors.email ? "border-destructive focus:border-destructive" : "border-brand focus:border-brand-primary"
            }`}
            placeholder="you@company.com"
          />
          {fieldErrors.email && (
            <p id="ai-email-error" className="mt-1.5 text-sm text-destructive">
              {fieldErrors.email}
            </p>
          )}
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
        {status === "submitting" ? "Sending…" : status === "error" ? "Try again" : "Get the Checklist"}
      </button>

      {status === "error" && (
        <div
          role="alert"
          className="mt-4 rounded-[4px] border border-destructive/30 bg-destructive/5 p-4"
        >
          <p className="text-sm text-brand-primary">{errorMsg}</p>
          <p className="mt-1 text-xs text-brand-secondary">
            If this keeps happening, email us directly and we&rsquo;ll send the checklist over.
          </p>
        </div>
      )}

      <p className="mt-4 text-xs text-brand-secondary/80">
        We&rsquo;ll email you the checklist and occasional notes from Evogue. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default AiReadinessChecklistForm;
