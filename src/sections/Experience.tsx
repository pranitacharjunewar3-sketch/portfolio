import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { experienceData } from "../data/experience";

const typeIcons: Record<string, string> = {
  work: "briefcase",
  education: "graduation",
};

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked and learned"
      className="section-soft"
    >
      <div className="timeline">
        {experienceData.map((item, i) => (
          <Reveal key={`${item.role}-${item.org}`} delay={i * 80}>
            <div className="timeline-item">
              <span className="timeline-dot">
                <Icon name={typeIcons[item.type]} size={13} />
              </span>
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-org">{item.org}</div>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <ul>
                  {item.description.map((point) => (
                    <li key={point.slice(0, 24)}>
                      <Icon name="check" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>

                {item.tags && (
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span className="badge-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}