"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  ChevronDown,
  CalendarDays,
  Award,
  MapPin,
  BookCheck,
} from "lucide-react";
import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { useSpring } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EducationCardProps {
  title: string;
  university: string;
  location: string;
  logo: string; // image path
  duration: string;
  gpa: string;
  description: string;
  courses: string[];
}

export function useExpandable(initialState = false) {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const springConfig = { stiffness: 300, damping: 30 };
  const animatedHeight = useSpring(0, springConfig);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return { isExpanded, toggleExpand, animatedHeight };
}
export const EducationCard = ({ data }: { data: EducationCardProps }) => {
// export function EducationCard({ data }: { data: EducationCardProps[] }) => {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <div className="w-full mx-auto [background:linear-gradient(45deg,#080b11,--theme(--color-slate-800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),--theme(--color-slate-600/.48)_80%,--theme(--color-indigo-500)_86%,--theme(--color-indigo-300)_90%,--theme(--color-indigo-500)_94%,--theme(--color-slate-600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
      <Card
        className="w-full cursor-pointer transition-all duration-300 hover:shadow-lg gap-2"
        onClick={toggleExpand}
      >
        <CardHeader className="space-y-1 ">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center gap-2 md:gap-4">
              <div>
                <img src={data.logo} alt={data.university} height={100} width={100} />
              </div>
              <div className="pl-2">
                <h3 className="font-instrument text-2xl xs:text-2xl md:text-4xl">
                  {data.title}
                </h3>
                <p className=" uppercase tracking-widest text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm md:text-md lg:text-lg sm:font-bold">
                  {data.university}
                </p>
                <div className="flex  gap-1 md:gap-2  items-center my-2 text-xs sm:text-sm md:text-md dark:text-neutral-400 text-neutral-500 tracking-wide lg:text-lg">
                  <MapPin />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>

        <CardContent>
          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-2"
                  >
                    <div className=" text-sm dark:text-neutral-400 text-neutral-500 tracking-widest lg:text-lg font-light">
                      <p>{data.description}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center">
                        <BookCheck className="h-4 w-4 mr-2" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.courses.map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="rounded-lg"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between w-full text-xs sm:text-sm md:text-md dark:text-neutral-400 text-neutral-500 tracking-wide lg:text-lg">
            <div className="flex items-center gap-2 md:gap-4 mt-1">
              <CalendarDays />
              <p>{data.duration}</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 mt-1 ">
              <Award />
              <p>GPA: {data.gpa}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
