import { Reveal } from "../components/Reveal";
import { profileData } from "../data/profile";

function CodeWindow() {
  return (
    <div className="hero-card">
      <div className="hero-card-top">
        <span className="dot-red" />
        <span className="dot-yellow" />
        <span className="dot-green" />
        <span className="hero-card-title">ai-engineer.ts</span>
      </div>
      <div className="hero-card-body">
        <pre>
          <span className="ln">1 </span><span className="kw">const</span> <span className="fn">engineer</span> = {`{`}
          {"\n"}
          <span className="ln">2 </span>  <span className="kw">stack</span>: [<span className="str">"AI"</span>, <span className="str">"Full-Stack"</span>],
          {"\n"}
          <span className="ln">3 </span>  <span className="kw">focus</span>: [<span className="str">"LLM"</span>, <span className="str">"RAG"</span>, <span className="str">"Deep Learning"</span>],
          {"\n"}
          <span className="ln">4 </span>  <span className="kw">shipping</span>: <span className="str">"AI apps"</span>,
          {"\n"}
          <span className="ln">5 </span>  <span className="kw">teaching</span>: <span className="str">"IT @ G-Tech"</span>,
          {"\n"}
          <span className="ln">6 </span>{`}`};
          {"\n"}
          <span className="ln">7 </span>
          {"\n"}
          <span className="ln">8 </span><span className="kw">while</span> (<span className="fn">learning</span>) {`{`}
          {"\n"}
          <span className="ln">9 </span>  <span className="fn">build</span>(<span className="kw">next</span>);
          {"\n"}
          <span className="ln">10</span>{`}`}
        </pre>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="hero">
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

            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                See my work
              </a>
              <a className="btn btn-secondary" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn-secondary"
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <h3>6+</h3>
                <p>Projects shipped</p>
              </div>
              <div className="hero-stat">
                <h3>3</h3>
                <p>Certifications</p>
              </div>
              <div className="hero-stat">
                <h3>IBM</h3>
                <p>AI Engineering</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <CodeWindow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}