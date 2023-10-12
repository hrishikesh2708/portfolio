import React from "react";

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
    <div id="skills">
      <div>
        {content.map((element) => {
          return (
            <div>
              <span class="">{element?.label}</span>;
              {element?.skills?.map((ele) => {
                return <span class="">{ele}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
