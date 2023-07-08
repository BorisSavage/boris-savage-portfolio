import React, { useState } from "react";
import { cn } from "@/lib/cn";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type PillButtonPropType = {
  selected: boolean;
  onClick: () => void;
  inverted?: boolean;
};

export const PillButton: React.FC<PillButtonPropType> = ({
  selected,
  onClick,
  inverted,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-2 w-10 flex-col justify-center overflow-hidden rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl opacity-50 transition duration-[500ms] ease-out",
        "group-hover:opacity-80",
        "hover:!opacity-100",
        {
          "rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm": inverted,
        }
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-misty_mountains-500 via-transparent to-sunlit_meadow-300 transition duration-[500ms] ease-out",
          {
            "opacity-0": selected,
            "opacity-100": !selected,
          },
          { "from-sunlit_meadow-300 to-misty_mountains-500": inverted }
        )}
      ></div>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-500 to-misty_mountains-500 transition duration-[500ms] ease-out",
          {
            "opacity-0": !selected,
            "opacity-100": selected,
          },
          { "from-misty_mountains-500 to-sunlit_meadow-300": inverted }
        )}
      ></div>
      {!inverted && (
        <button
          className={cn(
            "relative h-full w-full border transition duration-[500ms] ease-out",
            {
              "border-b-mossy_glen-300/20 border-l-sunlit_meadow-300/20 border-r-misty_mountains-500/20 border-t-mossy_glen-500/20":
                selected,
              "border-b-mossy_glen-500/20 border-l-misty_mountains-500/20 border-r-sunlit_meadow-300/20 border-t-mossy_glen-300/20":
                !selected,
            }
          )}
          type="button"
          onClick={onClick}
        />
      )}
      {inverted && (
        <button
          className={cn(
            "relative h-full w-full border transition duration-[500ms] ease-out",
            {
              "border-b-mossy_glen-500/20 border-l-misty_mountains-500/20 border-r-sunlit_meadow-300/20 border-t-mossy_glen-300/20":
                selected,
              "border-b-mossy_glen-300/20 border-l-sunlit_meadow-300/20 border-r-misty_mountains-500/20 border-t-mossy_glen-500/20":
                !selected,
            }
          )}
          type="button"
          onClick={onClick}
        />
      )}
    </div>
  );
};
type DotButtonPropType = {
  isPointingNav: boolean;
  selected: boolean;
  onClick: () => void;
  section: string;
};

export const DotButton: React.FC<DotButtonPropType> = ({
  isPointingNav,
  selected,
  onClick,
  section,
}) => {
  const [isPointing, setIsPointing] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-3 w-3 flex-col justify-center rounded-full opacity-50 transition duration-[500ms] ease-out",
        { "opacity-80": isPointingNav },
        { "opacity-100": isPointing },
        {
          "bg-mossy_glen-50": selected,
          "bg-mossy_glen-600": !selected,
        }
      )}
    >
      <button
        onPointerEnter={() => setIsPointing(true)}
        onTouchMove={() => setIsPointing(true)}
        onPointerLeave={() => setIsPointing(false)}
        onTouchEnd={() => setIsPointing(false)}
        className={cn("relative h-full w-full")}
        type="button"
        onClick={onClick}
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-y-2 -right-2 pr-8",
            {
              "pointer-events-auto": isPointing,
            }
          )}
        >
          <div className="relative flex h-7 flex-col items-center justify-center">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 -left-7 -right-1 overflow-hidden rounded-bl-sm rounded-tl-3xl">
                <div
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(0, 19, 7, 0.8) 1.5rem calc(50% + 0.75rem), rgba(0, 19, 7, 1) 100%)",
                  }}
                  className={cn(
                    "pointer-events-none absolute inset-0 to-50% opacity-0 transition-all duration-[1250ms] ease-in-out",
                    {
                      "opacity-100 duration-[250ms] ease-out": isPointing,
                    }
                  )}
                ></div>
              </div>
            </div>
            <div
              className={cn(
                "relative flex h-6 w-fit flex-col items-end justify-center overflow-hidden rounded-bl-2xl rounded-br-sm rounded-tl-sm rounded-tr-2xl px-3 drop-shadow transition-all duration-[1250ms] ease-in-out",
                {
                  "rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm duration-[250ms] ease-out":
                    isPointing,
                }
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 border border-sunlit_meadow-300/0 transition-all duration-[1250ms] ease-in-out",
                  {
                    "border-misty_mountains-300/100 duration-[250ms] ease-out":
                      isPointing,
                  }
                )}
              ></div>
              <p
                className={cn(
                  "whitespace-nowrap text-sm font-medium tracking-widest text-misty_mountains-300/100 opacity-0 transition-all duration-[250ms] ease-in-out",
                  { "text-sunlit_meadow-300 opacity-100 ease-out": isPointing }
                )}
              >
                {section}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
  inverted?: boolean;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = ({
  enabled,
  onClick,
  inverted,
}) => {
  return (
    <button
      className={cn(
        "group absolute left-4 top-[16%] -translate-y-1/2 overflow-hidden rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-gradient-to-bl from-mossy_glen-950/5 via-mossy_glen-950/20 to-mossy_glen-950/5 transition duration-[500ms] ease-out",
        "sm:top-1/2",
        "lg:left-[12.5%]",
        "xl:left-[20%]",
        { "opacity-20": !enabled },
        {
          "rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl": inverted,
        }
      )}
      onClick={onClick}
      disabled={!enabled}
    >
      <div
        className={cn(
          "absolute inset-0 border border-mossy_glen-500/20 transition duration-[500ms] ease-out",

          "group-hover:border-mossy_glen-300/80"
        )}
      ></div>
      <motion.div
        whileTap={{
          scale: 0.95,
          rotate: -18,
          transition: {
            scale: { duration: 0.05, ease: "easeOut" },
            rotate: { duration: 0.01, ease: "easeOut" },
          },
        }}
        className="relative flex h-full w-full justify-center"
      >
        {" "}
        <ChevronLeftIcon
          className={cn(
            "h-10 w-10 text-misty_mountains-500 drop-shadow transition duration-[500ms] ease-out sm:h-16 sm:w-16",
            "group-hover:text-misty_mountains-300",
            {
              [cn(
                "text-sunlit_meadow-500",
                "group-hover:text-sunlit_meadow-300"
              )]: inverted,
            }
          )}
        />
      </motion.div>
    </button>
  );
};

export const NextButton: React.FC<PrevNextButtonPropType> = ({
  enabled,
  onClick,
  inverted,
}) => {
  return (
    <button
      className={cn(
        "group absolute right-4 top-[16%] -translate-y-1/2 overflow-hidden rounded-bl-3xl rounded-br-sm rounded-tl-sm rounded-tr-3xl bg-gradient-to-br from-mossy_glen-950/5 via-mossy_glen-950/20 to-mossy_glen-950/5 transition duration-[500ms] ease-out",
        "sm:top-1/2",
        "lg:right-[12.5%]",
        "xl:right-[20%]",
        { "opacity-20": !enabled },
        {
          "rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm": inverted,
        }
      )}
      onClick={onClick}
      disabled={!enabled}
    >
      <div
        className={cn(
          "absolute inset-0 border border-mossy_glen-500/20 transition duration-[500ms] ease-out",

          "group-hover:border-mossy_glen-300/80"
        )}
      ></div>
      <motion.div
        whileTap={{
          scale: 0.95,
          rotate: 18,
          transition: {
            scale: { duration: 0.05, ease: "easeOut" },
            rotate: { duration: 0.01, ease: "easeOut" },
          },
        }}
        className="relative flex h-full w-full justify-center"
      >
        {" "}
        <ChevronRightIcon
          className={cn(
            "h-10 w-10 text-sunlit_meadow-500 drop-shadow transition duration-[500ms] ease-out sm:h-16 sm:w-16",

            "group-hover:text-sunlit_meadow-300",
            {
              [cn(
                "text-misty_mountains-500",
                "group-hover:text-misty_mountains-300"
              )]: inverted,
            }
          )}
        />
      </motion.div>
    </button>
  );
};
