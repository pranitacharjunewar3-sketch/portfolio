export interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const servicesData: Service[] = [
  {
    title: "AI & LLM Applications",
    description:
      "Design and ship LLM-powered products — RAG assistants, agents, and chat interfaces wired into real data.",
    icon: "bot",
    tags: ["LangChain", "RAG", "OpenAI"],
  },
  {
    title: "Deep Learning & ML",
    description:
      "Build, train, and evaluate deep learning models in TensorFlow and PyTorch for real-world problems.",
    icon: "brain",
    tags: ["PyTorch", "TensorFlow", "Keras"],
  },
  {
    title: "Full-Stack Development",
    description:
      "Fast, accessible frontends with React and robust backends with Node.js, Express, and REST APIs.",
    icon: "code",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Deployment & Automation",
    description:
      "Containerize, automate, and ship — Docker, Linux, GitHub Actions, and CI/CD that runs on its own.",
    icon: "rocket",
    tags: ["Docker", "GitHub Actions", "Linux"],
  },
];

export interface FocusItem {
  label: string;
  icon: string;
}

export const focusData: FocusItem[] = [
  { label: "Retrieval-Augmented Generation", icon: "brain" },
  { label: "AI Agents", icon: "bot" },
  { label: "Deep Learning", icon: "brain" },
  { label: "Real-time AI products", icon: "rocket" },
  { label: "EdTech & AI", icon: "graduation" },
  { label: "LLM fine-tuning", icon: "target" },
  { label: "Automation pipelines", icon: "box" },
  { label: "Teaching & mentorship", icon: "users" },
];