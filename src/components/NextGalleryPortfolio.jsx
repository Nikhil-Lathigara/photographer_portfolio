"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Gallery } from "next-gallery";
import { Play, X } from "lucide-react";
import { portfolioItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["all", "weddings", "portraits", "events", "fashion", "videos"];

export default function NextGalleryPortfolio() {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => filter === "all" || filter === item.cat),
    [filter]
  );

  const images = useMemo(
    () =>
      filteredItems.map((item) => ({
        src: item.img,
        alt: item.title,
        aspect_ratio: item.aspectRatio ?? 4 / 5,
        nextImageProps: {
          sizes: "(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw",
        },
      })),
    [filteredItems]
  );

  return (
    <>
      <section id="gallery" className="relative z-10 py-24 md:py-28 px-3 sm:px-7 md:px-14 bg-[#0b0a08]">
        <div className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-6 px-4 sm:px-0">
          <div data-aos="fade-up">
            <p className="font-fm text-[10px] tracking-[0.3em] text-gold uppercase mb-3.5">
              Gallery
            </p>
            <h2 className="font-fd text-[clamp(34px,4.5vw,68px)] font-light leading-none tracking-tight">
              Browse the <em className="italic text-gold">archive</em>
            </h2>
            <p className="mt-5 max-w-[560px] font-fd text-[17px] font-light leading-[1.75] text-mist">
              A flowing mosaic of recent weddings, portraits, events, fashion stories, and films.
            </p>
          </div>

          <ul className="flex gap-4 sm:gap-5 flex-wrap list-none" data-aos="fade-up" data-aos-delay="80">
            {filters.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setFilter(item)}
                  className={cn(
                    "font-fm text-[9px] tracking-[0.2em] uppercase bg-transparent border-b border-transparent pb-1 transition-colors duration-250 cursor-hover",
                    filter === item
                      ? "text-gold border-gold"
                      : "text-mist hover:text-gold hover:border-gold"
                  )}
                >
                  {item === "all" ? "All" : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden border border-gold/10 bg-ink" data-aos="fade-up">
          <Gallery
            images={images}
            widths={[ 900, 1280]}
            ratios={[ 2.6, 4.2, 5.8]}
            gap="3px"
            lastRowBehavior="match-previous"
            overlay={(index) => {
              const item = filteredItems[index];
              const isVideo = item.cat === "videos";

              return (
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="absolute inset-0 group block w-full h-full text-left cursor-hover"
                  aria-label={`Open ${item.title}`}
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/5 to-transparent opacity-100 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {isVideo && (
                    <span className="absolute top-3 right-3 md:top-5 md:right-5 w-9 h-9 md:w-11 md:h-11 rounded-full border border-paper/65 bg-ink/30 backdrop-blur-sm flex items-center justify-center text-paper">
                      <Play size={16} fill="currentColor" strokeWidth={1.5} />
                    </span>
                  )}

                  <span className="absolute left-3 right-3 bottom-3 md:left-5 md:right-5 md:bottom-5">
                    <span className="font-fd text-[16px] sm:text-[22px] md:text-[24px] font-light italic text-paper block leading-tight">
                      {item.title}
                    </span>
                    <span className="font-fm text-[7px] sm:text-[8px] tracking-[0.18em] sm:tracking-[0.25em] text-gold uppercase mt-1.5 block">
                      {item.catLabel} - {item.year}
                    </span>
                  </span>
                </button>
              );
            }}
          />
        </div>
      </section>

      {activeItem && (
        <div
          className="fixed inset-0 z-[1000] bg-[#030303]/95 flex flex-col items-center justify-center backdrop-blur-md p-5"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-[1180px] h-[82vh] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.cat === "videos" ? (
              <video
                src={activeItem.vid}
                controls
                autoPlay
                className="w-full max-h-full object-contain shadow-[0_32px_100px_rgba(0,0,0,0.9)]"
              />
            ) : (
              <Image
                src={activeItem.img}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain shadow-[0_32px_100px_rgba(0,0,0,0.9)]"
              />
            )}
          </div>
          <button
            className="absolute top-6 right-6 md:top-8 md:right-10 w-11 h-11 border border-gold/30 text-mist bg-ink/50 flex items-center justify-center transition-colors duration-300 hover:text-gold cursor-hover"
            onClick={() => setActiveItem(null)}
            aria-label="Close gallery preview"
          >
            <X size={18} strokeWidth={1.6} />
          </button>
        </div>
      )}
    </>
  );
}
