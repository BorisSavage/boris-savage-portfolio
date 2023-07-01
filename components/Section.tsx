import { cn } from "@/lib/cn";
import React from "react";

export default function Section({
  children,
  id,
  parallaxTweenValue = 0,
  grab,
  turnOffDots,
}: {
  children: React.ReactNode;
  id: string;
  parallaxTweenValue?: number;
  grab?: boolean;
  turnOffDots?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full", {
        "cursor-grab active:cursor-grabbing": grab,
      })}
    >
      <div
        style={{
          WebkitMask: "radial-gradient(closest-side, red 0%, transparent 100%)",
          mask: "radial-gradient(closest-side, red 0%, transparent 100%)",
        }}
        className={cn(
          "absolute h-[100dvh] w-[100dvw] overflow-hidden transition-opacity duration-100 ease-out",
          {
            "opacity-0": turnOffDots,
          }
        )}
      >
        <div
          style={{
            backgroundImage:
              "radial-gradient(rgba(58,139,82, 0.2) 1px, transparent 1px)",
            backgroundPosition: "0% 0%",
            backgroundSize: "20px 20px",
            transform: `translate(0%, ${parallaxTweenValue * 5.173}%)`,
          }}
          className="absolute -inset-y-[30.9%] inset-x-0"
        ></div>
      </div>
      {children}
    </section>
  );
}
