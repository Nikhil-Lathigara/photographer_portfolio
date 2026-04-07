"use client";
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
  if (item.cat === "video") {
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
        src={item.img}
        alt={item.title}
        fill
        sizes={imageSizes}
        className={imageClassName ?? "object-cover"}
        onClick={onImageClick}
      />
    );
  }

  return (
    <Image
      src={item.img}
      alt={item.title}
      width={width}
      height={height}
      sizes={imageSizes}
      className={imageClassName ?? "w-full h-auto object-cover"}
      onClick={onImageClick}
    />
  );
}
