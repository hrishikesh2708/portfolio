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
      <div class="relative w-full">
        <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
            <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <img
              src="/docs/images/carousel/carousel-1.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            ></img>
          </div>

          <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
            <img
              src="/docs/images/carousel/carousel-2.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            ></img>
          </div>

          <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
            <img
              src="/docs/images/carousel/carousel-3.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            ></img>
          </div>

          <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
            <img
              src="/docs/images/carousel/carousel-4.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            ></img>
          </div>
        </div>

        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            id="carousel-indicator-1"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            id="carousel-indicator-2"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
          ></button>
          <button
            id="carousel-indicator-3"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
          ></button>
          <button
            id="carousel-indicator-4"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
          ></button>
        </div>

        <button
          id="data-carousel-prev"
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          id="data-carousel-next"
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
      <h4 class="text-md font-bold dark:text-white p-1 m-2 underline underline-offset-8">
        Education
      </h4>
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
