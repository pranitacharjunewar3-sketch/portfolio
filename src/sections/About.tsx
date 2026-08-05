import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { profileData } from "../data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer, builder, and educator"
      intro="The short version — and the long one."
    >
      <div className="about-grid">
        <Reveal>
          <div className="about-body">
            {profileData.about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <div className="hero-cta" style={{ marginTop: "var(--s-lg)", marginBottom: 0 }}>
              <a className="btn btn-secondary" href="#experience">
                My journey <Icon name="arrow" size={15} />
              </a>
              <a
                className="btn btn-ghost"
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                pranitacharjunewar.com.np
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-highlights">
            {profileData.highlights.map((item) => (
              <div className="highlight-item" key={item}>
                <span className="check-badge">
                  <Icon name="check" size={13} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}