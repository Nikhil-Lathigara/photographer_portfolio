"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import NextGalleryPortfolio from "@/components/NextGalleryPortfolio";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({
      duration: 880,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-ink">
      <Navbar />
      <section className="relative z-10 min-h-[54vh] flex items-end px-7 md:px-14 pb-16 pt-32 bg-[#090806] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(201,168,76,0.22),transparent_42%)]" />
        <div className="relative z-10 max-w-[820px]" data-aos="fade-up">
          <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-4">
            Complete Gallery
          </p>
          <h1 className="font-fd text-[clamp(52px,8vw,112px)] font-light leading-[0.95] tracking-tight">
            Photographs,
            <br />
            <em className="italic text-gold">films & stories.</em>
          </h1>
          <p className="mt-7 max-w-[590px] font-fd text-[18px] font-light leading-[1.75] text-mist">
            Browse recent weddings, portraits, events, fashion stories, and short films.
          </p>
        </div>
      </section>
      <NextGalleryPortfolio />
      <BookingCTA />
      <Footer />
    </main>
  );
}
