import { Code } from "lucide-react";

export const projects = [
  {
    title: "Hrishikesh Thakur's Portfolio",
    color: "pink",
    subtitle: "A polished developer portfolio highlighting modern web engineering and thoughtful UI design.",
    demoImage: "/portfolio.png",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/portfolio",
    liveDemo: "https://www.hrishikeshthakur.com/",
    projectDetails: "https://github.com/hrishikesh2708/portfolio/blob/version-1/README.md",
    description: "A polished portfolio showcasing modern design, smooth interactions, and a strong presentation of my work.",
    points: [
      "Built with React, Vite, and TypeScript for responsive, fast performance.",
      "Integrated serverless APIs for GitHub stats and secure email sending.",
      "Designed reusable UI components with Tailwind CSS and Radix UI.",
      "Implemented smooth animations and 3D particle effects with Framer Motion."
    ],
    techStack: [
      { name: "TypeScript", icon: <Code /> },
      { name: "React", icon: <Code /> },
      { name: "Vite", icon: <Code /> },
      { name: "Vercel", icon: <Code /> },
      { name: "TailwindCSS", icon: <Code /> },
      { name: "Framer Motion", icon: <Code /> },
      { name: "Three.js", icon: <Code /> },
      { name: "Radix UI", icon: <Code /> },
    ],
  },

  {
    title: "Transcribe AI",
    color: "blue",
    subtitle: "Real-Time Audio Transcription Chrome Extension",
    demoImage: "/demo.jpg",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/transcribe-ai",
    liveDemo: "https://github.com/hrishikesh2708/transcribe-ai",
    projectDetails: "https://github.com/hrishikesh2708/transcribe-ai/blob/main/README.md",
    description: "A real-time transcription Chrome extension using Google Cloud Speech-to-Text, offering fast audio capture, responsive UI, and seamless export tools.",
    points: [
      "Built real-time tab audio capture pipeline with Web Audio and WebSockets.",
      "Implemented accurate streaming transcription using Google Cloud Speech-to-Text.",
      "Designed responsive sidepanel interface supporting live text updates and exports.",
      "Created robust extension architecture with background, content, and UI integration."
    ],
    techStack: [
      { name: "React", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "Node.js", icon: <Code /> },
      { name: "Express", icon: <Code /> },
      { name: "Google Cloud Speech-to-Text", icon: <Code /> },
      { name: "WebSocket", icon: <Code /> },
    ],
  },
  {
    title: "ClimaView",
    color: "teal",
    subtitle: "Real-Time Weather Insights with Smart Location Search",
    demoImage: "/climaview.png",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/ClimaView",
    liveDemo: "https://clima-view-jo4ajx133-hrishikesh-thakurs-projects.vercel.app/",
    projectDetails: "https://github.com/hrishikesh2708/ClimaView",
    description: "A real-time weather insights app with smart location search using Tomorrow.io and Google Places APIs.",
    points: [
      "Built MERN weather app with real-time forecasts and smart city search.",
      "Integrated Tomorrow.io and Google Places APIs for reliable weather results.",
      "Implemented Highcharts visuals and Redux state management for smooth interactivity.",
      "Added favorites system with MongoDB for persistent city storage.",
    ],
    techStack: [
      { name: "React", icon: <Code /> },
      { name: "Redux", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "Node.js", icon: <Code /> },
      { name: "Express", icon: <Code /> },
      { name: "MongoDB", icon: <Code /> },
      { name: "Highcharts", icon: <Code /> },
      { name: "Tomorrow.io API", icon: <Code /> },
      { name: "Google Places API", icon: <Code /> },
    ],
  },
  {
    title: "Regularization Techniques for Image Classification",
    color: "fuchsia",
    subtitle: "Improving CNN generalization using L2, Dropout, and augmentation",
    demoImage: "/regularization.png",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/CSCI567_Machine_Learning_Project",
    // liveDemo: "https://github.com/hrishikesh2708/CSCI567_Machine_Learning_Project",
    projectDetails: "https://github.com/hrishikesh2708/CSCI567_Machine_Learning_Project/blob/main/CSCI_567_Project_Report%202.pdf",
    description:
      "An empirical study testing multiple regularization strategies on CNN models to reduce overfitting and improve validation performance on limited image datasets.",
    points: [
      "Evaluated L2, Dropout, and augmentations achieving notable validation loss reduction.",
      "Designed custom CNN architectures tailored for regularization and stability improvements.",
      "Built an ensemble using L2, Dropout, and five augmentations doubling dataset size.",
      "Benchmarked generalization effects through controlled experiments and performance tracking."
    ],
    techStack: [
      { name: "Python", icon: <Code /> },
      { name: "PyTorch", icon: <Code /> },
      { name: "NumPy", icon: <Code /> },
      { name: "Matplotlib", icon: <Code /> },
      { name: "CNNs", icon: <Code /> }
    ],
  },

  {
    title: "Differentiable Symbolic Reasoning on Language Models",
    color: "teal",
    subtitle: "Hybrid neural-symbolic system for logical reasoning on kinship tasks",
    demoImage: "/dsrlm.png",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/CSCI544_NLP_Project",
    // liveDemo: "https://github.com/hrishikesh2708/CSCI544_NLP_Project",
    projectDetails: "https://github.com/hrishikesh2708/CSCI544_NLP_Project/blob/main/Final_Project_Report__NLP_.pdf",
    description: "A neural-symbolic reasoning project evaluating DSR-LM's ability to generalize logical relations and improve kinship inference accuracy on limited data.",
    points: [
      "Fine-tuned DSR-LM with custom classifiers significantly boosting kinship prediction accuracy.",
      "Benchmarked symbolic reasoning generalization using CLUTRR's controlled relational tasks pipeline.",
      "Implemented experiments probing data efficiency and robustness under limited supervision settings.",
      "Analyzed reasoning traces to evaluate neural-symbolic consistency and relational inference quality."
    ],
    techStack: [
      { name: "Python", icon: <Code /> },
      { name: "PyTorch", icon: <Code /> },
      { name: "Transformers", icon: <Code /> },
      { name: "CLUTRR Dataset", icon: <Code /> },
      { name: "DSR-LM", icon: <Code /> },
      { name: "HuggingFace", icon: <Code /> }
    ],
  },
];

