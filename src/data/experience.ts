export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  type: "work" | "education";
  description: string[];
  tags?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "IT Instructor",
    org: "G-Tech I.T Solution",
    period: "Present",
    type: "work",
    description: [
      "Teaching programming, AI, and machine learning fundamentals to students.",
      "Designing hands-on curriculum that moves from theory to working code.",
    ],
    tags: ["Teaching", "Python", "AI / ML"],
  },
  {
    role: "AI Engineer & Full-Stack Developer",
    org: "Independent / Upwork",
    period: "2024 — Present",
    type: "work",
    description: [
      "Building AI-powered applications: AI chat platforms, marketplaces, and EdTech products.",
      "Shipping React + Node systems with LLM integration, RAG pipelines, and real-time features.",
    ],
    tags: ["LLM", "RAG", "React", "Node.js"],
  },
  {
    role: "IBM AI Engineering Professional Certificate",
    org: "IBM · Coursera",
    period: "Completed",
    type: "education",
    description: [
      "Machine learning with Python, deep learning with TensorFlow/Keras and PyTorch.",
      "Generative AI — LLM architecture, fine-tuning, and RAG applications with LangChain.",
    ],
    tags: ["TensorFlow", "PyTorch", "GenAI"],
  },
];