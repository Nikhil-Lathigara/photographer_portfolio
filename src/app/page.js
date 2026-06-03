"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ParallaxBreak from "@/components/ParallaxBreak";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 880,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Marquee />
      <ParallaxBreak />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </main>
  );
}
