export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

export interface CourseCert {
  title: string;
}

export const certifications: Certification[] = [
  {
    title: "IBM AI Engineering",
    issuer: "IBM · Coursera",
    url: "https://coursera.org/verify/professional-cert/AW7FVYFCS8E7",
  },
  {
    title: "Ethical Hacker",
    issuer: "EC-Council · Credly",
    url: "https://www.credly.com/badges/18c2f8ca-e24a-45c3-96b4-b12e16abb188",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy · Credly",
    url: "https://www.credly.com/badges/6aae256e-3437-4f7b-8738-653582c74d3f",
  },
];

export const ibmCourses: CourseCert[] = [
  { title: "Machine Learning with Python" },
  { title: "Intro to Deep Learning & Neural Networks" },
  { title: "Deep Learning with Keras and TensorFlow" },
  { title: "Intro to Neural Networks and PyTorch" },
  { title: "Deep Learning with PyTorch" },
  { title: "AI Capstone Project with Deep Learning" },
  { title: "Gen AI & LLMs: Architecture and Data" },
  { title: "Gen AI Foundational Models for NLP" },
  { title: "Gen AI Language Modeling with Transformers" },
  { title: "Gen AI Engineering and Fine-Tuning" },
  { title: "Gen AI Advanced Fine-Tuning for LLMs" },
  { title: "Fundamentals of AI Agents with RAG" },
  { title: "Project: Gen AI with RAG and LangChain" },
];