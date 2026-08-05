import { useState } from "react";
import { Icon } from "../components/Icon";
import { profileData, navLinks } from "../data/profile";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#hero">
            <span className="brand-mark">
              <img src={profileData.profileImage} alt="" />
            </span>
            <span>{profileData.name}</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <a className="btn btn-primary btn-sm" href="#contact">
              Let&apos;s talk
            </a>
            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <a className="nav-link" href="#projects" onClick={() => setOpen(false)}>
          Work
        </a>
        <a className="nav-link" href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a className="nav-link" href="#certifications" onClick={() => setOpen(false)}>
          Certifications
        </a>
        <a className="nav-link" href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </>
  );
}