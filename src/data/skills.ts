export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    icon: "brain",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "LangChain",
      "OpenAI",
      "HuggingFace",
      "RAG",
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Database",
    icon: "database",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "MS SQL",
      "PostgreSQL",
      "Supabase",
      "Redis",
    ],
  },
  {
    category: "Infrastructure",
    icon: "box",
    items: ["Docker", "Git", "Linux", "GitHub Actions"],
  },
  {
    category: "Security",
    icon: "shield",
    items: ["Network Security", "Ethical Hacking", "Cisco"],
  },
];