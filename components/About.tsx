import caveSitting from "@/public/caveSitting.webp";
import caveStanding from "@/public/caveStanding.webp";
import johnOGroats from "@/public/johnOGroats.webp";
import victoryPose from "@/public/victoryPose.webp";
import profilePic from "@/public/profilePic.webp";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Balancer } from "react-wrap-balancer";

const pictures = [
  caveStanding,
  undefined,
  profilePic,
  caveSitting, //start
  victoryPose,
  caveStanding,
  johnOGroats,
  profilePic,
  caveSitting,
  victoryPose,
  caveStanding,
  johnOGroats,
];

const priorityIndexes = [2, 3, 4];

export default function About() {
  const [isPointing, setIsPointing] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const [hasRun, setHasRun] = useState(false);

  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { amount: 0.2 });

  //const { scrollRef, isCarouselScrolling } = useScrollHandler();

  const indexRef = useRef(3);

  const handleAnimationStart = () => {
    if (!isAnimating) {
      console.log("HANDLE ANIME START");
      setIsAnimating(true);
      // setTimer(-(timer - Date.now()));
      // console.log("TIME SINCE LAST RUN: ");
      indexRef.current < pictures.length - 1
        ? (indexRef.current = indexRef.current + 2)
        : (indexRef.current = 3);
    }
  };

  const handlePointerEnter = () => {
    if (hasRun) handleAnimationStart();
  };

  // useEffect(() => {
  //   if (!hasRun && !isAnimating && isInView) {
  //     setTimeout(() => {
  //       if (!hasRun) {
  //         handleAnimationStart();
  //       }
  //     }, 1050);
  //   }
  // }, [isInView]);

  useEffect(() => {
    if (isInView && !hasRun) {
      setTimeout(() => {
        if (isInView && !hasRun) {
          console.log("USE EFFEC CAUSED BELOW:");
          handleAnimationStart();
          setHasRun(true);
        }
      }, 1000);
    }
    if (!isInView && hasRun) setHasRun(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative mx-auto flex h-[100dvh] max-w-7xl flex-col items-center justify-center pt-6",
        "sm:space-y-5 sm:p-5 sm:pt-10",
        "lg:grid lg:grid-cols-2"
      )}
    >
      <h3 className="absolute left-1/2 top-4 z-10 -translate-x-1/2 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg sm:top-16">
        About
      </h3>

      <motion.div
        className="relative flex items-center justify-center"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={
          {
            // once: true,
          }
        }
      >
        <div className="group relative h-fit md:rounded-bl-sm md:rounded-br-[3rem] md:rounded-tl-[3rem] md:rounded-tr-sm">
          <div
            className={cn(
              "absolute -inset-0.5 animate-slight_tilt rounded-full bg-gradient-to-bl from-sunlit_meadow-300 via-mossy_glen-900 to-misty_mountains-500 blur-md",
              "lg:rounded-none"
            )}
          ></div>
          <div
            ref={animateRef}
            onPointerEnter={() => handlePointerEnter()}
            onAnimationEnd={() => {
              setIsAnimating(false);
            }}
            className={cn(
              "relative grid h-36 w-36 grid-cols-1 overflow-hidden rounded-full",
              "sm:h-60 sm:w-60",
              "md:h-80 md:w-80",
              "lg:h-[480px] lg:w-[400px] lg:rounded-bl-sm lg:rounded-br-[3rem] lg:rounded-tl-[3rem] lg:rounded-tr-sm",
              "xl:h-[600px] xl:w-[500px]"
            )}
          >
            {pictures.map((image, index) => {
              if (image === undefined) return;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative col-start-1 row-start-1 flex h-36 w-36 flex-col items-center justify-center",
                    "sm:h-60 sm:w-60",
                    "md:h-80 md:w-80",
                    "lg:h-[480px] lg:w-[400px]",
                    "xl:h-[600px] xl:w-[500px]"
                  )}
                >
                  <Image
                    priority={priorityIndexes.includes(index)}
                    src={image}
                    alt="that's me!"
                    className={cn(
                      "object-cover object-center opacity-0 transition-opacity duration-[500ms]",
                      {
                        "animate-pulsor": isAnimating,
                        "opacity-100 transition-none":
                          index === indexRef.current - 3,
                        "opacity-100 delay-[500ms]": index === indexRef.current,
                      }
                    )}
                    fill
                    sizes="100%"
                  />
                </div>
              );
            })}

            <div className="absolute inset-0 border border-mossy_glen-500/50"></div>
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-tr from-misty_mountains-500/20 via-transparent to-sunlit_meadow-300/20 opacity-0 backdrop-contrast-[1.05] backdrop-saturate-[1.05]",
                { "animate-pulsor_backdrop": isAnimating }
              )}
            ></div>
            <div
              style={{
                WebkitMask: "radial-gradient(transparent 20%, red 100%)",
                mask: "radial-gradient(transparent 20%, red 100%)",
              }}
              className={cn(
                "absolute inset-0 bg-black/20 opacity-0 backdrop-blur-sm",
                {
                  "animate-pulsor_backdrop_accelerate": isAnimating,
                }
              )}
            ></div>
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-0 px-0",
            "sm:space-y-5",
            "md:items-start",
            "lg:w-[400px]",
            "xl:w-[500px]"
          )}
        >
          <h4
            className={cn(
              "w-fit rounded-full bg-gradient-to-b from-transparent via-mossy_glen-950/20 to-transparent px-2 py-2 text-center text-2xl font-semibold tracking-wide drop-shadow-lg",
              "sm:text-4xl",
              "lg:bg-gradient-to-r",
              "xl:bg-gradient-to-b"
            )}
          >
            Here is a{" "}
            <span
              className={cn("underline transition", {
                [cn(
                  "decoration-sunlit_meadow-300 duration-[500ms] ease-in",
                  "sm:duration-[1000ms]"
                )]: isPointing,
                [cn(
                  "decoration-misty_mountains-500 duration-[333ms] ease-out",
                  "sm:duration-[667ms]"
                )]: !isPointing,
              })}
            >
              little
            </span>{" "}
            background
          </h4>
          <div className="group relative">
            <div
              className={cn(
                "absolute -inset-0.5 animate-slight_tilt rounded-2xl bg-gradient-to-br from-sunlit_meadow-300 via-mossy_glen-950 to-misty_mountains-500 blur-md transition",
                {
                  [cn(
                    "opacity-0 duration-[500ms] ease-in",
                    "sm:duration-[1000ms]"
                  )]: isPointing,
                  [cn(
                    "opacity-50 duration-[333ms] ease-out",
                    "sm:duration-[667ms]"
                  )]: !isPointing,
                }
              )}
            ></div>
            <div
              className={cn(
                "absolute -inset-0.5 animate-slight_tilt rounded-2xl bg-gradient-to-br from-transparent via-mossy_glen-500 to-transparent blur-md transition",
                {
                  [cn(
                    "opacity-50 duration-[333ms] ease-in",
                    "sm:duration-[667ms]"
                  )]: isPointing,
                  [cn(
                    "opacity-0 duration-[500ms] ease-out",
                    "sm:duration-[1000ms]"
                  )]: !isPointing,
                }
              )}
            ></div>
            <div
              className={cn(
                `relative overflow-hidden rounded-bl-sm rounded-br-xl rounded-tl-xl rounded-tr-sm bg-gradient-to-br from-mossy_glen-950/80 via-transparent to-mossy_glen-950/80 px-5 py-1`,
                "sm:rounded-br-3xl sm:rounded-tl-3xl"
              )}
            >
              <div
                //ref={scrollRef}
                className={cn(
                  // "max-h-[40dvh]",
                  "relative overflow-auto text-justify scrollbar scrollbar-w-1"

                  // "sm:pr-2",
                  // "md:max-h-[40dvh]",
                  // "xl:max-h-[40dvh]",
                  // {
                  //   "scrollbar-track-mossy_glen-500/0 scrollbar-thumb-mossy_glen-500/0":
                  //     isCarouselScrolling,
                  //   "scrollbar-track-mossy_glen-500/10 scrollbar-thumb-mossy_glen-500/20":
                  //     !isCarouselScrolling,
                  // }
                )}
              >
                <p
                  onPointerEnter={() => setIsPointing(true)}
                  onTouchMove={() => setIsPointing(true)}
                  onPointerLeave={() => setIsPointing(false)}
                  onTouchEnd={() => setIsPointing(false)}
                  className={cn(
                    "bg-gradient-to-br from-sunlit_meadow-300/100 via-white/100 to-misty_mountains-500/100 bg-clip-text text-sm drop-shadow",
                    "sm:text-base",
                    {
                      [cn(
                        "text-white/0 duration-[500ms] ease-in-out",
                        "sm:duration-[1000ms]"
                      )]: isPointing,
                      [cn(
                        "text-white/100 duration-[333ms] ease-out",
                        "sm:duration-[667ms]"
                      )]: !isPointing,
                    }
                  )}
                >
                  <Balancer>
                    I Graduated in{" "}
                    <span className="font-bold">Computer Science</span> and{" "}
                    <span className="font-bold">
                      Forensic Chemistry and Toxicology
                    </span>{" "}
                    I started coding even before the start of my CS degree and
                    already have a year of professional experience as a
                    developer. I&apos;m{" "}
                    <span className="font-bold">obsessed</span> with web dev,
                    and I aspire to work with the best. I&apos;m distinguished
                    by{" "}
                    <span className="font-bold">
                      meticulous attention to detail
                    </span>{" "}
                    and{" "}
                    <span className="font-bold">
                      thinking outside the box by default
                    </span>
                    . I&apos;m up to date with the latest and greatest web
                    features and can steadily navigate its current chaotic
                    waters. I enjoy deep dives into topics I&apos;m interested
                    in and keeping abreast of the work of top-skilled
                    programmers in the field. My weapon of choice is{" "}
                    <span className="font-bold">React</span>. I&apos;ve been
                    enjoying its&apos; recent takeover of the server side with{" "}
                    <span className="font-bold">Next.js</span> to build{" "}
                    <span className="font-bold">full-stack</span> applications
                    using <span className="font-bold">Typescript</span> to my
                    advantage. This web development gallery will show you that
                    my skills are up to par. I&apos;m{" "}
                    <span className="font-bold">the solutionist</span> to your
                    issues, delivering{" "}
                    <span className="font-bold">real value</span> where it
                    matters.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
