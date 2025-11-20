import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "./utils/uitility";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillList = ({
  skills,
}: {
  skills: { name: string; icon: React.ReactElement }[];
}) => (
  <AnimatePresence>
    <motion.div
      className="space-y-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariants}
    >
      {skills.map(({ name, icon }) => (
        <motion.div
          key={name}
          className="inline-block gap-2 justify-between"
          variants={itemVariants}
          transition={{ type: "tween" }}
        >
          <div className="flex items-center gap-2 bg-secondary px-2 mx-4 rounded-md">
            <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center text-primary">
              {icon}
            </div>
            <div>
              <span className="block text-sm leading-none font-semibold">
                {name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>
);

const Skills = () => {
  return (
    <>
      <div className="flex flex-col mx-auto gap-4 max-w-5xl mt-10">
        <TextShimmer className="font-mono text-3xl font-extrabold self-center" duration={3}>
          Technical Skills
        </TextShimmer>
        <p className="text-muted-foreground self-center text-lg">
          My expertise across various technologies and tools
        </p>
        <Tabs defaultValue="followers" className="w-full max-w-5xl">
          <div className="relative rounded-md overflow-x-scroll h-10 bg-muted">
            <TabsList className="absolute flex flex-row justify-stretch w-full">
              {skills?.map((e, index) => (
                <TabsTrigger
                  className="w-full"
                  key={`tabTrigger_${index}`}
                  value={e?.catagory}
                >
                  {e.catagory}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="mt-2 p-4 border rounded-md">
            {skills?.map((e, index) => (
              <TabsContent value={e.catagory} key={`tabTrigger_${index}`}>
                <SkillList skills={e.values} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Skills;
