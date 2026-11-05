import { Link } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  Armchair,
  Sprout,
  Layers3,
  Leaf,
  Infinity,
  Grid2X2,
  Box,
} from "lucide-react";

/* =========================================
   ANIMATION COMPONENTS
========================================= */

import Reveal from "../components/animations/Reveal";

import { Stagger, StaggerItem } from "../components/animations/Stagger";

import ImageReveal from "../components/animations/ImageReveal";

import "./Home.css";

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    title: "Architecture",
    description: "Thoughtful, functional and timeless design.",
    icon: Building2,
  },
  {
    title: "Interiors",
    description: "Refined spaces that feel personal.",
    icon: Armchair,
  },
  {
    title: "Landscapes",
    description: "Nature-led environments that rejuvenate.",
    icon: Sprout,
  },
  {
    title: "Consultancy",
    description: "End-to-end design and project guidance.",
    icon: Layers3,
  },
];

/* =========================================
   FEATURED PROJECTS
========================================= */

const projects = [
  {
    id: "summer-house",
    title: "SUMMER HOUSE",
    category: "Wayanad",
    location: "Kerala",
    image: "/images/project-01.jpg",
  },
  {
    id: "erc",
    title: "ERC",
    category: "COLVALE",
    location: "GOA",
    image: "/images/project-02.jpg",
  },
  {
    id: "koru",
    title: "KORU",
    category: "VIRAJPET",
    location: "KARNATAKA",
    image: "/images/project-03.jpg",
  },
];

/* =========================================
   STATISTICS DATA
========================================= */

const stats = [
  {
    number: "200+",
    label: "Projects Completed",
  },
  {
    number: "15+",
    label: "Years of Practice",
  },
  {
    number: "12",
    label: "Awards & Recognitions",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

/* =========================================
   DESIGN APPROACH
========================================= */

const approaches = [
  {
    title: "People Centric",
    description: "Spaces that enhance everyday life.",
    icon: Leaf,
  },
  {
    title: "Sustainable",
    description: "Responsible design for a lasting impact.",
    icon: Infinity,
  },
  {
    title: "Contextual",
    description: "Rooted in climate, culture and place.",
    icon: Grid2X2,
  },
  {
    title: "Timeless",
    description: "Designs that age gracefully.",
    icon: Box,
  },
];

/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <main className="home-page">
      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="home-hero">
        <div className="home-hero-bg" />

        <div className="home-hero-content">
          {/* EYEBROW */}

          <Reveal delay={0.05} duration={0.65}>
            <p className="home-eyebrow">
              Architecture
              <span>/</span>
              Interiors
              <span>/</span>
              Landscapes
            </p>
          </Reveal>

          {/* HERO TITLE */}

          <Reveal delay={0.15} duration={0.9}>
            <h1>
              Spaces
              <br />
              Rooted in
              <br />
              the Tropics
            </h1>
          </Reveal>

          {/* DESCRIPTION */}

          <Reveal delay={0.32} duration={0.8}>
            <p className="home-hero-description">
              We design timeless, climate-responsive spaces that harmonize
              architecture, nature and people.
            </p>
          </Reveal>

          {/* HERO BUTTONS */}

          <Reveal delay={0.48} duration={0.8}>
            <div className="home-hero-actions">
              <Link to="/projects" className="home-yellow-btn">
                Explore Our Projects
                <ArrowRight size={18} />
              </Link>

              <a href="#our-approach" className="home-text-btn">
                <span className="home-play-icon">
                  <ArrowRight size={17} />
                </span>
                Our Approach
              </a>
            </div>
          </Reveal>
        </div>

        {/* HERO INDICATOR */}

        <div className="home-hero-indicator">
          <span className="home-indicator-line" />
          <span>01 / 01</span>
        </div>
      </section>

      {/* =====================================
          SERVICES SECTION
      ===================================== */}

      <section className="home-services" id="services">
        <Stagger className="home-services-container">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <div className="home-service">
                  <Icon
                    size={35}
                    strokeWidth={1.35}
                    className="home-service-icon"
                  />

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* =====================================
          ABOUT SECTION
      ===================================== */}

      <section className="home-about">
        {/* ARCHITECTURAL IMAGE */}

        <div className="home-about-image">
          <ImageReveal
            src="/images/home-about.jpg"
            alt="Modern tropical architecture with natural materials"
          />
        </div>

        {/* ABOUT CONTENT */}

        <div className="home-about-content">
          <div className="home-about-text">
            <Reveal delay={0.05}>
              <p className="home-section-label">About Tropical Manifesto</p>
            </Reveal>

            <Reveal delay={0.12} duration={0.85}>
              <h2>
                A Design Studio
                <br />
                Shaped by Place
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="home-section-description">
                Tropical Manifesto is an architecture and design studio that
                creates contextual, sustainable and human-centric spaces across
                residential, commercial and hospitality sectors.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link to="/about" className="home-yellow-btn home-small-btn">
                Know More
                <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>

          {/* ABOUT HIGHLIGHTS */}

          <Stagger className="home-about-highlights" delay={0.15}>
            <StaggerItem>
              <div>
                <strong>Nature</strong>
                <span>Our Inspiration</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <strong>People</strong>
                <span>Our Purpose</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <strong>Place</strong>
                <span>Our Foundation</span>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* =====================================
          FEATURED PROJECTS
      ===================================== */}

      <section className="home-projects">
        <div className="home-section-container">
          {/* SECTION HEADING */}

          <div className="home-section-heading">
            <Reveal direction="up">
              <div>
                <p className="home-section-label">Featured Projects</p>

                <h2>
                  A Curated Selection
                  <br />
                  of Our Work
                </h2>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <Link to="/projects" className="home-outline-btn">
                View All Projects
                <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>

          {/* PROJECT GRID */}

          <Stagger className="home-project-grid">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  className="home-project-card"
                >
                  <div className="home-project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="home-project-info">
                    <div>
                      <h3>{project.title}</h3>

                      <p>
                        {project.category}
                        <span>/</span>
                        {project.location}
                      </p>
                    </div>

                    <span className="home-project-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* =====================================
          STATISTICS SECTION
      ===================================== */}

      <section className="home-stats">
        <Stagger className="home-stats-container">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="home-stat">
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* =====================================
          OUR APPROACH
      ===================================== */}

      <section className="home-approach" id="our-approach">
        <div className="home-section-container">
          <Stagger className="home-approach-grid">
            {/* APPROACH HEADING */}

            <StaggerItem>
              <div className="home-approach-heading">
                <p className="home-section-label">Our Approach</p>

                <h2>
                  Designing
                  <br />
                  with Purpose
                </h2>
              </div>
            </StaggerItem>

            {/* APPROACH ITEMS */}

            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title}>
                  <div className="home-approach-item">
                    <Icon size={31} strokeWidth={1.35} />

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}

      <section className="home-contact-section">
        <div className="home-contact-banner">
          <div className="home-contact-overlay" />

          <div className="home-contact-content">
            <Reveal direction="up" duration={0.9}>
              <h2>
                Let's Build
                <br />
                Something Meaningful
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Have a project in mind? We'd love to hear from you and explore
                how we can bring it to life together.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <Link to="/contact" className="home-yellow-btn">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
