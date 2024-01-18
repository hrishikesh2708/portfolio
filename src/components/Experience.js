import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollIcon from "./ScrollIcon";

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
          discription: `Conducted exploratory data analysis and preprocessed data to devise ML models to
      anticipate heart attacks using K-nearest neighbor, decision tree, random forest, SVM, and logistic regression to predict heart
      attacks in patients.`,
        },
      ],
    },
  ];
  const Details = ({ ...args }) => {
    const reference = useRef(null);

    return (
      <li
        ref={reference}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-shade-1"
      >
        <ScrollIcon reference={reference} />
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl">
            {args.role}&nbsp;
            <a href="#" className="text-accent-3 capitalize">
              {" "}
              @{args.company}
            </a>
          </h3>
          <span className="capitalize font-medium">
            {args.startDate}
            {" ~ "}
            {args.endDate} | {args.location}
          </span>
          {args.project.map((ele, index) => (
            <motion.p
              key={index}
              className="font-medium w-full text-shade-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="font-bold">{ele.title}</span>
              {" ~ "}
              {ele.discription}
            </motion.p>
          ))}
        </motion.div>
      </li>
    );
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id="experience" className="my-64">
      <h2 className="font-bold text-shade-1 text-6xl w-full text-center mb-8">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-accent-3 origin-top"
        ></motion.div>
        <motion.ul
          className="w-full flex flex-col items-start justify-between ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {content.map((ele, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mt-20"
            >
              <Details {...ele} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Experience;
