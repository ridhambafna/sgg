import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import Philosophy from "@/components/home/Philosophy";
import InstagramLookbook from "@/components/home/InstagramLookbook";
import GalleryPreview from "@/components/home/GalleryPreview";
import CommunityCTA from "@/components/home/CommunityCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedEvent />
      <Philosophy />
      <InstagramLookbook />
      <GalleryPreview />
      <CommunityCTA />
    </>
  );
}
