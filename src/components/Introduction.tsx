import React from "react";
import LiquidEther from "@/components/LiquidEther";
import FloatingLines from "@/components/FloatingLines";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Download } from "lucide-react";
import { TextRoll } from "@/components/motion-primitives/text-roll";
import RotatingText from "@/components/RotatingText";
import { TextLoop } from "@/components/motion-primitives/text-loop";

const Introduction = () => {
  return (
    <div className="h-[calc(100vh)] w-full relative">
      {/* <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        // enabledWaves={["top", "bottom"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={[10]}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={[10]}
        bendRadius={5.0}
        bendStrength={-0.8}
        interactive={true}
        parallax={true}
      /> */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={true}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={true}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={100}
        autoRampDuration={0.6}
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-5 pointer-events-none gap-4">
        <Badge className="pointer-events-auto bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 border-emerald-600/60 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />
          Open to Opportunities!
        </Badge>
        <div>
          <p className="font-instrument text-4xl">
            I help turn ideas into scalable software and data-driven solutions.
          </p>
          <p className="font-instrument text-4xl">
            Let's work together on{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b to-zinc-100 from-zinc-300/90 italic">
              something meaningful.
            </span>
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-12 w-24 object-cover rounded-full ring-2 ring-zinc-400/40 outline -outline-offset-2 outline-white/10 self-center"
          />
        </div>
        <div className="">
          <p className="inline-flex whitespace-pre-wrap relative text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-500 text-lg md:text-xl lg:text-2xl font-extrabold">
            Hello, I'm Hrishikesh Thakur a{" "}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span className="text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-500">
                Software Engineer
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-500">
                Data Analyst
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-500">
                AI/ML Enthusiast
              </span>
            </TextLoop>
          </p>
          {/* <RotatingText
            texts={[
              "Software Engineer ",
              "Data Analyst",
              "AI/ML Enthusiast",
              "Cool!",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-0.5 md:py-1 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          /> */}
        </div>
        <div className="flex gap-5 items-center">
          <Button
            variant="default"
            size={"lg"}
            className="pointer-events-auto group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10 my-10"
          >
            {/* Label */}
            <span className="z-10 px-1 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              Let's Connect
            </span>

            {/* Expanding background */}
            <span className="absolute inset-0 translate-x-full scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>

            {/* Icon container */}
            <span className="z-10 relative flex items-center justify-center overflow-hidden rounded-full bg-black p-4 transition-colors duration-300 group-hover:bg-transparent md:p-4 dark:bg-white">
              {/* Arrow 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>

              {/* Arrow 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute -translate-x-5 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Button>
          <Button variant={"ghost"} className="pointer-events-auto">
            <Download />
            <p>Download Resume</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
