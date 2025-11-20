import React, { useCallback } from "react";
import { type EmblaOptionsType, type EmblaCarouselType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section
      className="
        max-w-3xl mx-auto
        [--slide-height:19rem]
        [--slide-spacing:2rem]
        [--slide-size:50%]
      "
    >
      {/* VIEWPORT */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* CONTAINER */}
        <div
          className="
            flex
            touch-pan-y touch-pinch-zoom
            ml-[calc(var(--slide-spacing)*-1)]
          "
        >
          {slides.map((index) => (
            <div
              key={index}
              className="
                translate-z-0
                flex-[0_0_var(--slide-size)]
                min-w-0
                pl-(--slide-spacing)
              "
            >
              <div
                className="
                  shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)]
                  rounded-[1.8rem]
                  text-4xl font-semibold
                  flex items-center justify-center
                  h-[var(--slide-height)]
                  select-none
                  bg-amber-400
                "
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div
        className="
          grid grid-cols-[auto_1fr]
          justify-between gap-[1.2rem]
          mt-[1.8rem]
        "
      >
        {/* ARROW BUTTONS */}
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* DOTS */}
        <div
          className="
            flex flex-wrap
            justify-end items-center
            mr-[0.6rem]
            gap-4
          "
        >
          {scrollSnaps.map((_, index) => {
            const selected = index === selectedIndex;

            return (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-[1.6rem] h-[1.6rem] flex items-center justify-center rounded-full cursor-pointer border-3 dark:border-muted ${
                  selected
                    ? "border-muted-foreground dark:border-muted-foreground"
                    : ""
                }`}
              ></DotButton>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
