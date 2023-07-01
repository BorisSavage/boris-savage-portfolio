import { cn } from "@/lib/cn";

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SetIndexContext } from "./VerticalCarousel";

type Props = {
  text: string;
  index: number;
};

export default function NavButton({ text, index }: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  const { scrollTo } = useContext(SetIndexContext);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  const handleClick = () => {
    scrollTo(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileTap={{
        scale: 0.95,
        rotate: -1,
        transition: {
          scale: { duration: 0.05, ease: "easeOut" },
          rotate: { duration: 1, ease: "easeOut" },
        },
      }}
      className="group relative"
      style={{ pointerEvents: isAnimating ? "none" : "auto" }}
    >
      <div
        className={cn(
          "absolute -inset-0.5 animate-tilt rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[2000ms] ease-savage-sig-2",

          "group-hover:opacity-100 group-hover:duration-[500ms]"
        )}
      ></div>
      <button className="relative" onClick={handleClick}>
        <div
          className={cn(
            "relative overflow-hidden rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-mossy_glen-950/20  px-6 py-2 uppercase leading-none transition duration-[2000ms] ease-savage-sig-2",
            "group-hover:bg-mossy_glen-900/90 group-hover:text-white group-hover:duration-[500ms]"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 border border-mossy_glen-500/20 transition duration-[2000ms] ease-savage-sig-2",
              "group-hover:border-mossy_glen-200/50 group-hover:duration-[500ms]"
            )}
          ></div>
          <span className="tracking-widest text-mossy_glen-100 drop-shadow">
            {text}
          </span>
        </div>
      </button>
    </motion.div>
  );
}
