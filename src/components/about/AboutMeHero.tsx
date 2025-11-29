import GradientText from "@/components/ui/GradientText";
import ProfileCard from "@/components/ui/ProfileCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { openNewTab, socials } from "../utils/uitility";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutMeHero = () => {
  return (
    <div className="py-10 lg:max-h-[1300px] w-full mt-30">
      <div className="flex flex-col items-center justify-center lg:flex-row gap-2 lg:gap-8 xl:gap-50">
        <div className="px-3 py-4 max-w-lg">
          <div className="">
            <p className=" text-center lg:text-left uppercase tracking-widest text-muted-foreground text-sm font-mono mb-2">
              Know about me
            </p>
            <h2 className="text-center lg:text-left font-instrument text-4xl xs:text-5xl md:text-6xl mb-8">
              <span className="inline">
                Software Engineer and <br /> a little bit of{" "}
                <GradientText
                  colors={[
                    "#F27121",
                    "#E94057",
                    "#8A2387",
                    "#E94057",
                    "#F27121",
                  ]}
                  animationSpeed={5}
                  showBorder={false}
                  className="inline italic leading-10 md:leading-18"
                >
                  everything
                </GradientText>
              </span>
            </h2>
            <div className="text-center text-balance lg:text-pretty lg:text-left font-light text-base text-black/80 md:tracking-wider dark:text-neutral-300 flex flex-col gap-4">
              <p>
                Hi, I'm Hrishikesh Thakur — a curious software engineer
                passionate about building meaningful digital experiences. I work
                across the full stack, creating efficient web applications while
                also exploring the world of data through machine learning, NLP,
                and data analysis. I love turning complex problems into clean,
                scalable solutions, whether it's in code or insights.
              </p>
              <p>
                {/* When I'm not coding, I'm experimenting with new tech, analyzing
              data patterns, or diving into projects that spark my curiosity. */}
                Beyond work, I enjoy outdoor adventures and gaming. I like
                learning, creating, and making every day count.
              </p>
              <p>
                I believe in building things that matter — and having fun while
                doing it!
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center  lg:justify-start mt-1">
              {socials.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => openNewTab(social.url)}
                    >
                      {social.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{social.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <div className="mt-5 py-2 flex items-center justify-center lg:justify-start">
              <a
                className="group flex w-fit items-center justify-center gap-2 font-mono text-neutral-500 transition-colors hover:text-neutral-800  dark:hover:text-neutral-200 dark:text-neutral-400 lg:justify-start"
                href="/about#experience"
              >
                Work Experience
                <div className="size-[25px] overflow-hidden rounded-full border border-neutral-300 bg-white-1/50 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                  <div className="-translate-x-1/2 flex w-12 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm p-4">
          <ProfileCard
            name="Hrishikesh Thakur"
            title="Software Engineer"
            handle="hrishith27@gmail.com"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./../../../public/asset/Subject 2.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeHero;
