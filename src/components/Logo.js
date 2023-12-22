import { motion } from "framer-motion";
import React from "react";
// const MotionLink = motion(a);
function Logo() {
  return (
    <div class="flex items-center justify-center mt-2">
      <motion.a
        href="/"
        class=" w-12 h-12 bg-accent-3 text-shade-1 flex items-center justify-center rounded text-xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "#121212",
          ],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        HT
      </motion.a>
    </div>
  );
}

export default Logo;
