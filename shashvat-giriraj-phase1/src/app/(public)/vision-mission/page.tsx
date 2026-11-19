import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Vision & Mission",
  description:
    "The guiding vision and mission of Shashvat Giriraj Group — spirituality, pilgrimage, devotion and community.",
};

const principles = [
  {
    title: "Spiritual Authenticity",
    text: "Grounding every journey and gathering in the authentic traditions and values of Jain philosophy.",
  },
  {
    title: "Inclusive Community",
    text: "Welcoming all who seek spiritual growth, regardless of background, into a supportive and caring community.",
  },
  {
    title: "Responsible Organisation",
    text: "Running every event and yatra with transparency, safety and respect for every participant.",
  },
  {
    title: "Selfless Service",
    text: "Encouraging seva as a core practice — serving tirthas, communities and those in need.",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-5xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Our Vision &amp;&nbsp;<span className="italic">Mission</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* ── Vision ────────────────────────── */}
      <section className="container-main section-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <AnimatedSection>
            <p className="text-[10px] tracking-[3px] text-[#77766F]">VISION</p>
            <h2 className="mt-5 font-heading text-4xl leading-tight md:text-5xl">
              Where Every Soul Finds Its Path
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <div className="space-y-5 text-[15px] leading-8 text-[#55544E]">
              <p>
                [PLACEHOLDER — Add verified vision statement.] Our vision is to
                create a world where Jain spiritual traditions flourish, where
                pilgrimage is accessible and meaningful, and where every
                individual can experience the transformative power of faith and
                community.
              </p>
              <p className="text-xs italic text-[#77766F]">
                This text must be reviewed and approved by the group before
                publication.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission ───────────────────────── */}
      <section className="bg-[#F2F0E9]">
        <div className="container-main section-padding">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <AnimatedSection>
              <p className="text-[10px] tracking-[3px] text-[#77766F]">
                MISSION
              </p>
              <h2 className="mt-5 font-heading text-4xl leading-tight md:text-5xl">
                Building Bridges Through Faith
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <div className="space-y-5 text-[15px] leading-8 text-[#55544E]">
                <p>
                  [PLACEHOLDER — Add verified mission statement.] Our mission is
                  to organise well-planned spiritual journeys and community
                  gatherings that deepen devotion, strengthen bonds and inspire
                  purposeful living grounded in Jain values.
                </p>
                <p className="text-xs italic text-[#77766F]">
                  This text must be reviewed and approved by the group before
                  publication.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Guiding Principles ────────────── */}
      <section className="container-main section-padding">
        <AnimatedSection>
          <p className="text-[10px] tracking-[3px] text-[#77766F]">
            GUIDING PRINCIPLES
          </p>
          <h2 className="mt-5 max-w-xl font-heading text-4xl md:text-5xl">
            Values That Shape Our Journey
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid gap-px bg-[#E6E4DC] md:grid-cols-2">
          {principles.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-[#F8F7F2] p-10 md:p-12">
                <h3 className="font-heading text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#77766F]">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
