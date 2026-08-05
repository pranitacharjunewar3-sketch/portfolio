import { profileData, navLinks } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#hero">
              <span className="brand-mark">
                <img src={profileData.profileImage} alt="" />
              </span>
              {profileData.name}
            </a>
            <p>
              AI Engineer, full-stack developer, and IT instructor building and teaching the next
              generation of intelligent applications.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href={profileData.links.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profileData.website} target="_blank" rel="noopener noreferrer">
                    pranitacharjunewar.com.np
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {profileData.name}. Built with Passion &amp; ❤️.
          </span>
          <span>
            Deployed with GitHub Actions ·{" "}
            <a
              href="https://github.com/pranitacharjunewar3-sketch/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}