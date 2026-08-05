import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { projectsData, type Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-icon">
          <Icon name={project.featured ? "sparkles" : "box"} />
        </div>
        <div className="project-links">
          {project.url && (
            <a
              className="icon-btn"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
            >
              <Icon name="external" size={17} />
            </a>
          )}
          {project.github && (
            <a
              className="icon-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
            >
              <Icon name="github" size={17} />
            </a>
          )}
        </div>
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
      intro="AI-powered products, full-stack systems, and open-source experiments — built end to end."
    >
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}