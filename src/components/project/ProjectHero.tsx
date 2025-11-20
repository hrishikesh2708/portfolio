import React from "react";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { type EmblaOptionsType } from "embla-carousel";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";

const ProjectHero = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="flex flex-col mx-auto gap-4 max-w-5xl mt-10">

          <TextShimmer
            className="font-mono text-3xl font-extrabold self-center"
            duration={3}
          >
            Projects
          </TextShimmer>

        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
