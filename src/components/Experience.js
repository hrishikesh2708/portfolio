import React from "react";

function Experience() {
  const content = [
    // {
    //   company: "",
    //   startDate: "",
    //   endDate: "",
    //   location: "",
    //   role: "",
    // attachments: "",
    //   project: [{ title: "", discription: "" }],
    // },
    {
      company: "HighRadius Technologies",
      startDate: "July 2022",
      endDate: "July 2023",
      location: "Hyderabad, India",
      role: "Associate Software Engineer",
      attachments: "",
      project: [
        {
          title: "POD Lead",
          discription: `Led a team of 5 interns for developing an automation project for Cash Forecasting product. project
      involved automating smoke, sanity, and regression test cases. Eventually reduced risk of errors, as manual tests are more
      prone to errors than automated programmed tests. Additionally, fastrack bug identification by 50% as automated tests can
      run much faster than manual tests. Also, constructed an automation framework after initial project was completed.
      Framework made it easier to computerize new test cases and to maintain existing test cases. framework also helped to remove
      redundant code across products, further reduced amount of manual testing required`,
        },
        {
          title: "CFOTech",
          discription: `Developed a dashboard for AI-powered anomaly detection to perform proactive reconciliations. Designed a
          full-fledged backend to handle anomalies and reconciliation processes. devised easily configurable, reusable react custom
          components thereby allowing great options for tenant-specific user experience and decreasing significant development time`,
        },
      ],
    },
    {
      company: "HighRadius Technologies",
      startDate: "August 2021",
      endDate: "June 2022",
      location: " Bhubaneswar, India",
      role: "Software Engineer Co-op",
      attachments: "",
      project: [
        {
          title: "Data Catalog",
          discription: `Developed data catalog product to provide a centralized data ingestion framework for applications to
        consume without having to build and maintain. leveraged spring boot and hibernate for building backend APIs. Generated
        flow to ingest large volumes of data from ERPs.Also, computerized various data ingestion steps such as file processing, and
        historical and incremental data updates thereby cutting down significant time required to manually transfer and supervise
        files/data`,
        },
        {
          title: " B2B Invoice Management Application",
          discription: ` Created a full-stack web-based product for handling invoices, and obtained a
        deep understanding of all aspects of product development such as identifying user requirements, designing a user experience,
        and building data models using machine learning techniques for predicting due payment dates thereby allowing businesses to
        manage expenses with ease`,
        },
      ],
    },
    {
      company: "Atmas Softwares Private Limited",
      startDate: "April 2021",
      endDate: "June 2021",
      location: "Delhi, India",
      role: "Software Developer Intern",
      attachments: "",
      project: [
        {
          title: "BizConnect",
          discription: `Constructed notification feature with help of server-sent events. Managed Client-side data with help of Redux
      and rehydration of data from redux persist. Implemented an Offline first approach for better user experience in low/no
      network connectivity. Improved concurrent user capacity and application reliability by leveraging Nginx and load balancer`,
        },
      ],
    },
    {
      company: "ICT – Indian Institute of Technology Kanpur",
      startDate: "June 2020",
      endDate: "August 2020",
      location: "Kanpur, India",
      role: "Machine Learning Trainee",
      attachments: "",
      project: [
        {
          title: "Heart Attack Risk Prediction",
          discription: ` Conducted exploratory data analysis and preprocessed data to devise ML models to
      anticipate heart attacks using K-nearest neighbor, decision tree, random forest, SVM, and logistic regression to predict heart
      attacks in patients.`,
        },
      ],
    },
  ];
  return (
    <div id="experience">
      <h4 class="text-md font-bold dark:text-white p-1 m-2 underline underline-offset-8">
        Experience
      </h4>
      <section>
        <div class="bg-black text-white py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="ml-2 text-yellow-300 uppercase tracking-loose">
                Working Process
              </p>
              <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
              </p>
              <a
                href="#"
                class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div class="border-2-2 border-accent-2 absolute h-full border right-border-radius"></div>
                  <div class="border-2-2 border-accent-2 absolute h-full border left-border-radius"></div>
                  {content.map((element, index) => {
                    return index % 2 === 0 ? (
                      <>
                        <div class="mb-8 flex justify-between items-center w-full right-timeline text-shade-1">
                          <div class="order-1 w-5/12"></div>
                          <div class="order-1  w-5/12 px-1 py-4 text-left">
                            <p class="mb-2 text-xs text-accent-2">
                              {element.startDate}
                              {`~`}
                              {element?.endDate}
                            </p>
                            <h5 class="font-bold text-md md:text-2xl">
                              {element?.company}
                            </h5>
                            <h4 class="mb-2 italic text-xs md:text-2xl">
                              {element?.role}
                            </h4>
                            {element?.project.map((ele) => {
                              return (
                                <p class="text-xs md:text-base leading-tight text-shade-1 text-opacity-100">
                                  {ele?.title}
                                  {` : `}
                                  <span class="text-xs md:text-base leading-tight text-shade-2 text-opacity-100">
                                    {ele?.discription}
                                  </span>
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline text-shade-1">
                          <div class="order-1 w-5/12"></div>
                          <div class="order-1 w-5/12 px-1 py-4 text-right">
                            <p class="mb-2 text-xs text-accent-2">
                              {element.startDate}
                              {`~`}
                              {element?.endDate}
                            </p>
                            <h4 class="font-bold text-md md:text-2xl">
                              {element?.company}
                            </h4>
                            <h4 class="mb-2 italic text-xs md:text-2xl">
                              {element?.role}
                            </h4>
                            {element?.project.map((ele) => {
                              return (
                                <p class="text-xs md:text-base leading-tight text-shade-1 text-opacity-100">
                                  {ele?.title}
                                  {` : `}
                                  <span class="text-xs md:text-base leading-tight text-shade-2 text-opacity-100">
                                    {ele?.discription}
                                  </span>
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <img
                  class="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="rocket"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
