"use client";
import React from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-[130px] pl-7 md:pl-14 bg-ink overflow-hidden border-t border-gold/5">
      <div data-aos="fade-up" className="pr-7 md:pr-14">
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
          Client Reviews
        </p>
        <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
          What clients <em className="italic text-gold">remember</em>
        </h2>
      </div>

      <div className="flex gap-12 mt-16 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-1 pr-7 md:pr-14">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-none w-[min(460px,80vw)] snap-start p-10 md:p-[52px] border border-gold/15 relative bg-ink"
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            <div className="absolute top-6 left-9 font-fd text-[76px] text-gold opacity-[0.38] leading-none pointer-events-none">
              &ldquo;
            </div>
            <div className="font-fd text-[19px] font-light italic leading-[1.65] text-cream mt-5 relative z-10">
              {t.text}
            </div>
            <div className="mt-8 flex items-center gap-3.5">
              <div className="w-[42px] h-[42px] rounded-full bg-ash border border-gold/30 flex items-center justify-center font-fd text-[15px] italic text-gold shrink-0">
                {t.av}
              </div>
              <div>
                <div className="font-fs text-[13px] font-bold text-paper">
                  {t.name}
                </div>
                <div className="font-fm text-[9px] tracking-[0.15em] text-mist uppercase mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
