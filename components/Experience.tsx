/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import { cn } from "@/lib/cn";
import alpiLogo from "@/public/alpiLogo.webp";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative mx-auto flex h-[100dvh] max-w-full flex-col items-center justify-center overflow-hidden pt-10 text-left",
        "sm:pb-12 sm:pt-28"
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

      <ExpCard image={alpiLogo}>
        <div className="w-fit rounded-tr-[3rem] bg-mossy_glen-950/20 pb-1">
          <h4 className="inline-block w-fit pr-8 text-2xl font-light text-sunlit_meadow-200 drop-shadow sm:text-4xl">
            IT Specialist
          </h4>
          <h5 className="mt-1 text-lg font-bold text-misty_mountains-400 drop-shadow sm:text-2xl">
            ALPI MODA
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
          July 2022 - Present
        </p>
        <ul
          className={cn(
            "ml-5 flex grow list-disc flex-col items-start justify-evenly rounded-bl-xl rounded-br-sm rounded-tl-sm rounded-tr-xl bg-mossy_glen-950/20 p-1 text-justify text-xs drop-shadow",
            "sm:space-y-4 sm:text-base",
            "xl:rounded-bl-2xl xl:rounded-tr-2xl"
          )}
        >
          <li>
            Worked closely with colleagues from different departments to gather
            requirements, identify pain points, and propose technical solutions
            that significantly improved the overall website performance and user
            experience.
          </li>
          <li>
            Utilized web analytics tools to track website performance, user
            behavior, and conversion rates, providing actionable insights that
            led to a 20% decrease in bounce rate and a 10% increase in sales
            revenue.
          </li>
          <li>
            Led the successful migration process from an outdated e-commerce
            website to a more advanced and scalable IdoSell solution, resulting
            in a 30% reduction in page load times and a seamless user experience
            for customers.
          </li>
        </ul>
      </ExpCard>
    </motion.div>
  );
}
