import GradientText from "@/components/ui/GradientText";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { projects } from "@/utils/uitility";

const Project = () => {
  return (
    <div>
      <div className="realtive top-0 flex flex-col mx-auto gap-4 w-full my-10 mb-40">
        <div>
          <p className=" text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-1">
            Project Showcase
          </p>
          <h2 className="text-center  capitalize font-instrument text-4xl xs:text-5xl md:text-6xl mb-3">
            <span className="inline">
              Crafting ideas into{" "}
              <GradientText
                colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
                animationSpeed={5}
                showBorder={false}
                className="inline italic leading-10 md:leading-18"
              >
                Reality
              </GradientText>
            </span>
          </h2>
          <p className="text-center text-muted-foreground self-center text-lg ">
            A snapshot of my work across domains and technologies
          </p>
        </div>
        <div className="w-full">
          <StickyScroll content={projects} contentClassName="" seemoreLink={false}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
