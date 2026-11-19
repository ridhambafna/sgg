import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  ArrowLeft,
  Train,
  Check,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { saalKaAarambhEvent } from "@/data/featuredEvent";

export const metadata: Metadata = {
  title: "Saal Ka Aarambh Giriraj Se — 30 Dec 2026 to 1 Jan 2027",
  description:
    "Join Shashvat Giriraj Group for Saal Ka Aarambh Giriraj Se. Sacred jatra to Shetrunjay Giriraj, train bhakti with Vanigota Brothers, and community bhakti.",
};

export default function SaalKaAarambhPage() {
  const ev = saalKaAarambhEvent;

  return (
    <>
      {/* ── Back Link ──────────────────────────────── */}
      <section className="container-main pt-8">
        <AnimatedSection>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[11px] tracking-wider text-[#77766F] transition-colors hover:text-[#25251F]"
          >
            <ArrowLeft size={14} />
            BACK TO ALL EVENTS
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="container-main section-padding pb-6">
        <AnimatedSection>
          <div className="max-w-4xl">
            <p className="mb-3 text-xs tracking-wider text-[#77766F]">
              {ev.blessings.invoking}
            </p>
            <div className="inline-flex items-center gap-2 border border-[#E6E4DC] bg-white px-3 py-1 text-[10px] tracking-[3px] text-[#77766F] uppercase">
              SHASHVAT GIRIRAJ GROUP PRESENTS
            </div>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-[#25251F] uppercase">
              Saal Ka Aarambh <br />
              <span className="italic font-normal">Giriraj Se</span>
            </h1>
            <p className="mt-4 text-base font-medium tracking-wide text-[#77766F]">
              {ev.dates.display} • {ev.destination}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Blessings Banner ───────────────────────── */}
      <section className="container-main pb-8">
        <AnimatedSection>
          <div className="border border-[#E6E4DC] bg-[#F2F0E9] p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77766F] block mb-1">
                दिव्याशीष वृष्टि:
              </span>
              <p className="text-sm font-medium text-[#25251F]">
                {ev.blessings.divyashish}
              </p>
            </div>
            <div className="border-t border-[#E0DED6] pt-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77766F] block mb-1">
                प्रेरणादाता एवं मार्गदर्शक:
              </span>
              <p className="text-sm leading-relaxed text-[#55544E]">
                {ev.blessings.inspiration}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Event Meta & Registration Sidebar ──────── */}
      <section className="container-main pb-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main Details */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-10">
              {/* Spiritual Lead */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#25251F]">
                  &ldquo;{ev.quote.lead}&rdquo;
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-8 text-[#55544E]">
                  {ev.quote.body}
                </p>
              </div>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 gap-4">
                {ev.pillars.map((p) => (
                  <div key={p.title} className="border border-[#E6E4DC] bg-white p-5">
                    <h3 className="font-heading text-lg sm:text-xl text-[#25251F]">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#77766F]">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Itinerary */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[3px] text-[#77766F] mb-6">
                  OFFICIAL DAY-BY-DAY ITINERARY
                </h3>

                <div className="space-y-6">
                  {ev.itinerary.map((day) => (
                    <div
                      key={day.dayNumber}
                      className="border border-[#E6E4DC] bg-white p-6 sm:p-8"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E4DC] pb-4">
                        <span className="font-heading text-2xl text-[#25251F]">
                          DAY {day.dayNumber}: {day.title}
                        </span>
                        <span className="text-xs font-medium tracking-wider text-[#77766F]">
                          {day.dateStr}
                        </span>
                      </div>

                      <div className="mt-6 space-y-4">
                        {day.items.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-4 p-3 rounded-xs transition-colors ${
                              item.highlight ? "bg-[#F8F7F2] border border-[#E6E4DC]" : ""
                            }`}
                          >
                            <span className="w-24 sm:w-32 shrink-0 text-xs font-semibold text-[#77766F]">
                              {item.time}
                            </span>
                            <div className="flex-1">
                              <p className={`text-xs sm:text-sm ${item.highlight ? "font-semibold text-[#25251F]" : "text-[#55544E]"}`}>
                                {item.activity}
                              </p>
                              {item.note && (
                                <p className="mt-1 text-xs text-[#77766F] italic">
                                  {item.note}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="border border-[#E6E4DC] bg-white p-6 sm:p-8">
                <h3 className="font-heading text-2xl text-[#25251F]">
                  Your Contribution Covers
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {ev.contributionCovers.map((cov, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#55544E]">
                      <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{cov}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Registration Sidebar */}
          <AnimatedSection className="lg:order-2">
            <div className="sticky top-28 space-y-6">
              <div className="border border-[#25251F] bg-white p-8">
                <p className="text-[10px] tracking-[3px] text-[#77766F] uppercase">
                  TRIP CONTRIBUTION
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-5xl text-[#25251F]">{ev.contribution}</span>
                  <span className="text-xs text-[#77766F] uppercase tracking-wider">{ev.contributionUnit}</span>
                </div>

                <div className="mt-6 space-y-4 border-t border-[#E6E4DC] pt-6 text-xs text-[#55544E]">
                  <div className="flex items-start gap-3">
                    <CalendarDays size={16} className="text-[#77766F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#25251F]">30 Dec 2026 – 1 Jan 2027</p>
                      <p className="text-[#77766F]">Return to Mumbai on 2 Jan 08:20 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#77766F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#25251F]">Shetrunjay Giriraj, Palitana</p>
                      <p className="text-[#77766F]">Via Songadh (Bandra Terminus)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Train size={16} className="text-[#77766F] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#25251F]">Train 12971 / 12972</p>
                      <p className="text-[#77766F]">3-Tier AC Coach with Vanigota Brothers</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/join-us"
                  className="mt-8 flex w-full items-center justify-center bg-[#25251F] py-4 text-xs font-medium tracking-wider text-white transition-colors hover:bg-[#44443C]"
                >
                  REGISTER FOR THIS YATRA
                </Link>

                <div className="mt-6 border-t border-[#E6E4DC] pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#77766F] mb-3">
                    FOR ENQUIRY &amp; DETAILS:
                  </p>
                  <div className="space-y-2 text-xs">
                    {ev.enquiries.map((enq) => (
                      <a
                        key={enq.name}
                        href={`tel:${enq.phone}`}
                        className="flex items-center justify-between text-[#25251F] hover:underline"
                      >
                        <span className="font-medium">{enq.name}:</span>
                        <span className="inline-flex items-center gap-1 text-[#77766F]">
                          <Phone size={12} /> {enq.phone}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Motto card */}
              <div className="border border-[#E6E4DC] bg-[#F2F0E9] p-6 text-center">
                <div className="relative h-12 w-16 mx-auto mb-2">
                  <Image
                    src="/images/temple-mark.png"
                    alt="Emblem"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <p className="font-heading text-lg text-[#25251F]">
                  &ldquo;{ev.motto}&rdquo;
                </p>
                <p className="mt-1 text-[11px] text-[#77766F] uppercase tracking-wider">
                  Shashvat Giriraj Group
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
