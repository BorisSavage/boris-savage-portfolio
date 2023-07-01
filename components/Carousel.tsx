import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import React, { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { PillButton, PrevButton, NextButton } from "./CarouselArrowsDots";
import { cn } from "@/lib/cn";

const OPACITY_TWEEN_FACTOR = 1.618;

const PARALLAX_TWEEN_FACTOR = 1.618;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function Carousel({
  children,
  inverted,
  ...options
}: {
  inverted?: boolean;
  children: ReactNode;
  options?: EmblaOptionsType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ duration: 30 });
  const [opacityTweenValues, setOpacityTweenValues] = useState<number[]>([0]);
  const [parallaxTweenValues, setParallaxTweenValues] = useState<number[]>([0]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);

    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const scrollProgress = emblaApi.scrollProgress();
    const scrollSnapList = emblaApi.scrollSnapList();

    const styles = scrollSnapList.map((scrollSnap) => {
      const diffToTarget = scrollSnap - scrollProgress;
      const opacityTweenValue =
        1 - Math.abs(diffToTarget * OPACITY_TWEEN_FACTOR);

      const opacity = isNaN(opacityTweenValue)
        ? 0
        : numberWithinRange(opacityTweenValue, 0, 1);

      const parallax = diffToTarget * (-1 / PARALLAX_TWEEN_FACTOR) * 100;

      return { opacity, parallax };
    });
    const opacityStyles = styles.map((style) => style.opacity);
    setOpacityTweenValues(opacityStyles);

    const parallaxStyles = styles.map((style) => style.parallax);
    setParallaxTweenValues(parallaxStyles);
  }, [emblaApi, setOpacityTweenValues, setParallaxTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();

    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });

    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <>
      <div className="relative h-full w-full">
        <div ref={emblaRef} className="h-full w-full">
          <div className="flex h-full w-full">
            {React.Children.map(children, (child, index) => {
              if (!React.isValidElement(child)) return null;
              return (
                <div
                  key={index}
                  style={{
                    ...(opacityTweenValues.length && {
                      opacity: opacityTweenValues[index],
                    }),
                  }}
                  className={cn(
                    "flex h-full min-w-0 flex-shrink-0 flex-grow-0 basis-full flex-col items-center justify-center",
                    //"sm:basis-3/4",
                    "md:basis-3/4",
                    "lg:basis-2/3",
                    "xl:basis-1/2"
                  )}
                >
                  {React.cloneElement(
                    child as React.ReactElement,
                    parallaxTweenValues.length
                      ? { parallaxTweenValue: parallaxTweenValues[index] }
                      : {}
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="group relative mx-auto w-fit rounded-bl-sm rounded-br-full rounded-tl-full rounded-tr-sm">
          <div
            className={cn(
              "absolute -inset-0.5 animate-tilt rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[2000ms] ease-savage-sig-2",
              "group-hover:opacity-100 group-hover:duration-[500ms]",
              {
                "rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm":
                  inverted,
              }
            )}
          ></div>
          <div
            className={cn(
              "group relative flex h-6 w-fit items-center justify-center space-x-1 rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl bg-mossy_glen-950 bg-opacity-20 px-3 transition  duration-[2000ms] ease-savage-sig-2",
              "group-hover:bg-opacity-100 group-hover:duration-[500ms]",
              {
                "rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm":
                  inverted,
              }
            )}
          >
            {scrollSnaps.map((_, index) => (
              <PillButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
                inverted={inverted}
              />
            ))}
          </div>
        </div>
        <PrevButton
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
          inverted={inverted}
        />
        <NextButton
          onClick={scrollNext}
          enabled={nextBtnEnabled}
          inverted={inverted}
        />
      </div>
    </>
  );
}
