import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { certifications, ibmCourses } from "../data/certifications";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certified & verified"
      intro="Professional certifications in AI engineering and cybersecurity, backed by 13 deep-learning and generative-AI specializations."
    >
      <div className="cert-grid" style={{ marginBottom: "var(--s-4xl)" }}>
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 80}>
            <div className="cert-card">
              <span className="cert-icon">
                <Icon name="certificate" size={22} />
              </span>
              <div className="cert-title">{cert.title}</div>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div style={{ marginBottom: "var(--s-lg)" }}>
          <h3 className="title-lg">IBM AI Engineering — course completion</h3>
          <p className="muted" style={{ marginTop: 4 }}>
            13 specializations across machine learning, deep learning, and generative AI.
          </p>
        </div>
      </Reveal>

      <div className="cert-grid-wide">
        {ibmCourses.map((course, i) => (
          <Reveal key={course.title} delay={(i % 3) * 60}>
            <div className="course-chip">
              <span className="check">
                <Icon name="check" size={15} />
              </span>
              {course.title}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}