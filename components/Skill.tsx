import { motion } from "framer-motion";
import Image from "next/image";

export default function Skill({
  directionX,
  directionY,
}: {
  directionX: number;
  directionY: number;
}) {
  const alt = (url: string) => {
    return url.slice(url.lastIndexOf("/") + 1);
  };

  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionX,
          y: directionY,
          opacity: 0,
        }}
        transition={{
          x: { duration: 1 },
          y: { duration: 1 },
          opacity: { duration: 1.5 },
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-mossy_glen-950/20 object-cover xl:h-32 xl:w-32 transition-colors duration-[1000ms] delay-[1500ms] group-hover:delay-0  ease-in group-hover:bg-transparent  group-hover:duration-[1000ms] group-hover:ease-out"
      >
        <div className="absolute -inset-0.5 animate-roundhouse_slow rounded-full bg-gradient-to-r from-sunlit_meadow-300 via-mossy_glen-300 to-misty_mountains-500 opacity-0 blur-sm transition duration-[1000ms] ease-in group-hover:opacity-100 group-hover:duration-[1000ms]"></div>

        <div className="absolute h-24 w-24 rounded-full bg-mossy_glen-950 opacity-0  transition duration-[1000ms] ease-in group-hover:opacity-80  group-hover:duration-[1000ms] group-hover:ease-out xl:h-32 xl:w-32"></div>

        <div className="relative h-12 w-12 xl:h-16 xl:w-16">
          <Image
            src="/typescript_logo.svg"
            alt=""
            fill
            className="filter transition duration-[1500ms] delay-[1500ms] group-hover:opacity-50  group-hover:delay-0 group-hover:duration-[1000ms] ease-in group-hover:grayscale group-hover:ease-out"
          />
        </div>

        <div className="absolute h-24 w-24 rounded-full bg-mossy_glen-950 opacity-0  transition duration-[1000ms] ease-in group-hover:opacity-50  group-hover:duration-[1000ms] group-hover:ease-out xl:h-32 xl:w-32"></div>

        <div className=" absolute flex h-full items-center justify-center opacity-0 duration-[500ms] group-hover:opacity-100 group-hover:duration-[1000ms]">
          <p className="text-3xl font-bold text-white drop-shadow-lg">75%</p>
        </div>
      </motion.div>
    </div>
  );
}
