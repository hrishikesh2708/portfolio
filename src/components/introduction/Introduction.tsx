import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { ArrowRight, Download } from "lucide-react";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

const Introduction = () => {
  const { theme } = useTheme();

  return (
    <section
      className="relative flex h-screen max-h-[1000px] min-h-[800px] w-full flex-col items-center justify-center overflow-hidden py-pagebuilder"
    >
      <div
        aria-hidden="true"
        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-0 h-[500px] w-4xl rounded-full bg-indigo-700/20 blur-[150px] dark:bg-[#0b0218]"
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
              real impact
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
              <ArrowRight className="absolute text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black" />
              <ArrowRight className="absolute -translate-x-5 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black" />
            </span>
          </Button>
          <Button variant={"ghost"} size={"sm"} className="pointer-events-auto">
            <Download />
            <p>Download Resume</p>
          </Button>
        </div>
      </div>

      {/* Canvas wrapper */}
      <div
        id="_r_l_"
        className="absolute inset-0 bottom-0 z-0 size-full mask-[radial-gradient(100%_50%,white,transparent_90%)]"
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor={
            theme === "dark"
              ? "#FFFFFF"
              : theme === "light"
                ? "#000000"
                : window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "#FFFFFF"
                  : "#000000"
          }
        />
      </div>

      {/* Bottom decorative area */}
      <div className="absolute inset-x-0 bottom-0 h-56">
        <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform h-[500px] w-[1200px] mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
          <div className="absolute bottom-[167px] left-1/2 -translate-x-1/2 transform h-[111px] w-[800px] blur-[80px] bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#4f46e5,#38bdf8,#06b6d4)] bg-size-[300%_100%]"
            style={{ transform: "translateX(99.9459px) scaleX(1.19995)", backgroundPosition: "99.973% 50%" }}></div>
          <div className="absolute -bottom-[753px] -left-[454px] -right-[432px] h-[955px] rounded-[100%] bg-linear-to-b from-indigo-500/40 to-transparent dark:from-neutral-50"></div>
          <div className="absolute -bottom-[759px] -left-[532px] -right-[510px] h-[956px] aspect-[2.346/1] rounded-[100%] bg-neutral-50 dark:bg-black shadow-[inset_0_2px_20px_#4f46e510,0_-10px_50px_1px_#4f46e520] dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] [--s1:inset_0_2px_20px_#4f46e510,0_-10px_50px_1px_#4f46e520] dark:[--s1:inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] [--s2:inset_0_2px_30px_#4f46e530,0_-10px_60px_1px_#4f46e540] dark:[--s2:inset_0_2px_30px_#fff,0_-10px_60px_1px_#ffffffa2]"
            style={{ boxShadow: "rgb(255, 255, 255) 0px 2px 20.0066px inset, rgba(255, 255, 255, 0.49) 0px -10px 50.0066px 1px" }}></div>
        </div>
      </div>
    </section >

  );
};

export default Introduction;
