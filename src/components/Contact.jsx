"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-[130px] px-7 md:px-14 pb-[100px] bg-gradient-to-b from-ink to-[#040404] grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[90px] items-start border-t border-gold/5">
      <div data-aos="fade-right">
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
          Get in Touch
        </p>
        <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
          Let&apos;s make<br />
          <em className="italic text-gold">something real</em>
        </h2>
        <p className="font-fd text-[18px] font-light leading-[1.8] text-mist my-6 md:mb-11">
          Whether it&apos;s a commission, a collaboration, or simply a question about a
          print — I&apos;d love to hear from you.
        </p>
        
        <ul className="list-none flex flex-col">
          {[
            { lbl: "Email", val: "arielle@lumina.studio" },
            { lbl: "Based in", val: "Mumbai & Paris" },
            { lbl: "Available", val: "Q2 – Q3 2025" },
            { lbl: "Response", val: "Within 48 hours" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex gap-[18px] py-[18px] border-b border-gold/10 first:border-t"
            >
              <span className="font-fm text-[9px] tracking-[0.22em] text-gold uppercase min-w-[76px] pt-[3px]">
                {item.lbl}
              </span>
              <span className="font-fd text-[17px] font-light text-cream">
                {item.val}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-aos="fade-left" data-aos-delay="100" className="w-full">
        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
          />
        </div>
        
        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="email@domain.com"
            className="w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
          />
        </div>
        
        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Project Type
          </label>
          <select className="appearance-none w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40">
            <option value="" className="bg-[#1a1814] text-paper">Select a discipline…</option>
            <option className="bg-[#1a1814] text-paper">Editorial Photography</option>
            <option className="bg-[#1a1814] text-paper">Cinematic Video</option>
            <option className="bg-[#1a1814] text-paper">Commercial Campaign</option>
            <option className="bg-[#1a1814] text-paper">Art Direction</option>
            <option className="bg-[#1a1814] text-paper">Workshop / Mentoring</option>
            <option className="bg-[#1a1814] text-paper">Print Enquiry</option>
          </select>
        </div>
        
        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Message
          </label>
          <textarea
            placeholder="Tell me about your vision…"
            className="w-full min-h-[130px] resize-y bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
          />
        </div>
        
        <button className="inline-block border-none font-fm text-[10px] tracking-[0.25em] text-ink uppercase bg-gold py-[17px] px-10 transition-transform duration-200 hover:bg-cream hover:-translate-y-0.5 cursor-hover">
          Send Enquiry
        </button>
      </div>
    </section>
  );
}
