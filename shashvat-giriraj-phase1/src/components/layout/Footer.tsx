import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-[#E6E4DC] bg-[#F2F0E9]">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-12 shrink-0">
                <Image
                  src="/images/temple-mark.png"
                  alt="Shashvat Giriraj Group"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-wider text-[#25251F]">
                SHASHVAT GIRIRAJ GROUP
              </h2>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#77766F]">
              {siteConfig.description}
            </p>
            <p className="mt-2 text-xs italic tracking-wider text-[#77766F]">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[2px] text-[#25251F] uppercase">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#77766F]">
              <Link href="/about" className="transition-colors hover:text-[#25251F]">
                About Us
              </Link>
              <Link href="/events" className="transition-colors hover:text-[#25251F]">
                Events
              </Link>
              <Link href="/yatras" className="transition-colors hover:text-[#25251F]">
                Our Yatras
              </Link>
              <Link href="/gallery" className="transition-colors hover:text-[#25251F]">
                Gallery
              </Link>
              <Link href="/seva" className="transition-colors hover:text-[#25251F]">
                Seva &amp; Labh
              </Link>
            </div>
          </div>

          {/* Connect Us Column with Official Social Media Logos */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[2px] text-[#25251F] uppercase">
              CONNECT WITH US
            </h3>
            <div className="flex flex-col gap-4 text-sm text-[#55544E]">
              {/* Instagram with Official Logo */}
              <a
                href={siteConfig.contacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-[#25251F]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6E4DC] bg-white transition-colors group-hover:border-[#25251F]">
                  <InstagramIcon size={16} />
                </span>
                <span>Instagram</span>
                <ArrowUpRight size={13} className="text-[#77766F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* YouTube with Official Logo */}
              <a
                href={siteConfig.contacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-[#25251F]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6E4DC] bg-white transition-colors group-hover:border-[#25251F]">
                  <YouTubeIcon size={16} />
                </span>
                <span>YouTube</span>
                <ArrowUpRight size={13} className="text-[#77766F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* WhatsApp with Official Logo */}
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-[#25251F]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6E4DC] bg-white transition-colors group-hover:border-[#25251F]">
                  <WhatsAppIcon size={16} />
                </span>
                <span>WhatsApp Group / Helpline</span>
                <ArrowUpRight size={13} className="text-[#77766F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="mt-1 text-xs tracking-wider text-[#77766F] underline underline-offset-4 hover:text-[#25251F]"
              >
                DIRECT ENQUIRY FORM &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with "Designed by Navkar.it" */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#E0DED6] pt-8 text-xs text-[#77766F] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Shashvat Giriraj Group. All rights reserved.</p>

          {/* Designed by Navkar.it */}
          <div className="flex items-center gap-1.5 font-medium text-[#25251F]">
            <span className="text-[#77766F]">Designed by</span>
            <span className="tracking-wider">Navkar.it</span>
          </div>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-[#25251F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#25251F] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
