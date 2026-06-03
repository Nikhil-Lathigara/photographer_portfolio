"use client";
import React from "react";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative z-10 min-h-[430px] overflow-hidden flex items-center px-7 md:px-14 py-24 border-t border-gold/10">
      <Image
        src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1800&q=75"
        alt="Couple photographed during golden hour"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />

      <div className="relative z-10 max-w-[720px]" data-aos="fade-up">
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-4">
          Now Booking
        </p>
        <h2 className="font-fd text-[clamp(38px,5vw,76px)] font-light leading-none tracking-tight">
          Have a shoot in mind?
          <br />
          <em className="italic text-gold">Let us make it timeless.</em>
        </h2>
        <p className="mt-6 max-w-[560px] font-fd text-[18px] font-light leading-[1.75] text-cream">
          Share your date, location, and the feeling you want from the photographs.
          I will help shape the session from first idea to final gallery.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex items-center justify-center bg-gold text-ink px-8 py-4 font-fm text-[10px] tracking-[0.24em] uppercase no-underline transition-transform duration-200 hover:bg-cream hover:-translate-y-0.5 cursor-hover"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
