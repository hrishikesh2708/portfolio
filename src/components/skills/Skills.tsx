import GradientText from "@/components/ui/GradientText";
import { techStack } from "@/components/utils/uitility";
import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import { useRef, useEffect } from "react";

const Skills = () => {
  // Steel-flower rotation
  const flowerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const prevScroll = useRef(0);
  const rotation = useMotionValue(0);

useEffect(() => {
  const unsubscribe = scrollY.on("change", (currentY) => {
    const delta = currentY - prevScroll.current;
    rotation.set(rotation.get() + delta * 0.2);
    prevScroll.current = currentY;
  });

  return () => unsubscribe();
}, [scrollY, rotation]);

  // Icons animation on entering viewport
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const COLS = 12;

  return (
    <div
      ref={containerRef}
      className="flex flex-col mx-auto gap-4 w-full max-lg:max-w-xl mt-10"
    >
      {/* Steel-flower */}
      <div className="container relative mx-auto">
        <div className="h-[260px] mask-[linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]">
          <motion.div
            ref={flowerRef}
            style={{ rotate: rotation }}
            className="relative mx-auto w-[400px] md:w-[380px]"
          >
            <img
              src="/steel-flower.webp"
              alt="steel flower"
              className="w-full select-none rounded-full opacity-85"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* Section title */}
      <div className="-translate-y-15">
        <p className="text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-1">
          My Skills
        </p>

        <h2 className="text-center capitalize font-instrument text-4xl xs:text-5xl md:text-6xl mb-3">
          <span className="inline">
            The secret{" "}
            <GradientText
              colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
              animationSpeed={5}
              showBorder={false}
              className="inline italic leading-10 md:leading-18"
            >
              Sauce
            </GradientText>
          </span>
        </h2>

        <p className="text-center text-muted-foreground self-center text-lg">
          My expertise across various technologies and tools
        </p>
      </div>

      {/* Icons grid */}
      <div className="flex justify-center items-center">
        <div
          className="grid gap-2 sm:gap-3"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          }}
        >
          {techStack.map((icon, idx) => {
            const col = idx % COLS;
            const centerCol = Math.floor(COLS / 2);

            // Dynamic X-offset based on distance from center
            const offsetValues = Array.from({ length: COLS }, (_, i) => {
              const dist = Math.abs(i - centerCol);
              return 5 + dist * 180; // tweak min/max
            });

            const initialX =
              col < centerCol ? -offsetValues[col] : offsetValues[col];

            // Dynamic Y-offset based on distance from center
            const yOffsets = Array.from({ length: COLS }, (_, i) => {
              const dist = Math.abs(i - centerCol);
              return 5 - dist * 8; // produces [5,4,3,2,1,2,3,4,5] when scaled
            });

            const initialY = yOffsets[col] * 5;

            // Animate X on scroll into view
            const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

            // Animate X → 0
            const animatedX = useTransform(progress, [0, 1], [initialX, 0]);

            // Animate Y → 0
            const animatedY = useTransform(progress, [0, 1], [initialY, 0]);

            // Random initial rotation per icon
            const initialRotation = Math.random() * 90 - 180; // 180-270
            const animatedRotation = useTransform(
              progress,
              [0, 1],
              [initialRotation, 0]
            );

            return (
              <motion.div
                key={idx}
                className="bg-muted border border-muted-foreground/50 rounded-lg flex justify-center items-center p-2 h-14 w-14"
                style={{ x: animatedX, y: animatedY, rotate: animatedRotation }}
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                {icon.icon}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
