"use client";
import React, { useState } from "react";
import Image from "next/image";
import { portfolioItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioMedia from "@/components/shared/PortfolioMedia";

const swipeConfidenceThreshold = 7000;

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const filters = ["all", "portrait", "landscape", "editorial", "video"];
  const filteredItems = portfolioItems.filter((item) => filter === "all" || filter === item.cat);

  const getCircularOffset = (index) => {
    if (!filteredItems.length) return 0;
    let diff = index - mobileIndex;
    const half = filteredItems.length / 2;
    if (diff > half) diff -= filteredItems.length;
    if (diff < -half) diff += filteredItems.length;
    return diff;
  };

  const semiCircleItems = filteredItems
    .map((item, index) => ({
      item,
      index,
      offset: getCircularOffset(index),
    }))
    .filter(({ offset }) => Math.abs(offset) <= 2)
    .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset));

  const goToSlide = (index) => {
    if (!filteredItems.length) return;
    setMobileIndex(index);
  };

  const paginate = (direction) => {
    if (filteredItems.length <= 1) return;
    setMobileIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return filteredItems.length - 1;
      if (next >= filteredItems.length) return 0;
      return next;
    });
  };

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <>
      <section id="portfolio" className="relative z-10 py-27.5 px-7 md:px-14 bg-[#0b0a08]">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div data-aos="fade-up">
            <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
              Selected Work
            </p>
            <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
              The <em className="italic text-gold">portfolio</em>
            </h2>
          </div>
          <ul className="flex gap-5 flex-wrap list-none" data-aos="fade-up" data-aos-delay="80">
            {filters.map((f) => (
              <li key={f}>
                <button
                  onClick={() => {
                    setFilter(f);
                    setMobileIndex(0);
                  }}
                  className={cn(
                    "font-fm text-[9px] tracking-[0.22em] uppercase bg-transparent border-b border-transparent pb-1 transition-colors duration-250 cursor-hover",
                    filter === f
                      ? "text-gold border-gold"
                      : "text-mist hover:text-gold hover:border-gold"
                  )}
                >
                  {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden" data-aos="fade-up">
          <div className="relative h-[480px] rounded-[24px] overflow-hidden border border-gold/20 bg-[radial-gradient(circle_at_50%_72%,rgba(201,168,76,0.12),transparent_62%)]">
            <div className="absolute inset-x-0 top-5 text-center font-fm text-[9px] tracking-[0.24em] text-mist uppercase">
              Swipe To Explore
            </div>

            <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[78vw] max-w-[360px] h-[360px]">
              {semiCircleItems.map(({ item, index, offset }) => {
                const isActive = offset === 0;
                const absOffset = Math.abs(offset);
                const widthClass = isActive ? "w-[76vw] max-w-[320px]" : "w-[56vw] max-w-[235px]";
                const cardHeight = isActive ? "h-[320px]" : "h-[245px]";

                return (
                  <motion.div
                    key={`${filter}-${item.id}`}
                    initial={false}
                    animate={{
                      x: offset * 86,
                      y: absOffset * 48,
                      rotate: offset * 11,
                      scale: isActive ? 1 : absOffset === 1 ? 0.83 : 0.68,
                      opacity: isActive ? 1 : absOffset === 1 ? 0.75 : 0.44,
                    }}
                    transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
                    style={{ zIndex: 40 - absOffset }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.26}
                    onDragEnd={
                      isActive
                        ? (_, { offset: dragOffset, velocity }) => {
                            const swipe = swipePower(dragOffset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) paginate(1);
                            if (swipe > swipeConfidenceThreshold) paginate(-1);
                          }
                        : undefined
                    }
                    onClick={() => {
                      if (isActive && item.cat !== "video") {
                        setLightboxImg(item.img);
                        return;
                      }
                      goToSlide(index);
                    }}
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 rounded-[18px] overflow-hidden border border-paper/25 shadow-[0_24px_58px_rgba(0,0,0,0.55)]",
                      widthClass,
                      cardHeight
                    )}
                  >
                    <PortfolioMedia
                      item={item}
                      showVideo={isActive}
                      imageSizes="(max-width: 768px) 76vw, 320px"
                    />

                    <div className={cn("absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent", isActive ? "opacity-100" : "opacity-55")} />

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 bottom-0 p-5"
                      >
                        <span className="font-fd text-[23px] font-light italic text-paper block">
                          {item.title}
                        </span>
                        <span className="font-fm text-[9px] tracking-[0.24em] text-gold uppercase mt-1 block">
                          {item.catLabel} - {item.year}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {filteredItems.length > 1 && (
            <div className="mt-5 flex items-center justify-center gap-2">
              {filteredItems.map((item, idx) => (
                <span
                  key={item.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === mobileIndex ? "w-6 bg-gold" : "w-2 bg-paper/30"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:block columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden cursor-hover group block w-full mb-5"
              >
                {item.cat === "video" ? (
                  <div className="relative w-full aspect-video overflow-hidden bg-[#0e0e0e]">
                    <PortfolioMedia
                      item={item}
                      imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      videoClassName="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] border-[1.5px] border-paper/55 rounded-full flex items-center justify-center pointer-events-none transition-colors duration-300 group-hover:bg-gold group-hover:border-gold after:content-[''] after:border-l-[15px] after:border-l-paper after:border-t-8 after:border-t-transparent after:border-b-8 after:border-b-transparent after:ml-1 after:transition-colors after:duration-300 group-hover:after:border-l-ink" />
                  </div>
                ) : (
                  <PortfolioMedia
                    item={item}
                    fill={false}
                    width={600}
                    height={800}
                    imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    imageClassName="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 cursor-none"
                    onImageClick={() => setLightboxImg(item.img)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent via-transparent opacity-0 transition-opacity duration-400 flex items-end p-6 group-hover:opacity-100 pointer-events-none">
                  <div className="translate-y-2 transition-transform duration-400 group-hover:translate-y-0">
                    <span className="font-fd text-[20px] font-light italic text-paper block">
                      {item.title}
                    </span>
                    <span className="font-fm text-[8px] tracking-[0.25em] text-gold uppercase mt-1 block">
                      {item.catLabel} - {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {lightboxImg && (
        <div
          className="fixed inset-0 z-[1000] bg-[#030303]/95 flex flex-col items-center justify-center backdrop-blur-md"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative w-[88vw] h-[88vh] max-w-[1200px] max-h-[820px] bg-transparent flex items-center justify-center">
            <Image
              src={lightboxImg}
              alt="Lightbox image"
              fill
              className="object-contain shadow-[0_32px_100px_rgba(0,0,0,0.9)] pointer-events-none"
            />
          </div>
          <button
            className="absolute top-8 right-10 font-fm text-[10px] tracking-[0.2em] text-mist bg-transparent uppercase transition-colors duration-300 hover:text-gold cursor-hover border-0 p-2"
            onClick={() => setLightboxImg(null)}
          >
            X Close
          </button>
        </div>
      )}
    </>
  );
}
