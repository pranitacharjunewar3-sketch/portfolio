export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "chatsarathi",
    title: "Chatsarathi",
    description:
      "AI chat platform with real-time communication — streaming responses, live sessions, and a polished conversational interface.",
    tags: ["AI", "Real-time", "Web"],
    url: "https://chatsarathi.pan.com.np",
    featured: true,
  },
  {
    id: "assist",
    title: "Assist",
    description:
      "AI-powered marketplace where AI handles orders, support, recommendations, and scheduling end-to-end.",
    tags: ["AI", "Marketplace", "Automation"],
    url: "https://assist.pan.com.np",
    featured: true,
  },
  {
    id: "eduplus",
    title: "EDU+",
    description: "AI-enhanced education platform designed to accelerate learning with intelligent tutoring.",
    tags: ["AI", "EdTech", "Web"],
    url: "https://eduplus.pan.com.np",
  },
  {
    id: "course-sim",
    title: "Course-Sim",
    description:
      "Interactive computer science simulations — Data Types, Programming, Algorithms, and ML — in Nepali Romanized.",
    tags: ["React", "TypeScript", "Vite"],
    github: "https://github.com/pranitacharjunewar3-sketch/Course-Sim",
  },
  {
    id: "daily-ai-lab",
    title: "Daily AI Lab",
    description:
      "Automated daily AI research logs and experiments running on GitHub Actions, keeping a living record of exploration.",
    tags: ["Python", "Automation", "GitHub Actions"],
    github: "https://github.com/pranitacharjunewar3-sketch/daily-ai-lab",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "The site you're on — built with React 19, TypeScript, and Vite, styled after the Claude design language.",
    tags: ["React", "TypeScript", "Vite"],
    url: "https://pranitacharjunewar3-sketch.github.io/portfolio/",
    github: "https://github.com/pranitacharjunewar3-sketch/portfolio",
  },
];