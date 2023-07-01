import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import Carousel from "./Carousel";
import { cn } from "@/lib/cn";
import ckc from "@/public/ckc.webp";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-end overflow-hidden py-24 text-left"
    >
      <h3 className="absolute top-16 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg">
        Experience
      </h3>

      <Carousel>
        <ExpCard image={ckc}>
          <h4 className="text-4xl font-light text-sunlit_meadow-200 drop-shadow">
            Front End Engineer
          </h4>
          <p className="mt-1 text-2xl font-bold text-misty_mountains-400 drop-shadow">
            Cinkciarz.pl
          </p>
          {/* <div className="my-2 flex space-x-2">
            TECH USED
          </div> */}
          <p className={cn("py-5 text-sm text-mossy_glen-300", "sm:text-base")}>
            September 2022 - July 2023
          </p>
          <ul
            className={cn(
              "ml-5 list-disc space-y-2 text-sm drop-shadow",
              "sm:space-y-4 sm:text-base"
            )}
          >
            <li>
              Collaborated with the development team to build and maintain
              responsive and user-friendly websites using HTML, CSS, and
              JavaScript.{" "}
            </li>
            <li>
              Contributed to the implementation of new features and enhancements
              on existing websites, resulting in increased user engagement and
              improved overall user experience.{" "}
            </li>
            <li>
              Utilized modern front-end frameworks and libraries, including
              React, to create dynamic and interactive web applications.{" "}
            </li>
            <li>
              Ensured cross-browser compatibility and optimized website
              performance to enhance loading times and improve SEO rankings.{" "}
            </li>
          </ul>
        </ExpCard>
        <ExpCard image={ckc}>
          <h4 className="text-4xl font-light text-sunlit_meadow-200 drop-shadow">
            Front End Web Developer Intern
          </h4>
          <p className="mt-1 text-2xl font-bold text-misty_mountains-400 drop-shadow">
            Cinkciarz.pl
          </p>

          <p
            className={cn(
              "py-5 text-sm uppercase text-mossy_glen-300",
              "sm:text-base"
            )}
          >
            July 2022 - August 2022
          </p>
          <ul
            className={cn(
              "ml-5 list-disc space-y-2 text-sm drop-shadow",
              "sm:space-y-4 sm:text-base"
            )}
          >
            <li>
              Assisted in the development of responsive websites and web
              applications under the mentorship of senior developers.{" "}
            </li>
            <li>
              Gained hands-on experience in front-end technologies, including
              HTML, CSS, JavaScript, and Bootstrap.{" "}
            </li>
            <li>
              Conducted website testing and troubleshooting to ensure consistent
              functionality across different devices and browsers.{" "}
            </li>
            <li>
              Supported the team in optimizing website performance and
              implementing SEO strategies to enhance online visibility.{" "}
            </li>
          </ul>
        </ExpCard>
      </Carousel>
    </motion.div>
  );
}
