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
        { title: "Data Catalog", discription: "" },
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
      <div>
        {content.map((element) => {
          return (
            <div>
              <p>{element.company}</p>
              <p>
                {element.startDate}
                {` ~ `}
                {element.endDateD}
              </p>
              <p>{element.role}</p>
              <p>{element.location}</p>
              {element?.project.map((ele) => {
                return (
                  <div>
                    <p>{ele?.title}</p>
                    <p>{ele?.discription}</p>
                    <p>{ele?.attachments}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
