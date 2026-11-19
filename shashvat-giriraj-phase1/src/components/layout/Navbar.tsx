"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Yatras", href: "/yatras" },
  { name: "Gallery", href: "/gallery" },
  { name: "Seva", href: "/seva" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E4DC] bg-[#F8F7F2]/95 backdrop-blur-xl">
      {/* Top Center Branding Section: Temple Logo BEFORE Name */}
      <div className="border-b border-[#E6E4DC]/70 py-4 sm:py-5">
        <div className="container-main flex items-center justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4.5 text-center"
          >
            {/* Transparent Isolated Temple Mark Placed Directly Before the Name */}
            <div className="relative h-11 w-14 sm:h-14 sm:w-18 md:h-16 md:w-22 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/temple-mark.png"
                alt="Shashvat Giriraj Temple Emblem"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 88px"
              />
            </div>

            {/* Centered Brand Title */}
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium tracking-[0.14em] text-[#25251F] uppercase transition-colors group-hover:text-[#4A483E] leading-tight">
              SHASHVAT GIRIRAJ GROUP
            </span>
          </Link>
        </div>
      </div>

      {/* Primary Navigation Row (Larger & Centered) */}
      <nav className="container-main flex h-[68px] sm:h-[76px] items-center justify-between">
        {/* Balanced spacer for desktop */}
        <div className="hidden lg:block w-[180px]" aria-hidden="true" />

        {/* Centered Links */}
        <div className="hidden lg:flex items-center justify-center gap-9 flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] sm:text-[14px] font-medium tracking-[0.08em] text-[#55544E] transition-all duration-300 hover:text-[#25251F] hover:-translate-y-0.5 py-2 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center justify-end w-[180px]">
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 border border-[#25251F] bg-white px-5 py-3 text-[12px] font-medium tracking-wider text-[#25251F] transition-all duration-300 hover:bg-[#25251F] hover:text-white"
          >
            JOIN OUR JOURNEY <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile View Header */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-9 shrink-0">
              <Image
                src="/images/temple-mark.png"
                alt="SGG Logo"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <span className="font-heading text-base sm:text-lg font-medium tracking-wider text-[#25251F]">
              SGG
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="p-2 text-[#25251F] -mr-2"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (iOS & Android Responsive) */}
      {open && (
        <div className="border-t border-[#E6E4DC] bg-[#F8F7F2] px-6 py-8 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-6 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-2xl text-[#25251F] hover:text-[#77766F] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/join-us"
              onClick={() => setOpen(false)}
              className="mt-3 border border-[#25251F] bg-[#25251F] px-6 py-4 text-center text-xs tracking-widest text-white active:bg-[#44443C]"
            >
              JOIN OUR JOURNEY
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
