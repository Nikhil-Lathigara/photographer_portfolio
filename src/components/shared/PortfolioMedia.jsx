"use client";
import { useState } from "react";
import Image from "next/image";

export default function PortfolioMedia({
  item,
  showVideo = true,
  imageSizes,
  imageClassName,
  videoClassName,
  onImageClick,
  fill = true,
  width = 600,
  height = 800,
}) {
  const [imageSrc, setImageSrc] = useState(item.img);
  const isVideo = item.cat === "video" || item.cat === "videos";
  const fallbackImage = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=75";

  if (isVideo) {
    if (!showVideo) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#191713] to-[#0d0c0a] flex items-center justify-center">
          <span className="font-fm text-[10px] tracking-[0.2em] text-gold uppercase">
            Video
          </span>
        </div>
      );
    }

    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className={videoClassName ?? "w-full h-full object-cover"}
      >
        <source src={item.vid} type="video/mp4" />
      </video>
    );
  }

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={item.title}
        fill
        sizes={imageSizes}
        className={imageClassName ?? "object-cover"}
        onClick={onImageClick}
        onError={() => setImageSrc(fallbackImage)}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={item.title}
      width={width}
      height={height}
      sizes={imageSizes}
      className={imageClassName ?? "w-full h-auto object-cover"}
      onClick={onImageClick}
      onError={() => setImageSrc(fallbackImage)}
    />
  );
}
