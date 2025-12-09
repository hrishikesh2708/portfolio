import { Code } from "lucide-react";

export const projects = [
  {
    title: "Hrishikesh Thakur – Engineering Portfolio",
    color: "pink",
    subtitle: "A polished developer portfolio highlighting modern web engineering and thoughtful UI design.",
    demoImage: "/demo.jpg",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/portfolio",
    liveDemo: "https://www.hrishikeshthakur.com/",
    projectDetails: "https://github.com/hrishikesh2708/portfolio/blob/version-1/README.md",
    description:
      "A lightweight, responsive portfolio website built with React, Vite, and TypeScript to showcase my projects, skills, and contact info.",
    points: [
      "Set up React + Vite + TypeScript project with clean configuration and tooling.",
      "Implemented project listing, skillcards and responsive navigation UI components.",
      "Configured CSS + TypeScript + ESLint/tsconfig for maintainable, type-safe frontend.",
      "Deployed site via Vercel with automated build on GitHub changes."
    ],
    techStack: [
      { name: "TypeScript", icon: <Code /> },
      { name: "React", icon: <Code /> },
      { name: "Vite", icon: <Code /> },
      { name: "Varcel", icon: <Code /> },
      { name: "TailwindCSS", icon: <Code /> },
      { name: "Docker", icon: <Code /> },
      { name: "MongoDB", icon: <Code /> },
      { name: "PostgreSQL", icon: <Code /> },
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
    title: "Regularization Techniques for Image Classification",
    color: "fuchsia",
    subtitle: "Improving CNN generalization using L2, Dropout, and augmentation",
    demoImage: "/demo.jpg",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/CSCI567_Machine_Learning_Project",
    liveDemo: "https://github.com/hrishikesh2708/CSCI567_Machine_Learning_Project",
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
    demoImage: "/demo.jpg",
    demoVideo: "",
    github: "https://github.com/hrishikesh2708/CSCI544_NLP_Project",
    liveDemo: "https://github.com/hrishikesh2708/CSCI544_NLP_Project",
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

