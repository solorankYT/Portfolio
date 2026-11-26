import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "./projectData";

export default function HeroSection() {
  return (
    <section className="site-container hero" id="home" tabIndex={-1} aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-role">Full-stack developer</p>
        <h1 className="hero-title" id="hero-title">Mark Funa</h1>
        <p className="hero-lead">
          I build web apps with React and Laravel and support enterprise applications at Accenture.
          I’m based in Quezon City, Philippines.
        </p>
        <div className="hero-actions">
          <a className="site-button site-button--primary" href="#projects">
            Selected work <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="section-link" href="#contact">
            Contact <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <nav className="project-index" aria-labelledby="project-index-title">
        <h2 className="project-index__heading" id="project-index-title">Project index</h2>
        <ul role="list">
          {featuredProjects.map(({ id, title, category }) => (
            <li key={id}>
              <a href={`#project-${id}`}>
                <span className="project-index__title">{title}</span>
                <span className="project-index__category">{category}</span>
                <ArrowDownRight size={21} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
