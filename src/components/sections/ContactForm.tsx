"use client";

import { useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiArrowLeft, FiCheck } from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";
import type { Intent } from "@/lib/i18n";

const INTENTS: { value: Intent; emoji: string }[] = [
  { value: "project", emoji: "" },
  { value: "job", emoji: "" },
  { value: "hello", emoji: "" },
];

const TOTAL_STEPS = 4;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { lang, t } = useLanguage();
  const f = t.form;

  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState<Intent | null>(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const startedAt = useRef<number>(0);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  // startedAt is stamped on mount (client only) for the min-time spam check.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Auto-focus the active field whenever the step changes.
  useEffect(() => {
    if (step > 1) inputRef.current?.focus();
  }, [step]);

  const goBack = () => {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const validateMessage = () =>
    message.trim().length >= 10 && message.trim().length <= 2000;
  const validateName = () =>
    name.trim().length >= 2 && name.trim().length <= 100;
  const validateEmail = () => EMAIL_RE.test(email.trim());

  const next = () => {
    setError(null);
    if (step === 2 && !validateMessage()) return setError(f.errors.message);
    if (step === 3 && !validateName()) return setError(f.errors.name);
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const pickIntent = (value: Intent) => {
    setIntent(value);
    setError(null);
    setStep(2);
  };

  const submit = async () => {
    setError(null);
    if (!validateEmail()) return setError(f.errors.email);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          message: message.trim(),
          name: name.trim(),
          email: email.trim(),
          lang,
          honeypot,
          startedAt: startedAt.current,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStep(1);
    setIntent(null);
    setMessage("");
    setName("");
    setEmail("");
    setError(null);
    setStatus("idle");
    startedAt.current = Date.now();
  };

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-130 flex-col items-center gap-3 py-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success-500 text-white">
          <FiCheck size={24} />
        </span>
        <h3 className="font-heading text-[22px] font-bold">{f.successTitle}</h3>
        <p className="text-[15px] text-[#b8c7dd]">{f.successSub}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-1 text-[14px] font-semibold text-brand-500 underline underline-offset-4 hover:text-brand-100"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md bg-white px-3.5 py-3 text-[15px] text-neutral-950 outline-none placeholder:text-neutral-400 focus-visible:shadow-focus";

  return (
    <form
      className="mx-auto max-w-130"
      onSubmit={(e) => {
        e.preventDefault();
        step === TOTAL_STEPS ? submit() : next();
      }}
      noValidate
    >
      {/* Top row: back arrow + progress dots */}
      <div className="mb-5 flex items-center justify-center gap-3">
        {step > 1 && status !== "sending" && (
          <button
            type="button"
            onClick={goBack}
            aria-label={f.back}
            className="absolute left-8 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FiArrowLeft size={18} />
          </button>
        )}
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label={f.stepOf
            .replace("{n}", String(step))
            .replace("{total}", String(TOTAL_STEPS))}
        >
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                i + 1 === step ? "bg-brand-500" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step content (keyed so it re-animates on change) */}
      <div key={step} className="[animation:fadeUp_0.2s_ease-out]">
        {step === 1 && (
          <>
            <h3 className="mb-5 text-center font-heading text-[22px] font-semibold">
              {f.intentQuestion}
            </h3>
            <div className="flex flex-col gap-3">
              {INTENTS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => pickIntent(opt.value)}
                  className="flex min-h-16 items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 text-left text-[16px] font-medium text-white transition-colors hover:border-brand-500 hover:bg-white/10 focus-visible:shadow-focus focus-visible:outline-none"
                >
                  <span className="text-[24px]">{opt.emoji}</span>
                  {f.intentLabels[opt.value]}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="mb-5 text-center font-heading text-[22px] font-semibold">
              {f.messageQuestion}
            </h3>
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  next();
                }
              }}
              placeholder={f.messagePlaceholders[intent ?? "hello"]}
              aria-label={f.messageQuestion}
              aria-invalid={!!error}
              aria-describedby={error ? "form-error" : undefined}
              className={`${inputClass} min-h-24 resize-y`}
              maxLength={2000}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="mb-5 text-center font-heading text-[22px] font-semibold">
              {f.nameQuestion}
            </h3>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              aria-label={f.nameQuestion}
              aria-invalid={!!error}
              aria-describedby={error ? "form-error" : undefined}
              className={inputClass}
              maxLength={100}
            />
          </>
        )}

        {step === 4 && (
          <>
            <h3 className="mb-5 text-center font-heading text-[22px] font-semibold">
              {f.emailQuestion}
            </h3>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={f.emailPlaceholder}
              aria-label={f.emailQuestion}
              aria-invalid={!!error}
              aria-describedby={error ? "form-error" : undefined}
              className={inputClass}
            />
          </>
        )}

        {/* Honeypot — visually hidden, must stay empty */}
        <div className="sr-only" aria-hidden>
          <label>
            Company
            <input
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        {error && (
          <p
            id="form-error"
            className="mt-2 flex items-center gap-1.5 text-[13px] text-error-500"
          >
            <FiAlertCircle size={15} />
            {error}
          </p>
        )}
        {status === "error" && (
          <p
            id="form-error"
            className="mt-2 flex items-center gap-1.5 text-[13px] text-error-500"
          >
            <FiAlertCircle size={15} />
            {f.errorMessage}
          </p>
        )}

        {/* Action button (steps 2–4; step 1 auto-advances) */}
        {step > 1 && (
          <button
            type="submit"
            disabled={status === "sending"}
            className={`mt-5 flex w-full items-center justify-center rounded-md bg-brand-700 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60 ${
              step === TOTAL_STEPS ? "h-14 text-[16px]" : ""
            }`}
          >
            {status === "sending" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : step === TOTAL_STEPS ? (
              status === "error" ? (
                f.retry
              ) : (
                f.send
              )
            ) : (
              f.next
            )}
          </button>
        )}
      </div>
    </form>
  );
}
