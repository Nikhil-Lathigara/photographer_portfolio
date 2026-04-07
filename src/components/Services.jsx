"use client";
import React from "react";
import Image from "next/image";
import { services } from "@/lib/data";

const serviceShots = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=75",
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=700&q=75",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=75",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=75",
  "https://images.unsplash.com/photo-1470165518248-ff2607d92541?w=700&q=75",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=75",
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-[130px] px-7 md:px-14 bg-[#0e0d0b]">
      <div data-aos="fade-up">
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
          What I Do
        </p>
        <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
          Creative <em className="italic text-gold">disciplines</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-[72px] border border-gold/12 bg-gold/12">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="p-10 lg:p-12 relative overflow-hidden transition-colors duration-400 hover:bg-gold/5 bg-[#0e0d0b] group cursor-hover"
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 80}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.12),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100" />

            <div className="absolute right-4 top-4 w-[84px] h-[112px] overflow-hidden border border-gold/22 opacity-0 translate-y-4 rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 hidden sm:block">
              <Image
                src={serviceShots[idx % serviceShots.length]}
                alt={`${srv.title} visual`}
                fill
                sizes="84px"
                className="object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="font-fm text-[10px] text-gold tracking-[0.2em] mb-7 relative z-10">
              {srv.num}
            </div>
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
              {srv.svg}
            </div>
            <div className="font-fd text-[26px] font-light italic mb-3.5 relative z-10">
              {srv.title}
            </div>
            <p className="font-fd text-[15px] font-light leading-[1.8] text-mist relative z-10 max-w-[340px]">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
