
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

import "./Home.css";

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

const projects = [
  {
    id: 1,
    title: "SUMMER HOUSE",
    category: "Wayanad",
    location: "Kerala",
    image: "/images/project-01.jpg",
  },
  {
    id: 2,
    title: "ERC",
    category: "COLVALE",
    location: "GOA",
    image: "/images/project-02.jpg",
  },
  {
    id: 3,
    title: "KORU",
    category: "VIRAJPET",
    location: "KARNATAKA",
    image: "/images/project-03.jpg",
  },
];

const stats = [
  { number: "200+", label: "Projects Completed" },
  { number: "15+", label: "Years of Practice" },
  { number: "12", label: "Awards & Recognitions" },
  { number: "100%", label: "Client Satisfaction" },
];

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

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-hero-bg" />

        <div className="home-hero-content">
          <p className="home-eyebrow">
            Architecture
            <span>/</span>
            Interiors
            <span>/</span>
            Landscapes
          </p>

          <h1>
            Spaces
            <br />
            Rooted in
            <br />
            the Tropics
          </h1>

          <p className="home-hero-description">
            We design timeless, climate-responsive
            spaces that harmonize architecture,
            nature and people.
          </p>

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
        </div>

        <div className="home-hero-indicator">
          <span className="home-indicator-line" />
          <span>01 / 01</span>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="home-services" id="services">
        <div className="home-services-container">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="home-service" key={service.title}>
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
            );
          })}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="home-about">
        <div className="home-about-image">
          <img
            src="/images/home-about.jpg"
            alt="Modern tropical architecture with natural materials"
            loading="lazy"
          />
        </div>

        <div className="home-about-content">
          <div className="home-about-text">
            <p className="home-section-label">
              About Tropical Manifesto
            </p>

            <h2>
              A Design Studio
              <br />
              Shaped by Place
            </h2>

            <p className="home-section-description">
              Tropical Manifesto is an architecture and design
              studio that creates contextual, sustainable and
              human-centric spaces across residential,
              commercial and hospitality sectors.
            </p>

            <Link to="/about" className="home-yellow-btn home-small-btn">
              Know More
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-about-highlights">
            <div>
              <strong>Nature</strong>
              <span>Our Inspiration</span>
            </div>
            <div>
              <strong>People</strong>
              <span>Our Purpose</span>
            </div>
            <div>
              <strong>Place</strong>
              <span>Our Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="home-projects">
        <div className="home-section-container">

          <div className="home-section-heading">
            <div>
              <p className="home-section-label">
                Featured Projects
              </p>

              <h2>
                A Curated Selection
                <br />
                of Our Work
              </h2>
            </div>

            <Link to="/projects" className="home-outline-btn">
              View All Projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-project-grid">
            {projects.map((project) => (
              <Link
                to="/projects"
                className="home-project-card"
                key={project.id}
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
            ))}
          </div>

        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="home-stats">
        <div className="home-stats-container">
          {stats.map((stat) => (
            <div className="home-stat" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="home-approach" id="our-approach">
        <div className="home-section-container">

          <div className="home-approach-grid">
            <div className="home-approach-heading">
              <p className="home-section-label">
                Our Approach
              </p>

              <h2>
                Designing
                <br />
                with Purpose
              </h2>
            </div>

            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="home-approach-item"
                  key={item.title}
                >
                  <Icon size={31} strokeWidth={1.35} />

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="home-contact-section">
        <div className="home-contact-banner">
          <div className="home-contact-overlay" />

          <div className="home-contact-content">
            <h2>
              Let's Build
              <br />
              Something Meaningful
            </h2>

            <p>
              Have a project in mind? We'd love to hear
              from you and explore how we can bring
              it to life together.
            </p>

            <Link to="/contact" className="home-yellow-btn">
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
