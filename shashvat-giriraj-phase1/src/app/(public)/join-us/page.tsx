"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface JoinFormData {
  fullName: string;
  city: string;
  phone: string;
  email: string;
  areaOfInterest: string;
  message: string;
  consent: boolean;
}

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormData>();

  const onSubmit = async (data: JoinFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          city: data.city,
          phone: data.phone,
          email: data.email || undefined,
          areaOfInterest: data.areaOfInterest,
          message: data.message || undefined,
          consentGiven: data.consent,
        }),
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
            <CheckCircle
              size={48}
              strokeWidth={1.2}
              className="mx-auto text-[#77766F]"
            />
            <h1 className="mt-6 font-heading text-4xl md:text-5xl">
              Thank You for Your Interest
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#77766F]">
              Your application has been received. A member of the organising
              team will reach out to you soon.
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
            Join Our <span className="italic">Journey</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            Become part of the community. Express your interest in volunteering,
            supporting events or participating in our activities.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Form ──────────────────────────── */}
      <section className="container-main section-padding">
        <div className="mx-auto max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    FULL NAME *
                  </label>
                  <input
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                    })}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    CITY *
                  </label>
                  <input
                    {...register("city", { required: "City is required" })}
                    placeholder="Your city"
                    className={inputClass}
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    PHONE *
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[+]?[\d\s-]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                    EMAIL
                  </label>
                  <input
                    {...register("email", {
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
                  AREA OF INTEREST
                </label>
                <select
                  {...register("areaOfInterest")}
                  className={inputClass}
                  defaultValue="volunteering"
                >
                  <option value="volunteering">Volunteering</option>
                  <option value="event_support">Event Support</option>
                  <option value="community">Community Activities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[11px] tracking-wider text-[#77766F]">
                  MESSAGE
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about yourself and how you'd like to contribute…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  {...register("consent", {
                    required: "You must agree to proceed",
                  })}
                  className="mt-1 h-4 w-4 accent-[#25251F]"
                />
                <label
                  htmlFor="consent"
                  className="text-xs leading-5 text-[#77766F]"
                >
                  I consent to Shashvat Giriraj Group collecting and processing
                  the information provided above to review my application. My
                  data will be handled as described in the{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-600">{errors.consent.message}</p>
              )}

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
                    <Loader2 size={14} className="animate-spin" /> SUBMITTING…
                  </>
                ) : (
                  <>
                    SUBMIT APPLICATION <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
