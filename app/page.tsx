"use client";

import About from "@/components/About";
import BlobBackground from "@/components/BlobBackground";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import GoldenSpiral from "@/components/GoldenSpiral";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import VerticalCarousel from "@/components/VerticalCarousel";
import useThrottle from "@/hooks/useThrottle";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface PageScrollContextType {
  pageScroll: boolean;
  setPageScroll: Dispatch<SetStateAction<boolean>>;
}

const PageScrollContext = createContext<PageScrollContextType>({
  pageScroll: false,
  setPageScroll: () => {
    return;
  },
});
export { PageScrollContext };

type IsLastIndexContextProps = {
  isLastIndex: boolean;
  setIsLastIndex: Dispatch<SetStateAction<boolean>>;
};

const IsLastIndexContext = createContext<IsLastIndexContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isLastIndex: false,
  setIsLastIndex: () => {
    return;
  },
});

export { IsLastIndexContext };

export default function Page() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const pageRef = useRef(null);
  const [triggerAnimate, setTriggerAnimate] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);

  const [isCardSection, setIsCardSection] = useState(false);

  const [pageScroll, setPageScroll] = useState(true);

  const [isLastIndex, setIsLastIndex] = useState(false);

  const [isMobile, setISMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileQuery = window.matchMedia("(max-width: 640px");
      setISMobile(isMobileQuery.matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMove = ({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) => {
    if (blobRef.current) {
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: isMobile
            ? isCardSection
              ? 500
              : 1000
            : isCardSection
            ? 1000
            : 3000,
          fill: "forwards",
          easing: "cubic-bezier(.2,.8,.2,1)",
        }
      );
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    handleMove(touch);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    handleMove(event);
  };

  // const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
  //   handleMove(event);
  // };

  useEffect(() => {
    const refs = [
      heroRef,
      aboutRef,
      experienceRef,
      skillsRef,
      projectsRef,
      contactRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setTriggerAnimate((prevState) => !prevState);
          }
          if (
            entry.target === aboutRef.current ||
            entry.target === experienceRef.current ||
            entry.target === projectsRef.current
          ) {
            setIsCardSection(entry.isIntersecting);
          }
        });
      },
      { threshold: 1 }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <BlobBackground dimBlob={isCardSection} blobRef={blobRef} />
      <GoldenSpiral triggerAnimate={triggerAnimate} />

      <div
        //onTouchStart={handleTouchMove}
        onTouchMove={useThrottle(handleTouchMove)}
        onMouseMove={useThrottle(handleMouseMove)}
        //onPointerEnter={handlePointerMove}
        //onPointerMove={useThrottle(handlePointerMove)}
        ref={pageRef}
        // className="relative z-0 h-[100dvh] overflow-x-hidden overflow-y-scroll bg-transparent text-white scrollbar-thin scrollbar-track-mossy_glen-500/25 scrollbar-thumb-mossy_glen-300/50 scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
        className="relative z-0 h-[100dvh] overflow-hidden bg-transparent text-white"
      >
        {/* <p className="middle"></p> */}
        <PageScrollContext.Provider value={{ pageScroll, setPageScroll }}>
          <IsLastIndexContext.Provider value={{ isLastIndex, setIsLastIndex }}>
            <Header />
            <VerticalCarousel>
              <Section id="hero" grab>
                <div
                  ref={heroRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2"
                />
                <Hero />
              </Section>

              <Section id="about">
                <div
                  ref={aboutRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2 "
                />
                <About />
              </Section>

              <Section id="experience" turnOffDots={isCardSection}>
                <div
                  ref={experienceRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2"
                />
                <Experience />
              </Section>

              <Section id="skills">
                <div
                  ref={skillsRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2 "
                />
                <Skills />
              </Section>

              <Section id="projects" turnOffDots={isCardSection}>
                <div
                  ref={projectsRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2 "
                />
                <Projects />
              </Section>

              <Section id="contact">
                <div
                  ref={contactRef}
                  className="absolute top-1/2 h-[80%] w-full -translate-y-1/2 "
                />
                <ContactMe />
              </Section>
            </VerticalCarousel>
          </IsLastIndexContext.Provider>
        </PageScrollContext.Provider>
      </div>
    </>
  );
}
