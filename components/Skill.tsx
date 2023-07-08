import { cn } from "@/lib/cn";
import { motion, useAnimate } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export default function Skill({
  directionX,
  directionY,
  image,
  percentage,
  imageElement,
  sizeMultiplier,
  isSkillsInView,
}: {
  directionX: number;
  directionY: number;
  image?: StaticImageData;
  imageElement?: React.ReactNode;
  percentage: string;
  sizeMultiplier?: number;
  isSkillsInView: boolean;
}) {
  const [animateSkillRef, animateSkill] = useAnimate();

  useEffect(() => {
    animateSkill(
      animateSkillRef.current,
      isSkillsInView
        ? { opacity: 1, x: 0, y: 0 }
        : {
            x: directionX,
            y: directionY,
            opacity: 0,
          },
      isSkillsInView
        ? {
            x: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
            y: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
            opacity: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
          }
        : {
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            opacity: { duration: 0.5 },
          }
    );
  }, [isSkillsInView]);

  return (
    <div className="group relative flex">
      <motion.div
        ref={animateSkillRef}
        // initial={{
        //   x: directionX,
        //   y: directionY,
        //   opacity: 0,
        // }}
        // transition={{
        //   x: { duration: 1 },
        //   y: { duration: 1 },
        //   opacity: { duration: 1.5 },
        // }}
        // whileInView={{ opacity: 1, x: 0, y: 0 }}
        className={cn(
          "relative flex h-20 w-20 cursor-crosshair items-center justify-center rounded-full bg-mossy_glen-950/20 object-cover transition-colors delay-[1500ms] duration-[1000ms] ease-in",
          "group-hover:bg-transparent group-hover:delay-0  group-hover:duration-[500ms] group-hover:ease-out",
          "sm:h-28 sm:w-28",
          "md:h-32 md:w-32"
        )}
      >
        <div className="absolute -inset-0.5 animate-roundhouse_slow rounded-full bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[500ms] ease-in group-hover:opacity-100 group-hover:duration-[500ms]"></div>

        <div
          className={cn(
            "absolute h-full w-full rounded-full bg-mossy_glen-950 opacity-0 transition duration-[500ms] ease-in",
            "group-hover:opacity-80  group-hover:duration-[500ms] group-hover:ease-out"
          )}
        ></div>

        <div
          style={
            sizeMultiplier
              ? {
                  height: `${sizeMultiplier * 70}%`,
                  width: `${sizeMultiplier * 70}%`,
                }
              : {}
          }
          className={cn(
            "relative flex h-[70%] w-[70%] flex-col items-center justify-center"
          )}
        >
          {image && (
            <Image
              src={image}
              alt="technical skill"
              fill
              className="filter transition duration-[750ms] ease-in  group-hover:opacity-50 group-hover:grayscale group-hover:delay-0 group-hover:duration-[500ms] group-hover:ease-out"
            />
          )}
          {imageElement}
        </div>

        <div
          className={cn(
            "absolute h-full w-full rounded-full bg-mossy_glen-950 opacity-0  transition duration-[500ms] ease-in",
            "group-hover:opacity-50  group-hover:duration-[500ms] group-hover:ease-out"
          )}
        ></div>

        <div className="absolute flex h-full w-full items-center justify-center opacity-0 duration-[500ms] group-hover:opacity-100 group-hover:duration-[500ms]">
          <p
            className={cn(
              "text-2xl font-bold text-white drop-shadow",
              "sm:text-3xl",
              "md:text-4xl"
            )}
          >
            {percentage}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
