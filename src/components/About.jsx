"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { aboutStats } from "@/lib/data";

function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    let observer;
    let v = 0;
    const inc = target / (1400 / 1000 * 60);
    
    const run = () => {
      v += inc;
      setCount(Math.min(Math.round(v), target));
      if (v < target) {
        requestAnimationFrame(run);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) observer.unobserve(currentRef);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}{target >= 100 ? '+' : ''}
    </span>
  );
}

export default function About() {
  return (
    <section 
      id="about" 
      className="relative z-10 py-[130px] px-7 md:px-14 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center bg-gradient-to-b from-transparent via-[#0b0907]/95 to-[#0c0a08]"
    >
      <div 
        className="relative w-full max-w-[420px] mx-auto md:mx-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="w-full aspect-[3/4] bg-[#1a1610] relative overflow-hidden before:content-[''] before:absolute before:inset-[18px] before:border before:border-gold/15 before:z-20 before:pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
            alt="Photographer portrait"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover relative z-0"
          />
          <div className="absolute -bottom-[30px] -right-[8px] font-fd text-[260px] font-light italic text-gold/5 leading-none pointer-events-none select-none z-10">
            A
          </div>
        </div>
        <div className="absolute bottom-[28px] -left-[18px] bg-gold text-ink py-[9px] px-[18px] font-fm text-[9px] tracking-[0.22em] uppercase z-30">
          LUMINA ©2025
        </div>
      </div>
      
      <div 
        data-aos="fade-left" 
        data-aos-duration="1000" 
        data-aos-delay="100"
      >
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
          About the Artist
        </p>
        <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight mb-7">
          A decade of<br />
          <em className="italic text-gold block">chasing light</em>
        </h2>
        
        <div className="text-[19px] font-light leading-[1.8] text-cream mt-7 space-y-4.5">
          <p>
            I am Arielle Voss — a visual artist working at the intersection of
            fine-art photography, fashion editorial, and documentary cinema. My
            camera is a notebook; each frame a sentence in an ongoing conversation
            with the world.
          </p>
          <p>
            Based between Mumbai and Paris, I collaborate with brands,
            publications, and independent artists to build visual languages that
            endure beyond the trending cycle.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-7 mt-[52px] border-t border-gold/15 pt-9">
          {aboutStats.map((stat, i) => (
            <div key={i}>
              <div className="font-fd text-[50px] font-light text-gold leading-none">
                <CountUp target={stat.n} />
              </div>
              <div className="font-fm text-[9px] tracking-[0.2em] text-mist uppercase mt-1">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
