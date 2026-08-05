import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="The stack I build with"
      intro="From deep learning to deployment — a full-spectrum engineering toolkit."
      className="section-soft"
    >
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 80} className="skills-item">
            <div className="skill-group">
              <div className="skill-group-head">
                <span className="skill-group-icon">
                  <Icon name={group.icon} size={18} />
                </span>
                <div>
                  <div className="skill-group-name">{group.category}</div>
                  <div className="skill-group-count">
                    {group.items.length} technologies
                  </div>
                </div>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
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