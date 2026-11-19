"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-180px)] items-center overflow-hidden">
      <div className="container-main grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-[#E6E4DC] bg-white px-3.5 py-1.5 text-[10px] tracking-[3px] text-[#77766F] uppercase">
            JAIN SPIRITUAL &amp; PILGRIMAGE COMMUNITY
          </div>

          <h1 className="max-w-2xl font-heading text-6xl leading-[0.98] tracking-tight md:text-7xl lg:text-[88px]">
            Where Faith<br />Becomes a<br /><span className="italic">Journey.</span>
          </h1>

          <p className="mt-8 max-w-md text-sm sm:text-base leading-8 text-[#77766F]">
            Connecting devotees, organising sacred pilgrimages and celebrating meaningful community experiences with Shashvat Giriraj Group.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/yatras"
              className="flex items-center gap-3 bg-[#25251F] px-8 py-4 text-xs tracking-wider text-white transition-all duration-300 hover:bg-[#44443C] active:scale-95"
            >
              EXPLORE OUR YATRAS <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-wider underline underline-offset-8 transition-colors hover:text-[#77766F]"
            >
              OUR STORY
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-[#E6E4DC] bg-white p-6 sm:p-10 shadow-xs">
            <div className="relative h-full w-full flex flex-col items-center justify-center">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
                <Image
                  src="/images/logo.jpg"
                  alt="Shashvat Giriraj Temple Emblem"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 320px, 400px"
                />
              </div>
              <span className="mt-4 text-center font-heading text-xl text-[#77766F] tracking-wider">
                Shri Shatrunjay Giriraj
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-[10px] tracking-[2px] text-[#77766F] uppercase">
            <span>SHASHVAT GIRIRAJ GROUP</span>
            <span>OFFICIAL EMBLEM</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#77766F] md:flex">
        <span className="text-[9px] tracking-[3px] uppercase">SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
