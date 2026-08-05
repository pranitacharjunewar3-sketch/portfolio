import { useState, type FormEvent } from "react";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { profileData } from "../data/profile";

const contactRows = [
  { icon: "mail", label: "Email", value: profileData.email, href: `mailto:${profileData.email}` },
  {
    icon: "github",
    label: "GitHub",
    value: "@" + profileData.githubUsername,
    href: profileData.links.github,
  },
  { icon: "linkedin", label: "LinkedIn", value: "Pranit Acharju Newar", href: profileData.links.linkedin },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSubmitting(true);
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitting(false);
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="cta-band" style={{ marginBottom: "var(--s-4xl)" }}>
            <div>
              <h2>Let&apos;s build something intelligent.</h2>
              <p>
                Have a project, an idea, or just want to connect? My inbox is always open.
              </p>
            </div>
            <a className="btn btn-light" href={`mailto:${profileData.email}`}>
              Email me <Icon name="arrow" size={15} />
            </a>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="section-header" style={{ marginBottom: "var(--s-lg)" }}>
              <span className="eyebrow">Contact</span>
              <h2 className="display-lg">Let&apos;s work together</h2>
            </div>
            <p className="muted" style={{ marginBottom: "var(--s-lg)", maxWidth: 420 }}>
              Reach out across any of these channels — I usually respond within a day.
            </p>

            <div className="contact-list">
              {contactRows.map((row) => (
                <a
                  className="contact-row"
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={row.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <span className="contact-row-icon">
                    <Icon name={row.icon} size={17} />
                  </span>
                  <span className="contact-row-text">
                    <span className="contact-row-label">{row.label}</span>
                    <span className="contact-row-value">{row.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact-form-wrap">
              <div className="contact-form-title">Send me a message</div>
              <div className="contact-form-sub">
                Fill this out and it opens your email client, pre-addressed and ready to send.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">
                      Name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      className="form-input"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="message">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      required
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <div className="form-actions">
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Opening..." : "Send message"}
                      <Icon name="send" size={15} />
                    </button>
                    {sent && (
                      <span className="form-status">
                        <Icon name="check" size={15} />
                        Email client opened — ready to send!
                      </span>
                    )}
                  </div>
                  <p className="form-note">
                    No account or backend needed — this opens a pre-filled email in your mail app.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}