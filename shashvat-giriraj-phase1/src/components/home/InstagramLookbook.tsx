"use client";

import { InstagramIcon } from "@/components/ui/SocialIcons";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { instagramLookbookPosts } from "@/data/lookbook";
import { siteConfig } from "@/config/site";

export default function InstagramLookbook() {
  return (
    <section className="container-main section-padding">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E4DC] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[3px] text-[#77766F] uppercase">
              <Sparkles size={12} className="text-[#25251F]" />
              OFFICIAL INSTAGRAM LOOKBOOK
            </div>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl md:text-6xl text-[#25251F]">
              Echoes of Devotion
            </h2>
            <p className="mt-2 text-sm text-[#77766F] max-w-lg">
              Moments of faith, seva, and bhakti captured from our pilgrimages to Shri Shatrunjay Giriraj.
            </p>
          </div>

          <a
            href={siteConfig.contacts.instagram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-[#25251F] bg-white px-6 py-3.5 text-xs font-medium tracking-wider text-[#25251F] transition-all hover:bg-[#25251F] hover:text-white shrink-0 self-start md:self-auto"
          >
            <InstagramIcon size={16} />
            <span>FOLLOW @SHASHVAT.GIRIRAJ</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </AnimatedSection>

      {/* Grid of Editorial Lookbook Posts */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {instagramLookbookPosts.map((post, idx) => (
          <AnimatedSection key={post.id} delay={idx * 0.08}>
            <a
              href={siteConfig.contacts.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[3/4] overflow-hidden rounded-xs border border-[#E6E4DC] bg-[#25251F] transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Editorial Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-95 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Card Corner Tag */}
              <div className="absolute top-3 left-3 text-[9px] tracking-[2px] font-medium uppercase text-white/70">
                {post.subtext}
              </div>

              {/* Centered Decorative Icon */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="font-heading text-lg sm:text-xl text-center text-white/90 leading-snug tracking-wide group-hover:text-white transition-colors">
                  {post.tag}
                </span>
              </div>

              {/* Hover Overlay with Caption & Likes */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-[11px] leading-relaxed text-white/90 line-clamp-3">
                  {post.caption}
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/75 border-t border-white/20 pt-2">
                  <span className="inline-flex items-center gap-1">
                    <Heart size={11} className="fill-white/80" /> {post.likes}
                  </span>
                  <span className="tracking-wider uppercase">VIEW POST ↗</span>
                </div>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

