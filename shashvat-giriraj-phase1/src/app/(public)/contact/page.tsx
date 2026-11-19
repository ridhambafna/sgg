"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Loader2, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full border border-[#E6E4DC] bg-white px-5 py-4 text-sm outline-none transition-colors focus:border-[#25251F] placeholder:text-[#B0AFA8]";

  if (submitted) {
    return (
      <section className="container-main section-padding min-h-[65vh] flex items-center justify-center">
        <AnimatedSection>
          <div className="text-center">
            <CheckCircle size={48} strokeWidth={1.2} className="mx-auto text-[#77766F]" />
            <h1 className="mt-6 font-heading text-4xl md:text-5xl">
              Message Sent
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#77766F]">
              Thank you for reaching out. We will get back to you as soon as
              possible.
            </p>
          </div>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Contact <span className="italic">Us</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            Have a question or want to connect? We would love to hear from you.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Contact Info + Form ───────────── */}
      <section className="container-main section-padding">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Info Sidebar */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-[11px] tracking-[2px] text-[#77766F]">
                  GET IN TOUCH
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-[#55544E]">
                    <Mail size={16} strokeWidth={1.2} className="text-[#77766F]" />
                    <span>
                      {siteConfig.contacts.email || "[Email to be configured]"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#55544E]">
                    <Phone size={16} strokeWidth={1.2} className="text-[#77766F]" />
                    <span>
                      {siteConfig.contacts.whatsapp ||
                        "[Phone to be configured]"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E6E4DC] pt-8">
                <h3 className="text-[11px] tracking-[2px] text-[#77766F]">
                  FOLLOW US
                </h3>
                <p className="mt-4 text-sm text-[#77766F]">
                  {siteConfig.contacts.instagram
                    ? "Find us on Instagram"
                    : "[Social links to be configured]"}
                </p>
              </div>

              <div className="border-t border-[#E6E4DC] pt-8">
                <p className="text-xs leading-6 text-[#77766F]">
                  [PLACEHOLDER — Add verified address and office hours if
                  applicable. Do not display unverified contact information.]
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    NAME *
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                    })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    EMAIL *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                  SUBJECT *
                </label>
                <input
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: { value: 3, message: "At least 3 characters" },
                  })}
                  placeholder="What is this regarding?"
                  className={inputClass}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                  MESSAGE *
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "At least 10 characters" },
                  })}
                  rows={6}
                  placeholder="Your message…"
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 bg-[#25251F] px-8 py-4 text-xs tracking-wider text-white transition-all duration-300 hover:bg-[#44443C] disabled:opacity-60 md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> SENDING…
                  </>
                ) : (
                  <>
                    SEND MESSAGE <Send size={14} />
                  </>
                )}
              </button>

              <p className="text-xs leading-5 text-[#77766F]">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
