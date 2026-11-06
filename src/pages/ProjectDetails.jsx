
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "motion/react";

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
import Reveal from "../components/animations/Reveal";
import "./ProjectDetails.css";

/* =========================================
   ANIMATION SETTINGS
========================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

/* =========================================
   PROJECT DETAILS PAGE
========================================= */

function ProjectDetails() {
  const { id } = useParams();

  const [activeImage, setActiveImage] = useState(0);
  const thumbnailsRef = useRef(null);

  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  /* =========================================
     GET PROJECT
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

    setActiveImage(
      (prev) => (prev + 1) % gallery.length
    );
  };

  const previousImage = () => {
    if (gallery.length < 2) return;

    setActiveImage(
      (prev) =>
        (prev - 1 + gallery.length) % gallery.length
    );
  };

  /* =========================================
     THUMBNAIL AUTO SCROLL
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
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }, [activeImage, id, reduceMotion]);

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
      value:
        project.year || project.date?.slice(0, 4),
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

  const groupProps = animate
    ? {
        variants: stagger,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
      }
    : {};

  /* =========================================
     RENDER
  ========================================= */

  return (
    <main className="pd-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="pd-hero">

        <div className="pd-hero-image">
          <motion.img
            key={project.id}
            src={project.coverImage}
            alt={`${project.title} architectural project`}
            fetchPriority="high"
            initial={
              animate
                ? { scale: 1.06, opacity: 0.75 }
                : false
            }
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: animate ? 1.3 : 0,
              ease,
            }}
          />
        </div>

        <div className="pd-hero-overlay" />

        <div className="pd-hero-container">
          <motion.div
            className="pd-hero-content"
            variants={animate ? stagger : undefined}
            initial={animate ? "hidden" : false}
            animate="visible"
          >

            <motion.p
              className="pd-hero-label"
              variants={animate ? fadeUp : undefined}
            >
              <span>Project</span>
              <i />
            </motion.p>

            <motion.h1
              variants={animate ? fadeUp : undefined}
            >
              {project.title}
            </motion.h1>

            {project.description && (
              <motion.p
                className="pd-hero-description"
                variants={animate ? fadeUp : undefined}
              >
                {project.description}
              </motion.p>
            )}

            <motion.div
              variants={animate ? fadeUp : undefined}
            >
              <Link
                to="/contact"
                className="pd-yellow-btn"
              >
                Enquire About This Project
                <ArrowRight size={18} />
              </Link>
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          className="pd-hero-bottom"
          initial={
            animate ? { opacity: 0 } : false
          }
          animate={{ opacity: 1 }}
          transition={{
            duration: animate ? 0.7 : 0,
            delay: animate ? 0.65 : 0,
          }}
        >
          <span>Tropical Manifesto</span>
          <span>{projectLocation}</span>
        </motion.div>

      </section>

      {/* =====================================
          PROJECT OVERVIEW
      ===================================== */}

      <section className="pd-overview">
        <div className="pd-container pd-overview-grid">

          <div className="pd-overview-intro">
            <Reveal delay={0.05}>
              <p className="pd-section-eyebrow">
                The Project
              </p>

              <h2>Project Overview</h2>

              <p>
                {project.description ||
                  `Explore the architectural details and visual story of ${project.title}.`}
              </p>
            </Reveal>
          </div>

          <motion.div
            className="pd-overview-facts"
            {...groupProps}
          >
            {projectFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <motion.div
                  className="pd-fact"
                  key={fact.label}
                  variants={
                    animate ? fadeUp : undefined
                  }
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                  />

                  <h3>{fact.label}</h3>
                  <p>{fact.value}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* =====================================
          ARCHITECTURAL NARRATIVE
      ===================================== */}

      {narrative.length > 0 && (
        <section className="pd-narrative-section">
          <div className="pd-container">

            <Reveal>
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
            </Reveal>

            <div className="pd-narrative-content">
              {narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* =====================================
          PROJECT CREDITS
      ===================================== */}

      {credits.length > 0 && (
        <section className="pd-credits-section">
          <div className="pd-container">

            <Reveal>
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
            </Reveal>

            <motion.div
              className="pd-credits-grid"
              {...groupProps}
            >
              {credits.map((credit, index) => (
                <motion.div
                  className="pd-credit-item"
                  key={`${credit.role}-${index}`}
                  variants={
                    animate ? fadeUp : undefined
                  }
                >
                  <span className="pd-credit-role">
                    {credit.role}
                  </span>

                  <h3>{credit.name}</h3>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>
      )}

      {/* =====================================
          PROJECT GALLERY
      ===================================== */}

      {gallery.length > 0 && (
        <section className="pd-gallery-section">
          <div className="pd-container">

            <Reveal>
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
            </Reveal>

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

                  <motion.img
                    key={`${project.id}-${activeImage}`}
                    src={gallery[activeImage]}
                    alt={`${project.title} photograph ${
                      activeImage + 1
                    }`}
                    initial={
                      animate
                        ? {
                            opacity: 0,
                            scale: 1.025,
                          }
                        : false
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: animate ? 0.45 : 0,
                      ease,
                    }}
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

                {/* THUMBNAILS */}

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
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View photograph ${
                          index + 1
                        }`}
                        aria-pressed={
                          activeImage === index
                        }
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

              {/* DESIGN HIGHLIGHTS */}

              {highlights.length > 0 && (
                <div className="pd-highlights">

                  <Reveal>
                    <p className="pd-section-eyebrow">
                      Design Elements
                    </p>

                    <h2>Design Highlights</h2>
                  </Reveal>

                  <motion.div
                    className="pd-highlights-list"
                    {...groupProps}
                  >
                    {highlights.map(
                      (highlight, index) => (
                        <motion.div
                          className="pd-highlight"
                          key={`${highlight.title}-${index}`}
                          variants={
                            animate ? fadeUp : undefined
                          }
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
                        </motion.div>
                      )
                    )}
                  </motion.div>

                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* =====================================
          OPTIONAL DESIGN STORY
      ===================================== */}

      {project.story && (
        <section className="pd-story-section">
          <div className="pd-container pd-story-grid">

            <div className="pd-story-content">
              <Reveal>
                <p className="pd-section-eyebrow">
                  The Design Process
                </p>

                <h2>The Design Story</h2>

                <span className="pd-gold-line" />

                <p>{project.story}</p>
              </Reveal>
            </div>

            <div className="pd-story-image">
              <motion.img
                src={
                  project.storyImage ||
                  gallery[1] ||
                  project.coverImage
                }
                alt={`${project.title} design`}
                loading="lazy"
                initial={
                  animate
                    ? { opacity: 0, scale: 1.05 }
                    : false
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: animate ? 1 : 0,
                  ease,
                }}
              />
            </div>

          </div>
        </section>
      )}

      {/* =====================================
          ARCHITECTURAL CONTACT CTA
      ===================================== */}

      <section className="pd-contact-section">
        <div className="pd-container">
          <div className="pd-contact-banner">
            <div className="pd-contact-overlay" />

            <div className="pd-contact-content">

              <Reveal delay={0.05}>
                <p className="pd-contact-eyebrow">
                  Let's Collaborate
                </p>
              </Reveal>

              <Reveal delay={0.15} duration={0.9}>
                <h2>Like This Project?</h2>
              </Reveal>

              <Reveal delay={0.25}>
                <p>
                  Let's create a space that's uniquely
                  yours. Have a vision in mind? We'd
                  love to bring it to life together.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <Link
                  to="/contact"
                  className="pd-yellow-btn"
                >
                  Start a Conversation
                  <ArrowRight size={19} />
                </Link>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          BACK TO ALL PROJECTS
      ===================================== */}

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
