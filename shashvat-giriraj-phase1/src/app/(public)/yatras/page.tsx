import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Yatras",
  description:
    "Explore sacred pilgrimage journeys organised by Shashvat Giriraj Group — meaningful yatras rooted in Jain spirituality.",
};

export default function YatrasPage() {
  // In production this will fetch published yatras from MongoDB.
  const yatras: Array<{
    title: string;
    slug: string;
    destination: string;
    startDate: string;
    endDate: string;
    coverImage?: string;
    description: string;
  }> = [];

  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Our <span className="italic">Yatras</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            Sacred pilgrimage journeys to revered Jain tirthas — carefully
            planned with devotion, comfort and community spirit.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Yatras Grid or Empty State ──── */}
      <section className="container-main section-padding">
        {yatras.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-2">
            {yatras.map((yatra, i) => (
              <AnimatedSection key={yatra.slug} delay={i * 0.1}>
                <Link href={`/yatras/${yatra.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden border border-[#E6E4DC] bg-[#F2F0E9]">
                    {yatra.coverImage ? (
                      <img
                        src={yatra.coverImage}
                        alt={yatra.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="font-heading text-2xl text-[#77766F]">
                          {yatra.destination}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#77766F]">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} />
                        {yatra.destination}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        {new Date(yatra.startDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}{" "}
                        –{" "}
                        {new Date(yatra.endDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-3xl transition-colors group-hover:text-[#55544E]">
                      {yatra.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#77766F] line-clamp-2">
                      {yatra.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="flex flex-col items-center rounded-sm border border-[#E6E4DC] bg-white px-8 py-20 text-center">
              <MapPin size={40} strokeWidth={1} className="text-[#D0CEC6]" />
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                No Upcoming Yatras
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#77766F]">
                There are no published yatras at the moment. Check back soon for
                upcoming pilgrimage journeys or get in touch with the group.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 border border-[#25251F] px-7 py-4 text-xs tracking-wider transition-all duration-300 hover:bg-[#25251F] hover:text-white"
              >
                GET IN TOUCH <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </section>
    </>
  );
}
