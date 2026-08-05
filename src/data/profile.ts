export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  about: string[];
  email: string;
  location: string;
  currently: string;
  website: string;
  profileImage: string;
  ogImage: string;
  resumeUrl: string;
  githubUsername: string;
  links: {
    github: string;
    linkedin: string;
  };
  highlights: string[];
  stats: { value: string; label: string }[];
}

export const profileData: Profile = {
  name: "Pranit Acharju Newar",
  role: "AI Engineer · Full-Stack Developer · IT Instructor",
  tagline: "building what's next.",
  bio: "I architect and deploy AI-powered applications — LLMs with RAG, deep learning models, and full-stack systems — end to end, from model to production.",
  about: [
    "I'm an AI Engineer and full-stack developer based in Dharan, Nepal, currently working as an IT Instructor and AI Engineer at G-Tech I.T Solution. My work spans the full AI lifecycle: training deep learning models, wiring retrieval-augmented generation pipelines, and shipping the React + Node systems that make them useful.",
    "Beyond building, I teach. I've guided students through programming, AI, and machine learning fundamentals, and I hold an IBM AI Engineering professional certification covering machine learning, deep learning with TensorFlow and PyTorch, and generative AI with RAG and LangChain.",
  ],
  email: "pranitacharjunewar3@gmail.com",
  location: "Dharan, Nepal",
  currently: "LLM · RAG · Deep Learning",
  website: "https://pranitacharjunewar.com.np",
  profileImage: "/portfolio/profile.png",
  ogImage: "/portfolio/og-preview.png",
  resumeUrl: "https://github.com/pranitacharjunewar3-sketch",
  githubUsername: "pranitacharjunewar3-sketch",
  links: {
    github: "https://github.com/pranitacharjunewar3-sketch",
    linkedin: "https://www.linkedin.com/in/pranitacharjunewar",
  },
  highlights: [
    "IBM AI Engineering certified",
    "13 deep learning & GenAI specializations",
    "EC-Council Ethical Hacker",
    "Cisco Cybersecurity certified",
    "6+ production projects shipped",
    "Teaching IT & AI at G-Tech I.T Solution",
  ],
  stats: [
    { value: "6+", label: "Projects shipped" },
    { value: "4", label: "Certifications" },
    { value: "13", label: "IBM specializations" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];