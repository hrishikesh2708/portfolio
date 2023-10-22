import React from "react";
import { motion, useScroll } from "framer-motion";

function ScrollIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure class="absolute left-0 stroke-shade-1">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          class="stroke-accent-3 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          class="stroke-[5px] fill-shade-5"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" class="stroke-1 fill-accent-3" />
      </svg>
    </figure>
  );
}

export default ScrollIcon;
