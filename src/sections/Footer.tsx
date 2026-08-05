import { Icon } from "../components/Icon";
import { profileData } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-brand">
            <span className="brand-mark">
              <img src={profileData.profileImage} alt="" />
            </span>
            {profileData.name}
          </span>

          <div className="footer-social">
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

        <div className="footer-bottom">
          <span>&copy; {year} {profileData.name}. Built with React &amp; Vite.</span>
          <a href="https://github.com/pranitacharjunewar3-sketch/portfolio" target="_blank" rel="noopener noreferrer">
            View source
          </a>
        </div>
      </div>
    </footer>
  );
}