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
      <h4 class="text-md font-bold text-shade-1 p-1 m-2 underline underline-offset-8">
        Education
      </h4>

      <div>
        {content?.map((element) => {
          return (
            <div class="container mt-4 mx-auto p-4 md:p-0 text-shade-1">
              <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
                <div
                  class="bg-cover bg-bottom border border-shade-3 w-full md:w-1/3 h-64 md:h-auto relative"
                  // style="background-image:url('https://images7.alphacoders.com/347/347549.jpg')"
                >
                  <div class="absolute text-xl">
                    <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                  </div>
                </div>

                <div class="bg-shade-4 w-full md:w-2/3">
                  <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                    <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                      <div class="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left">
                        <h3>{element.college}</h3>
                        <p class="mb-0 mt-3 text-shade-2 text-sm italic">
                          {element.location}
                        </p>
                        <p class="mb-0 text-shade-2 text-sm italic">
                          {element.startDate}
                          {` ~ `}
                          {element.endDate}
                        </p>
                        <hr class="w-1/4 md:ml-0 mt-4 border border-shade-3 lg:hidden"></hr>
                      </div>

                      <div class="w-full lg:w-3/5 lg:px-3">
                        <ul>
                          Courses :
                          {element.courses.map((ele) => {
                            return (
                              <li class="text-md mt-1 lg:mt-0 text-justify md:text-left text-xs list-disc list-inside">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
