import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Project from "./Project";
import chatgpt_mockup from "@/public/chatgpt_mockup.webp";
import fragrance_mockup from "@/public/fragrance_mockup.webp";
import portfolio_mockup from "@/public/portfolio_mockup.webp";
import { cn } from "@/lib/cn";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative mx-auto flex h-[100dvh] max-w-full flex-col items-center justify-end overflow-hidden pt-14 text-left",
        "sm:pb-12 sm:pt-32"
      )}
    >
      <h3
        className={cn(
          "absolute top-4 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg",
          "sm:top-16"
        )}
      >
        Projects
      </h3>

      <Carousel inverted>
        <Project
          href="https://chatgpt-revamped.vercel.app/"
          image={chatgpt_mockup}
          title=" Case Study 1 of 3: ChatGPT Revamped"
        >
          <div className="grow rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-mossy_glen-950/20 p-1 text-sm sm:text-base">
            <ul
              className={cn(
                "flex h-full list-none flex-col items-start justify-evenly text-justify drop-shadow-lg"
                // "xl:space-y-8"
              )}
            >
              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['💡']">
                Built with TypeScript, Next 13, Firebase, and Tailwind CSS.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🚀']">
                Seamlessly interact with OpenAI models, picking your preferred
                one.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🔒']">
                Custom API endpoints on Next.js backend ensure secure requests.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🔄']">
                Real-time chats and message storage powered by Firebase
                Firestore.
              </li>
              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🔑']">
                NextAuth with Google provider for effortless authentication.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['📱']">
                Fully responsive web app with Tailwind CSS styling.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['✨']">
                Embracing Next.js Server Components and Client Components in
                harmony.
              </li>
            </ul>
          </div>
        </Project>
        <Project
          href="https://the-bloggy-blog.vercel.app/"
          image={fragrance_mockup}
          title=" Case Study 2 of 3: Live Editing Sanity.io Blog"
        >
          <div className="grow rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-mossy_glen-950/20 p-1 text-sm sm:text-base">
            <ul
              className={cn(
                "flex h-full list-none flex-col items-start justify-evenly text-justify drop-shadow-lg"
                // "xl:space-y-8"
              )}
            >
              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🚀']">
                Customized, protected Sanity Studio instance embedded for
                seamless content management.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🔍']">
                Next.js Draft Mode and @sanity/preview-kit for site-wide Live
                Preview.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🔥']">
                Blazing-fast performance powered by Next.js Server Components,
                static generation with Revalidation, and ultra-modern media
                formats.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['📱']">
                Fully responsive web app with Tailwind CSS styling.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🌐']">
                GROQ queries fetch cloud-hosted content from the Sanity Content
                Lake.
              </li>
              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🛤️']">
                Dynamic page routing through the Next.js App Router.
              </li>
            </ul>
          </div>
        </Project>
        <Project
          href="https://github.com/BorisSavage/boris-savage-portfolio"
          image={portfolio_mockup}
          title=" Case Study 3 of 3: This Page!"
        >
          <div className="grow rounded-bl-sm rounded-br-3xl rounded-tl-3xl rounded-tr-sm bg-mossy_glen-950/20 p-1 text-sm sm:text-base">
            <ul
              className={cn(
                "flex h-full list-none flex-col items-start justify-evenly text-justify drop-shadow-lg"
                // "xl:space-y-8"
              )}
            >
              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🖼️']">
                Crafted using Next.js 13 with TypeScript, and styled with
                Tailwind CSS.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🎥']">
                Captivating advanced animations powered by Framer Motion and
                custom solutions.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['⚡']">
                Optimized rendering performance with intelligent throttling and
                debouncing.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🌟']">
                Meticulously stylized implementation of Embla Carousel with
                custom visual effects.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['📱']">
                Fully responsive web app with captivating Tailwind CSS styling.
              </li>

              <li className="pl-8 before:absolute before:-ml-8 before:pr-2.5 before:content-['🖥']">
                Check out the{" "}
                <a
                  href="https://github.com/BorisSavage/boris-savage-portfolio"
                  className="underline decoration-misty_mountains-300 decoration-2 transition duration-500 ease-savage-sig-2 hover:decoration-sunlit_meadow-300"
                >
                  GitHub repo!
                </a>
              </li>
            </ul>
          </div>
        </Project>
      </Carousel>
    </motion.div>
  );
}
