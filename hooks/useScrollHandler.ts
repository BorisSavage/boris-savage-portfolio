import { PageScrollContext } from "@/app/page";
import { isCarouselScrollingContext } from "@/components/VerticalCarousel";
import { useInView } from "framer-motion";
import { useRef, useEffect, useContext } from "react";

export default function useScrollHandler() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(scrollRef, { amount: 1 });

  const { isCarouselScrolling } = useContext(isCarouselScrollingContext);

  const { setPageScroll } = useContext(PageScrollContext);

  const previousScrollTopRef = useRef(0);

  const startingTouchScreenY = useRef(0);

  const handleWheel = (event: WheelEvent) => {
    if (scrollRef.current !== null && !isCarouselScrolling) {
      setPageScroll(false);
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      const remainingScroll = scrollHeight - clientHeight - scrollTop;

      previousScrollTopRef.current = scrollTop;

      if (event.deltaY < 0 && scrollTop === 0) {
        setPageScroll(true);
        previousScrollTopRef.current = 0;

        // divScrollRef.current = false;
        return;
      }
      if (event.deltaY > 0 && remainingScroll === 0) {
        setPageScroll(true);
        previousScrollTopRef.current = scrollHeight;

        // divScrollRef.current = false;
        return;
      }
    }
  };

  const handlePointerLeave = () => {
    setPageScroll(true);
  };

  const handleTouchStart = (event: TouchEvent) => {
    startingTouchScreenY.current = event.touches[0].screenY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (scrollRef.current !== null && !isCarouselScrolling) {
      setPageScroll(false);
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      const remainingScroll = scrollHeight - clientHeight - scrollTop;

      previousScrollTopRef.current = scrollTop;

      const deltaY = startingTouchScreenY.current - event.touches[0].screenY;

      if (deltaY < 0 && scrollTop === 0) {
        setPageScroll(true);
        previousScrollTopRef.current = 0;

        // divScrollRef.current = false;
        return;
      }
      if (deltaY > 0 && remainingScroll === 0) {
        setPageScroll(true);
        previousScrollTopRef.current = scrollHeight;

        // divScrollRef.current = false;
        return;
      }
    }
  };

  const handleTouchEnd = () => {
    setPageScroll(true);
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;

    // Attach event listeners
    if (currentScrollRef !== null) {
      currentScrollRef.addEventListener("wheel", handleWheel);
      currentScrollRef.addEventListener("pointerleave", handlePointerLeave);
      currentScrollRef.addEventListener("touchstart", handleTouchStart);
      currentScrollRef.addEventListener("touchmove", handleTouchMove);
      currentScrollRef.addEventListener("touchend", handleTouchEnd);
    }

    // Clean up event listeners
    return () => {
      if (currentScrollRef !== null) {
        currentScrollRef.removeEventListener("wheel", handleWheel);
        currentScrollRef.removeEventListener(
          "pointerleave",
          handlePointerLeave
        );
        currentScrollRef.removeEventListener("touchstart", handleTouchStart);
        currentScrollRef.removeEventListener("touchmove", handleTouchMove);
        currentScrollRef.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return { scrollRef, isCarouselScrolling };
}
