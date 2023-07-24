import { useAnimate, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import useShardAnimation from "@/hooks/useShardAnimation";
import { PageScrollContext } from "@/app/page";
import useScrollHandler from "@/hooks/useScrollHandler";

export default function ExpCard({
  parallaxTweenValue = 0,
  children,
  image,
}: {
  parallaxTweenValue?: number;
  children: React.ReactNode;
  image?: StaticImageData;
}) {
  const [cardRef, animateCard] = useAnimate();
  const [isPointing, setIsPointing] = useState(false);

  const { shardRef, isCenter, isEnd } = useShardAnimation();

  const { setPageScroll } = useContext(PageScrollContext);

  const isInView = useInView(cardRef, { amount: 0.8 });

  const handlePointerDown = () => {
    if (isInView) {
      setPageScroll(false);
    }
  };

  useEffect(() => {
    animateCard(
      "#cardContent",
      isInView
        ? {
            y: 0,
            opacity: 1,
            filter: "grayscale(0)",
          }
        : {
            y: -200,
            opacity: 0,
            filter: "grayscale(1)",
          },
      {
        duration: 1,
        ease: [0.2, 0.8, 0.2, 1],
      }
    );
  }, [isInView]);
  //const { scrollRef, isCarouselScrolling } = useScrollHandler();

  return (
    <article
      ref={cardRef}
      onMouseDown={() => handlePointerDown()}
      onMouseUp={() => setPageScroll(true)}
      onPointerEnter={() => setIsPointing(true)}
      onTouchMove={() => setIsPointing(true)}
      onPointerLeave={() => setIsPointing(false)}
      onTouchEnd={() => setIsPointing(false)}
      className={cn(
        "group relative h-[90%] w-[100%] min-w-[300px] flex-shrink-0 rounded-bl-[6rem] rounded-br-sm rounded-tl-sm rounded-tr-[6rem]",
        "sm:w-[550px]",
        "lg:w-[600px]",
        "xl:w-[90%] xl:max-w-[900px]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-bl-[6rem] rounded-br-sm rounded-tl-sm rounded-tr-[6rem] bg-mossy_glen-950/20 to-transparent transition-all duration-[500ms] ease-out",
          { [cn("-inset-y-[2%] ease-in-out", "sm:-inset-[2.5%]")]: isPointing }
        )}
      >
        <div
          className={cn(
            "absolute -inset-[80.9%] transition-all duration-[500ms] ease-out",
            {
              "-inset-[67.08%] ease-in-out": isPointing,
            }
          )}
        >
          <div
            style={{
              transform: `translate(${parallaxTweenValue}%)`,
              background:
                "linear-gradient(to bottom right, transparent 0% 40%, #ff8f2633 45%, transparent 50%, #0a4abf33 55%, transparent 60% 100%)",
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
          className="absolute left-1/2 top-1/2 h-[100dvh] w-[100dvw]"
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
          className="absolute left-1/2 top-1/2 h-[100dvh] w-[100dvw]"
        ></div>
        <div
          ref={shardRef}
          className={cn(
            "absolute bottom-[1px] right-[70%] h-[20%] w-[1px] -translate-x-1/2 translate-y-1/2 rotate-90 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 transition-all duration-[500ms] ease-out",
            { "right-[50%] opacity-100 ease-in-out": isPointing },
            {
              "right-[30%] opacity-0 duration-[475ms] ease-out":
                isCenter && !isPointing,
            },
            { "duration-[0.1ms]": isEnd && !isPointing }
          )}
        ></div>
      </div>
      <div
        id="cardContent"
        // initial={{
        //   y: -100,
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 1,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        // }}
        // viewport={
        //   {
        //     // once: true,
        //   }
        // }
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-bl-[6rem] rounded-br-sm rounded-tl-sm rounded-tr-[6rem] px-4 pt-5",
          "sm:pb-6 sm:pt-10"
        )}
      >
        {image && (
          <Image
            src={image}
            alt="company logo"
            className={cn(
              "mx-auto w-44 overflow-visible rounded-bl-lg rounded-br-sm rounded-tl-sm rounded-tr-lg border bg-white object-contain object-center p-2 opacity-80 drop-shadow-2xl",
              "sm:w-60",
              "lg:h-60 lg:w-60 lg:rounded-full"
              // "xl:h-48 xl:w-48"
            )}
          />
        )}

        <div
          //ref={scrollRef}
          className={cn(
            "mt-4 flex w-full grow flex-col items-start justify-start overflow-y-auto px-0 scrollbar scrollbar-w-1",
            "sm:px-10"
            // {
            //   "scrollbar-track-mossy_glen-500/0 scrollbar-thumb-mossy_glen-500/0":
            //     isCarouselScrolling,
            //   "scrollbar-track-mossy_glen-500/10 scrollbar-thumb-mossy_glen-500/20":
            //     !isCarouselScrolling,
            // }
          )}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
