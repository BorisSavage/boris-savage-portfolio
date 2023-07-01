import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        scale: [1, 1, 3, 1, 1],
        opacity: [0.215, 0.641, 1, 0.0, 1.0],
        //borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-mossy_glen-800 " />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-mossy_glen-800 " />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-mossy_glen-800 " />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-sunlit_meadow-300" />
      <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-mossy_glen-800 " />
    </motion.div>
  );
}
