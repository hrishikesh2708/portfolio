import { Code } from "lucide-react";

export const projects = [
  {
    title: "AI Privacy Policy Summarizer",
    color: "pink",
    subtitle: "Real-time policy analysis in plain English",
    url: "/demo.jpg",
    description:
      "An AI-powered web application that condenses complex privacy policies into readable summaries. Highlights risky clauses, permissions, and data-sharing patterns.",
    points: [
      "Implemented a transformer-based summarization pipeline optimized for long-form legal text.",
      "Built a rule-based detection layer to flag red-flag terms and sensitive data permissions.",
      "Designed a clean, responsive UI with category-level risk indicators.",
      "Implemented secure backend processing with rate-limited API access.",
    ],
    techStack: [
      { name: "React", icon: <Code /> },
      { name: "Node.js", icon: <Code /> },
      { name: "Python", icon: <Code /> },
      { name: "OpenAI API", icon: <Code /> },
      { name: "TailwindCSS", icon: <Code /> },
    ],
  },

  {
    title: "Freelance Pricing Calculator",
    color: "blue",
    subtitle: "Fair pricing engine for freelancers",
    url: "/demo.jpg",
    description:
      "A full-stack platform that helps freelancers estimate project fees using historical market data, complexity scoring, and AI-backed recommendations.",
    points: [
      "Developed pricing heuristics using regression insights from a custom dataset.",
      "Integrated GPT-driven suggestions for negotiation strategy and scope definition.",
      "Implemented dashboards to visualize pricing history and competitive benchmarks.",
      "Designed scalable MongoDB schemas for user projects and pricing templates.",
    ],
    techStack: [
      { name: "Next.js", icon: <Code /> },
      { name: "MongoDB", icon: <Code /> },
      { name: "OpenAI API", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "Vercel", icon: <Code /> },
    ],
  },

  {
    title: "Game of Life — Wormhole Edition",
    color: "fuchsia",
    subtitle:
      "Extended cellular automata with teleport-linked grids, Extended cellular automata with teleport-linked grids",
    url: "/demo.jpg",
    description:
      "An experimental simulation engine that merges Conway's Game of Life with wormholes. Cells can connect across non-adjacent regions using tunnel-mapped teleport links.",
    points: [
      "Built a high-performance simulation engine with pixel-level tunneling.",
      "Implemented deterministic wormhole mapping using color-<code/>d tunnel images.",
      "Created an automated test harness comparing outputs across 1/10/100/1000 iterations.",
      "Optimized matrix traversal logic to avoid TLE on large grid sizes.",
    ],
    techStack: [
      { name: "Python", icon: <Code /> },
      { name: "NumPy", icon: <Code /> },
      { name: "Pillow", icon: <Code /> },
      { name: "FastAPI", icon: <Code /> },
      { name: "Docker", icon: <Code /> },
    ],
  },

  {
    title: "Sales Demand Forecasting Engine",
    color: "teal",
    subtitle: "MAPE-optimized ML pipeline for retail forecasting",
    url: "/demo.jpg",
    description:
      "A machine learning system built for a HackerRank challenge to predict product-level sales using features like location, price, and seasonality.",
    points: [
      "Engineered over 25 feature transformations including lag variables and price elasticity.",
      "Trained gradient boosting and light-weight deep learning models tuned for MAPE.",
      "Developed a notebook pipeline for reproducible training and evaluation.",
      "Produced a final prediction CSV integrated with CI-based validation.",
    ],
    techStack: [
      { name: "Python", icon: <Code /> },
      { name: "Pandas", icon: <Code /> },
      { name: "scikit-learn", icon: <Code /> },
      { name: "XGBoost", icon: <Code /> },
      { name: "Jupyter", icon: <Code /> },
    ],
  },
];

