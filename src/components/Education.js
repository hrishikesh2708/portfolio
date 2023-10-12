import React from "react";

function Education() {
  const content = [
    {
      college: "University of Southern California",
      startDate: "August 2023",
      endDate: "Present",
      location: "Los Angeles, USA",
      degree: "Masters Of Science",
      major: "Computer Science",
      courses: ["Analysis Of Algorithm", "Database Systems"],
      grade: "",
    },
    {
      college: "SRM Institute of Science & Technology",
      startDate: "June 2018",
      endDate: "May 2022",
      location: "Chennai, India",
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      courses: [
        "Data Structures And Algorithms",
        "Object Oriented Design And Programming",
        "Computer Organization And Architecture",
        "Operating Systems",
        "Software Engineering And Project Management",
        "Design And Analysis Of Algorithms",
        "Computer Networks",
        "Database Management Systems",
        "Artificial Intelligence",
        "Compiler Design",
      ],
      grade: "9.34/10",
    },
  ];
  return (
    <div id="education">
      <div>
        {content?.map((element) => {
          return (
            <div>
              <p>{element?.college}</p>
              <p>
                {element?.startDate}
                {` ~ `}
                {element.endDate}
              </p>
              <p>
                {element.degree} {` ~ `} {element.major}
              </p>
              <p>{element.grade}</p>
              {element?.courses.map((ele) => {
                return <p>{ele}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
