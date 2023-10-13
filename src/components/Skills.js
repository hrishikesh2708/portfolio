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
    <div
      id="skills"
      className="block min-w-0 max-w-sm h-auto p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {content.map((element) => {
        return (
          <div className="flex flex-col">
            <h6 class="text-sm font-bold dark:text-white p-1 mt-2">{element?.label}</h6>
            <div className="flex flex-wrap">
              {element?.skills?.map((ele) => {
                return (
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium m-1 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {ele}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
