import profilePic from "@/public/profilePic.webp";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function Hero() {
  const [typewriterText] = useTypewriter({
    words: [
      "Hi, The Name's Michael",
      "res.json({me: 'The_Solutionist'})",
      "<NextjsEnjoyer />",
      "Div-Placement-Specialist.tsx",
    ],
    typeSpeed: 50,
    deleteSpeed: 40,
    loop: true,
    delaySpeed: 1500,
    onType: () => {
      setIsHacking(true);
    },
    onDelay: () => {
      setIsHacking(false);
    },
    onDelete: () => {
      setIsHacking(true);
    },
  });

  const initialText = "Software Engineer";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [hackingText, setHackingText] = useState(initialText);
  const [isHacking, setIsHacking] = useState(true);

  const handleMouseEnter = (first?: boolean) => {
    if (isHacking && !first) return;
    setIsHacking(true);
    let iterations = 0;
    const initialIterations = 3;
    const interval = setInterval(() => {
      const initialIters = first ? 0 : initialIterations;
      const text = hackingText
        .split("")
        .map((letter, index) => {
          if (letter === " ") return letter;
          if (index <= iterations - initialIters) return initialText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      setHackingText(text);

      if (iterations >= initialText.length + initialIterations) {
        clearInterval(interval);
        setIsHacking(false);
      }

      iterations += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    const timeout = setTimeout(() => handleMouseEnter(true), 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div className="flex h-[100dvh] flex-col items-center justify-center space-y-8 overflow-hidden pt-12 text-center md:pb-16 md:pt-0">
        <BackgroundCircles />
        <Image
          className="relative mx-auto h-32 w-32 rounded-full transition duration-[2000ms] ease-savage-sig-2 hover:opacity-50 hover:duration-[1000ms]"
          src={profilePic}
          alt="profile picture"
          width={128}
          height={128}
          priority
        />
        <div className="z-20 w-full px-5 sm:w-auto">
          <h2 className="pb-2 pl-[15px] font-mono text-sm font-bold uppercase tracking-[15px] text-mossy_glen-100">
            <span
              onMouseEnter={() => handleMouseEnter(false)}
              className="drop-shadow-lg"
            >
              {hackingText}
            </span>
          </h2>
          <h1 className="h-24 pt-2 text-4xl font-semibold sm:pt-0 sm:text-5xl md:h-auto lg:text-6xl">
            <span className="drop-shadow-lg">{typewriterText}</span>
            <Cursor cursorColor="#0a4abf" />
          </h1>
        </div>
        <div
          className={cn(
            "z-20 flex flex-col items-center justify-evenly space-y-2 pb-5",
            "sm:pb-0",
            "md:mt-0 md:w-auto md:flex-row md:items-baseline md:space-x-4 md:space-y-0 md:pt-0"
          )}
        >
          <NavButton text="About" index={1} />
          <NavButton text="Experience" index={2} />
          <NavButton text="Skills" index={3} />
          <NavButton text="Projects" index={4} />
        </div>
      </div>
    </div>
  );
}
