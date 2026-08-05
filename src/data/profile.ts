export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  currently: string;
  profileImage: string;
  links: {
    github: string;
    linkedin: string;
    upwork: string;
  };
}

export const profileData: Profile = {
  name: "Pranit Acharju Newar",
  role: "AI Engineer · Full-Stack Developer · IT Instructor",
  tagline: "building what's next.",
  bio: "I architect and deploy AI-powered applications — LLMs with RAG, deep learning models, and full-stack systems. IT Instructor at G-Tech I.T Solution, Nepal.",
  email: "pranitacharjunewar3@gmail.com",
  location: "Kathmandu, Nepal",
  currently: "IBM AI Engineering · Deep Learning · LLM & RAG",
  profileImage: "/portfolio/profile.jpeg",
  links: {
    github: "https://github.com/pranitacharjunewar3-sketch",
    linkedin: "https://www.linkedin.com/in/pranitacharjunewar",
    upwork: "https://www.upwork.com/freelancers/~010ad1f489f816ac9e",
  },
};

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];