import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated collection of photographs and videos from Shashvat Giriraj Group yatras, events and community moments.",
};

const placeholders = [
  { id: 1, aspect: "aspect-[3/4]", span: "" },
  { id: 2, aspect: "aspect-square", span: "" },
  { id: 3, aspect: "aspect-[4/3]", span: "md:col-span-2" },
  { id: 4, aspect: "aspect-square", span: "" },
  { id: 5, aspect: "aspect-[3/4]", span: "" },
  { id: 6, aspect: "aspect-square", span: "" },
  { id: 7, aspect: "aspect-[4/3]", span: "md:col-span-2" },
  { id: 8, aspect: "aspect-square", span: "" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            <span className="italic">Gallery</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            A curated collection of approved photographs and videos from our
            yatras, events and community gatherings.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Gallery Grid ──────────────────── */}
      <section className="container-main section-padding">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {placeholders.map((item, i) => (
            <AnimatedSection
              key={item.id}
              delay={i * 0.06}
              className={item.span}
            >
              <div
                className={`${item.aspect} group relative cursor-pointer overflow-hidden border border-[#E6E4DC] bg-[#F2F0E9] transition-all duration-500 hover:border-[#D0CEC6]`}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="font-heading text-lg text-[#B0AFA8] transition-colors group-hover:text-[#77766F]">
                    Photo {item.id}
                  </span>
                  <span className="text-[8px] tracking-[2px] text-[#C8C6BF]">
                    CLOUDINARY IMAGE
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="mt-10 text-center text-xs italic text-[#77766F]">
            Approved Cloudinary-hosted images and videos will be displayed here.
            Private or personal photos are never published without consent.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
