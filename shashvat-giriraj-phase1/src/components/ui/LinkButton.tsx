import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  showArrow?: boolean;
}

export default function LinkButton({ href, children, variant = "primary", className = "", showArrow = true }: LinkButtonProps) {
  const base = "inline-flex items-center gap-3 text-xs tracking-wider transition-all duration-300";
  const variants = {
    primary: "bg-[#25251F] px-7 py-4 text-white hover:bg-[#44443C]",
    outline: "border border-[#25251F] px-7 py-4 hover:bg-[#25251F] hover:text-white",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowUpRight size={14} />}
    </Link>
  );
}
