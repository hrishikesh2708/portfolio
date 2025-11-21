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
    <div className="h-[calc(100vh)] max-h-[1000px] min-h-[800px] w-full relative">
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-5 pointer-events-none gap-8">
        <div className="">
          <Badge className="pointer-events-auto bg-emerald-500/10 dark:bg-emerald-100/20 hover:bg-emerald-100/10 text-emerald-600 dark:text-emerald-400 border-emerald-600/60 shadow-none rounded-full font-medium tracking-widest">
            <div className="h-2 w-2 rounded-full dark:bg-emerald-400 bg-emerald-600 mr-2 animate-pulse" />
            Open to Opportunities!
          </Badge>
        </div>
        <div className="">
          <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl">
            Building smart software
            <br className="hidden md:block" /> and solutions that drive
            <span className="text-transparent bg-clip-text bg-linear-to-b dark:to-zinc-100 dark:from-zinc-300/90 to-zinc-900 from-zinc-500 italic">
              {" "}
              real impact.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 items-center font-instrument text-xl md:text-2xl lg:text-3xl font-bold tracking-widest">
          <h1 className="text-transparent bg-clip-text bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400/60 from-zinc-500 to-zinc-900">
            Hello, I'm Hrishikesh Thakur
          </h1>
          <div className="pointer-events-auto group relative z-300 w-fit mx-auto">
            <div className="mx-2 w-16 cursor-pointer overflow-hidden rounded-3xl md:w-20 lg:mx-3">
              <img
                alt="Hrishikesh Thaku Image"
                draggable="false"
                loading="lazy"
                width="854"
                height="425"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 hover:scale-110 group-hover:rotate-6"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                style={{ color: "transparent" }}
              />
            </div>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 hidden size-6 animate-wave delay-200 group-hover:block right-0"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72-1.328 12.875-11.083-4.042-9.667-14.333c-.793-1.129-.519-2.686.611-3.478z"
                fill="#ef9645"
              ></path>
              <path
                d="m2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894l-7.288-10.627s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622l-7.947-11.591s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498l-7.428-10.832s-1.131-1.649.518-2.78 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11z"
                fill="#ffdc5d"
              ></path>
              <g fill="#5dadec">
                <path d="m12 32.042c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1s-1.042.447-1.042 1c0 6 4.042 10.042 10.042 10.042.553 0 1-.489 1-1.042s-.447-.958-1-.958z"></path>
                <path d="m7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zm17-32c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"></path>
                <path d="m29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1c0-3.837-2.958-6.958-6.958-6.958z"></path>
              </g>
            </svg>
          </div>
          <h1 className="inline-flex whitespace-pre-wrap relative text-transparent bg-clip-text bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400/60 from-zinc-500 to-zinc-900">
            a{" "}
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
              <span className="text-transparent bg-clip-text bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400/60 from-zinc-500 to-zinc-900">
                Software Engineer
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400/60 from-zinc-500 to-zinc-900">
                Data Analyst
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400/60 from-zinc-500 to-zinc-900">
                AI/ML Enthusiast
              </span>
            </TextLoop>
          </h1>
        </div>
        <div className=" flex flex-col gap-4  md:flex-row md:gap-10 items-center mt-2">
          <Button
            variant="default"
            size={"lg"}
            className="pointer-events-auto group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10"
          >
            <span className="z-10 px-1 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              Let's Connect
            </span>

            <span className="absolute inset-0 translate-x-full scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>

            <span className="z-10 relative flex items-center justify-center overflow-hidden rounded-full bg-black p-4 transition-colors duration-300 group-hover:bg-transparent md:p-4 dark:bg-white">
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
          <Button variant={"ghost"} size={"sm"}className="pointer-events-auto">
            <Download />
            <p>Download Resume</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
