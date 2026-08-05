import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { projectsData, type Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-icon">
        <Icon name={project.featured ? "star" : "box"} />
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="muted">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="badge-pill" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects that ship value"
      intro="AI-powered products, full-stack systems, and AI tools — built end to end."
    >
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80} className="project-item">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}