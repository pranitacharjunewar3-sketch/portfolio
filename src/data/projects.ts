export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "chatsarathi",
    title: "Chatsarathi",
    description:
      "AI chat platform with real-time communication — streaming responses, live sessions, and a polished conversational interface.",
    tags: ["AI", "Real-time", "Web"],
    featured: true,
  },
  {
    id: "assist",
    title: "Assist",
    description:
      "AI-powered marketplace where AI handles orders, support, recommendations, and scheduling end-to-end.",
    tags: ["AI", "Marketplace", "Automation"],
    featured: true,
  },
  {
    id: "eduplus",
    title: "EDU+",
    description:
      "AI-enhanced education platform designed to accelerate learning with intelligent tutoring.",
    tags: ["AI", "EdTech", "Web"],
  },
  {
    id: "focus-plus",
    title: "Focus+",
    description:
      "AI life consultant that helps you stay focused, plan your day, and make better decisions with conversational guidance.",
    tags: ["AI", "Life Coaching", "Productivity"],
  },
  {
    id: "gsm",
    title: "GSM",
    description:
      "Inventory management system built to track stock, manage items, and streamline day-to-day inventory operations.",
    tags: ["Inventory", "Management", "Web"],
  },
  {
    id: "vyakarana",
    title: "Vyakarana",
    description:
      "Language tool that checks grammar, spelling, and sentence structure to help you write clean, correct text.",
    tags: ["NLP", "Grammar", "Language"],
  },
];