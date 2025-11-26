import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import GradientText from "@/components/ui/GradientText";

const Skills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 0.8", "0.2 0.1"],
  });

  // --------------------------------------------
  // Generate 4 rows × 8 icons, evenly spaced
  // --------------------------------------------
  const icons = useMemo(() => {
    const rows = 4;
    const perRow = 8;

    const initialSpacing = 140; // wide spacing (2×)
    const finalSpacing = 90; // compressed spacing (1×)
    const rowHeight = 90;

    let result = [];

    for (let r = 0; r < rows; r++) {
      const yBase = r * rowHeight - (rowHeight * (rows - 1)) / 2;

      for (let i = 0; i < perRow; i++) {
        // center index = 3.5 so icon positions are symmetric
        const indexOffset = i - (perRow - 1) / 2;

        // Start far apart: x spaced by initialSpacing
        const startX = indexOffset * initialSpacing;

        // End closer: x spaced by finalSpacing
        const finalX = indexOffset * finalSpacing;

        result.push({
          row: r,
          startX,
          finalX,
          startY: yBase,
          finalY: yBase,
          startRotate: 180,
        });
      }
    }
    return result;
  }, []);

  return (
    <div className="flex flex-col mx-auto gap-4 w-full max-lg:max-w-xl mt-10">
      <div>
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

      {/* Animation Container */}
      <div ref={ref} className="relative hidden md:block w-full">
        <div className="h-100 flex items-center justify-center">
          <div className="">
            {icons.map((icon, i) => {
              // -------------------------------
              // X: compress spacing inward
              // -------------------------------
              const x = useTransform(
                scrollYProgress,
                [0, 1],
                [icon.startX, icon.finalX]
              );

              // -------------------------------
              // Y: stays constant (row aligned)
              // -------------------------------
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [icon.startY, icon.finalY]
              );

              // -------------------------------
              // Rotation: 0 → random angle
              // -------------------------------
              const rotate = useTransform(
                scrollYProgress,
                [0, 1],
                [icon.startRotate,0]
              );

              const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
              const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

              return (
                <motion.div
                  key={i}
                  style={{
                    x,
                    y,
                    rotate,
                    scale,
                    opacity,
                    position: "absolute",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                  }}
                  className="h-20 w-20 rounded-xl bg-neutral-700 left-1/2 top-1/2"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
