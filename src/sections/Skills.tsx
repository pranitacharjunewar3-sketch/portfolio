import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "var(--c-surface-soft)" }}>
      <div className="wrap">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Capabilities</span>
            <h2 className="display-lg">The stack I build with</h2>
            <p className="muted">
              From deep learning to deployment — a full-spectrum engineering toolkit.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="skill-group">
                <h3>
                  <Icon name={group.icon} size={18} />
                  {group.category}
                </h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}