import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import SocialIconButton from "./SocialIconButton";
import { cn } from "@/lib/cn";
import { useContext } from "react";
import { IsLastIndexContext } from "@/app/page";

export default function Header() {
  const { setIsLastIndex } = useContext(IsLastIndexContext);

  const handleClick = () => {
    setIsLastIndex(true);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-start justify-between p-2",

        "xl:items-center"
      )}
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.2, 0.8, 0.2, 1], //cubic-bezier(.2,.8,.2,1)
        }}
        className="flex flex-row items-center space-x-2"
      >
        {/* Social icons */}
        <SocialIconButton
          url="https://github.com/BorisSavage"
          fgColor="#87e09d"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.2, 0.8, 0.2, 1], //cubic-bezier(.2,.8,.2,1)
        }}
        className="group flex items-center"
      >
        <div onClick={handleClick} className="z-10 rounded-full">
          <SocialIconButton
            network="email"
            fgColor="#87e09d"
            bgColor="transparent"
          />
        </div>
        <div
          className={cn(
            "hidden items-center justify-center rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-mossy_glen-950/20 py-1 pr-2 text-sm uppercase text-mossy_glen-200 transition duration-[2000ms] ease-savage-sig-2",

            "md:flex",

            "group-hover:bg-mossy_glen-900/70 group-hover:duration-[500ms]"
          )}
        >
          <ArrowLongLeftIcon className="h-6 w-6 drop-shadow-lg" />
          <p className="tracking-wide drop-shadow-lg">&nbsp;Get in touch</p>
        </div>
      </motion.div>
    </header>
  );
}
