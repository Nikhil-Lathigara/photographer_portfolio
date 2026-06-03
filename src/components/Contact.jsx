"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-[130px] px-7 md:px-14 pb-[100px] bg-gradient-to-b from-ink to-[#040404] grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[90px] items-start border-t border-gold/5">
      <div data-aos="fade-right">
        <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
          Book a Session
        </p>
        <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
          Tell me about
          <br />
          <em className="italic text-gold">your story</em>
        </h2>
        <p className="font-fd text-[18px] font-light leading-[1.8] text-mist my-6 md:mb-11">
          Send the essentials and I will reply with availability, package options,
          and next steps for your photography or film session.
        </p>

        <ul className="list-none flex flex-col">
          {[
            { lbl: "Email", val: "hello@lumina.studio" },
            { lbl: "Based in", val: "Mumbai, India" },
            { lbl: "Travel", val: "Available worldwide" },
            { lbl: "Response", val: "Within 24-48 hours" },
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

        <div className="mb-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
              Shoot Type
            </label>
            <select className="appearance-none w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40">
              <option value="" className="bg-[#1a1814] text-paper">Select one</option>
              <option className="bg-[#1a1814] text-paper">Wedding</option>
              <option className="bg-[#1a1814] text-paper">Portrait Session</option>
              <option className="bg-[#1a1814] text-paper">Event Coverage</option>
              <option className="bg-[#1a1814] text-paper">Fashion / Editorial</option>
              <option className="bg-[#1a1814] text-paper">Brand Photography</option>
              <option className="bg-[#1a1814] text-paper">Highlight Film</option>
            </select>
          </div>

          <div>
            <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
              Preferred Date
            </label>
            <input
              type="text"
              placeholder="Month / date"
              className="w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
            />
          </div>
        </div>

        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Location
          </label>
          <input
            type="text"
            placeholder="City or venue"
            className="w-full bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
          />
        </div>

        <div className="mb-7">
          <label className="block font-fm text-[9px] tracking-[0.22em] text-gold uppercase mb-[9px]">
            Message
          </label>
          <textarea
            placeholder="Tell me what you are planning..."
            className="w-full min-h-[130px] resize-y bg-gold/5 border border-gold/20 text-paper font-fd text-[16px] font-light px-[18px] py-[14px] outline-none transition-colors duration-300 placeholder-mist focus:border-gold focus:bg-gold/10 cursor-hover hover:border-gold/40"
          />
        </div>

        <button className="inline-block border-none font-fm text-[10px] tracking-[0.25em] text-ink uppercase bg-gold py-[17px] px-10 transition-transform duration-200 hover:bg-cream hover:-translate-y-0.5 cursor-hover">
          Send Inquiry
        </button>
      </div>
    </section>
  );
}
