import type { Metadata } from "next";
import { Heart, HandHeart, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Seva & Labh",
  description:
    "Learn about verified seva opportunities and approved labh information with Shashvat Giriraj Group.",
};

const sevaAreas = [
  {
    icon: Heart,
    title: "Tirtha Seva",
    description:
      "[PLACEHOLDER — Details about seva at sacred sites.] Support the upkeep, restoration and beautification of revered Jain tirthas and temples.",
  },
  {
    icon: HandHeart,
    title: "Community Seva",
    description:
      "[PLACEHOLDER — Details about community service.] Contribute to charitable activities, food distribution and community welfare initiatives.",
  },
  {
    icon: Users,
    title: "Yatra Seva",
    description:
      "[PLACEHOLDER — Details about yatra volunteering.] Assist with event organisation, coordination and participant support during yatras.",
  },
];

export default function SevaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Seva &amp; <span className="italic">Labh</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[#77766F]">
            Seva is at the heart of our community. We believe in giving back
            with humility and transparency, supporting causes that align with
            our spiritual values.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Seva Areas ────────────────────── */}
      <section className="container-main section-padding">
        <div className="grid gap-6 md:grid-cols-3">
          {sevaAreas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-sm border border-[#E6E4DC] bg-white p-8 md:p-10">
                <area.icon
                  size={32}
                  strokeWidth={1.2}
                  className="text-[#77766F]"
                />
                <h3 className="mt-6 font-heading text-2xl">{area.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#77766F]">
                  {area.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Labh Information ──────────────── */}
      <section className="bg-[#F2F0E9]">
        <div className="container-main section-padding">
          <AnimatedSection>
            <p className="text-[10px] tracking-[3px] text-[#77766F]">
              LABH INFORMATION
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl md:text-5xl">
              Approved Labh Details
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-10 rounded-sm border border-[#D8D6CE] bg-white p-8 md:p-12">
              <p className="text-sm leading-8 text-[#77766F]">
                [PLACEHOLDER — Only publish verified labh opportunities and
                approved labharthi details here. Do not display payment details,
                donation buttons or banking information without proper
                verification and legal review.]
              </p>
              <p className="mt-6 text-sm leading-8 text-[#77766F]">
                For current seva opportunities and labh information, please
                contact the organising team directly.
              </p>
              <p className="mt-4 text-xs italic text-[#77766F]">
                All financial details must be verified and approved by the group
                before publication. No fake donation buttons or unverified
                payment claims.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────── */}
      <section className="container-main section-padding text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl">
            Want to Contribute?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#77766F]">
            Reach out to the organising team to learn about current seva
            opportunities and how you can participate.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
