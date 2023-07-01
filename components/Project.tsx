import mockup from "@/public/FE-mockup.png";
import { cn } from "@/lib/cn";

import { stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import useShardAnimation from "@/hooks/useShardAnimation";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import useScrollHandler from "@/hooks/useScrollHandler";
import { PageScrollContext } from "@/app/page";

export default function Project({
  parallaxTweenValue = 0,
}: {
  parallaxTweenValue?: number;
}) {
  const [title] = useState("Case Study 1 of 4: ChatGPT Clone");

  const splitTitle = title.split(" ");

  const [animatePicRef, animatePic] = useAnimate();
  const isPicInView = useInView(animatePicRef, { amount: 1, once: true });

  const [animateHeadingRef, animateHeading] = useAnimate();
  const isHeadingInView = useInView(animateHeadingRef, {
    amount: 1,
    once: true,
  });

  const cardRef = useRef<HTMLElement>(null);
  const [isPointingCard, setIsPointingCard] = useState(false);
  const [isPointingImage, setIsPointingImage] = useState(false);
  const [isPointingHeader, setIsPointingHeader] = useState(false);

  const { shardRef, isCenter, isEnd } = useShardAnimation();

  const { scrollRef, isCarouselScrolling } = useScrollHandler();

  const { setPageScroll } = useContext(PageScrollContext);

  useEffect(() => {
    animateHeading(
      "span",
      isHeadingInView
        ? {
            opacity: 1,
            transform: "translateY(0%)",
          }
        : {
            opacity: 0,
            transform: "translateY(40%)",
          },
      {
        duration: 0.2,
        delay: stagger(0.04, { ease: [0.9, 0.06, 0.15, 0.9], startDelay: 0.2 }),
      }
    );
  }, [isHeadingInView]);

  useEffect(() => {
    animatePic(
      animatePicRef.current,
      isPicInView
        ? {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px)",
          }
        : {
            opacity: 0,
            filter: "blur(50px)",
            transform: "translateY(-150px)",
          },
      {
        duration: 1,
        ease: [0.2, 0.8, 0.2, 1],
      }
    );
  }, [isPicInView]);

  const handlePointerDown = () => {
    if (isHeadingInView) {
      setPageScroll(false);
    }
  };

  return (
    <article
      onMouseDown={() => handlePointerDown()}
      onMouseUp={() => setPageScroll(true)}
      //
      onPointerEnter={() => setIsPointingCard(true)}
      onTouchMove={() => setIsPointingCard(true)}
      onPointerLeave={() => setIsPointingCard(false)}
      onTouchEnd={() => setIsPointingCard(false)}
      ref={cardRef}
      className={cn(
        "group relative h-[90%] w-[90%] min-w-[300px] max-w-[85vw] flex-shrink-0 cursor-grab snap-center rounded-bl-sm rounded-br-[6rem] rounded-tl-[6rem] rounded-tr-sm",
        "sm:w-[550px]",
        "lg:w-[600px]",
        "xl:w-[90%] xl:max-w-[900px]",
        "active:cursor-grabbing"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-bl-sm rounded-br-[6rem] rounded-tl-[6rem] rounded-tr-sm bg-mossy_glen-950/20 transition-all duration-[500ms] ease-out",
          { "-inset-[2.5%] ease-in-out": isPointingCard }
        )}
      >
        <div
          className={cn(
            "absolute -inset-[80.9%] transition-all duration-[500ms] ease-out",
            {
              "-inset-[67.08%] ease-in-out": isPointingCard,
            }
          )}
        >
          <div
            style={{
              transform: `translate(${parallaxTweenValue}%)`,
              background:
                "linear-gradient(to bottom right, transparent 0% 40%, #0a4abf33 45%, transparent 50%, #ff8f2633 55%, transparent 60% 100%)",
            }}
            className={`absolute inset-0`}
          ></div>
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,19,7, 0.2) 2px, transparent 2px)",
            backgroundPosition: "0% 0%",
            backgroundSize: "6px 6px",
            transform: `translate(${-50 + parallaxTweenValue * 1.618}%, -50%)`,
          }}
          className="absolute left-1/2 top-1/2 h-[100vh] w-[100vw]"
        ></div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255, 0.2) 1px, transparent 1px)",
            backgroundPosition: "3px 3px",
            backgroundSize: "36px 36px",
            transform: `translate(${
              -50 + parallaxTweenValue * 1.618 * 1.618
            }%, -50%)`,
          }}
          className="absolute left-1/2 top-1/2 h-[100vh] w-[100vw]"
        ></div>
        <div
          ref={shardRef}
          className={cn(
            "absolute right-[70%] top-[1px] h-[20%] w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 transition-all duration-[500ms] ease-out",
            { "right-[50%] opacity-100 ease-in-out": isPointingCard },
            {
              "right-[30%] opacity-0 duration-[475ms] ease-out":
                isCenter && !isPointingCard,
            },
            { "duration-[0.1ms]": isEnd && !isPointingCard }
          )}
        ></div>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-start space-y-0.5 rounded-bl-sm rounded-br-[6rem] rounded-tl-[6rem] rounded-tr-sm p-8 pr-6 xs:justify-center xs:space-y-2"
        )}
      >
        <div
          ref={animatePicRef}
          onPointerEnter={() => setIsPointingImage(true)}
          onTouchMove={() => setIsPointingImage(true)}
          onPointerLeave={() => setIsPointingImage(false)}
          onTouchEnd={() => setIsPointingImage(false)}
          className={cn("mx-auto max-w-xl px-0 md:px-10")}
        >
          <a href="https://www.youtube.com/">
            <Image
              src={mockup}
              alt="design mockup"
              className={cn("transition duration-[1000ms] ease-in-out", {
                "scale-90 ease-out": isPointingImage,
              })}
            />
          </a>
        </div>
        <div
          ref={scrollRef}
          className={cn(
            "scrollbar-track-misty-mountains-500/20 max-w-4xl space-y-0.5 overflow-y-auto scrollbar scrollbar-w-1",
            "xs:space-y-2 ",
            "sm:space-y-10",
            "md:px-10",
            {
              "scrollbar-track-mossy_glen-500/0 scrollbar-thumb-mossy_glen-500/0":
                isCarouselScrolling,
              "scrollbar-track-mossy_glen-500/10 scrollbar-thumb-mossy_glen-500/20":
                !isCarouselScrolling,
            }
          )}
        >
          <div
            onPointerEnter={() => setIsPointingHeader(true)}
            onTouchMove={() => setIsPointingHeader(true)}
            onPointerLeave={() => setIsPointingHeader(false)}
            onTouchEnd={() => setIsPointingHeader(false)}
            className={cn(
              "relative mx-auto w-fit overflow-hidden rounded-bl-sm rounded-br-[3rem] rounded-tl-[3rem] rounded-tr-sm bg-gradient-to-r from-transparent via-mossy_glen-950/20 to-transparent px-4 transition-all duration-[1000ms] ease-in-out",
              "sm:px-4",
              {
                "rounded-bl-[3rem] rounded-br-sm rounded-tl-sm rounded-tr-[3rem] ease-out":
                  isPointingHeader,
              }
            )}
          >
            <div
              className={cn(
                "absolute inset-0 border border-mossy_glen-100/0 transition duration-[1000ms] ease-in-out",
                {
                  "border-b-misty_mountains-400 border-l-sunlit_meadow-200 border-r-misty_mountains-400 border-t-sunlit_meadow-200 ease-out":
                    isPointingHeader,
                }
              )}
            ></div>
            <a href="https://www.youtube.com/">
              <h4 ref={animateHeadingRef} className="pb-[4px] text-center">
                <div>
                  {splitTitle.map((word, index) => {
                    if (index <= 4)
                      return (
                        <span
                          key={index}
                          className={cn(
                            "mr-2 inline-block text-2xl font-bold text-misty_mountains-400  drop-shadow"
                          )}
                        >
                          {word}
                        </span>
                      );
                  })}
                </div>
                <div>
                  {splitTitle.map((word, index) => {
                    if (index === splitTitle.length - 1)
                      return (
                        <div className="inline-block" key={index}>
                          <span
                            className={cn(
                              "mr-2 inline-block text-4xl font-light text-sunlit_meadow-200 drop-shadow"
                            )}
                          >
                            {word}
                          </span>
                          <span className="inline-block">
                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-mossy_glen-100" />
                          </span>
                        </div>
                      );
                    if (index > 4)
                      return (
                        <span
                          key={index}
                          className={cn(
                            "mr-2 inline-block text-4xl font-light text-sunlit_meadow-200 drop-shadow"
                          )}
                        >
                          {word}
                        </span>
                      );
                  })}
                </div>
              </h4>
            </a>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-transparent via-mossy_glen-950/20 to-transparent px-2 py-1 text-sm sm:text-base">
            <p className="max-h-[30vh] text-justify drop-shadow-lg md:max-h-[40vh]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              dolorem hic voluptates alias odio sapiente rem nam ipsam corporis
              veniam est consequuntur, ex inventore placeat non voluptas magnam
              ipsum labore! hic voluptates alias odio sapiente rem nam ipsam
              corporis veniam est consequuntur, ex inventore placeat non
              voluptas magnam ipsum labore! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eaque dolorem hic voluptates alias
              odio sapiente rem nam ipsam corporis veniam est consequuntur, ex
              inventore placeat non voluptas magnam ipsum labore! hic voluptates
              alias odio sapiente rem nam ipsam corporis veniam est
              consequuntur, ex inventore placeat non voluptas magnam ipsum
              labore!
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
