"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7 md:px-14 py-5 md:py-[26px] transition-all duration-400",
        scrolled ? "bg-ink/90 backdrop-blur-[18px]" : "bg-transparent",
        "after:absolute after:bottom-0 after:left-7 md:after:left-14 after:right-7 md:after:right-14 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-gold/25 after:to-transparent"
      )}
    >
      <Link
        href="#"
        className="font-fs text-[17px] font-extrabold tracking-[0.28em] text-gold no-underline cursor-hover"
      >
        LUMINA
      </Link>
      
      <ul className="hidden md:flex gap-10 list-none">
        {["About", "Work", "Services", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={item === "Work" ? "#portfolio" : `#${item.toLowerCase()}`}
              className="font-fm text-[10px] tracking-[0.2em] text-mist no-underline uppercase transition-colors duration-300 hover:text-gold cursor-hover"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
