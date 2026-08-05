import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { profileData, navLinks } from "../data/profile";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#hero">
            <span className="brand-mark">
              <img src={profileData.profileImage} alt="" />
            </span>
            <span>{profileData.name}</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <a className="btn btn-primary btn-sm" href="#contact">
              Let&apos;s work together
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

      <div className={`nav-sheet ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="nav-link"
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s work together
        </a>
      </div>
    </>
  );
}