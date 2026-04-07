"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });
  
  const ringX = useSpring(-100, { stiffness: 150, damping: 20 });
  const ringY = useSpring(-100, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };
    
    const handleMouseOver = (e) => {
      const isHoverable = e.target.closest('a, button, .cursor-hover, input, textarea, select');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  // Handle case where custom cursor is visible
  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovering ? 20 : 12,
          height: isHovering ? 20 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-gold/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 38,
          height: 38,
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: isHovering ? 58 : 38,
          height: isHovering ? 58 : 38,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
