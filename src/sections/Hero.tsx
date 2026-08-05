import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { profileData } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-mesh" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <div className="hero-badge">
              <span className="dot" />
              Available for projects &amp; collaboration
            </div>

            <h1 className="display-xl">
              AI Engineer
              <br />
              <span className="accent">{profileData.tagline}</span>
            </h1>

            <p className="lead">{profileData.bio}</p>

            <div className="hero-meta">
              <span>
                <Icon name="mapPin" size={15} />
                {profileData.location}
              </span>
              <span className="sep" />
              <span>
                <Icon name="briefcase" size={15} />
                {profileData.role}
              </span>
            </div>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                See my work
              </a>
              <a className="btn btn-secondary" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn-ghost"
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Icon name="arrow" size={15} />
              </a>
            </div>

            <div className="hero-stats">
              {profileData.stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="profile-card">
              <div className="profile-photo-wrap">
                <span className="profile-status">
                  <span className="dot" />
                  Open to work
                </span>
                <img
                  src={profileData.profileImage}
                  alt={`Portrait of ${profileData.name}`}
                  loading="eager"
                />
              </div>
              <div className="profile-card-body">
                <div className="profile-name">{profileData.name}</div>
                <div className="profile-role">AI Engineer · Full-Stack · Instructor</div>

                <div className="profile-facts">
                  <div className="profile-fact">
                    <Icon name="mapPin" size={16} />
                    {profileData.location}
                  </div>
                  <div className="profile-fact">
                    <Icon name="award" size={16} />
                    IBM AI Engineering
                  </div>
                  <div className="profile-fact">
                    <Icon name="graduation" size={16} />
                    13 specializations
                  </div>
                  <div className="profile-fact">
                    <Icon name="shield" size={16} />
                    Ethical Hacker
                  </div>
                </div>

                <div className="profile-social">
                  <a
                    className="icon-btn"
                    href={profileData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Icon name="github" size={18} />
                  </a>
                  <a
                    className="icon-btn"
                    href={profileData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Icon name="linkedin" size={18} />
                  </a>
                  <a
                    className="icon-btn"
                    href={profileData.links.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Upwork"
                  >
                    <Icon name="upwork" size={18} />
                  </a>
                  <a
                    className="icon-btn"
                    href={`mailto:${profileData.email}`}
                    aria-label="Email"
                  >
                    <Icon name="mail" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}