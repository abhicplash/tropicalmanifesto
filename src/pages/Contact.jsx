
import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Building2,
} from "lucide-react";

import Reveal from "../components/animations/Reveal";
import ImageReveal from "../components/animations/ImageReveal";

import "./Contact.css";

/* =========================================
   ANIMATION CONFIGURATION
========================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* =========================================
   CONTACT INFORMATION
========================================= */

const contactDetails = {
  phone: "+91 73561 47020",
  email: "hello@tropicalmanifesto.com",
};

const offices = [
  {
    id: 1,
    label: "Company Office",
    city: "Goa",
    address:
      "6th Floor, Mapusa Heights, Near Civil Court, Mapusa, Goa",
    phone: "+91 73561 47020",
    mapQuery:
      "Mapusa Heights Near Civil Court Mapusa Goa",
  },
  {
    id: 2,
    label: "Branch Office",
    city: "Kozhikode",
    address:
      "2nd Floor, Lakshmi Square, Pachakkil, Chevarambalam Post, Kozhikode, Kerala 673017",
    phone: "+91 73561 47020",
    mapQuery:
      "Lakshmi Square Chevarambalam Kozhikode Kerala 673017",
  },
];

/* =========================================
   OFFICE CARD COMPONENT
========================================= */

function OfficeCard({ office }) {
  const mapSearchUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      office.mapQuery
    )}`;

  const mapEmbedUrl =
    `https://maps.google.com/maps?q=${encodeURIComponent(
      office.mapQuery
    )}&output=embed`;

  return (
    <article className="contact-office-card">

      <div className="contact-office-top">

        <div className="contact-office-heading">

          <span className="contact-office-icon">
            <Building2
              size={24}
              strokeWidth={1.5}
            />
          </span>

          <div>
            <p className="contact-office-label">
              {office.label}
            </p>

            <h3>{office.city}</h3>
          </div>

        </div>

        <span className="contact-office-number">
          0{office.id}
        </span>

      </div>

      <div className="contact-office-details">

        <div className="contact-office-detail">
          <MapPin
            size={19}
            strokeWidth={1.6}
          />

          <p>{office.address}</p>
        </div>

        <div className="contact-office-detail">
          <Phone
            size={19}
            strokeWidth={1.6}
          />

          <a
            href={`tel:${office.phone.replace(/\s/g, "")}`}
          >
            {office.phone}
          </a>
        </div>

      </div>

      <div className="contact-office-map">

        <iframe
          title={`Tropical Manifesto ${office.city} Office Map`}
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

      </div>

      <a
        href={mapSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-office-directions"
      >
        Get Directions
        <ExternalLink
          size={17}
          strokeWidth={1.7}
        />
      </a>

    </article>
  );
}

/* =========================================
   FORM INITIAL STATE
========================================= */

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  preferredOffice: "",
  message: "",
};

/* =========================================
   CONTACT PAGE
========================================= */

function Contact() {
  const [form, setForm] = useState(initialForm);

  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  const groupProps = shouldAnimate
    ? {
        variants: stagger,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.1,
        },
      }
    : {};

  const itemVariants = shouldAnimate
    ? fadeUp
    : undefined;

  /* =====================================
     FORM CHANGE HANDLER
  ===================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================
     EMAIL ENQUIRY
  ===================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject =
      `Project Enquiry - ${form.projectType || "General"}`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Project Type: ${form.projectType || "Not specified"}`,
      `Preferred Office: ${form.preferredOffice || "No preference"}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${contactDetails.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="contact-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="contact-hero">

        <div className="contact-hero-bg" />

        <div className="contact-hero-container">

          <div className="contact-hero-content">

            {/* HERO EYEBROW */}

            <Reveal delay={0.05}>
              <p className="contact-eyebrow">
                Get in Touch
                <span />
              </p>
            </Reveal>

            {/* HERO HEADING */}

            <Reveal delay={0.15} duration={0.9}>
              <h1>
                Let's Build
                <br />
                Something
                <br />
                <em>Meaningful.</em>
              </h1>
            </Reveal>

            {/* HERO DESCRIPTION */}

            <Reveal delay={0.3}>
              <p className="contact-hero-description">
                Have a project in mind? We'd love to
                hear from you and explore how we can
                bring it to life together.
              </p>
            </Reveal>

            {/* HERO CTA */}

            <Reveal delay={0.45}>
              <a
                href="#contact-form"
                className="contact-primary-btn"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </a>
            </Reveal>

          </div>

        </div>

      </section>

      {/* =====================================
          CONTACT INFORMATION STRIP
      ===================================== */}

      <section className="contact-info-section">

        <motion.div
          className="contact-info-grid"
          {...groupProps}
        >

          {/* OFFICE LOCATIONS */}

          <motion.div
            className="contact-info-item"
            variants={itemVariants}
          >

            <MapPin
              size={28}
              strokeWidth={1.5}
            />

            <div>
              <h3>Our Offices</h3>
              <p>Goa & Kozhikode, India</p>
            </div>

          </motion.div>

          {/* PHONE */}

          <motion.div
            className="contact-info-item"
            variants={itemVariants}
          >

            <Phone
              size={28}
              strokeWidth={1.5}
            />

            <div>
              <h3>Call Us</h3>

              <a href="tel:+917356147020">
                {contactDetails.phone}
              </a>
            </div>

          </motion.div>

          {/* EMAIL */}

          <motion.div
            className="contact-info-item"
            variants={itemVariants}
          >

            <Mail
              size={28}
              strokeWidth={1.5}
            />

            <div>
              <h3>Email Us</h3>

              <a href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </div>

          </motion.div>

        </motion.div>

      </section>

      {/* =====================================
          ENQUIRY SECTION
      ===================================== */}

      <section
        className="contact-enquiry-section"
        id="contact-form"
      >

        <div className="contact-enquiry-container">

          {/* =====================================
              LEFT ARCHITECTURAL IMAGE
          ===================================== */}

          <div className="contact-enquiry-image">

            <ImageReveal
              src="/images/home-about.jpg"
              alt="Tropical Manifesto architectural design"
            />

            <div className="contact-image-caption">
              <span>Design with Purpose</span>
              <span>Tropical Manifesto</span>
            </div>

          </div>

          {/* =====================================
              RIGHT ENQUIRY FORM
          ===================================== */}

          <div className="contact-form-wrapper">

            <Reveal delay={0.05}>
              <p className="contact-eyebrow">
                Send an Enquiry
                <span />
              </p>
            </Reveal>

            <Reveal delay={0.15} duration={0.85}>
              <h2>
                Tell Us About
                <br />
                Your Project
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="contact-form-description">
                Every meaningful space starts with a
                conversation. Share your ideas, and
                let's explore the possibilities.
              </p>
            </Reveal>

            {/* ANIMATED FORM */}

            <motion.form
              onSubmit={handleSubmit}
              className="contact-form"
              {...groupProps}
            >

              {/* NAME + EMAIL */}

              <motion.div
                className="contact-form-row"
                variants={itemVariants}
              >

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

              </motion.div>

              {/* PHONE + PROJECT TYPE */}

              <motion.div
                className="contact-form-row"
                variants={itemVariants}
              >

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-type">
                    Project Type
                  </label>

                  <select
                    id="contact-type"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option value="Residential">
                      Residential
                    </option>

                    <option value="Commercial">
                      Commercial
                    </option>

                    <option value="Hospitality">
                      Hospitality
                    </option>

                    <option value="Interior Design">
                      Interior Design
                    </option>

                    <option value="Landscape Design">
                      Landscape Design
                    </option>

                    <option value="Consultancy">
                      Consultancy
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </motion.div>

              {/* OFFICE SELECTION */}

              <motion.div
                className="contact-field"
                variants={itemVariants}
              >

                <label htmlFor="contact-office">
                  Preferred Office
                </label>

                <select
                  id="contact-office"
                  name="preferredOffice"
                  value={form.preferredOffice}
                  onChange={handleChange}
                >
                  <option value="">
                    Select preferred office
                  </option>

                  <option value="Goa">
                    Goa — Company Office
                  </option>

                  <option value="Kozhikode">
                    Kozhikode — Branch Office
                  </option>

                  <option value="No Preference">
                    No Preference
                  </option>
                </select>

              </motion.div>

              {/* MESSAGE */}

              <motion.div
                className="contact-field"
                variants={itemVariants}
              >

                <label htmlFor="contact-message">
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project, location, ideas or requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />

              </motion.div>

              {/* SUBMIT BUTTON */}

              <motion.button
                type="submit"
                className="contact-submit-btn"
                variants={itemVariants}
                whileHover={
                  shouldAnimate
                    ? { y: -2 }
                    : undefined
                }
                whileTap={
                  shouldAnimate
                    ? { scale: 0.99 }
                    : undefined
                }
              >
                Prepare Email Enquiry
                <Send
                  size={17}
                  strokeWidth={1.7}
                />
              </motion.button>

              <motion.p
                className="contact-form-note"
                variants={itemVariants}
              >
                Your email application will open with
                the enquiry details ready to review
                and send.
              </motion.p>

            </motion.form>

          </div>

        </div>

      </section>

      {/* =====================================
          OFFICE LOCATIONS
      ===================================== */}

      <section
        className="contact-locations-section"
        id="our-locations"
      >

        <div className="contact-locations-container">

          {/* SECTION HEADING */}

          <div className="contact-locations-header">

            <Reveal delay={0.05}>
              <div>
                <p className="contact-eyebrow">
                  Find Us
                  <span />
                </p>

                <h2>
                  Our
                  <br />
                  Locations
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Connect with Tropical Manifesto
                at either of our studios.
                We'd love to discuss your next project.
              </p>
            </Reveal>

          </div>

          {/* STAGGERED OFFICE CARDS */}

          <motion.div
            className="contact-offices-grid"
            {...groupProps}
          >

            {offices.map((office) => (

              <motion.div
                key={office.id}
                variants={itemVariants}
                className="contact-office-animation-item"
              >
                <OfficeCard office={office} />
              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
