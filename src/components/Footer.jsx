"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#030303] py-12 px-7 md:px-14 flex flex-col md:flex-row items-center justify-between border-t border-gold/10 gap-5 text-center md:text-left">
      <div className="font-fs text-[19px] font-extrabold tracking-[0.25em] text-gold">
        LUMINA
      </div>
      <div className="font-fm text-[9px] tracking-[0.15em] text-mist uppercase">
        2026 Arielle Voss - Photography Portfolio
      </div>
      <div className="flex gap-6">
        {["Instagram", "Behance", "VSCO", "Email"].map((social) => (
          <Link
            key={social}
            href={social === "Email" ? "mailto:hello@lumina.studio" : "#"}
            className="font-fm text-[9px] tracking-[0.15em] text-mist no-underline uppercase transition-colors duration-300 hover:text-gold cursor-hover"
          >
            {social}
          </Link>
        ))}
      </div>
    </footer>
  );
}
