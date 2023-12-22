import React from "react";
import { motion } from "framer-motion";

function Education() {
  const content = [
    {
      college: "University of Southern California",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usc.edu%2Fvisit-usc%2F&psig=AOvVaw1hvr-XHn6Q8jpox1S0hufi&ust=1697318527839000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOio4NX684EDFQAAAAAdAAAAABAE",
      startDate: "August 2023",
      endDate: "Present",
      location: "Los Angeles, USA",
      degree: "Masters Of Science",
      major: "Computer Science",
      discription: `I am currently pursuing a Master of Science degree in Computer Science at the prestigious University of Southern California. While my educational journey is still in progress, I am committed to excelling in my coursework and research projects, which will contribute to the development of my expertise in computer science`,
      courses: ["Analysis Of Algorithm", "Database Systems"],
      grade: "",
    },
    {
      college: "SRM Institute of Science & Technology",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usc.edu%2Fvisit-usc%2F&psig=AOvVaw1hvr-XHn6Q8jpox1S0hufi&ust=1697318527839000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOio4NX684EDFQAAAAAdAAAAABAE",
      startDate: "June 2018",
      endDate: "May 2022",
      location: "Chennai, India",
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      discription:
        "I completed my Bachelor of Technology (B.Tech) in Computer Science Engineering from the esteemed SRM Institute of Science & Technology, located in Chennai, India. I am excited to pursue a promising career in the world of computer science and engineering, applying the knowledge and skills I've acquired throughout my undergraduate studies.",
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
      <h2 class=" font-bold text-shade-1 text-6xl w-full text-center mb-8">
        Education
      </h2>

      <div>
        {content?.map((element) => {
          return (
            <motion.div
              class="container mt-4 mx-auto p-4 md:p-0 text-shade-1"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <div class="shadow-lg flex flex-wrap xs:w-full w-4/5 mx-auto p-4">
                <div
                  class={`bg-cover bg-bottom border border-shade-3 lg:w-full w-1/3 lg:h-64 h-auto relative ${
                    element.college === "University of Southern California"
                      ? "bg-usc"
                      : "bg-srm"
                  }`}
                ></div>

                <div class="bg-shade-4 lg:w-full w-2/3 p-4 border border-shade-3">
                  <div class="h-full mx-auto px-0 relative">
                    <div class="bg-white h-full mt-4 relative mb-4 flex flex-wrap items-center">
                      <div class="md:w-full w-2/6 md:text-center text-left">
                        <h3>{element.college}</h3>
                        <p class="mb-0 mt-3 text-shade-2 text-sm italic">
                          {element.location}
                        </p>
                        <p class="mb-0 text-shade-2 text-sm italic">
                          {element.startDate}
                          {` ~ `}
                          {element.endDate}
                        </p>
                        {element.grade !== "" ? (
                          <p class="mb-0 text-shade-2 text-sm italic">
                            GPA : {element.grade}
                          </p>
                        ) : (
                          <></>
                        )}
                        <hr class="w-1/4 mx-auto mt-4 border border-shade-3 md:block hidden"></hr>
                      </div>

                      <div class="md:w-full w-4/6 mx-auto px-4  py-2 md:border-0 border-l-4 border-shade-3">
                        <p class="text-md text-justify text-xs text-shade-2">
                          {element.discription}
                        </p>
                        <ul>
                          <span>Courses</span>
                          {element.courses.map((ele) => {
                            return (
                              <li class="text-shade-2 text-md text-left text-xs list-disc list-inside">
                                {ele}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
