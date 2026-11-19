import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CommunityCTA() {
  return (
    <section className="bg-[#F2F0E9] px-6 py-24 text-center md:py-32">
      <AnimatedSection>
        <p className="text-[10px] tracking-[3px] text-[#77766F]">BE A PART OF OUR JOURNEY</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-heading text-5xl leading-[1.05] md:text-7xl">
          Every Journey Begins With Faith.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#77766F]">
          Join a community united by devotion, shared experiences and the spirit of togetherness.
        </p>
        <Link href="/join-us" className="mt-9 inline-flex items-center gap-3 bg-[#25251F] px-8 py-4 text-xs tracking-wider text-white transition-all duration-300 hover:bg-[#44443C]">
          JOIN SHASHVAT GIRIRAJ <ArrowUpRight size={14} />
        </Link>
      </AnimatedSection>
    </section>
  );
}
