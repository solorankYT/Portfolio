import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, ChevronDown, X } from "lucide-react";
import { featuredProjects, otherProjects, type FeaturedProject } from "./projectData";
import "./projects.css";

function SourceLink({ source, title }: { source: string; title: string }) {
  return (
    <a
      className="project-link project-source-link"
      href={source}
      aria-label={`Source code for ${title} on GitHub`}
    >
      Source code <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}

function ProjectArtwork({
  artwork,
  decorative = false,
}: {
  artwork: FeaturedProject["artwork"];
  decorative?: boolean;
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}projects/${artwork.file}`}
      alt={decorative ? "" : artwork.alt}
      width={artwork.width}
      height={artwork.height}
      loading="lazy"
      decoding="async"
    />
  );
}

function ArtworkFigure({ artwork }: { artwork: FeaturedProject["artwork"] }) {
  return (
    <figure className="project-dialog-artwork">
      <ProjectArtwork artwork={artwork} />
      <figcaption>{artwork.caption}</figcaption>
    </figure>
  );
}

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const dialogTitle = useRef<HTMLHeadingElement>(null);
  const {
    additionalArtwork,
    artwork,
    category,
    contribution,
    decisions,
    id,
    problem,
    result,
    source,
    summary,
    tags,
    title,
    year,
  } = project;
  const meta = year ? `${category} · ${year}` : category;

  return (
    <Dialog.Root>
      <article className="project-card" id={`project-${id}`} tabIndex={-1} aria-labelledby={`project-${id}-title`}>
        <div className="project-artwork">
          <ProjectArtwork artwork={artwork} decorative />
          {artwork.label && <span className="project-artwork-label">{artwork.label}</span>}
        </div>
        <div className="project-card-body">
          <p className="project-meta">{meta}</p>
          <h3 id={`project-${id}-title`}>{title}</h3>
          <p className="project-summary">{summary}</p>
          <ul className="project-tags" role="list" aria-label="Project technologies and features">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <div className="project-actions">
            <Dialog.Trigger asChild>
              <button type="button" className="project-link" aria-label={`Read case study for ${title}`}>
                Read case study <ArrowRight aria-hidden="true" size={17} />
              </button>
            </Dialog.Trigger>
            {source && <SourceLink source={source} title={title} />}
          </div>
        </div>
      </article>

      <Dialog.Portal>
        <Dialog.Overlay className="project-dialog-overlay" />
        <Dialog.Content
          className="project-dialog"
          aria-modal="true"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            dialogTitle.current?.focus({ preventScroll: true });
          }}
        >
          <header className="project-dialog-header">
            <div>
              <p className="project-meta">{meta}</p>
              <Dialog.Title ref={dialogTitle} tabIndex={-1} className="project-dialog-title">
                {title}
              </Dialog.Title>
            </div>
            <Dialog.Close type="button" className="project-dialog-close" aria-label="Close case study">
              <X aria-hidden="true" size={23} />
            </Dialog.Close>
          </header>

          <div
            className="project-dialog-body"
            role="region"
            aria-label="Case study details"
            tabIndex={0}
            onFocus={(event) => {
              const control = event.target;
              if (control === event.currentTarget) return;

              // Radix can wrap focus without scrolling the focused control into view.
              requestAnimationFrame(() => {
                if (document.activeElement === control) {
                  control.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
                }
              });
            }}
          >
            <Dialog.Description className="project-dialog-summary">{summary}</Dialog.Description>
            <div className="project-detail-grid">
              <section>
                <h3>Problem</h3>
                <p>{problem}</p>
              </section>
              <section>
                <h3>My contribution</h3>
                <p>{contribution}</p>
              </section>
              <section>
                <h3>Technical decisions</h3>
                <p>{decisions}</p>
              </section>
              <section>
                <h3>Result</h3>
                <p>{result}</p>
              </section>
            </div>
            {source && <SourceLink source={source} title={title} />}
            <ArtworkFigure artwork={artwork} />
            {additionalArtwork && (
              <details className="project-gallery-details">
                <summary>
                  <span>View another screen</span>
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <ArtworkFigure artwork={additionalArtwork} />
              </details>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function Projects() {
  return (
    <div className="portfolio-projects">
      <div className="projects-grid">
        {featuredProjects.map((project) => <FeaturedProjectCard key={project.id} project={project} />)}
      </div>
      <details className="project-archive">
        <summary>
          <span>More projects</span>
          <ChevronDown aria-hidden="true" size={20} />
        </summary>
        <ul className="project-archive-list" role="list">
          {otherProjects.map(({ source, summary, title }) => (
            <li key={title}>
              <div>
                <h3>{title}</h3>
                <p>{summary}</p>
              </div>
              {source && <SourceLink source={source} title={title} />}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
