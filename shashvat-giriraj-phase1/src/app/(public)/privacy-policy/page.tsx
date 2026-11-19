import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shashvat Giriraj Group website.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "[PLACEHOLDER — Must be reviewed and approved before publication.] We may collect personal information that you voluntarily provide when registering for events, submitting contact or volunteer forms, or interacting with our website. This may include your name, email address, phone number, city and area of interest.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "[PLACEHOLDER] We use the information collected to process event registrations, respond to enquiries, manage volunteer applications, improve our services and communicate about upcoming events and yatras.",
  },
  {
    title: "3. Information Sharing",
    content:
      "[PLACEHOLDER] We do not sell, trade or share your personal information with third parties except as necessary to operate our services, comply with legal obligations or protect the safety of our community.",
  },
  {
    title: "4. Data Security",
    content:
      "[PLACEHOLDER] We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Data Retention",
    content:
      "[PLACEHOLDER] We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected or as required by applicable law.",
  },
  {
    title: "6. Your Rights",
    content:
      "[PLACEHOLDER] You have the right to access, correct or delete your personal information. You may also withdraw consent for data processing at any time by contacting us.",
  },
  {
    title: "7. Cookies & Analytics",
    content:
      "[PLACEHOLDER] Our website may use essential cookies and analytics tools. Detailed cookie policy to be added after review.",
  },
  {
    title: "8. Contact Us",
    content:
      "[PLACEHOLDER — Add verified contact details for privacy-related enquiries.] If you have questions about this Privacy Policy, please contact the organising team.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="container-main section-padding pb-0">
        <AnimatedSection>
          <p className="mb-6 text-[10px] tracking-[3px] text-[#77766F]">
            SHASHVAT GIRIRAJ GROUP
          </p>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
            Privacy Policy
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
                <strong>Draft Notice:</strong> This privacy policy is a
                placeholder template. It must be reviewed, customised and
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
