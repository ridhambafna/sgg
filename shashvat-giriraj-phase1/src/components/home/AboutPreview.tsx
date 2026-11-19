import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="container-main section-padding">
      <AnimatedSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-[10px] tracking-[3px] text-[#77766F]">ABOUT SHASHVAT GIRIRAJ</p>
            <h2 className="max-w-xl font-heading text-5xl leading-tight md:text-6xl">
              More Than a Journey.<br /><span className="italic">A Bond Beyond Faith.</span>
            </h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-[#77766F]">
              Shashvat Giriraj Group brings people together through Jain spirituality,
              pilgrimage, devotion and meaningful community experiences. We believe in
              the transformative power of shared spiritual journeys.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-3 border-b border-[#25251F] pb-2 text-xs tracking-wider">
              DISCOVER OUR STORY <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
