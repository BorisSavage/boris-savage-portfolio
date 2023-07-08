import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import Carousel from "./Carousel";
import { cn } from "@/lib/cn";
import ckc from "@/public/ckc.webp";
import { Balancer } from "react-wrap-balancer";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative mx-auto flex h-screen max-w-full flex-col items-center justify-end overflow-hidden pt-14 text-left",
        "sm:pb-12 sm:pt-32"
      )}
    >
      <h3
        className={cn(
          "absolute top-4 pl-[13px] text-2xl uppercase tracking-[13px] text-mossy_glen-100 drop-shadow-lg",
          "sm:top-16 sm:pl-[20px] sm:tracking-[20px]"
        )}
      >
        Experience
      </h3>

      <Carousel>
        <ExpCard image={ckc}>
          <div className="w-fit rounded-tr-[3rem] bg-mossy_glen-950/20 pb-1">
            <h4 className="inline-block w-fit pr-8 text-2xl font-light text-sunlit_meadow-200 drop-shadow sm:text-4xl">
              Front End Engineer
            </h4>
            <h5 className="mt-1 text-lg font-bold text-misty_mountains-400 drop-shadow sm:text-2xl">
              Cinkciarz.pl
            </h5>
          </div>
          {/* <div className="my-2 flex space-x-2">
            TECH USED
          </div> */}
          <p
            className={cn(
              "w-fit rounded-tr-[3rem]  bg-mossy_glen-950/20 py-1 pr-8 text-sm text-mossy_glen-300",
              "sm:text-base"
            )}
          >
            September 2022 - July 2023
          </p>
          <ul
            className={cn(
              "ml-5 flex grow list-disc flex-col items-start justify-evenly rounded-bl-xl rounded-br-sm rounded-tl-sm rounded-tr-xl bg-mossy_glen-950/20 p-1 text-justify text-sm drop-shadow",
              "sm:space-y-4 sm:text-base",
              "xl:rounded-bl-2xl xl:rounded-tr-2xl"
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
          <div className="w-fit rounded-tr-[3rem] bg-mossy_glen-950/20 pb-1">
            <h4 className="pr-8 text-2xl font-light text-sunlit_meadow-200 drop-shadow sm:text-4xl">
              Front End Engineer Intern
            </h4>
            <h5 className="mt-1 text-lg font-bold text-misty_mountains-400 drop-shadow sm:text-2xl">
              Cinkciarz.pl
            </h5>
          </div>

          <p
            className={cn(
              "w-fit rounded-tr-[3rem]  bg-mossy_glen-950/20 py-1 pr-8 text-sm text-mossy_glen-300",
              "sm:text-base"
            )}
          >
            July 2022 - August 2022
          </p>
          <ul
            className={cn(
              "ml-5 flex grow list-disc flex-col items-start justify-evenly rounded-bl-xl rounded-br-sm rounded-tl-sm rounded-tr-xl bg-mossy_glen-950/20 p-1 text-justify text-sm drop-shadow",
              "sm:space-y-4 sm:text-base",
              "xl:rounded-bl-2xl xl:rounded-tr-2xl"
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
