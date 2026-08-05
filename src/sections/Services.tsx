import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { servicesData } from "../data/services";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can build for you"
      intro="From idea to deployed product — focused, production-ready delivery."
    >
      <div className="services-grid">
        {servicesData.map((service, i) => (
          <Reveal key={service.title} delay={i * 70} className="service-item">
            <div className="service-card">
              <span className="service-card-icon">
                <Icon name={service.icon} size={22} />
              </span>
              <div className="service-title">{service.title}</div>
              <p className="muted">{service.description}</p>
              <div className="project-tags">
                {service.tags.map((tag) => (
                  <span className="badge-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}