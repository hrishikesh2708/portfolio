import React from "react";
import "../App.css";

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

  return (
    <div id="skills" class="">
      <h2 class=" font-bold text-shade-1 text-6xl w-full text-center mb-8">
        Skills
      </h2>
      <div className="block min-w-0 max-w-sm h-auto p-6 m-6 bg-shade-4 border border-shade-3 text-shade-1 rounded-lg ">
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
    </div>
  );
}

export default Skills;
