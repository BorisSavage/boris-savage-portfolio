import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { DotButton } from "./CarouselArrowsDots";
// import { PrevButton, NextButton } from "./CarouselArrowsDots";
import { cn } from "@/lib/cn";
import { IsLastIndexContext, PageScrollContext } from "@/app/page";

const OPACITY_TWEEN_FACTOR = 1.618;

const PARALLAX_TWEEN_FACTOR = 1.618;

const BAR_SIZE = 5;

const sections = [
  "hi!",
  "about",
  "experience",
  "skills",
  "projects",
  "contact me!",
];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

// const wheelGesturesOptions = {
//   forceWheelAxis: "y",
// };

const SetIndexContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollTo: (index: number) => {
    return;
  },
});

export { SetIndexContext };

type isCarouselScrollingProps = {
  isCarouselScrolling: boolean;
  setIsCarouselScrolling: Dispatch<SetStateAction<boolean>>;
};

const isCarouselScrollingContext = createContext<isCarouselScrollingProps>({
  isCarouselScrolling: false,
  setIsCarouselScrolling: () => {
    return;
  },
});

export { isCarouselScrollingContext };

export default function VerticalCarousel({
  children,
  ...options
}: {
  children: ReactNode;
  options?: EmblaOptionsType;
}) {
  const { pageScroll } = useContext(PageScrollContext);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      duration: 20,
      axis: "y",
      skipSnaps: true,
      // dragFree: true,
      dragThreshold: 100,
      align: "center",
      watchDrag: pageScroll,
      watchResize: true,
    },
    pageScroll ? [WheelGesturesPlugin()] : undefined
  );
  const [opacityTweenValues, setOpacityTweenValues] = useState<number[]>([0]);
  const [parallaxTweenValues, setParallaxTweenValues] = useState<number[]>([0]);
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  // const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [isPointingNav, setIsPointingNav] = useState(false);

  const { isLastIndex, setIsLastIndex } = useContext(IsLastIndexContext);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const [isCarouselScrolling, setIsCarouselScrolling] = useState(false);

  useEffect(() => {
    if (isLastIndex) {
      scrollTo(5);
    }
    setIsLastIndex(false);
  }, [isLastIndex, scrollTo, setIsLastIndex]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // setPrevBtnEnabled(emblaApi.canScrollPrev());
    // setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  const onSelecting = useCallback(() => {
    setIsCarouselScrolling(true);
  }, []);

  const onSettle = useCallback(() => {
    setIsCarouselScrolling(false);
  }, []);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const scrollProgress = emblaApi.scrollProgress();
    const scrollSnapList = emblaApi.scrollSnapList();

    const progress = Math.max(0, Math.min(scrollProgress, 1));
    setScrollProgress(progress * 100);

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

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    onSettle();

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);

    emblaApi.on("select", onSelect);
    emblaApi.on("select", onSelecting);

    emblaApi.on("settle", onSettle);
  }, [emblaApi, onInit, onSelect, onSettle, onSelecting]);

  return (
    <>
      <div
        ref={emblaRef}
        className="(border-4 bg-pink-400) h-screen w-screen overflow-hidden border-red-500"
      >
        <div className="(border-4 bg-green-500) flex h-full w-full flex-col border-gray-500">
          <SetIndexContext.Provider value={{ scrollTo }}>
            <isCarouselScrollingContext.Provider
              value={{ isCarouselScrolling, setIsCarouselScrolling }}
            >
              {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return null;
                return (
                  <div
                    key={index}
                    style={{
                      ...(opacityTweenValues.length && {
                        opacity: opacityTweenValues[index],
                        scale: opacityTweenValues[index],
                      }),
                    }}
                    className={cn(
                      "(border-4 bg-yellow-300) flex h-full min-w-0 flex-shrink-0 flex-grow-0 basis-full flex-col items-center justify-center border-cyan-400"
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
            </isCarouselScrollingContext.Provider>
          </SetIndexContext.Provider>
        </div>
      </div>
      <div
        onPointerEnter={() => setIsPointingNav(true)}
        onTouchMove={() => setIsPointingNav(true)}
        onPointerLeave={() => setIsPointingNav(false)}
        onTouchEnd={() => setIsPointingNav(false)}
        className={cn(
          "fixed right-[10px] top-[20%] hidden h-fit w-fit -translate-y-1/2 rounded-bl-sm rounded-br-full rounded-tl-full rounded-tr-sm",
          "sm:block",
          "lg:top-1/2"
        )}
      >
        <div
          className={cn(
            "absolute -inset-0.5 animate-tilt rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[2000ms] ease-savage-sig-2",
            { "opacity-100 duration-[500ms]": isPointingNav }
          )}
        ></div>
        <div
          className={cn(
            "group relative flex h-fit w-fit flex-col items-center justify-center space-y-4 rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl bg-mossy_glen-950 bg-opacity-50 px-2 py-9 transition duration-[2000ms] ease-savage-sig-2",
            { "bg-opacity-100 duration-[500ms]": isPointingNav }
          )}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isPointingNav={isPointingNav}
              section={sections[index]}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          height: `${BAR_SIZE}px`,
          clipPath: `polygon(
            ${BAR_SIZE}px 0%, 
            calc(100% - ${BAR_SIZE}px) 0%, 
            100% ${BAR_SIZE}px, 
            100% 100%, 
            0% 100%, 
            0% ${BAR_SIZE}px
          )`,
        }}
        className={`fixed bottom-[0px] left-0 w-full`}
      >
        <div
          style={{
            transform: `translate3d(${scrollProgress}%, 0px, 0px)`,
            WebkitMask: "linear-gradient(to bottom, transparent, red 20%)",
            mask: "linear-gradient(to bottom, transparent, red 20%)",
            clipPath: `polygon(
              ${BAR_SIZE}px 0%, 
              calc(100% - ${BAR_SIZE}px) 0%, 
              100% ${BAR_SIZE}px, 
              100% 100%, 
              0% 100%, 
              0% ${BAR_SIZE}px
            )`,
          }}
          className="relative -left-full top-0 h-full w-full"
        >
          <div
            style={{
              transform: `translate3d(${
                scrollProgress / (2 + 2 / 4)
              }%, 0px, 0px)`,
            }}
            className="(opacity-50) relative left-[-66.667%] h-full w-[166.667%] bg-gradient-to-l from-mossy_glen-500/80 via-misty_mountains-500/50 to-sunlit_meadow-500/20"
          ></div>
        </div>
      </div>
      <div
        style={{
          height: `${BAR_SIZE}px`,
          clipPath: `polygon(
            ${BAR_SIZE}px 0%, 
            calc(100% - ${BAR_SIZE}px) 0%, 
            100% ${BAR_SIZE}px, 
            100% 100%, 
            0% 100%, 
            0% ${BAR_SIZE}px
          )`,
        }}
        className={`fixed left-0 top-[0px] w-full rotate-180`}
      >
        <div
          style={{
            transform: `translate3d(${scrollProgress}%, 0px, 0px)`,
            WebkitMask: "linear-gradient(to bottom, transparent, red 20%)",
            mask: "linear-gradient(to bottom, transparent, red 20%)",
            clipPath: `polygon(
              ${BAR_SIZE}px 0%, 
              calc(100% - ${BAR_SIZE}px) 0%, 
              100% ${BAR_SIZE}px, 
              100% 100%, 
              0% 100%, 
              0% ${BAR_SIZE}px
            )`,
          }}
          className="relative -left-full top-0 h-full w-full"
        >
          <div
            style={{
              transform: `translate3d(${
                scrollProgress / (2 + 2 / 4)
              }%, 0px, 0px)`,
            }}
            className="(opacity-50) relative left-[-66.667%] h-full w-[166.667%] bg-gradient-to-l from-mossy_glen-500/80 via-misty_mountains-500/50 to-sunlit_meadow-500/20"
          ></div>
        </div>
      </div>

      <div
        style={{
          width: `${BAR_SIZE}px`,
          clipPath: `polygon(
            ${BAR_SIZE}px 0%, 
            100% 0%, 
            100% 100%, 
            ${BAR_SIZE}px 100%, 
            0% calc(100% - ${BAR_SIZE}px), 
            0% ${BAR_SIZE}px
          )`,
        }}
        className={`fixed right-[0px] top-0 h-full`}
      >
        <div
          style={{
            transform: `translate3d(0px, ${scrollProgress}%, 0px)`,
            WebkitMask: "linear-gradient(to right, transparent, red 20%)",
            mask: "linear-gradient(to right, transparent, red 20%)",
            clipPath: `polygon(
              ${BAR_SIZE}px 0%, 
              100% 0%, 
              100% 100%, 
              ${BAR_SIZE}px 100%, 
              0% calc(100% - ${BAR_SIZE}px), 
              0% ${BAR_SIZE}px
            )`,
          }}
          className="relative -top-full left-0 h-full w-full"
        >
          <div
            style={{
              transform: `translate3d(0px, ${
                scrollProgress / (2 + 2 / 4)
              }%, 0px)`,
            }}
            className="(opacity-50) relative top-[-66.667%] h-[166.667%] w-full bg-gradient-to-t from-mossy_glen-500/80 via-misty_mountains-500/50 to-sunlit_meadow-500/20"
          ></div>
        </div>
      </div>
      <div
        style={{
          width: `${BAR_SIZE}px`,
          clipPath: `polygon(
            ${BAR_SIZE}px 0%, 
            100% 0%, 
            100% 100%, 
            ${BAR_SIZE}px 100%, 
            0% calc(100% - ${BAR_SIZE}px), 
            0% ${BAR_SIZE}px
          )`,
        }}
        className={`fixed left-[0px] top-0 h-full rotate-180`}
      >
        <div
          style={{
            transform: `translate3d(0px, ${scrollProgress}%, 0px)`,
            WebkitMask: "linear-gradient(to right, transparent, red 20%)",
            mask: "linear-gradient(to right, transparent, red 20%)",
            clipPath: `polygon(
              ${BAR_SIZE}px 0%, 
              100% 0%, 
              100% 100%, 
              ${BAR_SIZE}px 100%, 
              0% calc(100% - ${BAR_SIZE}px), 
              0% ${BAR_SIZE}px
            )`,
          }}
          className="relative -top-full left-0 h-full w-full"
        >
          <div
            style={{
              transform: `translate3d(0px, ${
                scrollProgress / (2 + 2 / 4)
              }%, 0px)`,
            }}
            className="(opacity-50) relative top-[-66.667%] h-[166.667%] w-full bg-gradient-to-t from-mossy_glen-500/80 via-misty_mountains-500/50 to-sunlit_meadow-500/20"
          ></div>
        </div>
      </div>
    </>
  );
}
