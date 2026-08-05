import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { FocusTicker } from "./sections/FocusTicker";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Stats } from "./sections/Stats";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <FocusTicker />
        <About />
        <Experience />
        <Stats />
        <Projects />
        <Services />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}