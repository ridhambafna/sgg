export default function SectionLabel({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p className={`text-[10px] tracking-[3px] text-[#77766F] uppercase ${className}`}>
      {text}
    </p>
  );
}
