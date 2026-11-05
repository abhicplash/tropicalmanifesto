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
import "./About.css";

/* =========================================
   TEAM CARD
========================================= */

function TeamCard({ member }) {
  return (
    <article className="about-team-card">
      <div className="about-team-image">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>

      <div className="about-team-info">
        <div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>

        <span className="about-team-arrow">
          <ArrowUpRight size={18} strokeWidth={1.6} />
        </span>
      </div>
    </article>
  );
}

/* =========================================
   ABOUT PAGE
========================================= */

function About() {
  return (
    <main className="about-page">
      {/* =====================================
          HERO
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
            <p className="about-eyebrow about-hero-eyebrow">
              About Us
              <span />
            </p>

            <h1>
              A Design Studio
              <br />
              <em>for the Tropics</em>
            </h1>

            <p className="about-hero-description">
              We are Tropical Manifesto — an architecture and design studio
              creating contextual, sustainable and human-centric spaces for a
              better everyday life.
            </p>

            <a href="#our-story" className="about-primary-btn">
              Our Story
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          STUDIO INTRODUCTION
      ===================================== */}

      <section className="about-intro" id="our-story">
        <div className="about-container">
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <p className="about-eyebrow">
                Introduction
                <span />
              </p>

              <h2>
                Rooted in Place,
                <br />
                <em>Designed for People</em>
              </h2>

              <p>
                Tropical Manifesto brings together architecture, interiors and
                landscapes to create spaces that belong to their environment —
                climate-responsive, culturally relevant and enduring.
              </p>

              <p>
                Our work is driven by a deep understanding of place, people and
                purpose, resulting in spaces that are beautiful, functional and
                lasting.
              </p>

              <a href="#mission-vision" className="about-outline-btn">
                Our Philosophy
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="about-intro-image">
              <img
                src="/images/about-intro.jpg"
                alt="Architectural interior opening into tropical greenery"
                loading="lazy"
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
        <div className="about-container about-values-grid">
          <div className="about-value">
            <Leaf strokeWidth={1.3} />
            <h3>Contextual</h3>
            <p>Architecture rooted in place.</p>
          </div>

          <div className="about-value">
            <Target strokeWidth={1.3} />
            <h3>Purposeful</h3>
            <p>Every detail designed with intention.</p>
          </div>

          <div className="about-value">
            <Users strokeWidth={1.3} />
            <h3>Human-Centric</h3>
            <p>Spaces shaped around everyday life.</p>
          </div>

          <div className="about-value">
            <Eye strokeWidth={1.3} />
            <h3>Enduring</h3>
            <p>Thoughtful design built to last.</p>
          </div>
        </div>
      </section>

      {/* =====================================
          OUR TEAM
      ===================================== */}

      <section className="about-team-section" id="our-team">
        <div className="about-container">
          <div className="about-team-heading">
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

            <div className="about-team-heading-right">
              <p>
                A multidisciplinary team of architects, designers, planners and
                thinkers, united by a shared passion for meaningful and
                sustainable design.
              </p>

              <span className="about-team-count">
                {String(team.length).padStart(2, "0")} TEAM MEMBERS
              </span>
            </div>
          </div>

          <div className="about-team-grid">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          MISSION & VISION
      ===================================== */}

      <section className="about-purpose" id="mission-vision">
        <div className="about-purpose-image">
          <img
            src="/images/about-mission.jpg"
            alt="Tropical courtyard with natural landscape"
            loading="lazy"
          />
        </div>

        <div className="about-purpose-content">
          <p className="about-eyebrow">
            Our Purpose
            <span />
          </p>

          <h2>Mission & Vision</h2>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Target size={29} strokeWidth={1.5} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To craft sustainable, aesthetically captivating spaces that
                seamlessly blend modern design with tropical influences,
                fostering harmony between architecture and nature.
              </p>
            </article>

            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Eye size={29} strokeWidth={1.5} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To be a leader in holistic, eco-conscious architecture, shaping
                timeless spaces that reflect the natural beauty of tropical
                landscapes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}

      {/* =====================================
    ABOUT — ARCHITECTURAL CTA
===================================== */}

      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-banner">
            <div className="about-cta-overlay" />

            <div className="about-cta-content">
              <h2>
                Let's Build
                <br />
                Something
                <br />
                Meaningful
              </h2>

              <p>
                Have a project in mind? We'd love to hear from you and explore
                how we can bring it to life together.
              </p>

              <Link to="/contact" className="about-cta-button">
                Start a Project
                <ArrowRight size={19} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
