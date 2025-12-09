import { Code } from "lucide-react";

export const educationData = [
  {
    title: "Master of Science in Computer Science",
    university: "University of Southern California",
    location: "Los Angeles, CA",
    logo: "/usc-logo.png",
    duration: "August 2023 - May 2025",
    gpa: "3.48 / 4.0",
    description:
      "Mastered core and advanced areas of computer science, including algorithms, systems, and machine learning, through hands-on projects and research at USC. Successfully applied theoretical knowledge to build scalable software, enhancing problem-solving skills and technical creativity.",
    courses: [
      "Analysis Of Algorithm",
      "Web Technologies",
      "Database Systems",
      "Information Retrieval",
      "Natural Language Processing (NLP)",
      "Machine Learning",
    ],
  },
  {
    title: "Bachelor of Technology in Computer Science",
    university: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    logo: "/srm-logo.webp",
    duration: "June 2018 - May 2022",
    gpa: "3.8 / 4.0",
    description:
      "Built a solid foundation in computer science through hands-on projects and research, applying software engineering principles, systems programming, and data-driven techniques. Delivered practical solutions and developed strong analytical and collaborative skills.",
    courses: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Sowftware Engineering",
      "Data Science",
      "Machine Learning",
      "Computer Architecture",
      "Operating Systems",
      "Computer Networks",
      "Cloud Computing",
    ],
  },
];



export const experience = [
  {
    companyName: "Easley-Dunn Productions, Inc.",
    companyLogoLight: "/easley-dunn-productions-logo.jpeg",
    companyLogoDark: "/easley-dunn-productions-logo.jpeg",
    companyLogoWidth: 55,
    companyLogoHeight: 55,
    tenure: "August 2025 - Present",
    role: "Software Engineer",
    location: "Sunnyvale, California",
    workType: "Voluntary",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Built and maintained interactive UI screens and multi-screen navigation flows in Unity using C#.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Implemented data-integration tasks with .NET services to support core game features efficiently.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Designed and maintained the automated testing framework for EditMode and PlayMode feature validation.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Collaborated with designers and engineers to ensure high-quality user experience and functional gameplay.
      </p>,
    ],
    skills: [
      { name: "Unity", icon: <Code /> },
      { name: "C#", icon: <Code /> },
      { name: ".NET", icon: <Code /> },
      { name: "Visual Studio", icon: <Code /> },
      { name: "Git", icon: <Code /> },
      { name: "Postgress SQL", icon: <Code /> },
      { name: "RESTful APIs", icon: <Code /> },
    ],
  },
  {
    companyName: "USC Alfred E. Mann School of Pharmacy",
    companyLogoLight: "/usc-mann-logo-light.png",
    companyLogoDark: "/usc-mann-logo-dark.png",
    companyLogoWidth: 100,
    companyLogoHeight: 24,
    tenure: "May 2024 - May 2025",
    role: "On-Campus Data Analyst",
    location: "Los Angeles, California",
    workType: "Part-time",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Extracted and managed donor and alumni data using Salesforce CRM,
        providing actionable insights to optimize event attendance and campaign
        performance.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Designed and executed outreach campaigns for alumni and donor events,
        leveraging data-driven strategies that improved engagement and
        fundraising outcomes.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Collected and analyzed participation and engagement data for university
        events, creating interactive dashboards and reports to track KPIs and
        inform decision making.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Coordinated event logistics and tracked stakeholder interactions,
        ensuring seamless execution of high-profile university initiatives.
      </p>,
    ],
    skills: [
      { name: "Salesforce CRM", icon: <Code /> },
      { name: "Power BI", icon: <Code /> },
      { name: "SQL", icon: <Code /> },
      { name: "Excel", icon: <Code /> },
      { name: "Data Analysis", icon: <Code /> },
      { name: "Data Visualization", icon: <Code /> },
      { name: "Analytical Reporting", icon: <Code /> },
      { name: "Project Coordination", icon: <Code /> },
    ],
  },
  {
    companyName: "USC Information Sciences Institute",
    companyLogoLight: "/usc-isi-logo.webp",
    companyLogoDark: "/usc-isi-logo.webp",
    companyLogoWidth: 100,
    companyLogoHeight: 24,
    tenure: "August 2023 - Dec 2023",
    role: "Machine Learning Engineer",
    location: "Los Angeles, California",
    workType: "Part-time",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Coordinated major university events, improving alumni engagement and
        donor participation through strategic communication.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Analyzed donor datasets using Salesforce CRM and built Excel dashboards
        to track fundraising performance.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Designed email campaigns, invitations, and promotional materials using
        HTML and graphic design tools.
      </p>,
    ],
    skills: [
      { name: "Salesforce", icon: <Code /> },
      { name: "Excel", icon: <Code /> },
      { name: "Data Analysis", icon: <Code /> },
    ],
  },
  {
    companyName: "Highradius",
    companyLogoLight: "/highradius-logo.png",
    companyLogoDark: "/highradius-logo.png",
    companyLogoWidth: 24,
    companyLogoHeight: 24,
    tenure: "July 2022 - July 2023",
    role: "Associate Software Engineer",
    location: "Hyderabad, India",
    workType: "Full-time",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Scaled backend services in Java, Spring Boot for anomaly detection,
        enhancing reconciliation across 15+ enterprise clients.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Built tenant-specific React components, reducing UI duplication by 40%
        and accelerating feature rollout across multiple client.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Modularized backend logic to enable cross-module reuse, cutting
        development time for recurring features by 25%.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Collaborated with QA & product teams to define requirements for 100+
        features, ensuring timely delivery under tight deadlines.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Engineered a reusable WebDriverIO test framework, increasing bug
        detection speed by 50% and reducing manual QA effort.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Spearheaded automation of 100+ UI test cases with a team of 5 interns,
        cutting down total test creation time by 60%.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Integrated tests into a Jenkins CI/CD pipeline, facilitating pre-merge
        regression checks and decreasing release bugs by 35%.
      </p>,
    ],
    skills: [
      // Programming Languages
      { name: "Java", icon: <Code /> },
      { name: "JavaScript", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "SQL", icon: <Code /> },

      // Frontend Frameworks / Libraries
      { name: "React.js", icon: <Code /> },
      { name: "Redux", icon: <Code /> },
      { name: "Material-UI", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Code /> },

      // Backend Frameworks / Tools
      { name: "Spring Boot", icon: <Code /> },
      { name: "Hibernate", icon: <Code /> },

      // Databases / Data Tools
      { name: "Snowflake", icon: <Code /> },

      // DevOps / CI-CD / Cloud
      { name: "Jenkins", icon: <Code /> },
      { name: "CI/CD", icon: <Code /> },
      { name: "Amazon Web Services (AWS)", icon: <Code /> },
      { name: "Amazon S3", icon: <Code /> },

      // Testing / Automation
      { name: "Selenium", icon: <Code /> },
      { name: "WebdriverIO", icon: <Code /> },
      { name: "Websockets", icon: <Code /> },

      // Design / Project Management / Others
      { name: "Figma", icon: <Code /> },
      { name: "Jira", icon: <Code /> },
    ],
  },
  {
    companyName: "Highradius",
    companyLogoLight: "/highradius-logo.png",
    companyLogoDark: "/highradius-logo.png",
    companyLogoWidth: 24,
    companyLogoHeight: 24,
    tenure: "August 2021 - June 2022",
    role: "Software Engineer Intern",
    location: "Hyderabad, India",
    workType: "Internship",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Engineered a Spring Boot Data Catalog for centralized data access,
        reducing manual data transfer time by 30%.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Standardized ingestion protocols for legacy ERP systems, enabling
        seamless batch processing of 500M+ records.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Improved data governance through automated validation pipelines and
        scalable ingestion architecture.
      </p>,
    ],
    skills: [
      // Programming Languages
      { name: "Java", icon: <Code /> },
      { name: "JavaScript", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "SQL", icon: <Code /> },

      // Frontend Frameworks / Libraries
      { name: "React.js", icon: <Code /> },
      { name: "Redux", icon: <Code /> },
      { name: "Material-UI", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Code /> },

      // Backend Frameworks / Tools
      { name: "Spring Boot", icon: <Code /> },
      { name: "Hibernate", icon: <Code /> },

      // Databases / Data Tools
      { name: "Snowflake", icon: <Code /> },

      // DevOps / CI-CD / Cloud
      { name: "Amazon Web Services (AWS)", icon: <Code /> },
      { name: "Amazon S3", icon: <Code /> },

      // Testing / Automation
      { name: "Websockets", icon: <Code /> },
      { name: "WebdriverIO", icon: <Code /> },
      { name: "Selenium", icon: <Code /> },
      { name: "Jenkins", icon: <Code /> },
      { name: "CI/CD", icon: <Code /> },

      // Design / Project Management / Others
      { name: "Figma", icon: <Code /> },
      { name: "Jira", icon: <Code /> },
    ],
  },

  {
    companyName: "Atmas Softwares Private Limited",
    companyLogoLight: undefined,
    companyLogoDark: undefined,
    companyLogoWidth: 24,
    companyLogoHeight: 24,
    tenure: "April 2021 - June 2021",
    role: "Software Developer Intern",
    location: "Remote",
    workType: "Internship",
    points: [
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Built real-time notifications using Server-Sent Events with offline
        fallback via Redux Offline.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Increased platform scalability by 28% using Nginx load balancing for
        high-traffic workloads.
      </p>,
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Improved application reliability through optimized state synchronization
        and low-latency event streaming.
      </p>,
    ],
    skills: [
      // Programming Languages
      { name: "JavaScript", icon: <Code /> },
      { name: "HTML", icon: <Code /> },
      { name: "CSS", icon: <Code /> },

      // Frontend Frameworks / Libraries
      { name: "React.js", icon: <Code /> },
      { name: "Redux", icon: <Code /> },
      { name: "Redux Offline", icon: <Code /> },

      // Backend Frameworks / Tools
      { name: "Node.js", icon: <Code /> },
      { name: "Express.js", icon: <Code /> },

      // Databases / Data Tools
      { name: "MongoDB", icon: <Code /> },

      // Real-time / Messaging
      { name: "Server-Sent Events (SSE)", icon: <Code /> },
      { name: "Event Streaming", icon: <Code /> },

      // DevOps / Deployment / Scalability
      { name: "Nginx", icon: <Code /> },
      { name: "Performance Optimization", icon: <Code /> },
      { name: "Application Scalability", icon: <Code /> },

      // Other / Concepts
      { name: "Low-Latency Systems", icon: <Code /> },
      { name: "State Synchronization", icon: <Code /> },
    ],
  },
];

