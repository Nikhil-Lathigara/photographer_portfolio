"use client";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";
import useClientReady from "@/hooks/useClientReady";
import useSectionScrollProgress from "@/hooks/useSectionScrollProgress";
import MotionImageCard from "@/components/shared/MotionImageCard";

export default function ParallaxBreak() {
  const mounted = useClientReady();
  const { ref, scrollYProgress } = useSectionScrollProgress(["start end", "end start"]);

  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);
  const quoteY = useTransform(scrollYProgress, [0, 0.5, 1], [52, 0, -42]);
  const quoteOpacity = useTransform(scrollYProgress, [0.04, 0.36, 0.75, 1], [0.35, 1, 1, 0.45]);
  const leftCardY = useTransform(scrollYProgress, [0, 1], [70, -50]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [45, -80]);

  return (
    <section ref={ref} className="h-100vh min-h-110 overflow-hidden relative z-10">
      <motion.div
        className="w-full h-[144%] absolute top-[-22%]"
        style={mounted ? { y: bgY, scale: bgScale } : undefined}
      >
        <Image
          src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1800&q=72"
          alt="Foggy mountain valley"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/48" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.16),transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.7),rgba(8,8,8,0.12))]" />
      <div className="absolute inset-0 mix-blend-soft-light opacity-35 pointer-events-none" />

      <MotionImageCard
        className="absolute left-[7%] bottom-[14%] hidden lg:block w-60 h-78 border border-paper/28 shadow-[0_20px_56px_rgba(0,0,0,0.55)]"
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=700&q=75"
        alt="Portrait with soft shadows"
        sizes="240px"
        imageClassName="object-cover transition-transform duration-700 hover:scale-105"
        style={mounted ? { y: leftCardY, rotate: -5.5 } : { rotate: -5.5 }}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <MotionImageCard
        className="absolute right-[8%] top-[16%] hidden lg:block w-[225px] h-[280px] border border-gold/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=700&q=75"
        alt="Photographer with film camera"
        sizes="225px"
        imageClassName="object-cover transition-transform duration-700 hover:scale-105"
        style={mounted ? { y: rightCardY, rotate: 5.5 } : { rotate: 5.5 }}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      />

      <motion.blockquote
        className="absolute inset-0 z-10 flex items-center justify-center px-8 md:px-14"
        style={mounted ? { y: quoteY, opacity: quoteOpacity } : undefined}
      >
        <div className="max-w-[830px] text-center backdrop-blur-[1.5px]">
          <p className="font-fd text-[clamp(24px,3.55vw,54px)] font-light italic text-cream leading-[1.35]">
            &quot;Photography is the story I fail to put into words.&quot;
          </p>
          <cite className="block font-fm text-[10px] tracking-[0.25em] text-gold not-italic uppercase mt-[18px]">
            - Destin Sparks
          </cite>
        </div>
      </motion.blockquote>

    </section>
  );
}
