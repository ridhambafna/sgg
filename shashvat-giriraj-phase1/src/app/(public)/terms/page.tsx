import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Shashvat Giriraj Group website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "[PLACEHOLDER — Must be reviewed and approved before publication.] By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.",
  },
  {
    title: "2. Services",
    content:
      "[PLACEHOLDER] This website provides information about Shashvat Giriraj Group activities, events, yatras and community programmes. It also facilitates event registrations, volunteer applications and contact enquiries.",
  },
  {
    title: "3. User Conduct",
    content:
      "[PLACEHOLDER] Users agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.",
  },
  {
    title: "4. Registration & Events",
    content:
      "[PLACEHOLDER] Event and yatra registrations are subject to availability. The group reserves the right to modify, postpone or cancel any event. Registered participants will be notified of any changes.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "[PLACEHOLDER] All content on this website, including text, images, logos and design, is the property of Shashvat Giriraj Group or its licensors and is protected by applicable laws.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "[PLACEHOLDER] Shashvat Giriraj Group shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of this website or participation in any events.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "[PLACEHOLDER] We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Governing Law",
    content:
      "[PLACEHOLDER — Specify applicable jurisdiction.] These terms shall be governed by and construed in accordance with the laws of [jurisdiction to be specified].",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-sm text-[#77766F]">
            Last updated: [Date to be added]
          </p>
        </AnimatedSection>
      </section>

      <section className="container-main section-padding">
        <div className="mx-auto max-w-3xl space-y-10">
          <AnimatedSection>
            <div className="rounded-sm border border-amber-200 bg-amber-50 px-6 py-4">
              <p className="text-sm leading-7 text-amber-800">
                <strong>Draft Notice:</strong> These terms and conditions are a
                placeholder template. They must be reviewed, customised and
                approved by the group and a qualified legal professional before
                publication.
              </p>
            </div>
          </AnimatedSection>

          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div>
                <h2 className="font-heading text-2xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[#55544E]">
                  {section.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
