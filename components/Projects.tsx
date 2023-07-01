import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Project from "./Project";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-end overflow-hidden py-24 text-left"
    >
      <h3 className="absolute top-16 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg">
        Projects
      </h3>

      <Carousel inverted>
        <Project />
        <Project />
        <Project />
        <Project />
      </Carousel>
    </motion.div>
  );
}
