
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarDays,
  Maximize2,
  Layers3,
  Leaf,
  Building2,
  BedDouble,
} from "lucide-react";

import { projects } from "../data/projects";
import "./ProjectDetails.css";

/* =========================================
   TROPICAL MANIFESTO
   PROJECT DETAILS PAGE
========================================= */

function ProjectDetails() {
  const { id } = useParams();

  const [activeImage, setActiveImage] = useState(0);
  const thumbnailsRef = useRef(null);

  /* =========================================
     GET PROJECT DATA
  ========================================= */

  const project = projects.find(
    (item) =>
      item.id === id &&
      item.published === true
  );

  /* =========================================
     PROJECT GALLERY
  ========================================= */

  const gallery = project
    ? [
        ...new Set(
          [
            project.coverImage,
            ...(project.gallery || []),
          ].filter(Boolean)
        ),
      ]
    : [];

  /* =========================================
     RESET ON PROJECT CHANGE
  ========================================= */

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  /* =========================================
     GALLERY NAVIGATION
  ========================================= */

  const nextImage = () => {
    if (gallery.length < 2) return;

    setActiveImage((prev) =>
      (prev + 1) % gallery.length
    );
  };

  const previousImage = () => {
    if (gallery.length < 2) return;

    setActiveImage((prev) =>
      (prev - 1 + gallery.length) %
      gallery.length
    );
  };

  /* =========================================
     SCROLL THUMBNAILS HORIZONTALLY
  ========================================= */

  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const thumbnail = container.children[activeImage];

    if (!thumbnail) return;

    const targetLeft =
      thumbnail.offsetLeft -
      container.offsetLeft -
      container.clientWidth / 2 +
      thumbnail.clientWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeImage, id]);

  /* =========================================
     PROJECT NOT FOUND
  ========================================= */

  if (!project) {
    return (
      <main className="pd-not-found">
        <span>404 / PROJECT NOT FOUND</span>

        <h1>Project Not Found</h1>

        <p>
          This project may have been moved,
          unpublished, or is no longer available.
        </p>

        <Link to="/projects" className="pd-yellow-btn">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </main>
    );
  }

  /* =========================================
     PROJECT INFORMATION
  ========================================= */

  const projectLocation = [
    project.location,
    project.state,
  ]
    .filter(Boolean)
    .join(", ");

  const projectFacts = [
    {
      label: "Location",
      value: projectLocation,
      icon: MapPin,
    },
    {
      label: "Built Area",
      value: project.area,
      icon: Maximize2,
    },
    {
      label: "Plot Area",
      value: project.plotArea,
      icon: Maximize2,
    },
    {
      label: "Year",
      value: project.year || project.date?.slice(0, 4),
      icon: CalendarDays,
    },
    {
      label: "Type",
      value: project.category,
      icon: Layers3,
    },
    {
      label: "Levels",
      value: project.levels,
      icon: Building2,
    },
    {
      label: "Bedrooms",
      value: project.bedrooms,
      icon: BedDouble,
    },
  ].filter(
    (fact) =>
      fact.value !== undefined &&
      fact.value !== null &&
      fact.value !== ""
  );

  const narrative = (project.narrative || []).filter(
    (paragraph) =>
      typeof paragraph === "string" &&
      paragraph.trim().length > 0
  );

  const highlights = (project.highlights || []).filter(
    (item) => item.title && item.description
  );

  const credits = (project.credits || []).filter(
    (credit) => credit.role && credit.name
  );

  return (
    <main className="pd-page">

      {/* =====================================
          HERO SECTION
      ========================================= */}

      <section className="pd-hero">

        <div className="pd-hero-image">
          <img
            src={project.coverImage}
            alt={`${project.title} architectural project`}
            fetchPriority="high"
          />
        </div>

        <div className="pd-hero-overlay" />

        <div className="pd-hero-container">

          <div className="pd-hero-content">

            <p className="pd-hero-label">
              <span>Project</span>
              <i />
            </p>

            <h1>{project.title}</h1>

            {project.description && (
              <p className="pd-hero-description">
                {project.description}
              </p>
            )}

            <Link
              to="/contact"
              className="pd-yellow-btn"
            >
              Enquire About This Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <div className="pd-hero-bottom">
          <span>Tropical Manifesto</span>
          <span>{projectLocation}</span>
        </div>

      </section>

      {/* =====================================
          PROJECT OVERVIEW
      ========================================= */}

      <section className="pd-overview">

        <div className="pd-container pd-overview-grid">

          <div className="pd-overview-intro">

            <p className="pd-section-eyebrow">
              The Project
            </p>

            <h2>Project Overview</h2>

            <p>
              {project.description ||
                `Explore the architectural details and visual story of ${project.title}.`}
            </p>

          </div>

          <div className="pd-overview-facts">

            {projectFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  className="pd-fact"
                  key={fact.label}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                  />

                  <h3>{fact.label}</h3>
                  <p>{fact.value}</p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================
          ARCHITECTURAL NARRATIVE
      ========================================= */}

      {narrative.length > 0 && (
        <section className="pd-narrative-section">

          <div className="pd-container">

            <div className="pd-narrative-header">

              <div>
                <p className="pd-section-eyebrow">
                  Behind the Architecture
                </p>

                <h2>
                  {project.narrativeTitle ||
                    "The Architectural Narrative"}
                </h2>

                <span className="pd-gold-line" />
              </div>

              <span className="pd-narrative-index">
                {project.title} / Tropical Manifesto
              </span>

            </div>

            <div className="pd-narrative-content">

              {narrative.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================
          PROJECT CREDITS
      ========================================= */}

      {credits.length > 0 && (
        <section className="pd-credits-section">

          <div className="pd-container">

            <div className="pd-credits-header">

              <p className="pd-section-eyebrow">
                Project Collaborators
              </p>

              <h2>
                The People Behind
                <br />
                the Project
              </h2>

            </div>

            <div className="pd-credits-grid">

              {credits.map((credit, index) => (
                <div
                  className="pd-credit-item"
                  key={`${credit.role}-${index}`}
                >
                  <span className="pd-credit-role">
                    {credit.role}
                  </span>

                  <h3>{credit.name}</h3>
                </div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================
          PROJECT GALLERY
      ========================================= */}

      {gallery.length > 0 && (
        <section className="pd-gallery-section">

          <div className="pd-container">

            <div className="pd-gallery-heading">

              <div>
                <p className="pd-section-eyebrow">
                  Project Photography
                </p>

                <h2>Explore the Spaces</h2>
              </div>

              <span>
                {String(gallery.length).padStart(2, "0")}
                {" "}Photographs
              </span>

            </div>

            <div
              className={`pd-gallery-layout ${
                highlights.length === 0
                  ? "pd-gallery-layout-full"
                  : ""
              }`}
            >

              {/* MAIN GALLERY */}

              <div className="pd-gallery">

                <div className="pd-gallery-main">

                  <img
                    src={gallery[activeImage]}
                    alt={`${project.title} photograph ${
                      activeImage + 1
                    }`}
                  />

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="pd-gallery-nav pd-gallery-prev"
                        onClick={previousImage}
                        aria-label="Previous photograph"
                      >
                        <ChevronLeft size={23} />
                      </button>

                      <button
                        type="button"
                        className="pd-gallery-nav pd-gallery-next"
                        onClick={nextImage}
                        aria-label="Next photograph"
                      >
                        <ChevronRight size={23} />
                      </button>
                    </>
                  )}

                  <span className="pd-gallery-counter">
                    {String(activeImage + 1).padStart(2, "0")}
                    {" / "}
                    {String(gallery.length).padStart(2, "0")}
                  </span>

                </div>

                {/* SCROLLABLE THUMBNAILS */}

                {gallery.length > 1 && (
                  <div
                    className="pd-gallery-thumbnails"
                    ref={thumbnailsRef}
                    aria-label="Project photographs"
                  >
                    {gallery.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        className={`pd-gallery-thumbnail ${
                          activeImage === index
                            ? "active"
                            : ""
                        }`}
                        onClick={() => setActiveImage(index)}
                        aria-label={`View photograph ${index + 1}`}
                        aria-pressed={activeImage === index}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}

              </div>

              {/* =====================================
                  DESIGN HIGHLIGHTS
              ========================================= */}

              {highlights.length > 0 && (
                <div className="pd-highlights">

                  <p className="pd-section-eyebrow">
                    Design Elements
                  </p>

                  <h2>Design Highlights</h2>

                  <div className="pd-highlights-list">

                    {highlights.map((highlight, index) => (
                      <div
                        className="pd-highlight"
                        key={`${highlight.title}-${index}`}
                      >
                        <span className="pd-highlight-icon">
                          <Leaf
                            size={25}
                            strokeWidth={1.4}
                          />
                        </span>

                        <div>
                          <h3>{highlight.title}</h3>
                          <p>{highlight.description}</p>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

          </div>

        </section>
      )}

      {/* =====================================
          OPTIONAL DESIGN STORY
      ========================================= */}

      {project.story && (
        <section className="pd-story-section">

          <div className="pd-container pd-story-grid">

            <div className="pd-story-content">

              <p className="pd-section-eyebrow">
                The Design Process
              </p>

              <h2>The Design Story</h2>

              <span className="pd-gold-line" />

              <p>{project.story}</p>

            </div>

            <div className="pd-story-image">

              <img
                src={
                  project.storyImage ||
                  gallery[1] ||
                  project.coverImage
                }
                alt={`${project.title} design`}
                loading="lazy"
              />

            </div>

          </div>

        </section>
      )}

      {/* =====================================
          CONTACT CTA
      ========================================= */}

      <section className="pd-contact-section">

        <div className="pd-container pd-contact-content">

          <div>
            <h2>Like This Project?</h2>

            <p>
              Let's create a space that's
              uniquely yours.
            </p>
          </div>

          <Link
            to="/contact"
            className="pd-yellow-btn"
          >
            Start a Conversation
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

      {/* =====================================
          BACK TO ALL PROJECTS
      ========================================= */}

      <div className="pd-back-section">

        <Link to="/projects">
          <ArrowLeft size={18} />
          Back to All Projects
        </Link>

      </div>

    </main>
  );
}

export default ProjectDetails;
