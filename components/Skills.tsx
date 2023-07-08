import { frame, motion, useInView } from "framer-motion";
import Skill from "./Skill";
import typescript_logo from "@/public/typescript_logo.svg";
import css_logo from "@/public/css_logo.svg";
import firebase_logo from "@/public/firebase_logo.svg";
import framermotion_logo from "@/public/framermotion_logo.svg";
import javascript_logo from "@/public/javascript_logo.svg";
import react_logo from "@/public/react_logo.svg";
import sanity_logo from "@/public/sanity_logo.svg";
import tailwind_logo from "@/public/tailwind_logo.svg";
import git_logo from "@/public/git_logo.svg";
import mysql_logo from "@/public/mysql_logo.svg";
import html_logo from "@/public/html_logo.svg";
import nodejs_logo from "@/public/nodejs_logo.svg";
import vscode_logo from "@/public/vscode_logo.svg";
import zustand_logo from "@/public/zustand_logo.webp";
import graphql_logo from "@/public/graphql_logo.svg";
import nextjs_logo from "@/public/nextjs_logo.svg";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export default function Skills() {
  const skillsRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, { amount: 0.95 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center pt-20  text-center  md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-16 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg">
        Skills
      </h3>
      <div className="absolute top-28 mx-5 rounded-lg bg-mossy_glen-950/20 px-2 py-1 sm:top-36">
        <h3 className="pl-[3px] text-sm uppercase tracking-[3px] text-mossy_glen-200 drop-shadow-lg ">
          Hover over or touch a skill for current proficency
        </h3>
      </div>

      <div
        ref={skillsRef}
        className={cn(
          "grid grid-cols-4 gap-x-2 gap-y-2"
          // "sm:gap-x-2 sm:gap-y-2"
          // "md:gap-x-4 md:gap-y-4"
        )}
      >
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={-200}
          directionY={0}
          sizeMultiplier={0.8}
          image={html_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={-200}
          directionY={0}
          sizeMultiplier={0.8}
          image={javascript_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={-200}
          directionY={0}
          image={graphql_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={-200}
          sizeMultiplier={1.2}
          image={mysql_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={200}
          image={css_logo}
          sizeMultiplier={0.8}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={-200}
          directionY={0}
          sizeMultiplier={0.8}
          image={typescript_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={-200}
          sizeMultiplier={1.2}
          image={nodejs_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={-200}
          sizeMultiplier={1.2}
          image={firebase_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={200}
          image={react_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={200}
          image={nextjs_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={200}
          directionY={0}
          sizeMultiplier={1.2}
          image={zustand_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={-200}
          image={sanity_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={0}
          directionY={200}
          sizeMultiplier={0.8}
          image={framermotion_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={200}
          directionY={0}
          sizeMultiplier={1.2}
          image={tailwind_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={200}
          directionY={0}
          image={git_logo}
          percentage={"80%"}
        />
        <Skill
          isSkillsInView={isSkillsInView}
          directionX={200}
          directionY={0}
          sizeMultiplier={0.8}
          image={vscode_logo}
          percentage={"80%"}
        />
      </div>
    </motion.div>
  );
}
