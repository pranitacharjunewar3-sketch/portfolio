import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { projectsData, type Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  const featured = Boolean(project.featured);

  return (
    <div className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <div className="project-card-header">
        <div className="project-icon">
          <Icon name={featured ? "sparkles" : "box"} />
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
              <Icon name="external" size={18} />
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
              <Icon name="github" size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="title-md">{project.title}</h3>
      <p className="muted">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="badge-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Selected Work</span>
            <h2 className="display-lg">Projects that ship value</h2>
            <p className="muted">
              AI-powered products, full-stack systems, and open-source experiments — built end to end.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <Reveal key={project.id} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}