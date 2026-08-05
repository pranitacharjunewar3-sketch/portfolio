import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { profileData } from "../data/profile";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="cta-band" style={{ marginBottom: "var(--s-xxl)" }}>
            <div>
              <h2>Let&apos;s build something intelligent.</h2>
              <p>
                Have a project, an idea, or just want to connect? My inbox is always open.
              </p>
            </div>
            <a className="btn" href={`mailto:${profileData.email}`}>
              Email me
            </a>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="section-header" style={{ marginBottom: "var(--s-lg)" }}>
              <span className="eyebrow">Contact</span>
              <h2 className="display-md" style={{ marginBottom: 0 }}>
                Let&apos;s work together
              </h2>
            </div>
            <p className="muted" style={{ marginBottom: "var(--s-lg)", maxWidth: 440 }}>
              Reach out across any of these channels — I usually respond within a day.
            </p>

            <div className="contact-list">
              <a className="contact-row" href={`mailto:${profileData.email}`}>
                <Icon name="mail" />
                {profileData.email}
              </a>
              <a
                className="contact-row"
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
                GitHub
              </a>
              <a
                className="contact-row"
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" />
                LinkedIn
              </a>
              <a
                className="contact-row"
                href={profileData.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="upwork" />
                Upwork
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact-aside">
              <h3 className="title-lg">Quick facts</h3>
              <p className="lead">Currently focused on {profileData.currently}.</p>
              <dl>
                <div className="meta-row">
                  <dt>Role</dt>
                  <dd>IT Instructor @ G-Tech I.T Solution</dd>
                </div>
                <div className="meta-row">
                  <dt>Location</dt>
                  <dd>{profileData.location}</dd>
                </div>
                <div className="meta-row">
                  <dt>Focus</dt>
                  <dd>LLM · RAG · Deep Learning</dd>
                </div>
                <div className="meta-row">
                  <dt>Website</dt>
                  <dd>
                    <a href="https://pranitacharjunewar.com.np" target="_blank" rel="noopener noreferrer">
                      pranitacharjunewar.com.np
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}