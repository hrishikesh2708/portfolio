import React from "react";
import "../App.css";
import Layout from "./Layout";
import { motion } from "framer-motion";

function Skills() {
  const content = [
    {
      label: "Languages",
      skills: ["c++", "javascript", "java", "python", "HTML", "CSS", "SQL"],
    },
    {
      label: "Domain Knowledge",
      skills: [
        "Backend Development",
        "Frontend Development",
        "Web Development",
        "Machine Learning",
        "Databases",
        "Agile",
        "Automation",
      ],
    },
    {
      label: "Tools & Frameworks",
      skills: [
        "ReactJs",
        "Redux",
        "SpringBoot",
        "Hibernate",
        "Git",
        "Figma",
        "JIRA",
        "MongoDB",
        "Jenkins",
        "WebdriverIO",
      ],
    },
  ];
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        class="flex items-center justify-center rounded-full font-semibold text-shade-1 py-3 px-6 bg-shade-3 shadow-shade-2 cursor-pointer absolute"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: x, y: y }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    );
  };
  return (
    <Layout>
      <div id="skills" class="">
        <h2 class=" font-bold text-shade-1 text-6xl w-full text-center mb-8">
          Skills
        </h2>
        <div class="w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark">
          <motion.div
            class="flex items-center justify-center rounded-full font-semibold text-shade-1 p-8 bg-shade-3 shadow-shade-2"
            whileHover={{ scale: 1.05 }}
          >
            Skills
          </motion.div>
          <Skill name="c++" x="-7vw" y="6vw" />
          <Skill name="java" x="-8vw" y="-6vw" />
          <Skill name="python" x="9vw" y="5vw" />
          <Skill name="javascript" x="8vw" y="-6vw" />
          <Skill name="HTML" x="0vw" y="-11vw" />
          <Skill name="CSS" x="0vw" y="11vw" />
          <Skill name="SQL" x="18vw" y="-3vw" />
          <Skill name="ReactJs" x="18vw" y="3vw" />
          <Skill name="SpringBoot" x="-18vw" y="5vw" />
          <Skill name="Hibernate" x="-18vw" y="-5vw" />

          <Skill name="Git" x="-26vw" y="0vw" />
          <Skill name="Figma" x="26vw" y="0vw" />
          <Skill name="JIRA" x="-12vw" y="13vw" />
          <Skill name="Jenkins" x="15vw" y="11vw" />
          <Skill name="MongoDB" x="15vw" y="-12vw" />
          <Skill name="WebdriverIO" x="-15vw" y="-12vw" />
          <Skill name="Backend Development" x="0vw" y="-18vw" />
          <Skill name="Frontend Development" x="0vw" y="18vw" />

          <Skill name="Machine Learning" x="29vw" y="-9vw" />
          <Skill name="Databases" x="-29vw" y="9vw" />
          <Skill name="Agile" x="-29vw" y="-9vw" />
          <Skill name="Automation" x="29vw" y="9vw" />
          <Skill name="Redux" x="-13vw" y="0vw" />
        </div>
        {/* <div class="flex flex-col justify-center">
        <div className="min-w-0 max-w-sm h-auto p-6 m-6 bg-shade-4 border border-shade-3 text-shade-1 rounded-lg ">
          {content.map((element) => {
            return (
              <div className="flex flex-col">
                <h6 class="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r to-accent-3 from-accent-2 p-1 mt-2">
                  {element?.label}
                </h6>
                <div className="flex flex-wrap">
                  {element?.skills?.map((ele) => {
                    return (
                      <span class="bg-shade-5 text-shade-1 border border-shade-3 text-xs font-medium m-1 px-2.5 py-0.5 rounded">
                        {ele}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      </div>
    </Layout>
  );
}

export default Skills;
