import useScrollHandler from "@/hooks/useScrollHandler";
import { cn } from "@/lib/cn";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";
import { Balancer } from "react-wrap-balancer";

type Inputs = {
  name: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  // const { scrollRef, isCarouselScrolling } = useScrollHandler();

  //const onSubmit: SubmitHandler<Inputs> = (formData) => openEmail(formData);

  const openURL = (url: string) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const mail = "MBorysewicz@protonmail.com";
    window.location.href = `mailto:${mail}`;
  };
  const openCaller = () => {
    const phnNmbr = "+48504102600";
    window.location.href = `tel:${phnNmbr}`;
  };

  return (
    <div
      //ref={scrollRef}
      className={cn(
        "relative mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-10 pt-16 text-center transition duration-500 ease-in-out scrollbar scrollbar-w-2"
        // {
        //   "scrollbar-track-sunlit_meadow-300/0 scrollbar-thumb-sunlit_meadow-300/0":
        //     isCarouselScrolling,
        //   "scrollbar-track-sunlit_meadow-300/10 scrollbar-thumb-sunlit_meadow-300/50":
        //     !isCarouselScrolling,
        // }
      )}
    >
      <h3 className="absolute top-16 pl-[20px] text-2xl uppercase tracking-[20px] text-mossy_glen-100 drop-shadow-lg">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 sm:space-y-10 sm:pb-12">
        <div className="rounded-xl bg-gradient-to-b from-transparent via-mossy_glen-950/20 to-transparent px-2 pb-[7px]">
          <h4 className="text-center text-2xl font-semibold drop-shadow sm:text-4xl">
            <Balancer>
              I&apos;ve got just what you need.{" "}
              <span className="underline decoration-sunlit_meadow-300">
                Let&apos;s talk
              </span>
            </Balancer>
          </h4>
        </div>
        <div className="space-y-5 sm:space-y-16">
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => openURL("https://linkedin.com/in/borissavage")}
              className="relative mx-auto flex items-center justify-center space-x-2 rounded-full bg-mossy_glen-900/50 px-4 py-2 shadow shadow-misty_mountains-100 ring-1 ring-misty_mountains-100 transition duration-1000 ease-savage-sig-2 hover:bg-mossy_glen-900/80 hover:shadow-xl  hover:ring-2"
            >
              <EnvelopeIcon className="invisible h-7 w-7" />

              <div className="absolute left-[-3px] animate-pulse">
                <SocialIcon
                  network="linkedin"
                  bgColor="transparent"
                  fgColor="rgb(110, 195, 132)"
                />
              </div>
              <p className="text-lg text-white drop-shadow-lg sm:text-2xl">
                LinkedIn
              </p>
            </button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => openURL("https://wa.me/48504102600")}
              className="relative mx-auto flex items-center justify-center space-x-2 rounded-full bg-mossy_glen-900/50 px-4 py-2 shadow shadow-misty_mountains-100 ring-1 ring-misty_mountains-100 transition duration-1000 ease-savage-sig-2 hover:bg-mossy_glen-900/80 hover:shadow-xl  hover:ring-2"
            >
              <EnvelopeIcon className="invisible h-7 w-7" />

              <div className="absolute left-[-3px] animate-pulse">
                <SocialIcon
                  network="whatsapp"
                  bgColor="transparent"
                  fgColor="rgb(110, 195, 132)"
                />
              </div>
              <p className="text-lg text-white drop-shadow-lg sm:text-2xl">
                WhatsApp
              </p>
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => openCaller()}
              className="relative mx-auto flex items-center justify-center space-x-2 rounded-full bg-mossy_glen-900/50 px-4 py-2 shadow shadow-misty_mountains-100 ring-1 ring-misty_mountains-100 transition duration-1000 ease-savage-sig-2 hover:bg-mossy_glen-900/80 hover:shadow-xl  hover:ring-2"
            >
              <PhoneIcon className="h-7 w-7 animate-pulse text-mossy_glen-300" />

              <p className="text-lg text-white drop-shadow-lg sm:text-2xl">
                +48504102600
              </p>
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => openURL("https://goo.gl/maps/KJ3mAoUi45NNtYYy9")}
              className="relative mx-auto flex items-center justify-center space-x-2 rounded-full bg-mossy_glen-900/50 px-4 py-2 shadow shadow-misty_mountains-100 ring-1 ring-misty_mountains-100 transition duration-1000 ease-savage-sig-2 hover:bg-mossy_glen-900/80 hover:shadow-xl  hover:ring-2"
            >
              <MapPinIcon className="h-7 w-7 animate-pulse text-mossy_glen-300" />

              <p className="text-lg text-white drop-shadow-lg sm:text-2xl">
                Lubusz Voivodeship, Poland
              </p>
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => openEmail()}
              className="relative mx-auto flex items-center justify-center space-x-2 rounded-full bg-mossy_glen-900/50 px-4 py-2 shadow shadow-misty_mountains-100 ring-1 ring-misty_mountains-100 transition duration-1000 ease-savage-sig-2 hover:bg-mossy_glen-900/80 hover:shadow-xl  hover:ring-2"
            >
              <EnvelopeIcon className="h-7 w-7 animate-pulse text-mossy_glen-300" />

              <p className="text-lg text-white drop-shadow-lg sm:text-2xl">
                MBorysewicz@protonmail.com
              </p>
            </button>
          </motion.div>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-2 border"
        >
          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput touch-pan-y"
              type="text"
            />
            <input
              {...register("subject", { required: true })}
              placeholder="Subject"
              className="contactInput touch-pan-y"
              type="text"
            />
          </div>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput touch-pan-y scrollbar scrollbar-track-sunlit_meadow-300/20 scrollbar-thumb-misty_mountains-500/50 scrollbar-w-1"
          />
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
          >
            <button
              type="submit"
              className="mt-2 w-full rounded-lg border-y border-b-mossy_glen-500 border-t-mossy_glen-500/50 bg-mossy_glen-950/20 py-2 font-bold tracking-widest text-misty_mountains-100/80 transition-all duration-500 ease-savage-sig-2 hover:border-b-misty_mountains-300 hover:border-t-misty_mountains-300/50 hover:text-misty_mountains-100/100 hover:shadow-lg hover:shadow-misty_mountains-100/20  sm:rounded-xl sm:py-5"
            >
              Submit
            </button>
            <span className="mt-0.5">
              {isSubmitSuccessful
                ? "😉"
                : errors.message || errors.name || errors.subject
                ? "Please fill out the fields!"
                : ""}
            </span>
          </motion.div>
        </form> */}
      </div>
    </div>
  );
}
