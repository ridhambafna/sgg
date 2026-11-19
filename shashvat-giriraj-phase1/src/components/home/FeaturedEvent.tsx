"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, Calendar, Train, Flame, Mountain, Music } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { saalKaAarambhEvent } from "@/data/featuredEvent";

export default function FeaturedEvent() {
  const ev = saalKaAarambhEvent;

  return (
    <section className="bg-[#F2F0E9] border-y border-[#E6E4DC]/80">
      <div className="container-main section-padding">
        <AnimatedSection>
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DED6] pb-8">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#E6E4DC] bg-white px-3 py-1 text-[10px] tracking-[3px] text-[#77766F] uppercase">
                FEATURED UPCOMING YATRA
              </div>
              <p className="mt-3 text-xs tracking-wider text-[#77766F] font-hindi">
                {ev.blessings.invoking}
              </p>
              <h2 className="mt-2 font-heading text-4xl sm:text-5xl md:text-6xl text-[#25251F] uppercase leading-tight">
                Saal Ka Aarambh <span className="italic font-normal">Giriraj Se</span>
              </h2>
            </div>

            <div className="text-left md:text-right">
              <span className="font-heading text-3xl sm:text-4xl text-[#25251F] tracking-wide block">
                {ev.contribution}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
                {ev.contributionUnit} • ALL-INCLUSIVE
              </span>
            </div>
          </div>

          {/* Spiritual Quote & Blessings Banner */}
          <div className="mt-8 border border-[#E6E4DC] bg-white p-6 sm:p-8">
            <p className="font-heading text-2xl sm:text-3xl text-[#25251F] italic leading-snug">
              &ldquo;{ev.quote.lead}&rdquo;
            </p>
            <p className="mt-3 text-sm leading-7 text-[#55544E]">
              {ev.quote.body}
            </p>

            <div className="mt-6 border-t border-[#E6E4DC] pt-5 text-xs text-[#77766F] space-y-2">
              <p>
                <strong className="text-[#25251F]">दिव्याशीष वृष्टि:</strong> {ev.blessings.divyashish}
              </p>
              <p>
                <strong className="text-[#25251F]">प्रेरणादाता एवं मार्गदर्शक:</strong> {ev.blessings.inspiration}
              </p>
            </div>
          </div>

          {/* 4 Spiritual Pillars */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ev.pillars.map((p) => (
              <div
                key={p.title}
                className="border border-[#E6E4DC] bg-white p-5 text-center transition-all hover:border-[#25251F]"
              >
                <h4 className="font-heading text-lg sm:text-xl text-[#25251F]">
                  {p.title}
                </h4>
                <p className="mt-1 text-xs text-[#77766F]">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 3-Day Highlights Grid */}
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-[#77766F] mb-6">
              3-DAY JOURNEY HIGHLIGHTS
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Day 1 */}
              <div className="border border-[#E6E4DC] bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#77766F] text-xs pb-3 border-b border-[#E6E4DC]">
                    <span className="font-heading text-xl text-[#25251F]">DAY 1</span>
                    <span>30 DEC 2026</span>
                  </div>
                  <h4 className="font-heading text-2xl mt-4 text-[#25251F]">
                    Mumbai to Songadh
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-xs text-[#55544E]">
                    <li className="flex items-start gap-2">
                      <Train size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span>07:10 PM: Bandra Terminus (Train 12971, 3-Tier AC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Music size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span className="font-medium text-[#25251F]">
                        Bhakti in Train with Vanigota Brothers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Day 2 */}
              <div className="border border-[#E6E4DC] bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#77766F] text-xs pb-3 border-b border-[#E6E4DC]">
                    <span className="font-heading text-xl text-[#25251F]">DAY 2</span>
                    <span>31 DEC 2026</span>
                  </div>
                  <h4 className="font-heading text-2xl mt-4 text-[#25251F]">
                    Arrival &amp; Seva Puja
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-xs text-[#55544E]">
                    <li className="flex items-start gap-2">
                      <Flame size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span>11:00 AM: Puja at Taleti &amp; Babu Derasar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span>03:30 PM: Jain&apos;s Got Talent &amp; Rohishala Aarti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Music size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span className="font-medium text-[#25251F]">
                        09:00 PM: Grand Bhakti Bhavna Concert
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Day 3 */}
              <div className="border border-[#E6E4DC] bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#77766F] text-xs pb-3 border-b border-[#E6E4DC]">
                    <span className="font-heading text-xl text-[#25251F]">DAY 3</span>
                    <span>1 JAN 2027</span>
                  </div>
                  <h4 className="font-heading text-2xl mt-4 text-[#25251F]">
                    Giriraj Jatra &amp; Return
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-xs text-[#55544E]">
                    <li className="flex items-start gap-2">
                      <Mountain size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span>05:30 AM: Jatra Begins (Holy step climb with devotion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Flame size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span className="font-medium text-[#25251F]">
                        Dada Darshan &amp; Group Pakshal Pooja
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Train size={14} className="mt-0.5 text-[#77766F] shrink-0" />
                      <span>Return Train 12972 → Bandra Terminus (2 Jan morning)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#E0DED6] pt-8">
            <div className="text-xs text-[#77766F] space-y-1">
              <p>
                <strong className="text-[#25251F]">Enquiry Contacts:</strong> Ridham Bafna (9766044980) • Misha Jain (8928612389)
              </p>
              <p className="italic">
                &ldquo;Come as a traveller, leave as a family.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/events/saal-ka-aarambh-giriraj-se"
                className="flex-1 sm:flex-none text-center bg-[#25251F] px-8 py-4 text-xs font-medium tracking-wider text-white transition-all duration-300 hover:bg-[#44443C] inline-flex items-center justify-center gap-2"
              >
                VIEW FULL ITINERARY <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/join-us"
                className="flex-1 sm:flex-none text-center border border-[#25251F] bg-white px-8 py-4 text-xs font-medium tracking-wider text-[#25251F] transition-all duration-300 hover:bg-[#25251F] hover:text-white"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
