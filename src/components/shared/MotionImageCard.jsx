"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MotionImageCard({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  children,
  ...motionProps
}) {
  return (
    <motion.figure className={cn("relative overflow-hidden", className)} {...motionProps}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {children}
    </motion.figure>
  );
}
