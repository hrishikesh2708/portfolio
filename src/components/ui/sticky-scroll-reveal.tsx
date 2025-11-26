"use client";
import React, { useEffect, useRef, useState } from "react";
import { color, useMotionValueEvent, useScroll } from "motion/react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Minus } from "lucide-react";
import { Badge } from "./badge";

const rightPanelVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // TS-safe cubic-bezier tuple
    },
  },
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    color: string;
    subtitle: string;
    description: string;
    points: string[];
    techStack: {
      name: string;
      icon: React.ReactNode;
    }[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const gradientMap: Record<string, string> = {
    fuchsia:
      "linear-gradient(10deg, #c026d3 49.9%, #c026d3 81.7%, #e879f9 99.88%)",
    pink: "linear-gradient(10deg, #db2777 49.9%, #db2777 81.7%, #f472b6 99.88%)",
    blue: "linear-gradient(10deg, #2563eb 49.9%, #2563eb 81.7%, #60a5fa 99.88%)",
    teal: "linear-gradient(10deg, #14b8a6 49.9%, #14b8a6 81.7%, #5eead4 99.88%)",
  };

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className="relative flex h-220 justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 lg:max-w-[70%] lg:gap-y-28">
        <div className="max-w-5xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <div className="relative w-full rounded-2xl border bg-muted/40 overflow-hidden">
                <div
                  className="absolute inset-x-0 top-0 h-px hidden dark:block
                  bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,#fff_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)]"
                />

                <div className="relative m-1.5 rounded-lg overflow-hidden aspect-4/3 min-h-120 max-h-140">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{
                      background: `${gradientMap[item.color]}`,
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-10 hidden h-px opacity-70 dark:block
                 bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#fff_50%,rgba(0,0,0,0)_80%)]"
                  />
                  <div className="relative z-20 hidden lg:flex px-10 py-8 items-center justify-between text-white/70">
                    <h3 className="text-lg xl:text-2xl">{item.subtitle}</h3>
                    <ArrowRight size={24} />
                    <div className="z-10 w-full flex flex-col items-center justify-center absolute lg:top-28 left-0 right-0">
                      <div className="relative w-full h-full flex justify-center items-center group perspective-[2000px] pt-4">
                        <img
                          alt="NextVenture1"
                          draggable="false"
                          loading="lazy"
                          width="800"
                          height="800"
                          decoding="async"
                          data-nimg="1"
                          className="w-[85%] rounded-xl will-change-transform lg:block max-lg:z-10 max-lg:border-4 max-lg:border-white/5 transition-all duration-500 ease-in-out scale-80 -rotate-6 brightness-90 -translate-x-10 lg:scale-100 lg:rotate-0 lg:brightness-100 lg:translate-x-0 lg:group-hover:scale-[0.90] lg:group-hover:-rotate-6 lg:group-hover:brightness-90 lg:group-hover:-translate-x-10 shadow-[0px_40px_50px_10px_rgba(0,0,0,0.22)]"
                          style={{ color: "transparent" }}
                          src="public/asset/lee-campbell-DtDlVpy-vvQ-unsplash.jpg"
                        ></img>
                        <video
                          width="800"
                          height="800"
                          className=" object-cover absolute w-[65%] rounded-xl shadow-2xl border-4 border-white/5 will-change-transform lg:block transition-all duration-700 cubic-bezier(0.175, 0.885, 0.32, 1.275) opacity-100 -translate-y-5 translate-x-4 scale-90 rotate-3 lg:opacity-0 lg:translate-y-12 lg:scale-75 lg:rotate-12 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-5 lg:group-hover:translate-x-4 lg:group-hover:scale-100 lg:group-hover:rotate-3 bottom-0 right-[5%]"
                          muted
                          playsInline
                          loop
                          autoPlay={false}
                        >
                          <source
                            src="public/asset/vecteezy_artificial-intelligence-a-i-technology-machine-learning_20060759.mov"
                            type="video/mov"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        key={activeCard}
        variants={rightPanelVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "sticky top-10 hidden h-full w-full overflow-hidden rounded-md lg:block py-4 lg:w-[30%]",
          contentClassName
        )}
      >
        {/* Title + Description */}
        <div className="space-y-2">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2">
              <Minus
                style={{
                  fill: `var(--color-${content[activeCard].color}-600, #db2777)`,
                  color: `var(--color-${content[activeCard].color}-600, #db2777)`,
                }}
                className="w-5 h-5"
              />
              <h4 className="font-semibold text-lg">
                {content[activeCard].title}
              </h4>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground">
            {content[activeCard].description}
          </motion.p>
        </div>

        {/* Points */}
        <div className="mt-6 space-y-3">
          {content[activeCard].points.map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="flex items-start gap-2"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                style={{
                  fill: `var(--color-${content[activeCard].color}-600, #db2777)`,
                  color: `var(--color-${content[activeCard].color}-600, #db2777)`,
                }}
                className="mt-0.5"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
              </svg>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          variants={rightPanelVariants}
          className="mt-6 flex flex-wrap gap-2"
        >
          {content[activeCard].techStack.map((item, idx) => (
            <motion.div key={idx} variants={badgeVariants}>
              <Badge
                variant="outline"
                className="flex items-center gap-1 rounded-lg"
              >
                {item.icon}
                {item.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
