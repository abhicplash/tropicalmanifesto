
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Leaf,
  UsersRound,
  BookOpen,
  Sun,
  Play,
  ChevronDown,
} from "lucide-react";

import { careers, careerEmail } from "../data/careers";

import Reveal from "../components/animations/Reveal";
import {
  Stagger,
  StaggerItem,
} from "../components/animations/Stagger";
import ImageReveal from "../components/animations/ImageReveal";

import "./Career.css";

/* =========================================
   CAREER BENEFITS
========================================= */

const benefits = [
  {
    icon: Leaf,
    title: "Purposeful Work",
    description:
      "Design spaces that create real impact.",
  },
  {
    icon: UsersRound,
    title: "Collaborative Culture",
    description:
      "Learn, share and grow together.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Work on diverse projects with real-world depth.",
  },
  {
    icon: Sun,
    title: "Work–Life Balance",
    description:
      "A supportive and people-first environment.",
  },
];

/* =========================================
   APPLICATION EMAIL
========================================= */

function getApplicationLink(job) {
  const subject = encodeURIComponent(
    job
      ? `Job Application — ${job.title}`
      : "General Career Application — Tropical Manifesto"
  );

  const body = encodeURIComponent(
    job
      ? `Hello Tropical Manifesto Team,

I would like to apply for the ${job.title} position.

Name:
Phone:
Portfolio Link:
Experience:

I will attach my CV to this email.

Regards,`
      : `Hello Tropical Manifesto Team,

I would like to share my profile for future career opportunities.

Name:
Preferred Role:
Phone:
Portfolio Link:
Experience:

I will attach my CV to this email.

Regards,`
  );

  return `mailto:${careerEmail}?subject=${subject}&body=${body}`;
}

/* =========================================
   JOB CARD
========================================= */

function CareerCard({ job }) {
  return (
    <article className="career-job-card">

      <div className="career-job-primary">
        <h3>{job.title}</h3>

        <div className="career-job-meta">
          <span>
            <BriefcaseBusiness size={15} />
            {job.type}
          </span>

          <span>
            <MapPin size={15} />
            {job.location}
          </span>
        </div>
      </div>

      <div className="career-job-description">
        <p>{job.description}</p>
      </div>

      <a
        className="career-apply-btn"
        href={getApplicationLink(job)}
        aria-label={`Apply for ${job.title}`}
      >
        Apply Now
        <ArrowRight size={17} strokeWidth={1.7} />
      </a>

    </article>
  );
}

/* =========================================
   CAREER PAGE
========================================= */

function Career() {
  const [activeDepartment, setActiveDepartment] =
    useState("All Departments");

  /* =====================================
     PUBLISHED POSITIONS
  ===================================== */

  const publishedCareers = careers.filter(
    (job) => job.published === true
  );

  const departments = [
    "All Departments",
    ...new Set(
      publishedCareers
        .map((job) => job.department)
        .filter(Boolean)
    ),
  ];

  const filteredCareers = publishedCareers.filter(
    (job) =>
      activeDepartment === "All Departments" ||
      job.department === activeDepartment
  );

  return (
    <main className="career-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="career-hero">

        <div className="career-hero-photo" />
        <div className="career-hero-gradient" />

        <div className="career-container career-hero-inner">

          <div className="career-hero-content">

            <Reveal delay={0.05}>
              <p className="career-eyebrow">
                Careers at Tropical Manifesto
                <span />
              </p>
            </Reveal>

            <Reveal delay={0.15} duration={0.9}>
              <h1>
                Build Spaces.
                <br />
                Build Your Career.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="career-hero-description">
                Be part of a multidisciplinary studio
                that designs meaningful, sustainable
                and people-centric spaces across
                residential, commercial and
                hospitality sectors.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <a
                href="#open-positions"
                className="career-primary-btn"
              >
                View Open Positions
                <ArrowRight
                  size={18}
                  strokeWidth={1.7}
                />
              </a>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================
          BENEFITS
      ===================================== */}

      <section className="career-benefits-section">
        <div className="career-container">

          <Stagger className="career-benefits-grid">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <StaggerItem key={benefit.title}>
                  <article className="career-benefit">

                    <div className="career-benefit-icon">
                      <Icon
                        size={36}
                        strokeWidth={1.35}
                      />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>

                  </article>
                </StaggerItem>
              );
            })}

          </Stagger>

        </div>
      </section>

      {/* =====================================
          STUDIO CULTURE
      ===================================== */}

      <section className="career-culture">
        <div className="career-container">

          <div className="career-culture-grid">

            {/* CULTURE IMAGE */}

            <div className="career-culture-image">

              <ImageReveal
                src="/images/career-culture.jpg"
                alt="Contemporary tropical architecture studio workspace"
              />

            </div>

            {/* CULTURE CONTENT */}

            <div className="career-culture-content">

              <Reveal delay={0.05}>
                <p className="career-eyebrow">
                  Our Culture
                  <span />
                </p>
              </Reveal>

              <Reveal delay={0.15} duration={0.85}>
                <h2>
                  A Studio That
                  <br />
                  Grows Together
                </h2>
              </Reveal>

              <Reveal delay={0.25}>
                <p>
                  We believe great design comes from
                  curious minds, open collaboration
                  and a shared commitment to doing
                  meaningful work.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <Link
                  className="career-culture-link"
                  to="/about#our-team"
                >
                  <span className="career-play-icon">
                    <Play
                      size={17}
                      fill="currentColor"
                    />
                  </span>

                  Meet the Team

                  <ArrowUpRight size={17} />
                </Link>
              </Reveal>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          OPEN POSITIONS
      ===================================== */}

      <section
        id="open-positions"
        className="career-positions"
      >

        <div className="career-container">

          {/* HEADING & FILTER */}

          <div className="career-positions-header">

            <Reveal delay={0.05}>
              <div>
                <p className="career-eyebrow">
                  Open Positions
                  <span />
                </p>

                <h2>Join Our Team</h2>
              </div>
            </Reveal>

            {publishedCareers.length > 0 && (
              <Reveal delay={0.15}>
                <div className="career-department-select">

                  <select
                    aria-label="Filter by department"
                    value={activeDepartment}
                    onChange={(event) =>
                      setActiveDepartment(
                        event.target.value
                      )
                    }
                  >
                    {departments.map((department) => (
                      <option
                        key={department}
                        value={department}
                      >
                        {department}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={17} />

                </div>
              </Reveal>
            )}

          </div>

          {/* ANIMATED JOB LIST */}

          {filteredCareers.length > 0 ? (

            <Stagger
              key={activeDepartment}
              className="career-job-list"
              delay={0.05}
            >

              {filteredCareers.map((job) => (
                <StaggerItem key={job.id}>
                  <CareerCard job={job} />
                </StaggerItem>
              ))}

            </Stagger>

          ) : (

            <Reveal>
              <div className="career-empty">

                <span className="career-empty-icon">
                  <BriefcaseBusiness
                    size={30}
                    strokeWidth={1.3}
                  />
                </span>

                <h3>
                  {publishedCareers.length === 0
                    ? "No Open Positions at the Moment"
                    : "No Positions in This Department"}
                </h3>

                <p>
                  {publishedCareers.length === 0
                    ? "We don't have any confirmed vacancies listed right now, but we're always interested in hearing from creative and passionate people."
                    : "Explore opportunities in another department or send us your profile for future consideration."}
                </p>

                <a
                  href={getApplicationLink()}
                  className="career-empty-link"
                >
                  Send Your Profile
                  <ArrowRight size={17} />
                </a>

              </div>
            </Reveal>

          )}

        </div>
      </section>

      {/* =====================================
          GENERAL APPLICATION CTA
      ===================================== */}

      <section className="career-profile-section">
        <div className="career-container">

          <div className="career-profile-banner">
            <div className="career-profile-overlay" />

            <div className="career-profile-content">

              <Reveal delay={0.05}>
                <p className="career-eyebrow">
                  Don't See a Match?
                  <span />
                </p>
              </Reveal>

              <Reveal delay={0.15} duration={0.9}>
                <h2>Send Us Your Profile</h2>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="career-profile-description">
                  We're always looking for talented
                  and passionate individuals.
                  Share your resume with us and we'll
                  reach out when a suitable
                  opportunity opens.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <a
                  href={getApplicationLink()}
                  className="career-primary-btn"
                >
                  Submit Your CV
                  <ArrowRight size={18} />
                </a>
              </Reveal>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Career;
