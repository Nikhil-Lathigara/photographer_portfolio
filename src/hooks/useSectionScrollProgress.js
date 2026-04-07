import { useRef } from "react";
import { useScroll } from "framer-motion";

export default function useSectionScrollProgress(offset = ["start end", "end start"]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return { ref, scrollYProgress };
}
