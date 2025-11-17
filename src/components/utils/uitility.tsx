import { Github, Linkedin, Globe } from "lucide-react";

export const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/hrishikesh--thakur/",
  },
  {
    name: "GitHub",
    icon: <Github />,
    url: "https://github.com/hrishikesh2708",
  },
  {
    name: "Website",
    icon: <Globe />,
    url: "https://www.hrishikeshthakur.com/",
  },
];

export const skills = [
  {
    catagory: "Languages",
    values: [
      {
        name: "Python",
        icon: <Linkedin />,
      },
      {
        name: "Java",
        icon: <Linkedin />,
      },
      {
        name: "C++",
        icon: <Linkedin />,
      },
      {
        name: "C",
        icon: <Linkedin />,
      },
      {
        name: "JavaScript",
        icon: <Linkedin />,
      },
      {
        name: "TypeScript",
        icon: <Linkedin />,
      },
      {
        name: "Swift",
        icon: <Linkedin />,
      },
      {
        name: "SQL",
        icon: <Linkedin />,
      },
      {
        name: "Bash/Shell",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "Project Management",
    values: [
      {
        name: "Agile",
        icon: <Linkedin />,
      },
      {
        name: "Scrum",
        icon: <Linkedin />,
      },
      {
        name: "Jira",
        icon: <Linkedin />,
      },
      {
        name: "Confluence",
        icon: <Linkedin />,
      },
      {
        name: "Slack",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "DevOps/Cloud",
    values: [
      {
        name: "Git",
        icon: <Linkedin />,
      },
      {
        name: "Docker",
        icon: <Linkedin />,
      },
      {
        name: "Kubernetes",
        icon: <Linkedin />,
      },
      {
        name: "AWS (EC2, S3, Lambda, RDS)",
        icon: <Linkedin />,
      },
      {
        name: "GCP (Firestore, App, Engine)",
        icon: <Linkedin />,
      },
      {
        name: "CI/CD (Jenkins, GitHub Actions)",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "Databases",
    values: [
      {
        name: "PostgreSQL",
        icon: <Linkedin />,
      },
      {
        name: "MySQL",
        icon: <Linkedin />,
      },
      {
        name: "MongoDB",
        icon: <Linkedin />,
      },
      {
        name: "Redis",
        icon: <Linkedin />,
      },
      {
        name: "SQLite",
        icon: <Linkedin />,
      },
      {
        name: "DynamoDB",
        icon: <Linkedin />,
      },
      {
        name: "Elasticsearch",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "Testing",
    values: [
      {
        name: "JUnit",
        icon: <Linkedin />,
      },
      {
        name: "pytest",
        icon: <Linkedin />,
      },
      {
        name: "Selenium",
        icon: <Linkedin />,
      },
      {
        name: "Cucumber",
        icon: <Linkedin />,
      },
      {
        name: "WebDriverIO",
        icon: <Linkedin />,
      },
      {
        name: "TDD",
        icon: <Linkedin />,
      },
      {
        name: "BDD",
        icon: <Linkedin />,
      },
      {
        name: "Postman",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "Frameworks/Libraries",
    values: [
      {
        name: "Node.js",
        icon: <Linkedin />,
      },
      {
        name: "React.js",
        icon: <Linkedin />,
      },
      {
        name: "REST APIs",
        icon: <Linkedin />,
      },
      {
        name: "Flask",
        icon: <Linkedin />,
      },
      {
        name: "Django",
        icon: <Linkedin />,
      },
      {
        name: "GraphQL",
        icon: <Linkedin />,
      },
      {
        name: "OAuth2",
        icon: <Linkedin />,
      },
      {
        name: "Tailwind CSS",
        icon: <Linkedin />,
      },
      {
        name: "Spring Boot",
        icon: <Linkedin />,
      },
      {
        name: "JWT",
        icon: <Linkedin />,
      },
    ],
  },
  {
    catagory: "Domain knowledge",
    values: [
      {
        name: "Node.js",
        icon: <Linkedin />,
      },
      {
        name: "React.js",
        icon: <Linkedin />,
      },
      {
        name: "REST APIs",
        icon: <Linkedin />,
      },
      {
        name: "Flask",
        icon: <Linkedin />,
      },
      {
        name: "Django",
        icon: <Linkedin />,
      },
      {
        name: "GraphQL",
        icon: <Linkedin />,
      },
      {
        name: "OAuth2",
        icon: <Linkedin />,
      },
      {
        name: "Tailwind CSS",
        icon: <Linkedin />,
      },
      {
        name: "Spring Boot",
        icon: <Linkedin />,
      },
      {
        name: "JWT",
        icon: <Linkedin />,
      },
    ],
  },
];

export const openNewTab = (url: string) => {
  window.open(url, "_blank");
};

export function openEmail(to: string, subject = "", body = ""): void {
  try {
    const mailto = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailto, "_self");
    console.log("email");

    // If no mail client is configured or blocked by browser
    if (!opened) {
      alert(`No mail app detected.\nPlease email manually at: ${to}`);
    }
  } catch (error) {
    alert(`No mail app detected.\nPlease email manually at: ${to}`);
  }
}

// Helper to compute GMT offset for a timezone
export const getGMTOffset = (tz: string) => {
  const now = new Date();
  const tzDate = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  const offsetMinutes = -(tzDate.getTimezoneOffset() - now.getTimezoneOffset());
  const offsetHours = Math.floor(offsetMinutes / 60);
  const minutes = Math.abs(offsetMinutes % 60);
  const sign = offsetHours >= 0 ? "+" : "-";
  return `GMT ${sign}${String(Math.abs(offsetHours)).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
};
