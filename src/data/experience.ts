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
    role: "IT Instructor & AI Engineer",
    org: "G-Tech I.T Solution",
    period: "Present",
    type: "work",
    description: [
      "Teaching programming, AI, and machine learning fundamentals to students.",
      "Designing hands-on curriculum that moves from theory to working code.",
      "Engineering AI-powered solutions and internal tools alongside teaching.",
    ],
    tags: ["Teaching", "AI Engineering", "Python"],
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
    role: "Intern",
    org: "Nepal Electricity Authority (NEA)",
    period: "1 year",
    type: "work",
    description: [
      "3 months at Inarwa NEA, gaining hands-on experience in electrical systems and grid operations.",
      "6 months in Bhojpur — 1 month at Bhojpur Bazar and 5 months at Jarayotar, Bhojpur.",
      "3 months at Dharan, applying engineering skills in real-world utility work.",
    ],
    tags: ["Electrical Engineering", "NEA", "Fieldwork"],
  },
  {
    role: "Computer Instructor",
    org: "Srijana English Boarding School",
    period: "1 year",
    type: "work",
    description: [
      "Taught computer science to students, covering both theory and practical sessions.",
      "Guided students through hands-on computer skills and foundational programming.",
    ],
    tags: ["Teaching", "Theory & Practical", "Computer Science"],
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
  {
    role: "Diploma in Electrical Engineering",
    org: "Diploma (Engineering)",
    period: "Completed",
    type: "education",
    description: [
      "Completed a Diploma in Electrical Engineering, building a strong engineering foundation.",
      "Developed analytical, problem-solving, and technical skills across core engineering principles.",
    ],
    tags: ["Electrical Engineering", "Engineering"],
  },
];