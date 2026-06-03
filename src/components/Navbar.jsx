"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Gallery", href: "/gallery" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ];

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
        href="/"
        onClick={() => setMenuOpen(false)}
        className="font-fs text-[17px] font-extrabold tracking-[0.28em] text-gold no-underline cursor-hover"
      >
        LUMINA
      </Link>
      
      <ul className="hidden md:flex gap-10 list-none">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="font-fm text-[10px] tracking-[0.2em] text-mist no-underline uppercase transition-colors duration-300 hover:text-gold cursor-hover"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden relative z-[60] w-10 h-10 border border-gold/25 text-gold flex items-center justify-center bg-ink/40 backdrop-blur cursor-hover"
      >
        {menuOpen ? <X size={18} strokeWidth={1.7} /> : <Menu size={18} strokeWidth={1.7} />}
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 md:hidden px-7 pb-7 pt-5 bg-ink/96 backdrop-blur-[18px] border-b border-gold/15 transition-all duration-300",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <ul className="list-none flex flex-col">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-gold/10 last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-5 font-fm text-[11px] tracking-[0.24em] text-cream no-underline uppercase transition-colors duration-300 hover:text-gold cursor-hover"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
