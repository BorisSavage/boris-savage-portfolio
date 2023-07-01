import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { cn } from "@/lib/cn";

type Props = {
  url?: string;
  fgColor: string;
  bgColor: string;
  network?: string;
};
export default function SocialIconButton({
  url,
  fgColor,
  bgColor,
  network,
}: Props) {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
        rotate: 1,
        transition: {
          scale: { duration: 0.05, ease: "easeOut" },
          rotate: { duration: 0.01, ease: "easeOut" },
        },
      }}
      className="group relative"
    >
      <div
        className={cn(
          "absolute -inset-0.5 animate-roundhouse rounded-full bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[2000ms] ease-savage-sig-2",

          "group-hover:opacity-100 group-hover:duration-[500ms]"
        )}
      ></div>
      <div className="relative">
        <button
          className={cn(
            "rounded-full bg-mossy_glen-950/20  uppercase leading-none transition duration-[2000ms] ease-savage-sig-2",

            "group-hover:bg-mossy_glen-900/90 group-hover:duration-[500ms]"
          )}
        >
          <SocialIcon
            url={url}
            network={network}
            fgColor={fgColor}
            bgColor={bgColor}
          />
        </button>
      </div>
    </motion.div>
  );
}
