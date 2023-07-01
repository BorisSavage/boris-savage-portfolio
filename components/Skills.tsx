import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center  text-center  md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="md:toppp-24 absolute top-16 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg">
        Skills
      </h3>
      <div className="absolute top-28 mx-5 rounded-lg bg-mossy_glen-950/20 px-2 py-1 sm:top-36">
        <h3 className="pl-[3px] text-sm uppercase tracking-[3px] text-mossy_glen-200 drop-shadow-lg ">
          Hover over or touch a skill for current proficency
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-10 sm:gap-y-5">
        <Skill directionX={0} directionY={200} />
        <Skill directionX={-200} directionY={0} />
        <Skill directionX={-200} directionY={0} />
        <Skill directionX={0} directionY={200} />
        <Skill directionX={0} directionY={0} />
        <Skill directionX={0} directionY={-200} />
        <Skill directionX={0} directionY={200} />
        <Skill directionX={200} directionY={0} />
        <Skill directionX={0} directionY={-200} />
      </div>
    </motion.div>
  );
}
