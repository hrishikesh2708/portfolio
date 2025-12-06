import GradientText from "@/components/ui/GradientText";
import { EducationCard } from "@/components/ui/expandable-card";
import { educationData } from "@/utils/uitility";
const Education = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <p className=" text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-2">
          The Education
        </p>
        <h2 className="text-center font-instrument text-4xl xs:text-5xl md:text-6xl mb-8">
          <span className="inline">
            Knowledge <br /> That Shapes{" "}
            <GradientText
              colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
              animationSpeed={5}
              showBorder={false}
              className="inline italic leading-10 md:leading-18"
            >
              My Craft
            </GradientText>
          </span>
        </h2>
      </div>
      <div className="max-w-5xl mx-auto pb-20 space-y-15 px-2 md:px-4">
        {educationData.map((item, index) => (
            <EducationCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
