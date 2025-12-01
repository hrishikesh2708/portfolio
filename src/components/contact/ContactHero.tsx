import { Button } from "@/components/animate-ui/components/buttons/button";
import { Magnetic } from "@/components/animate-ui/components/buttons/magnetic";
import { TextRoll } from "@/components/motion-primitives/text-roll";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const springOptions = { bounce: 0.1 };
  const navigate = useNavigate();
  return (
    <div className="relative z-0 mt-pagebuilder flex w-full justify-center overflow-x-hidden bg-[url('public/asset/cta.avif')] bg-center bg-cover px-4 py-20 before:absolute before:inset-0 before:z-0 before:bg-linear-to-b before:from-black before:via-black/82 before:to-black">
      <div className="flex flex-col mx-auto gap-4 mt-10 container relative z-10 w-full items-center justify-center gap-y-2 py-10 text-center">
        <div className="relative">
          <img
            src="public/asset/wings.svg"
            alt="wings svg"
            className="select-none opacity-100"
          />
          <Globe className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 w-8 md:w-10" />
        </div>
        <div className="mt-4 font-light text-2xl text-black tracking-wide sm:text-4xl lg:text-5xl dark:text-white">
          <h3>
            FROM CONCEPT TO{" "}
            <br className="block sm:hidden"/>
            <TextRoll className="font-extrabold">CREATION</TextRoll>
          </h3>
          <h3 className="self-center">
            LET'S MAKE IT{" "}
            <br className="block sm:hidden"/>
            <TextRoll className="font-extrabold">HAPPEN!</TextRoll>
          </h3>
        </div>

        <div className="">
          <Magnetic
            intensity={0.8}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Button
              variant="default"
              onClick={() => navigate("/contact")}
              size={"lg"}
              className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10 my-10"
            >
              {/* Label */}
              <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                Get in touch
              </span>

              {/* Expanding background */}
              <span className="absolute inset-0 translate-x-full scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>

              {/* Icon container */}
              <span className="z-10 relative flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                {/* Arrow 1 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="absolute text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

                {/* Arrow 2 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="absolute -translate-x-5 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Button>
          </Magnetic>
        </div>

        <div className="font-semibold text-base lg:text-2xl">
          I'm available for full-time roles & freelance projects.
        </div>
        <div className="my-2 text-balance font-extralight text-sm tracking-wide opacity-75 lg:text-xl">
          {/* I thrive on crafting dynamic web applications, and <br />
          delivering seamless user experiences. */}
          I thrive on building impactful digital solutions and helping teams
          bring ideas to life. <br />
          Let's collaborate and create something exceptional.
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
