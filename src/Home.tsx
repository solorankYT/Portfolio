import { ArrowUpRight, Download, Mail } from "lucide-react";
import About from "./About";
import Certificate from "./components/certificate";
import GitHubProfile from "./components/githubContribution";
import HeroSection from "./components/heroSection";
import Projects from "./components/projects";
import Skills from "./components/skillsCarousel";

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />

        <section className="site-container site-section work-section" id="projects" tabIndex={-1} aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
          </div>
          <Projects />
        </section>

        <section className="site-container site-section experience-section" id="experience" tabIndex={-1} aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <a className="section-link" href="/MarkFunaResume.pdf" download>
              <Download size={17} aria-hidden="true" /> Download résumé
            </a>
          </div>
          <About />
        </section>

        <section className="site-container site-section" id="skills" tabIndex={-1} aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Technical skills</h2>
          </div>
          <Skills />
        </section>

        <section className="site-container site-section" id="certificates" tabIndex={-1} aria-labelledby="certificates-title">
          <div className="section-heading">
            <h2 id="certificates-title">Certifications</h2>
          </div>
          <Certificate />
        </section>

        <section className="site-container contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <h2 id="contact-title">Contact</h2>
              <p>Get in touch about a role or a project.</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:markfuna6@gmail.com" className="site-button site-button--accent">
                <Mail size={19} aria-hidden="true" /> Email me
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/markfuna/">
                LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <GitHubProfile />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-container site-footer">
        <p>© {new Date().getFullYear()} Mark Funa</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
