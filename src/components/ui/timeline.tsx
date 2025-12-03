"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import GradientText from "./GradientText";
import { Briefcase, MapPin, Sparkle } from "lucide-react";
import { Badge } from "./badge";
import { useTheme } from "next-themes";

interface Skill {
  name: String;
  icon: React.ReactNode;
}
interface TimelineEntry {
  companyName: String;
  companyLogoLight: string | undefined;
  companyLogoDark: string | undefined;
  companyLogoWidth?: number;
  companyLogoHeight?: number;
  tenure: String;
  role: String;
  location: String;
  workType: String;
  points: Array<React.ReactNode>;
  skills: Array<Skill>;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const { theme } = useTheme();

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <p className=" text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-2">
          The Experience
        </p>
        <h2 className="text-center font-instrument text-4xl xs:text-5xl md:text-6xl mb-8">
          <span className="inline">
            Experience That <br /> Brings{" "}
            <GradientText
              colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
              animationSpeed={5}
              showBorder={false}
              className="inline italic leading-10 md:leading-18"
            >
              Ideas to Life
            </GradientText>
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex md:pl-20  flex-col items-start gap-y-3 font-light text-sm">
                <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
                  {item.tenure}
                </p>
                <div className="flex items-center gap-2">
                  {(
                    theme === "dark"
                      ? item.companyLogoDark
                      : item.companyLogoLight
                  ) ? (
                    <img
                      src={
                        theme === "dark"
                          ? item.companyLogoDark
                          : item.companyLogoLight
                      }
                      alt={
                        item.companyName
                          ? `${item.companyName} logo`
                          : "company-logo"
                      }
                      height={item.companyLogoHeight || 24}
                      width={item.companyLogoWidth || 24}
                    />
                  ) : null}
                  <h2 className="font-bold font-instrument text-2xl text-neutral-900 tracking-wide md:text-3xl dark:text-neutral-100">
                    {item.companyName}
                  </h2>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin size={18} />
                    <p className="text-sm">{item.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Briefcase size={18} />
                    <p className="text-sm">{item.workType}</p>
                  </div>
                </div>
              </div>
              {/* <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                
              </h3> */}
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="flex md:hidden md:pl-20  flex-col items-start gap-y-3 font-light text-sm">
                <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
                  {item.tenure}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      theme == "dark"
                        ? item.companyLogoDark
                        : item.companyLogoLight
                    }
                    alt="company-logo"
                    height={item.companyLogoHeight || 24}
                    width={item.companyLogoWidth || 24}
                  />
                  <h2 className="font-bold font-instrument text-2xl text-neutral-900 tracking-wide md:text-3xl dark:text-neutral-100">
                    {item.companyName}
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin size={18} />
                    <p className="text-sm">{item.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Briefcase size={18} />
                    <p className="text-sm">{item.workType}</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-2 font-bold font-instrument text-2xl text-neutral-900 tracking-wide md:text-3xl dark:text-neutral-100">
                {item.role}
              </h3>
              <div className="mb-4">
                {item.points.map((point, idx) => (
                  <div key={idx} className="flex items-start pt-1 gap-2">
                    <Sparkle
                      style={{
                        color: `var(--color-blue-600, #db2777)`,
                      }}
                      size={12}
                      className="mt-1"
                    />
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-2 flex-wrap">
                {item.skills.map((item, idx) => (
                  <div key={idx}>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 rounded-lg"
                    >
                      {item.icon}
                      {item.name}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* {item.content}{" "} */}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
