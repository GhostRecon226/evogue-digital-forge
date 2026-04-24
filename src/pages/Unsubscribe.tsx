import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type Status = "loading" | "ready" | "already" | "invalid" | "submitting" | "done" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const validate = async () => {
      if (!token) {
        setStatus("invalid");
        return;
      }
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } },
        );
        const data = await res.json().catch(() => ({}));
        if (cancelled) return;
        if (res.ok && data.valid) setStatus("ready");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        if (!cancelled) setStatus("invalid");
      }
    };
    validate();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const confirm = async () => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON },
          body: JSON.stringify({ token }),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success || data.reason === "already_unsubscribed")) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Unsubscribe | Evogue Consulting"
        description="Manage your email preferences for Evogue Consulting."
        path="/unsubscribe"
      />
      <Nav />
      <main className="flex-1">
        <section className="bg-brand-surface dot-grid">
          <div className="container pt-40 md:pt-48 pb-20 md:pb-28">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-brand bg-white px-3 py-1 label-caps text-brand-primary">
                Email Preferences
              </span>
              <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-brand-primary leading-[1.1]">
                Unsubscribe from Evogue emails
              </h1>

              <div className="mt-8 bg-white border border-brand rounded-[6px] p-6 md:p-8">
                {status === "loading" && (
                  <p className="text-brand-secondary">Checking your link…</p>
                )}

                {status === "ready" && (
                  <>
                    <p className="text-brand-primary">
                      Click the button below to confirm you no longer want to receive
                      emails from Evogue Consulting.
                    </p>
                    <button
                      type="button"
                      onClick={confirm}
                      className="mt-6 inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-5 py-3 rounded-[4px] hover:bg-brand-secondary transition-colors"
                    >
                      Confirm Unsubscribe
                    </button>
                  </>
                )}

                {status === "submitting" && (
                  <p className="text-brand-secondary">Updating your preferences…</p>
                )}

                {status === "done" && (
                  <>
                    <p className="text-brand-primary font-semibold">You&rsquo;ve been unsubscribed.</p>
                    <p className="mt-2 text-brand-secondary">
                      You won&rsquo;t receive further emails from us at this address.
                    </p>
                    <Link
                      to="/"
                      className="mt-6 inline-flex items-center justify-center bg-white text-brand-primary border border-brand text-sm font-semibold px-5 py-3 rounded-[4px] hover:border-brand-secondary hover:text-brand-secondary transition-colors"
                    >
                      Back to Home
                    </Link>
                  </>
                )}

                {status === "already" && (
                  <p className="text-brand-primary">
                    This email address is already unsubscribed. No further action needed.
                  </p>
                )}

                {status === "invalid" && (
                  <p className="text-brand-primary">
                    This unsubscribe link is invalid or has expired. If you keep receiving
                    emails, please <Link to="/contact" className="underline">contact us</Link>.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-destructive">{errorMsg}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
