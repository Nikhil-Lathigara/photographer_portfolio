"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useClientReady from "@/hooks/useClientReady";
import useSectionScrollProgress from "@/hooks/useSectionScrollProgress";
import MotionImageCard from "@/components/shared/MotionImageCard";

export default function Hero() {
  const mounted = useClientReady();
  const { ref: sectionRef, scrollYProgress } = useSectionScrollProgress(["start start", "end start"]);

  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.72, 0.36]);
  const collageY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 22, mass: 0.5 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 22, mass: 0.5 });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateX.set(py * -8);
    rotateY.set(px * 10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative z-10 h-screen min-h-150 flex items-end px-7 pb-18 md:px-14 md:pb-20 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-linear-to-t before:from-ink/85 before:via-ink/30 before:to-ink/10 before:z-10 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_72%_40%,rgba(201,168,76,0.22),transparent_48%)] after:z-0"
    >
      <motion.div
        className="absolute inset-0 md:hidden"
        style={mounted ? { y: heroBgY } : undefined}
      >
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=70"
          alt="Woman with camera in dramatic light"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover opacity-35"
        />
      </motion.div>

      <motion.div
        className="max-w-170 md:max-w-[54%] relative z-20"
        style={mounted ? { y: textY, opacity: textOpacity } : undefined}
      >
        <p className="font-fm text-[10px] tracking-[0.28em] text-gold uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_0.4s_forwards]">
          Visual Artist & Photography - Est. 2014
        </p>
        <h1 className="font-fd text-[clamp(56px,8.5vw,116px)] font-light leading-[0.93] tracking-tight mb-7 opacity-0 animate-[fadeUp_0.9s_0.6s_forwards]">
          Light is
          <br />
          <em className="italic text-gold block">the medium.</em>
        </h1>
        <p className="font-fd text-[17px] font-light text-mist leading-relaxed max-w-100 opacity-0 animate-[fadeUp_0.8s_0.85s_forwards]">
          Capturing the world between the blinks - editorial, commercial, and
          cinematic photography that breathes.
        </p>
        <a
          href="#portfolio"
          className="mt-9 inline-flex items-center gap-3.5 font-fm text-[10px] tracking-[0.22em] uppercase text-paper no-underline border-b border-paper/25 pb-2 opacity-0 animate-[fadeUp_0.8s_1.1s_forwards] transition-colors duration-300 hover:text-gold hover:border-gold cursor-hover"
        >
          View Portfolio{" "}
          <span className="inline-block w-6.5 h-px bg-current relative after:content-[''] after:absolute after:right-0 after:-top-0.75 after:w-1.5 after:h-1.75 after:border-t after:border-r after:border-current after:rotate-45" />
        </a>
      </motion.div>

      <motion.div
        className="absolute right-5 md:right-14 top-24 md:top-[14%] w-[44vw] max-w-137.5 h-[62vh] max-h-160 hidden md:block z-20 pointer-events-none [transform-style:preserve-3d]"
        style={
          mounted
            ? { y: collageY, rotateX: smoothRotateX, rotateY: smoothRotateY }
            : { rotateX: smoothRotateX, rotateY: smoothRotateY }
        }
      >
        <MotionImageCard
          className="absolute right-0 top-0 w-[76%] h-[77%] rounded-[22px] border border-gold/25 shadow-[0_28px_80px_rgba(0,0,0,0.52)]"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1100&q=75"
          alt="Editorial portrait in warm evening light"
          sizes="(max-width: 1024px) 38vw, 30vw"
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.9, delay: 0.85 },
            y: { duration: 8.4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.9, delay: 0.85 },
          }}
        />

        <MotionImageCard
          className="absolute left-0 top-[10%] w-[44%] h-[36%] rounded-[18px] border border-paper/20 shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=75"
          alt="Photographer framing a shot on location"
          sizes="(max-width: 1024px) 20vw, 15vw"
          initial={{ opacity: 0, y: 28, x: -12, scale: 0.92 }}
          animate={{ opacity: 1, y: [0, 9, 0], x: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.8, delay: 1.1 },
            y: { duration: 7.3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.8, delay: 1.1 },
            scale: { duration: 0.8, delay: 1.1 },
          }}
        />

        <MotionImageCard
          className="absolute left-[8%] bottom-[2%] w-[52%] h-[30%] rounded-[16px] border border-gold/20 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
          src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&q=75"
          alt="Film rolls and camera gear flatlay"
          sizes="(max-width: 1024px) 22vw, 16vw"
          initial={{ opacity: 0, y: 26, x: -6, scale: 0.94 }}
          animate={{ opacity: 1, y: [0, -8, 0], x: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.8, delay: 1.25 },
            y: { duration: 6.4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.8, delay: 1.25 },
            scale: { duration: 0.8, delay: 1.25 },
          }}
        />
      </motion.div>

      <div className="absolute right-14 bottom-20 hidden md:flex flex-col items-center gap-2.5 opacity-0 animate-[fadeUp_0.8s_1.3s_forwards] z-20">
        <span className="font-fm text-[9px] tracking-[0.22em] text-mist uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-[1px] h-[52px] bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
