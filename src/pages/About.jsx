
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Leaf,
  Users,
} from "lucide-react";

import { team } from "../data/team";

/* =========================================
   ANIMATION COMPONENTS
========================================= */

import Reveal from "../components/animations/Reveal";

import {
  Stagger,
  StaggerItem,
} from "../components/animations/Stagger";

import ImageReveal from "../components/animations/ImageReveal";

import "./About.css";

/* =========================================
   TEAM CARD
========================================= */

function TeamCard({ member }) {
  return (
    <article className="about-team-card">

      <div className="about-team-image">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
      </div>

      <div className="about-team-info">

        <div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>

        <span className="about-team-arrow">
          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
          />
        </span>

      </div>

    </article>
  );
}

/* =========================================
   STUDIO VALUES DATA
========================================= */

const studioValues = [
  {
    title: "Contextual",
    description: "Architecture rooted in place.",
    icon: Leaf,
  },
  {
    title: "Purposeful",
    description: "Every detail designed with intention.",
    icon: Target,
  },
  {
    title: "Human-Centric",
    description: "Spaces shaped around everyday life.",
    icon: Users,
  },
  {
    title: "Enduring",
    description: "Thoughtful design built to last.",
    icon: Eye,
  },
];

/* =========================================
   ABOUT PAGE
========================================= */

function About() {
  return (
    <main className="about-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="about-hero">

        <img
          className="about-hero-image"
          src="/images/project-01.jpg"
          alt="Tropical architecture integrated with nature"
          fetchPriority="high"
        />

        <div className="about-hero-overlay" />

        <div className="about-container about-hero-inner">

          <div className="about-hero-content">

            <Reveal delay={0.05} duration={0.65}>
              <p className="about-eyebrow about-hero-eyebrow">
                About Us
                <span />
              </p>
            </Reveal>

            <Reveal delay={0.15} duration={0.9}>
              <h1>
                A Design Studio
                <br />
                <em>for the Tropics</em>
              </h1>
            </Reveal>

            <Reveal delay={0.3} duration={0.8}>
              <p className="about-hero-description">
                We are Tropical Manifesto — an
                architecture and design studio creating
                contextual, sustainable and human-centric
                spaces for a better everyday life.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <a
                href="#our-story"
                className="about-primary-btn"
              >
                Our Story
                <ArrowRight size={18} />
              </a>
            </Reveal>

          </div>

        </div>

      </section>

      {/* =====================================
          STUDIO INTRODUCTION
      ===================================== */}

      <section
        className="about-intro"
        id="our-story"
      >

        <div className="about-container">

          <div className="about-intro-grid">

            {/* INTRO CONTENT */}

            <div className="about-intro-content">

              <Reveal delay={0.05}>
                <p className="about-eyebrow">
                  Introduction
                  <span />
                </p>
              </Reveal>

              <Reveal delay={0.15} duration={0.85}>
                <h2>
                  Rooted in Place,
                  <br />
                  <em>Designed for People</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Tropical Manifesto brings together
                  architecture, interiors and landscapes
                  to create spaces that belong to their
                  environment — climate-responsive,
                  culturally relevant and enduring.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  Our work is driven by a deep understanding
                  of place, people and purpose, resulting
                  in spaces that are beautiful, functional
                  and lasting.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <a
                  href="#mission-vision"
                  className="about-outline-btn"
                >
                  Our Philosophy
                  <ArrowRight size={17} />
                </a>
              </Reveal>

            </div>

            {/* ARCHITECTURAL IMAGE */}

            <div className="about-intro-image">

              <ImageReveal
                src="/images/about-intro.jpg"
                alt="Architectural interior opening into tropical greenery"
              />

              <div className="about-image-label">
                Architecture / Nature / People
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          STUDIO VALUES
      ===================================== */}

      <section className="about-values">

        <div className="about-container">

          <Stagger className="about-values-grid">

            {studioValues.map((value) => {
              const Icon = value.icon;

              return (
                <StaggerItem key={value.title}>

                  <div className="about-value">

                    <Icon strokeWidth={1.3} />

                    <h3>{value.title}</h3>
                    <p>{value.description}</p>

                  </div>

                </StaggerItem>
              );
            })}

          </Stagger>

        </div>

      </section>

      {/* =====================================
          OUR TEAM
      ===================================== */}

      <section
        className="about-team-section"
        id="our-team"
      >

        <div className="about-container">

          {/* TEAM HEADING */}

          <div className="about-team-heading">

            <Reveal delay={0.05}>
              <div>
                <p className="about-eyebrow">
                  Our Team
                  <span />
                </p>

                <h2>
                  The Minds Behind
                  <br />
                  <em>the Spaces</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="about-team-heading-right">

                <p>
                  A multidisciplinary team of architects,
                  designers, planners and thinkers,
                  united by a shared passion for
                  meaningful and sustainable design.
                </p>

                <span className="about-team-count">
                  {String(team.length).padStart(2, "0")}
                  {" "}TEAM MEMBERS
                </span>

              </div>
            </Reveal>

          </div>

          {/* STAGGERED TEAM GRID */}

          <Stagger
            className="about-team-grid"
            delay={0.05}
          >

            {team.map((member) => (
              <StaggerItem key={member.id}>

                <TeamCard member={member} />

              </StaggerItem>
            ))}

          </Stagger>

        </div>

      </section>

      {/* =====================================
          MISSION & VISION
      ===================================== */}

      <section
        className="about-purpose"
        id="mission-vision"
      >

        {/* MISSION IMAGE */}

        <div className="about-purpose-image">

          <ImageReveal
            src="/images/about-mission.jpg"
            alt="Tropical courtyard with natural landscape"
          />

        </div>

        {/* MISSION CONTENT */}

        <div className="about-purpose-content">

          <Reveal delay={0.05}>
            <p className="about-eyebrow">
              Our Purpose
              <span />
            </p>
          </Reveal>

          <Reveal delay={0.15} duration={0.85}>
            <h2>Mission & Vision</h2>
          </Reveal>

          <Stagger
            className="about-purpose-grid"
            delay={0.15}
          >

            <StaggerItem>

              <article className="about-purpose-card">

                <div className="about-purpose-icon">
                  <Target
                    size={29}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To craft sustainable, aesthetically
                  captivating spaces that seamlessly
                  blend modern design with tropical
                  influences, fostering harmony between
                  architecture and nature.
                </p>

              </article>

            </StaggerItem>

            <StaggerItem>

              <article className="about-purpose-card">

                <div className="about-purpose-icon">
                  <Eye
                    size={29}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To be a leader in holistic,
                  eco-conscious architecture, shaping
                  timeless spaces that reflect the
                  natural beauty of tropical landscapes.
                </p>

              </article>

            </StaggerItem>

          </Stagger>

        </div>

      </section>

      {/* =====================================
          ARCHITECTURAL CONTACT CTA
      ===================================== */}

      <section className="about-cta-section">

        <div className="about-container">

          <div className="about-cta-banner">

            <div className="about-cta-overlay" />

            <div className="about-cta-content">

              <Reveal delay={0.05} duration={0.9}>
                <h2>
                  Let's Build
                  <br />
                  Something
                  <br />
                  Meaningful
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Have a project in mind? We'd love
                  to hear from you and explore how
                  we can bring it to life together.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <Link
                  to="/contact"
                  className="about-cta-button"
                >
                  Start a Project
                  <ArrowRight
                    size={19}
                    strokeWidth={1.8}
                  />
                </Link>
              </Reveal>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
