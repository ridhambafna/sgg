import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
  Plane,
  Utensils,
  BedDouble,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${title} — Yatras`,
    description: `Details about ${title} — a sacred pilgrimage journey by Shashvat Giriraj Group.`,
  };
}

const dayByDay = [
  {
    day: "Day 1",
    title: "Arrival & Orientation",
    description:
      "[PLACEHOLDER] Arrival at the destination, group orientation, and evening prayer session.",
  },
  {
    day: "Day 2",
    title: "Sacred Temple Visits",
    description:
      "[PLACEHOLDER] Morning darshan at the main temple complex, guided spiritual discourse.",
  },
  {
    day: "Day 3",
    title: "Pilgrimage & Devotion",
    description:
      "[PLACEHOLDER] Full-day pilgrimage to sacred sites, community prayers, and meditation.",
  },
  {
    day: "Day 4",
    title: "Community & Seva",
    description:
      "[PLACEHOLDER] Community service activities, cultural program, and group interactions.",
  },
  {
    day: "Day 5",
    title: "Concluding Ceremonies & Departure",
    description:
      "[PLACEHOLDER] Final prayers, closing ceremony, and departure.",
  },
];

const travelInfo = [
  {
    icon: Plane,
    label: "Travel",
    detail: "[PLACEHOLDER — Transport details will be added]",
  },
  {
    icon: BedDouble,
    label: "Accommodation",
    detail: "[PLACEHOLDER — Accommodation details will be added]",
  },
  {
    icon: Utensils,
    label: "Meals",
    detail: "[PLACEHOLDER — Pure Jain vegetarian meals included]",
  },
];

export default async function YatraDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      {/* ── Back Link ──────────────────────────────── */}
      <section className="container-main pt-8">
        <AnimatedSection>
          <Link
            href="/yatras"
            className="inline-flex items-center gap-2 text-[11px] tracking-wider text-[#77766F] transition-colors hover:text-[#25251F]"
          >
            <ArrowLeft size={14} />
            BACK TO YATRAS
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <div className="max-w-4xl">
            <p className="mb-4 text-[10px] tracking-[3px] text-[#77766F] uppercase">
              Sacred Pilgrimage
            </p>
            <h1 className="font-heading text-5xl leading-[1.1] md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-4 text-sm italic text-[#77766F]">
              [Yatra details will be populated from database]
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Cover Image Placeholder ────────────────── */}
      <section className="container-main py-10">
        <AnimatedSection>
          <div className="aspect-[21/9] w-full rounded-sm border border-[#E6E4DC] bg-[#F2F0E9] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[3px] text-[#77766F] uppercase">
                Yatra Cover Image
              </p>
              <p className="mt-2 text-xs text-[#77766F]">
                Cloudinary image will be loaded here
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Yatra Meta & Description ───────────────── */}
      <section className="container-main pb-0">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Sidebar */}
          <AnimatedSection className="lg:order-2">
            <div className="rounded-sm border border-[#E6E4DC] bg-white p-8 space-y-6">
              <h3 className="text-[11px] tracking-[2px] text-[#77766F] uppercase">
                Yatra Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.2} className="mt-0.5 text-[#77766F]" />
                  <div>
                    <p className="text-[11px] tracking-wide text-[#77766F] uppercase">
                      Destination
                    </p>
                    <p className="mt-1 text-sm">[To be announced]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays size={18} strokeWidth={1.2} className="mt-0.5 text-[#77766F]" />
                  <div>
                    <p className="text-[11px] tracking-wide text-[#77766F] uppercase">
                      Dates
                    </p>
                    <p className="mt-1 text-sm">[To be announced]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} strokeWidth={1.2} className="mt-0.5 text-[#77766F]" />
                  <div>
                    <p className="text-[11px] tracking-wide text-[#77766F] uppercase">
                      Duration
                    </p>
                    <p className="mt-1 text-sm">[To be announced]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={18} strokeWidth={1.2} className="mt-0.5 text-[#77766F]" />
                  <div>
                    <p className="text-[11px] tracking-wide text-[#77766F] uppercase">
                      Group Size
                    </p>
                    <p className="mt-1 text-sm">[To be announced]</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E6E4DC] pt-6">
                <button className="w-full border border-[#25251F] bg-[#25251F] px-6 py-4 text-[11px] tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[#25251F]">
                  REGISTER FOR YATRA
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl">
                  About This Yatra
                </h2>
                <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#55544E]">
                  <p>
                    [PLACEHOLDER — Yatra description will be populated from the
                    database.] This section will contain a detailed description
                    of the pilgrimage, its spiritual significance, and what
                    participants can expect during this sacred journey.
                  </p>
                  <p>
                    [PLACEHOLDER — Additional yatra information.] Historical and
                    spiritual significance of the destination, details about the
                    temples and tirthas to be visited, and the transformative
                    experience that awaits participants.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Day-by-Day Itinerary ───────────────────── */}
      <section className="container-main section-padding">
        <AnimatedSection>
          <p className="mb-4 text-[10px] tracking-[3px] text-[#77766F] uppercase">
            Journey Plan
          </p>
          <h2 className="mb-12 font-heading text-3xl md:text-4xl">
            Day-by-Day Itinerary
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl space-y-0">
          {dayByDay.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="grid grid-cols-[80px_1fr] gap-6 border-b border-[#E6E4DC] py-8 md:grid-cols-[100px_200px_1fr]">
                <span className="font-heading text-2xl text-[#77766F]">
                  {item.day}
                </span>
                <h3 className="font-heading text-xl md:col-span-1">
                  {item.title}
                </h3>
                <p className="col-span-2 mt-2 text-[13px] leading-7 text-[#77766F] md:col-span-1 md:mt-0">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
          <p className="mt-4 text-xs italic text-[#77766F]">
            [PLACEHOLDER — Actual itinerary will be loaded from the database]
          </p>
        </div>
      </section>

      {/* ── Travel Information ─────────────────────── */}
      <section className="bg-[#F2F0E9]">
        <div className="container-main section-padding">
          <AnimatedSection>
            <p className="mb-4 text-[10px] tracking-[3px] text-[#77766F] uppercase">
              Practical Details
            </p>
            <h2 className="mb-12 font-heading text-3xl md:text-4xl">
              Travel Information
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-3">
            {travelInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-sm border border-[#E6E4DC] bg-white p-8">
                  <info.icon
                    size={28}
                    strokeWidth={1.2}
                    className="text-[#77766F]"
                  />
                  <h3 className="mt-5 font-heading text-xl">{info.label}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#77766F]">
                    {info.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration CTA ──────────────────────── */}
      <section className="container-main section-padding">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl md:text-4xl">
              Begin Your Sacred Journey
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#77766F]">
              Register for this yatra and embark on a transformative pilgrimage
              with our spiritual community.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center gap-3 border border-[#25251F] bg-[#25251F] px-8 py-4 text-[11px] tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[#25251F]">
                REGISTER NOW
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#E6E4DC] px-8 py-4 text-[11px] tracking-wider text-[#77766F] transition-all duration-300 hover:border-[#25251F] hover:text-[#25251F]"
              >
                HAVE QUESTIONS?
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
