import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  { number: "01", title: "Faith", text: "Strengthening our connection with Jain spirituality through ancient traditions and timeless teachings." },
  { number: "02", title: "Devotion", text: "Creating meaningful opportunities for bhakti, spiritual growth and inner transformation." },
  { number: "03", title: "Togetherness", text: "Bringing people together through shared journeys, values and a sense of community." },
];

export default function Philosophy() {
  return (
    <section className="container-main section-padding">
      <AnimatedSection>
        <div className="text-center">
          <p className="text-[10px] tracking-[3px] text-[#77766F]">OUR PHILOSOPHY</p>
          <h2 className="mt-5 font-heading text-5xl md:text-6xl">Faith. Devotion. Togetherness.</h2>
        </div>
      </AnimatedSection>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {values.map((item, i) => (
          <AnimatedSection key={item.number} delay={i * 0.15}>
            <div className="border-t border-[#E6E4DC] pt-7">
              <span className="text-xs text-[#77766F]">{item.number}</span>
              <h3 className="mt-5 font-heading text-4xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#77766F]">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
