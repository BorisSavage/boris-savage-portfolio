import caveSitting from "@/public/caveSitting.webp";
import caveStanding from "@/public/caveStanding.webp";
import johnOGroats from "@/public/johnOGroats.webp";
import victoryPose from "@/public/victoryPose.webp";
import profilePic from "@/public/profilePic.webp";
import { motion, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import useScrollHandler from "@/hooks/useScrollHandler";

const pictures = [
  caveStanding,
  undefined,
  victoryPose,
  caveSitting,
  johnOGroats,
  caveStanding,
  profilePic,
  victoryPose,
  caveSitting,
  johnOGroats,
  caveStanding,
  profilePic,
];

export default function About() {
  const [isPointing, setIsPointing] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const [hasRun, setHasRun] = useState(false);

  const [animateRef] = useAnimate();
  const isInView = useInView(animateRef, { amount: 1 });

  const { scrollRef, isCarouselScrolling } = useScrollHandler();

  const indexRef = useRef(3);

  const handleAnimationStart = () => {
    if (isAnimating === false) {
      setIsAnimating(true);
      setHasRun(true);
      indexRef.current < pictures.length - 1
        ? (indexRef.current = indexRef.current + 2)
        : (indexRef.current = 3);
    }
  };

  useEffect(() => {
    if (!hasRun && isInView) {
      setTimeout(() => {
        if (!hasRun) {
          handleAnimationStart();
        }
      }, 1000);
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center p-2 pt-20",
        "xs:space-y-5 xs:p-5 xs:pt-10",
        "md:grid md:grid-cols-2"
      )}
    >
      <h3 className="absolute left-1/2 top-14 z-10 -translate-x-1/2 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg xs:top-16">
        About
      </h3>

      <motion.div
        className="relative flex items-center justify-center"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="group relative h-fit md:rounded-bl-sm md:rounded-br-[3rem] md:rounded-tl-[3rem] md:rounded-tr-sm">
          <div
            className={cn(
              "absolute -inset-0.5 animate-slight_tilt rounded-full bg-gradient-to-bl from-sunlit_meadow-300 via-mossy_glen-900 to-misty_mountains-500 blur-md",
              "md:rounded-none"
            )}
          ></div>
          <div
            ref={animateRef}
            onPointerEnter={() => handleAnimationStart()}
            onAnimationEnd={() => setIsAnimating(false)}
            className={cn(
              "relative grid h-56 w-56 grid-cols-1 overflow-hidden rounded-full",
              "md:h-96 md:w-64 md:rounded-bl-sm md:rounded-br-[3rem] md:rounded-tl-[3rem] md:rounded-tr-sm",
              "lg:h-[480px] lg:w-[400px]",
              "xl:h-[600px] xl:w-[500px]"
            )}
          >
            {pictures.map((image, index) => {
              if (image === undefined) return;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative col-start-1 row-start-1 flex h-56 w-56 flex-col items-center justify-center",
                    "md:h-96 md:w-64",
                    "lg:h-[480px] lg:w-[400px]",
                    "xl:h-[600px] xl:w-[500px]"
                  )}
                >
                  <Image
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
            "flex flex-col items-center justify-center space-y-0 px-0 md:mr-0 lg:w-[400px] xl:mr-0 xl:w-[500px]",
            "md:mb-0 md:items-start md:space-y-10"
          )}
        >
          <h4
            className={cn(
              "w-fit rounded-full bg-gradient-to-b from-transparent via-mossy_glen-950/20 to-transparent px-2 pb-[15px] pt-2 text-center text-4xl font-semibold tracking-wide drop-shadow-lg"
              //"md:text-left"
            )}
          >
            Here is a{" "}
            <span
              className={cn("underline transition", {
                "decoration-mossy_glen-100/25 duration-[1000ms] ease-in":
                  isPointing,
                "decoration-transparent duration-[3000ms] ease-out":
                  !isPointing,
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
                    "opacity-50 duration-[1500ms] ease-out",
                    "sm:duration-[3000ms]"
                  )]: !isPointing,
                }
              )}
            ></div>
            <div
              className={cn(
                "absolute -inset-0.5 animate-slight_tilt rounded-2xl bg-gradient-to-br from-transparent via-mossy_glen-500 to-transparent blur-md transition",
                {
                  [cn(
                    "opacity-50 duration-[500ms] ease-in",
                    "sm:duration-[1000ms]"
                  )]: isPointing,
                  [cn(
                    "opacity-0 duration-[1500ms] ease-out",
                    "sm:duration-[3000ms]"
                  )]: !isPointing,
                }
              )}
            ></div>
            <div
              className={cn(
                `relative overflow-hidden rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-gradient-to-br from-mossy_glen-950/60 via-transparent to-mossy_glen-950/60 px-2 py-2 tracking-wide transition`,
                {
                  [cn(
                    "text-white duration-[500ms] ease-in",
                    "sm:duration-[1000ms]"
                  )]: isPointing,
                  [cn(
                    "text-mossy_glen-50 duration-[333ms] ease-out",
                    "sm:duration-[667ms]"
                  )]: !isPointing,
                }
              )}
            >
              <div
                ref={scrollRef}
                className={cn(
                  "relative max-h-[33vh] overflow-auto pl-2 pr-1 text-justify transition duration-300 ease-in-out scrollbar scrollbar-w-1",
                  "sm:pr-2",
                  "md:max-h-[31vh]",
                  "xl:max-h-[50vh]",
                  {
                    "scrollbar-track-mossy_glen-500/0 scrollbar-thumb-mossy_glen-500/0":
                      isCarouselScrolling,
                    "scrollbar-track-mossy_glen-500/10 scrollbar-thumb-mossy_glen-500/20":
                      !isCarouselScrolling,
                  }
                )}
              >
                <p
                  onPointerEnter={() => setIsPointing(true)}
                  onTouchMove={() => setIsPointing(true)}
                  onPointerLeave={() => setIsPointing(false)}
                  onTouchEnd={() => setIsPointing(false)}
                  className="text-sm drop-shadow sm:text-base"
                >
                  I Graduated in{" "}
                  <span className="font-bold">
                    Forensic Chemistry and Toxicology
                  </span>{" "}
                  (wild, I know) with a bachelor&apos;s degree and{" "}
                  <span className="font-bold">Computer Science</span> with an
                  engineer&apos;s degree. I started coding over three years ago
                  and already have a year of professional experience as a web
                  developer. I&apos;m{" "}
                  <span className="font-bold">obsessed</span> with web dev,
                  aspiring{" "}
                  <span className="font-bold">
                    to be the best and to work with the best.
                  </span>{" "}
                  I keep up with the work of the highest skilled programmers,
                  such as Theo Browne and Matt Pocock, who are among the top
                  0.01%. I&apos;m distinguished by{" "}
                  <span className="font-bold">
                    meticulous attention to detail
                  </span>{" "}
                  and{" "}
                  <span className="font-bold">
                    thinking outside the box by default
                  </span>
                  . I&apos;m up to date with the latest and greatest web
                  features and can steadily navigate its current chaotic waters.
                  My weapon of choice is{" "}
                  <span className="font-bold">React.</span> I&apos;ve been
                  enjoying its&apos; recent takeover of the server side with the{" "}
                  <span className="font-bold">Next.js</span> framework to build{" "}
                  <span className="font-bold">full</span>
                  <span className="font-bold">-</span>
                  <span className="font-bold">stack</span> applications using{" "}
                  <span className="font-bold">Typescript</span> and{" "}
                  <span className="font-bold">TailwindCSS</span> to my
                  advantage. I&apos;m committed to working with the best, and
                  this portfolio website will show you that my web dev skills
                  are up to par. I&apos;m{" "}
                  <span className="font-bold">the solutionist</span> to your
                  issues, delivering{" "}
                  <span className="font-bold">real value</span> where it
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
