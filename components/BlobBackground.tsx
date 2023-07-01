import useThrottle from "@/hooks/useThrottle";
import { cn } from "@/lib/cn";

import { RefObject, useRef } from "react";

export default function BlobBackground({
  dimBlob = false,
  blobRef,
}: {
  dimBlob: boolean;
  blobRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <div className="fixed left-0 top-0 -z-40 h-[100vh] w-[100vw] bg-mossy_glen-950" />
      <div
        ref={blobRef}
        className={cn(
          "fixed -left-0 top-1/2 -z-30 animate-roundhouse_chill  touch-none transition-all duration-500 ease-linear",
          {
            "h-[150px] w-[150px] md:h-[450px] md:w-[450px]": !dimBlob,
            "h-[50px] w-[50px] md:h-[150px] md:w-[150px]": dimBlob,
          }
        )}
      >
        <div className="absolute inset-x-0 -top-[11%] bottom-[11%] animate-fadein">
          <div className="animation-delay-5000 absolute left-[25%] top-[25%] h-[50%] w-[50%] animate-blob_1">
            <div className="absolute inset-0 animate-blob_rotate_3 rounded-full bg-gradient-to-r from-sunlit_meadow-300 to-misty_mountains-500  mix-blend-overlay"></div>
          </div>
          <div className="animation-delay-2000 absolute bottom-[7.685%] right-[15%] h-[50%] w-[50%] animate-blob_2">
            <div className="absolute inset-0 animate-blob_rotate_2 rounded-full bg-gradient-to-bl from-misty_mountains-500 to-mossy_glen-500  mix-blend-overlay"></div>
          </div>
          <div className="absolute bottom-[7.685%] left-[15%] h-[50%] w-[50%] animate-blob_3">
            <div className="absolute inset-0 animate-blob_rotate_1 rounded-full bg-gradient-to-tl from-mossy_glen-500 to-sunlit_meadow-300  mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 -z-20 backdrop-blur-[20px] transition-all duration-500 ease-linear",
          "md:backdrop-blur-[60px]",
          {
            "opacity-100": !dimBlob,
            "opacity-0 delay-500": dimBlob,
          }
        )}
      />
      <div
        className={cn(
          "fixed inset-0 -z-20 backdrop-blur-[7px] transition-all duration-500 ease-linear",
          "md:backdrop-blur-[20px]",
          {
            "opacity-100": dimBlob,
            "opacity-0 delay-500": !dimBlob,
          }
        )}
      />
    </>
  );
}
