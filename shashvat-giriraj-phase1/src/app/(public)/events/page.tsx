import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { saalKaAarambhEvent } from "@/data/featuredEvent";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming spiritual gatherings, pilgrimages and programmes organised by Shashvat Giriraj Group.",
};

export default function EventsPage() {
  const ev = saalKaAarambhEvent;

  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Our <span className="italic">Events &amp; Yatras</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            Spiritual gatherings, holy pilgrimages and meaningful experiences
            bringing devotees together.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Events Grid ───────────────────── */}
      <section className="container-main section-padding">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Official Saal Ka Aarambh Event Card */}
          <AnimatedSection>
            <Link
              href={`/events/${ev.slug}`}
              className="group block border border-[#E6E4DC] bg-white p-6 sm:p-8 transition-all hover:border-[#25251F]"
            >
              <div className="flex items-center justify-between text-xs text-[#77766F] border-b border-[#E6E4DC] pb-4">
                <span className="font-semibold uppercase tracking-wider text-[#25251F]">
                  {ev.category}
                </span>
                <span className="bg-[#F2F0E9] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#25251F]">
                  UPCOMING
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl sm:text-3xl text-[#25251F] group-hover:text-[#4A483E] transition-colors leading-tight">
                {ev.title}
              </h3>

              <div className="mt-4 space-y-2 text-xs text-[#55544E]">
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-[#77766F]" />
                  <span>{ev.dates.display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#77766F]" />
                  <span>{ev.destination}</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#77766F] line-clamp-3">
                {ev.quote.body}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#E6E4DC] pt-4 text-xs">
                <span className="font-heading text-xl text-[#25251F]">
                  {ev.contribution} <span className="text-[10px] font-sans text-[#77766F]">/ person</span>
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-[#25251F] group-hover:underline">
                  VIEW DETAILS <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
