import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Shashvat Giriraj",
  description:
    "Learn about Shashvat Giriraj Group — a community united through Jain spirituality, pilgrimage, devotion and meaningful experiences.",
};

const pillars = [
  {
    number: "01",
    title: "Spirituality",
    text: "Rooted in Jain philosophy, we nurture spiritual growth through sacred pilgrimages, discourses and communal prayers.",
  },
  {
    number: "02",
    title: "Community",
    text: "We bring individuals and families together, building bonds that extend beyond journeys into everyday life.",
  },
  {
    number: "03",
    title: "Service",
    text: "Through seva and voluntary contributions, we strive to support spiritual sites, charitable causes and those in need.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-5xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            About <span className="italic">Shashvat Giriraj</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* ── Introduction ──────────────────── */}
      <section className="container-main section-padding">
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-6 text-[15px] leading-8 text-[#55544E]">
              <p>
                Shashvat Giriraj Group is a community of devotees united by
                their reverence for Jain spirituality and the sacred tradition
                of pilgrimage. We organise meaningful yatras, spiritual
                gatherings and community events that bring people together in
                faith and devotion.
              </p>
              <p>
                [PLACEHOLDER — Add verified historical background and founding
                details about the group. Do not fabricate history, names or
                leadership claims.]
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="aspect-[4/3] w-full border border-[#E6E4DC] bg-[#F2F0E9] flex items-center justify-center">
              <div className="text-center">
                <p className="font-heading text-2xl text-[#77766F]">
                  Community Photograph
                </p>
                <p className="mt-2 text-[9px] tracking-[3px] text-[#77766F]">
                  APPROVED CLOUDINARY IMAGE TO BE ADDED
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pillars ───────────────────────── */}
      <section className="bg-[#F2F0E9]">
        <div className="container-main section-padding">
          <AnimatedSection>
            <p className="text-[10px] tracking-[3px] text-[#77766F]">
              OUR FOUNDATION
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl md:text-5xl">
              Guided by Values, United in Purpose
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {pillars.map((item, i) => (
              <AnimatedSection key={item.number} delay={i * 0.12}>
                <div className="border-t border-[#D8D6CE] pt-7">
                  <span className="text-xs text-[#77766F]">{item.number}</span>
                  <h3 className="mt-5 font-heading text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#77766F]">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Grid Placeholder ──────── */}
      <section className="container-main section-padding">
        <AnimatedSection>
          <p className="text-[10px] tracking-[3px] text-[#77766F]">
            MOMENTS WE TREASURE
          </p>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl">
            Glimpses of Our Journey
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <AnimatedSection key={n} delay={n * 0.08}>
              <div className="aspect-square border border-[#E6E4DC] bg-[#F2F0E9] flex items-center justify-center">
                <span className="text-xs tracking-[2px] text-[#77766F]">
                  PHOTO {n}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Vision & Mission Link ─────────── */}
      <section className="bg-[#F2F0E9]">
        <div className="container-main section-padding text-center">
          <AnimatedSection>
            <p className="text-[10px] tracking-[3px] text-[#77766F]">
              OUR DIRECTION
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl md:text-6xl">
              Explore Our Vision &amp; Mission
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#77766F]">
              Understand the guiding principles and aspirations that shape every
              journey we undertake together.
            </p>
            <Link
              href="/vision-mission"
              className="mt-8 inline-flex items-center gap-3 bg-[#25251F] px-8 py-4 text-xs tracking-wider text-white transition-all duration-300 hover:bg-[#44443C]"
            >
              OUR VISION &amp; MISSION <ArrowUpRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
