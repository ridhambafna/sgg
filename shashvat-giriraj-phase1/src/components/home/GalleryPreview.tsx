import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const placeholders = [
  { id: 1, aspect: "aspect-[4/5]", label: "Yatra Moments" },
  { id: 2, aspect: "aspect-square", label: "Devotion" },
  { id: 3, aspect: "aspect-[4/5]", label: "Community" },
  { id: 4, aspect: "aspect-square", label: "Spirituality" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#F2F0E9]">
      <div className="container-main section-padding">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[3px] text-[#77766F]">MOMENTS OF GRACE</p>
              <h2 className="mt-4 font-heading text-5xl md:text-6xl">From Our Journeys</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-3 border-b border-[#25251F] pb-2 text-xs tracking-wider">
              VIEW FULL GALLERY <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {placeholders.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <div className={`${item.aspect} flex items-center justify-center bg-[#E7E5DD] transition-transform duration-500 hover:scale-[1.02]`}>
                <span className="font-heading text-lg text-[#77766F]">{item.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
