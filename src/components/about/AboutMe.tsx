import GradientText from "@/components/ui/GradientText";
import ProfileCard from "@/components/ui/ProfileCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { experience, openNewTab, socials } from "../utils/uitility";
import { Button } from "@/components/ui/button";
import { Timeline } from "../ui/timeline";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/about/ContributionGraph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import { Book, Code, Eye, NotebookPen } from "lucide-react";
import { useGithubStats, useLeetCodeStats } from "../utils/api";
import Education from "./Education";
const maxCount = 20;
const maxLevel = 4;
const now = new Date();
const days = eachDayOfInterval({
  start: startOfYear(now),
  end: endOfYear(now),
});
const calData = days.map((date) => {
  const c = Math.round(
    Math.random() * maxCount - Math.random() * (0.8 * maxCount)
  );
  const count = Math.max(0, c);
  const level = Math.ceil((count / maxCount) * maxLevel);
  return {
    date: formatISO(date, { representation: "date" }),
    count,
    level,
  };
});

const AboutMe = () => {
  const stats = useGithubStats();
  const { totalSolved, profileViews } = useLeetCodeStats();

  return (
    <div className="py-10 w-full mt-30 flex flex-col items-center justify-center gap-10">
      <div className="flex lg:max-h-[1300px] flex-col items-center justify-center lg:flex-row gap-2 lg:gap-8 xl:gap-50">
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
                When I'm not coding, I'm experimenting with new tech, analyzing
                data patterns, or diving into projects that spark my curiosity.
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
          </div>
        </div>
        <div className="max-w-sm p-4">
          <ProfileCard
            name="Hrishikesh Thakur"
            title="Software Engineer"
            handle="hrishith27@gmail.com"
            status="Online"
            contactText="Contact Me"
            avatarUrl="public/Subject 2.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
      {/* Experience */}
      <div id={"experience"} className="relative w-full overflow-clip">
        <Timeline data={experience} />
      </div>
      {/* Education */}
      <div id={"education"} className="w-full">
        <Education />
      </div>
      {/* Developer insights */}
      <div className="mx-auto my-24 w-full max-w-[984px] px-4 mt-10 mb-32">
        <div className="">
          <p className=" text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-2">
            Developer Insights
          </p>
          <h2 className="text-center font-instrument text-4xl xs:text-5xl md:text-6xl mb-8">
            <span className="inline">
              Github & Leetcode{" "}
              <GradientText
                colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
                animationSpeed={5}
                showBorder={false}
                className="inline italic leading-10 md:leading-18"
              >
                Activity
              </GradientText>
            </span>
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <ContributionGraph data={calData} blockSize={14}>
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter>
              <ContributionGraphTotalCount />
              <ContributionGraphLegend />
            </ContributionGraphFooter>
          </ContributionGraph>
        </div>
        <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
          <div className="shadow-border dark:bg-zinc-900/50 bg-white-2 md:p-4 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 dark:bg-purple-900/20 bg-purple-500/20">
                <NotebookPen className="lucide lucide-users h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="line-clamp-1 text-sm dark:text-zinc-400 text-zinc-600">
                  GitHub Contributions
                </p>
                <p className="font-bold text-xl dark:text-zinc-100 text-zinc-600 md:text-2xl">
                  {stats.contributions || 110}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-border dark:bg-zinc-900/50 bg-white-2 md:p-4 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 dark:bg-yellow-900/20 bg-yellow-500/20">
                <Book className="lucide lucide-star h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="line-clamp-1 text-sm dark:text-zinc-400 text-zinc-600">
                  GitHub Repositories
                </p>
                <p className="font-bold text-xl dark:text-zinc-100 text-zinc-600 md:text-2xl">
                  {stats.repos || 110}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-border dark:bg-zinc-900/50 bg-white-2 md:p-4 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 dark:bg-green-900/20 bg-green-500/20">
                <Code className="lucide lucide-book-open h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="line-clamp-1 text-sm dark:text-zinc-400 text-zinc-600">
                  Coding Problems Solved
                </p>
                <p className="font-bold text-xl dark:text-zinc-100 text-zinc-600 md:text-2xl">
                  {totalSolved || 200}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-border dark:bg-zinc-900/50 bg-white-2 md:p-4 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 dark:bg-blue-900/20 bg-blue-500/20">
                <Eye className="lucide lucide-git-fork h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="line-clamp-1 text-sm dark:text-zinc-400 text-zinc-600">
                  Solution Engagement
                </p>
                <p className="font-bold text-xl dark:text-zinc-100 text-zinc-600 md:text-2xl">
                  {profileViews || 58}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
