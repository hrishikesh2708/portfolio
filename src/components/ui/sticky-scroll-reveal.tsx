"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, EyeIcon, GitBranchIcon, Minus, Radio, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { openNewTab } from "@/utils/uitility";

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
  seemoreLink,
}: {
  content: {
    title: string;
    color: string;
    demoImage: string;
    demoVideo?: string;
    github?: string;
    liveDemo?: string;
    projectDetails?: string;
    subtitle: string;
    description: string;
    points: string[];
    techStack: {
      name: string;
      icon: React.ReactNode;
    }[];
  }[];
  contentClassName?: string;
  seemoreLink?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
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
  const [panelHeight, setPanelHeight] = React.useState(0);

  React.useEffect(() => {
    const updateHeight = () => setPanelHeight(window.innerHeight - 350); // 150px offset for spacing
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="relative hidden xl:flex justify-center w-full space-x-5"
        ref={ref}
      >
        <div className="w-4xl flex items-start px-4">
          <div className="w-full">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className={cn(
                  "flex items-center mb-20 mt-10"
                )}
              >
                <div className="relative w-full rounded-2xl border bg-muted/40 overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-px hidden dark:block
                  bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,#fff_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)]"
                  />

                  <div className="relative m-1.5 rounded-lg overflow-hidden aspect-video min-h-110 max-h-125">
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
                      <div>
                        <h3 className="text-lg xl:text-2xl">{item.subtitle}</h3>
                      </div>
                      <div>
                        <Button variant={"outline"} size={"icon-sm"} className="bg-transparent">
                          <ArrowRight />
                        </Button>
                      </div>
                      <div className="w-full absolute lg:top-20 left-0 right-0">
                        <div className="w-full h-full flex justify-center items-center group perspective-[2000px] pt-4">
                          <img
                            alt={item.title}
                            draggable="false"
                            loading="lazy"
                            width="800"
                            height="800"
                            decoding="async"
                            data-nimg="1"
                            className="w-full object-cover max-w-[85%] translate-y-5 rounded-t-lg will-change-transform lg:block transition-transform duration-500 ease-in-out -rotate-3 lg:rotate-0 lg:group-hover:-rotate-3 lg:group-hover:scale-[1.08] shadow-[0px_40px_50px_10px_rgba(0,0,0,0.22)]"
                            style={{ color: "transparent" }}
                            src={item.demoImage}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          key={activeCard}
          variants={rightPanelVariants}
          initial="hidden"
          animate="visible"
          style={{ height: panelHeight }}
          className={cn(
            "sticky top-30 hidden lg:block w-lg overflow-hidden pt-20",
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
                  size={49}
                />
                <h4 className="font-semibold font-instrument text-2xl">
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
                <Sparkle
                  style={{
                    fill: `var(--color-${content[activeCard].color}-600, #db2777)`,
                    color: `var(--color-${content[activeCard].color}-600, #db2777)`,
                  }}
                  size={18}
                />
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
          <motion.div
            variants={rightPanelVariants}
            className={cn("mt-6 pl-6 flex flex-wrap gap-4 pb-5",
              seemoreLink ? "hidden" : "relative"
            )}
          >
            {content[activeCard].github ? (
              <motion.div variants={badgeVariants}>
                <Button
                  variant="default"
                  size={"sm"}
                  className="rounded-full"
                  onClick={() => openNewTab(content[activeCard].github!)}
                >
                  <GitBranchIcon />
                  Github Repo
                </Button>
              </motion.div>
            ) : null}
            {content[activeCard].projectDetails ? (
              <motion.div variants={badgeVariants}>
                <Button
                  variant="default"
                  size={"sm"}
                  className="rounded-full"
                  onClick={() => openNewTab(content[activeCard].projectDetails!)}
                >
                  <EyeIcon />
                  View details
                </Button>
              </motion.div>
            ) : null}
            {content[activeCard].liveDemo ? (
              <motion.div variants={badgeVariants}>
                <Button
                  variant="default"
                  size={"sm"}
                  className="rounded-full"
                  onClick={() => openNewTab(content[activeCard].github!)}
                >
                  <Radio />
                  Live Demo
                </Button>
              </motion.div>
            ) : null}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="flex justify-center w-full xl:hidden px-4">
        <div>
          <div className="w-xs xs:w-sm sm:w-md md:w-xl lg:w-3xl space-y-20 my-10">
            {content.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="relative w-full rounded-2xl border bg-muted/40 overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-px hidden dark:block
                  bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,#fff_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)]"
                  />
                  <div className="relative m-1.5 rounded-lg overflow-hidden aspect-video min-h-30 max-h-90 lg:max-h-120">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                      style={{
                        background: `${gradientMap[item.color]}`,
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 z-10 hidden h-px opacity-70 dark:block bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#fff_50%,rgba(0,0,0,0)_80%)]"
                    />
                    <div className="relative">
                      <div className="w-full absolute top-2 left-0 right-0">
                        <div className="w-full h-full flex justify-center items-center group perspective-[2000px] pt-4">
                          <img
                            alt={item.title}
                            draggable="false"
                            loading="lazy"
                            width="800"
                            height="800"
                            decoding="async"
                            data-nimg="1"
                            className="w-full max-w-[85%] translate-y-5 rounded-t-lg will-change-transform lg:block transition-transform duration-500 ease-in-out -rotate-3 lg:group-hover:-rotate-3 lg:group-hover:scale-[1.08] shadow-[0px_40px_50px_10px_rgba(0,0,0,0.22)]"
                            style={{ color: "transparent" }}
                            src={item.demoImage}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="block font-semibold font-instrument text-2xl tracking-wider">
                      {item.title}
                    </h4>
                    <h3 className="block text-lg text-muted-foreground">
                      {item.subtitle}
                    </h3>
                  </div>
                  <div>
                    <Button variant={"outline"} size={"icon-sm"} className="bg-transparent">
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 px-1">
                  {item.techStack.map((list, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="flex items-center gap-1 rounded-sm"
                    >
                      {list.icon}
                      {list.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className={cn("mt-5 py-2 flex items-center justify-center"
        , seemoreLink ? "relative" : "hidden"
      )}>
        <a
          className="group flex w-fit items-center justify-center gap-2 font-mono text-neutral-500 transition-colors hover:text-neutral-800  dark:hover:text-neutral-200 dark:text-neutral-400 lg:justify-start"
          href="/projects"
        >
          See more projects
          <div className="size-[25px] overflow-hidden rounded-full border border-neutral-300 bg-white-1/50 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
            <div className="-translate-x-1/2 flex w-12 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6 items-center">
                <ArrowRight />
              </span>
              <span className="flex size-6">
                <ArrowRight />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
