
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
} from "lucide-react";

/* =====================================
   PROJECT DATA
===================================== */

import { projects } from "../data/projects";

/* =====================================
   ANIMATION COMPONENTS
===================================== */

import Reveal from "../components/animations/Reveal";

import {
  Stagger,
  StaggerItem,
} from "../components/animations/Stagger";

import ImageReveal from "../components/animations/ImageReveal";

import "./Projects.css";

/* =====================================
   PROJECT CARD
===================================== */

function ProjectCard({ project, index, total }) {
  const number = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <Link
      to={`/projects/${project.id}`}
      className="projects-card"
      aria-label={`View ${project.title} project details`}
    >
      <div className="projects-card-image">

        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
        />

        <span className="projects-card-number">
          {number} / {totalNumber}
        </span>

        <span className="projects-card-view">
          <ArrowUpRight
            size={24}
            strokeWidth={1.6}
          />
        </span>

      </div>

      <div className="projects-card-info">

        <div className="projects-card-text">

          <p className="projects-card-category">
            {project.category}
          </p>

          <h3>{project.title}</h3>

          <div className="projects-card-location">

            <MapPin
              size={14}
              strokeWidth={1.7}
            />

            <span>
              {[project.location, project.state]
                .filter(Boolean)
                .join(", ")}
            </span>

          </div>

        </div>

        <span className="projects-card-arrow">
          <ArrowRight
            size={19}
            strokeWidth={1.7}
          />
        </span>

      </div>

    </Link>
  );
}

/* =====================================
   PROJECTS PAGE
===================================== */

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All Projects");

  /* =====================================
     PUBLISHED PROJECTS
  ===================================== */

  const publishedProjects = projects
    .filter((project) => project.published === true)
    .sort(
      (a, b) =>
        (a.order ?? 0) - (b.order ?? 0)
    );

  /* =====================================
     DYNAMIC LOCATION FILTERS
  ===================================== */

  const states = [
    ...new Set(
      publishedProjects
        .map((project) => project.state)
        .filter(Boolean)
    ),
  ];

  const filters = ["All Projects", ...states];

  /* =====================================
     FILTER PROJECTS
  ===================================== */

  const filteredProjects = publishedProjects.filter(
    (project) =>
      activeFilter === "All Projects" ||
      project.state === activeFilter
  );

  const projectCount = publishedProjects.length;

  const formattedCount = String(
    projectCount
  ).padStart(2, "0");

  /* =====================================
     FEATURED HERO IMAGE
  ===================================== */

  const featuredProject =
    publishedProjects.find(
      (project) => project.featured
    ) || publishedProjects[0];

  return (
    <main className="projects-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="projects-hero">

        <div className="projects-container">

          {/* HERO TOP LABELS */}

          <div className="projects-hero-top">

            <Reveal delay={0.05}>
              <p className="projects-eyebrow">
                Tropical Manifesto
                <span className="projects-label-line" />
                Selected Works
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="projects-hero-index">
                Architecture / Interiors / Landscapes
              </span>
            </Reveal>

          </div>

          {/* HERO HEADING */}

          <div className="projects-hero-content">

            <Reveal delay={0.15} duration={0.9}>
              <div>
                <h1>
                  Spaces That
                  <br />
                  <em>Tell Stories.</em>
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.3} duration={0.8}>
              <p className="projects-hero-description">
                An exploration of architecture shaped
                by context, crafted with intention,
                and rooted in the relationship between
                people, nature, and place.
              </p>
            </Reveal>

          </div>

          {/* FEATURED ARCHITECTURAL IMAGE */}

          <div className="projects-hero-image">

            <ImageReveal
              src={
                featuredProject?.coverImage ||
                "/images/home-hero.jpg"
              }
              alt="Tropical Manifesto selected architectural work"
            />

            <div className="projects-hero-image-overlay" />

            <div className="projects-hero-image-caption">
              <span>SELECTED WORKS</span>

              <span>
                {formattedCount} PROJECTS
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          PROJECT COLLECTION
      ===================================== */}

      <section className="projects-list-section">

        <div className="projects-container">

          {/* SECTION HEADING */}

          <div className="projects-section-top">

            <Reveal direction="up">

              <div>
                <p className="projects-eyebrow">
                  Our Portfolio
                </p>

                <h2>
                  A Curated Collection
                  <br />
                  of Our Work
                </h2>
              </div>

            </Reveal>

            <Reveal delay={0.15}>
              <p className="projects-section-description">
                Every project is a thoughtful response
                to its surroundings, balancing design,
                functionality, and a sense of belonging.
              </p>
            </Reveal>

          </div>

          {/* =====================================
              LOCATION FILTERS
          ===================================== */}

          <Reveal delay={0.1}>

            <div className="projects-filter-bar">

              <div
                className="projects-filters"
                aria-label="Filter projects by location"
              >

                {filters.map((filter) => (

                  <button
                    key={filter}
                    type="button"
                    className={`projects-filter ${
                      activeFilter === filter
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    aria-pressed={
                      activeFilter === filter
                    }
                  >
                    {filter}
                  </button>

                ))}

              </div>

              <span className="projects-results-count">
                Showing{" "}
                {String(
                  filteredProjects.length
                ).padStart(2, "0")}

                {" / "}

                {formattedCount} Projects
              </span>

            </div>

          </Reveal>

          {/* =====================================
              ANIMATED PROJECT GRID
          ===================================== */}

          {filteredProjects.length > 0 ? (

            <Stagger
              key={activeFilter}
              className="projects-grid"
              delay={0.05}
            >

              {filteredProjects.map(
                (project, index) => (

                  <StaggerItem key={project.id}>

                    <ProjectCard
                      project={project}
                      index={index}
                      total={
                        filteredProjects.length
                      }
                    />

                  </StaggerItem>

                )
              )}

            </Stagger>

          ) : (

            <Reveal>

              <div className="projects-empty">

                <h3>No Projects Found</h3>

                <p>
                  There are currently no published
                  projects in this location.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setActiveFilter("All Projects")
                  }
                >
                  View All Projects
                  <ArrowRight size={17} />
                </button>

              </div>

            </Reveal>

          )}

        </div>

      </section>

      {/* =====================================
          DESIGN PHILOSOPHY
      ===================================== */}

      <section className="projects-statement">

        <div className="projects-statement-inner">

          <Reveal delay={0.05}>
            <p className="projects-eyebrow">
              Our Philosophy
            </p>
          </Reveal>

          <Reveal delay={0.15} duration={0.9}>
            <h2>
              Architecture is not just
              <br />
              about building spaces.
              <br />
              <em>
                It's about creating experiences.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <span className="projects-statement-line" />
          </Reveal>

        </div>

      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}

      <section className="projects-contact">

        <div className="projects-contact-banner">

          <div className="projects-contact-content">

            <Reveal delay={0.05}>
              <p className="projects-eyebrow">
                Let's Collaborate
              </p>
            </Reveal>

            <Reveal delay={0.15} duration={0.85}>
              <h2>
                Have a Vision?
                <br />
                Let's Shape It.
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p>
                Every remarkable project begins
                with a conversation. Let's create
                a space that truly belongs.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <Link
                to="/contact"
                className="projects-contact-button"
              >
                Start a Project
                <ArrowUpRight size={19} />
              </Link>
            </Reveal>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;
