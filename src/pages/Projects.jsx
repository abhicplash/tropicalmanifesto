import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

import "./Projects.css";

/* =====================================
   PROJECT DATA
   Backend-ready structure
===================================== */

export const projectsData = [
  {
    id: "summer-house",
    title: "Summer House",
    location: "Wayanad",
    state: "Kerala",
    category: "Architecture",
    image: "/images/project-01.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "erc",
    title: "ERC",
    location: "Colvale",
    state: "Goa",
    category: "Architecture",
    image: "/images/project-02.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "koru",
    title: "Koru",
    location: "Virajpet",
    state: "Karnataka",
    category: "Architecture",
    image: "/images/project-03.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },

  {
    id: "koru",
    title: "Koru",
    location: "Virajpet",
    state: "Karnataka",
    category: "Architecture",
    image: "/images/project-04.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "koru",
    title: "Koru",
    location: "Virajpet",
    state: "Karnataka",
    category: "Architecture",
    image: "/images/project-05.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "koru",
    title: "Koru",
    location: "Virajpet",
    state: "Karnataka",
    category: "Architecture",
    image: "/images/project-06.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "koru",
    title: "Koru",
    location: "Virajpet",
    state: "Karnataka",
    category: "Architecture",
    image: "/images/project-07.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "Tree-Hugger-Villa",
    title: "Tree Hugger Villa",
    location: "Parra",
    state: "Goa",
    category: "Architecture",
    image: "/images/project-08.jpg",
    description: "",
    year: "",
    area: "",
    gallery: [],
    featured: true,
    status: "published",
    order: 3,
  },
];

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
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
        />

        <span className="projects-card-number">
          {number} / {totalNumber}
        </span>

        <span className="projects-card-view">
          <ArrowUpRight size={24} strokeWidth={1.6} />
        </span>
      </div>

      <div className="projects-card-info">
        <div className="projects-card-text">
          <p className="projects-card-category">{project.category}</p>

          <h3>{project.title}</h3>

          <div className="projects-card-location">
            <MapPin size={14} strokeWidth={1.7} />

            <span>
              {[project.location, project.state].filter(Boolean).join(", ")}
            </span>
          </div>
        </div>

        <span className="projects-card-arrow">
          <ArrowRight size={19} strokeWidth={1.7} />
        </span>
      </div>
    </Link>
  );
}

/* =====================================
   PROJECTS PAGE
===================================== */

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Later, this list can come from the backend.
  const publishedProjects = useMemo(() => {
    return projectsData
      .filter((project) => project.status === "published")
      .sort((a, b) => a.order - b.order);
  }, []);

  // Generate location filters automatically.
  const filters = useMemo(() => {
    const states = [
      ...new Set(
        publishedProjects.map((project) => project.state).filter(Boolean),
      ),
    ];

    return ["All Projects", ...states];
  }, [publishedProjects]);

  // Filter project collection.
  const filteredProjects = publishedProjects.filter(
    (project) =>
      activeFilter === "All Projects" || project.state === activeFilter,
  );

  const projectCount = publishedProjects.length;

  const formattedCount = String(projectCount).padStart(2, "0");

  const featuredProject =
    publishedProjects.find((project) => project.featured) ||
    publishedProjects[0];

  return (
    <main className="projects-page">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="projects-hero">
        <div className="projects-container">
          <div className="projects-hero-top">
            <p className="projects-eyebrow">
              Tropical Manifesto
              <span className="projects-label-line" />
              Selected Works
            </p>

            <span className="projects-hero-index">
              Architecture / Interiors / Landscapes
            </span>
          </div>

          <div className="projects-hero-content">
            <div>
              <h1>
                Spaces That
                <br />
                <em>Tell Stories.</em>
              </h1>
            </div>

            <p className="projects-hero-description">
              An exploration of architecture shaped by context, crafted with
              intention, and rooted in the relationship between people, nature,
              and place.
            </p>
          </div>

          <div className="projects-hero-image">
            <img
              src={featuredProject?.image || "/images/home-hero.jpg"}
              alt="Tropical Manifesto selected architectural work"
              fetchPriority="high"
            />

            <div className="projects-hero-image-overlay" />

            <div className="projects-hero-image-caption">
              <span>SELECTED WORKS</span>

              <span>{formattedCount} PROJECTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          PROJECT COLLECTION
      ===================================== */}

      <section className="projects-list-section">
        <div className="projects-container">
          <div className="projects-section-top">
            <div>
              <p className="projects-eyebrow">Our Portfolio</p>

              <h2>
                A Curated Collection
                <br />
                of Our Work
              </h2>
            </div>

            <p className="projects-section-description">
              Every project is a thoughtful response to its surroundings,
              balancing design, functionality, and a sense of belonging.
            </p>
          </div>

          {/* LOCATION FILTERS */}

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
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <span className="projects-results-count">
              Showing {String(filteredProjects.length).padStart(2, "0")}
              {" / "}
              {formattedCount} Projects
            </span>
          </div>

          {/* PROJECT GRID */}

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  total={filteredProjects.length}
                />
              ))}
            </div>
          ) : (
            <div className="projects-empty">
              <h3>No Projects Found</h3>

              <p>There are currently no published projects in this location.</p>

              <button
                type="button"
                onClick={() => setActiveFilter("All Projects")}
              >
                View All Projects
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          DESIGN PHILOSOPHY
      ===================================== */}

      <section className="projects-statement">
        <div className="projects-statement-inner">
          <p className="projects-eyebrow">Our Philosophy</p>

          <h2>
            Architecture is not just
            <br />
            about building spaces.
            <br />
            <em>It's about creating experiences.</em>
          </h2>

          <span className="projects-statement-line" />
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}

      <section className="projects-contact">
        <div className="projects-contact-banner">
          <div className="projects-contact-content">
            <p className="projects-eyebrow">Let's Collaborate</p>

            <h2>
              Have a Vision?
              <br />
              Let's Shape It.
            </h2>

            <p>
              Every remarkable project begins with a conversation. Let's create
              a space that truly belongs.
            </p>

            <Link to="/contact" className="projects-contact-button">
              Start a Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
