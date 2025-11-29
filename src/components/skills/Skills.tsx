import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GradientText from "@/components/ui/GradientText";
import { techStack } from "@/components/utils/uitility";

const Skills = () => {
  // Decide how many columns you want (use any number)
  const COLS = 15; // for example, 8 icons per row

  const total = techStack.length;
  const ROWS = Math.ceil(total / COLS);

  const BASE_DELAY = 0.5;
  const NOISE = 0.05;

  // Pick a random origin based on dynamic rows/cols
  const getRandomCoordinate = (): [number, number] => [
    Math.floor(Math.random() * ROWS),
    Math.floor(Math.random() * COLS),
  ];

  const [origin, setOrigin] = useState<[number, number]>();

  useEffect(() => {
    setOrigin(getRandomCoordinate());
  }, []);

  if (!origin) return null;

  const getDistance = (row: number, col: number) => {
    return (
      Math.sqrt((row - origin[0]) ** 2 + (col - origin[1]) ** 2) /
      (ROWS * Math.sqrt(2))
    );
  };

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

      <div className="flex justify-center items-center p-8">
        <div
          className="grid gap-2 sm:gap-3"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          }}
        >
          {techStack.map((icon, idx) => {
            const row = Math.floor(idx / COLS);
            const col = idx % COLS;

            const delay =
              getDistance(row, col) * BASE_DELAY + Math.random() * NOISE;

            const isOrigin = getDistance(row, col) === 0;

            return (
              <motion.div
                className="bg-muted/50 border border-muted-foreground/50 rounded-2xl flex justify-center items-center p-4"
                key={idx}
                style={{ backgroundColor: isOrigin ? "orange" : "" }}
                initial={{
                  opacity: isOrigin ? 1 : 0,
                  scale: isOrigin ? 1 : 0.3,
                }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  delay: delay,
                }}
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
