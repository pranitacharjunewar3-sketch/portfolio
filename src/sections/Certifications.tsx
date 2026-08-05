import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { certifications, ibmCourses } from "../data/certifications";

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="wrap">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Credentials</span>
            <h2 className="display-lg">Certified &amp; verified</h2>
            <p className="muted">
              Professional certifications in AI engineering and cybersecurity, with deep-learning
              specializations.
            </p>
          </div>
        </Reveal>

        <div className="cert-grid" style={{ marginBottom: "var(--s-xxl)" }}>
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 70}>
              <a
                className="cert-card"
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cert-icon">
                  <Icon name="certificate" size={22} />
                </span>
                <h3 className="title-md">{cert.title}</h3>
                <span className="issuer">{cert.issuer}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginBottom: "var(--s-lg)" }}>
            <h3 className="title-lg">IBM AI Engineering — course completion</h3>
            <p className="muted">
              13 specializations across machine learning, deep learning, and generative AI.
            </p>
          </div>
        </Reveal>

        <div className="cert-grid-wide">
          {ibmCourses.map((course, i) => (
            <Reveal key={course.title} delay={(i % 3) * 60}>
              <div className="course-chip">
                <span className="check">
                  <Icon name="check" size={16} />
                </span>
                {course.title}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}