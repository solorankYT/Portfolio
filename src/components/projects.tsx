import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects, type Project, type ProjectCategory, type ProjectImage } from "./projectData";
import "./projects.css";

const categories = [
  { id: "client", label: "Client Work" },
  { id: "personal", label: "Personal Projects" },
] as const;

function imageUrl(image: ProjectImage) {
  return `${import.meta.env.BASE_URL}projects/${image.file}`;
}

function ProjectArtwork({ image, decorative = false }: { image: ProjectImage; decorative?: boolean }) {
  return (
    <img
      src={imageUrl(image)}
      alt={decorative ? "" : image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="project-tags" role="list" aria-label="Project technologies">
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
}

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  const dialogTitle = useRef<HTMLHeadingElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { id, images, source, summary, tags, title } = project;
  const image = images[imageIndex];

  function changeImage(step: number) {
    setImageIndex((index) => (index + step + images.length) % images.length);
  }

  return (
    <Dialog.Root onOpenChange={(open) => { if (open) setImageIndex(0); }}>
      <article className="project-card" aria-labelledby={`project-${id}-title`} aria-hidden={!active || undefined} inert={!active}>
        <div className="project-cover">
          <ProjectArtwork image={images[0]} decorative />
        </div>
        <h3 id={`project-${id}-title`}>{title}</h3>
        <p className="project-card-summary">{summary}</p>
        <ProjectTags tags={tags} />
        <span className="project-card-action" aria-hidden="true">View Project <ArrowRight size={16} /></span>
        <Dialog.Trigger asChild>
          <button type="button" className="project-card-trigger" aria-label={`View Project: ${title}`} />
        </Dialog.Trigger>
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
            <Dialog.Title className="project-dialog-title" ref={dialogTitle} tabIndex={-1}>
              {title}
            </Dialog.Title>
            <Dialog.Close type="button" className="project-icon-button" aria-label="Close project details">
              <X aria-hidden="true" size={21} />
            </Dialog.Close>
          </header>

          <div
            className="project-dialog-body"
            role="region"
            aria-label="Project details"
            tabIndex={0}
            onFocus={(event) => {
              const control = event.target;
              if (control === event.currentTarget) return;
              requestAnimationFrame(() => {
                if (document.activeElement === control) {
                  control.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
                }
              });
            }}
          >
            <figure className="project-gallery-image">
              <ProjectArtwork image={image} />
              <figcaption className="project-gallery-caption">
                {image.caption && <span>{image.caption}</span>}
                <a href={imageUrl(image)} target="_blank" rel="noopener noreferrer">
                  View full-size screenshot <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
            {images.length > 1 && (
              <div className="project-gallery-controls">
                <button type="button" className="project-icon-button" aria-label="Previous screenshot" onClick={() => changeImage(-1)}>
                  <ArrowLeft size={17} aria-hidden="true" />
                </button>
                <span aria-live="polite">Image {imageIndex + 1} of {images.length}</span>
                <button type="button" className="project-icon-button" aria-label="Next screenshot" onClick={() => changeImage(1)}>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            )}
            <Dialog.Description className="project-dialog-summary">{summary}</Dialog.Description>
            <ProjectTags tags={tags} />
            {source && (
              <a href={source} className="project-source-link">
                Source code <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ProjectsCarousel({ items }: { items: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportRef, carousel] = useEmblaCarousel({
    loop: true,
    breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
  });

  useEffect(() => {
    if (!carousel) return;
    const onSelect = () => setActiveIndex(carousel.selectedScrollSnap());
    carousel.on("select", onSelect).on("reInit", onSelect);
    return () => { carousel.off("select", onSelect).off("reInit", onSelect); };
  }, [carousel]);

  return (
    <div className="project-carousel" role="region" aria-label="Projects" aria-roledescription="carousel">
      <div className="project-viewport" ref={viewportRef}>
        <div className="project-slides">
          {items.map((project, index) => (
            <div className="project-slide" key={project.id}>
              <ProjectCard project={project} active={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="project-icon-button project-arrow project-arrow--previous" aria-label="Previous project" onClick={() => carousel?.scrollPrev()}>
        <ArrowLeft size={17} aria-hidden="true" />
      </button>
      <button type="button" className="project-icon-button project-arrow project-arrow--next" aria-label="Next project" onClick={() => carousel?.scrollNext()}>
        <ArrowRight size={17} aria-hidden="true" />
      </button>
      <div className="project-pagination" role="group" aria-label="Choose a project">
        {items.map((project, index) => (
          <button
            type="button"
            key={project.id}
            aria-label={`Show ${project.title}`}
            aria-pressed={index === activeIndex}
            onClick={() => carousel?.scrollTo(index)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("client");

  return (
    <div className="portfolio-projects">
      <div className="project-category" role="group" aria-label="Project category">
        {categories.map(({ id, label }) => (
          <button type="button" key={id} aria-pressed={category === id} onClick={() => setCategory(id)}>
            {label}
          </button>
        ))}
      </div>
      <ProjectsCarousel key={category} items={projects.filter((project) => project.category === category)} />
    </div>
  );
}
