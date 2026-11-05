
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Building2,
} from "lucide-react";

import "./Contact.css";

/* ===============================
   CONTACT INFORMATION
================================ */

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

/* ===============================
   OFFICE CARD COMPONENT
================================ */

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
            <Building2 size={24} strokeWidth={1.5} />
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
          <MapPin size={19} strokeWidth={1.6} />
          <p>{office.address}</p>
        </div>

        <div className="contact-office-detail">
          <Phone size={19} strokeWidth={1.6} />

          <a href={`tel:${office.phone.replace(/\s/g, "")}`}>
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
        <ExternalLink size={17} strokeWidth={1.7} />
      </a>

    </article>
  );
}

/* ===============================
   FORM INITIAL STATE
================================ */

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  preferredOffice: "",
  message: "",
};

/* ===============================
   CONTACT PAGE
================================ */

function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-hero-bg" />

        <div className="contact-hero-container">
          <div className="contact-hero-content">

            <p className="contact-eyebrow">
              Get in Touch
              <span />
            </p>

            <h1>
              Let's Build
              <br />
              Something
              <br />
              <em>Meaningful.</em>
            </h1>

            <p className="contact-hero-description">
              Have a project in mind? We'd love to
              hear from you and explore how we can
              bring it to life together.
            </p>

            <a
              href="#contact-form"
              className="contact-primary-btn"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>

          </div>
        </div>

      </section>

      {/* ================= CONTACT STRIP ================= */}

      <section className="contact-info-section">

        <div className="contact-info-grid">

          <div className="contact-info-item">
            <MapPin size={28} strokeWidth={1.5} />

            <div>
              <h3>Our Offices</h3>
              <p>Goa & Kozhikode, India</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Phone size={28} strokeWidth={1.5} />

            <div>
              <h3>Call Us</h3>

              <a href="tel:+917356147020">
                {contactDetails.phone}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <Mail size={28} strokeWidth={1.5} />

            <div>
              <h3>Email Us</h3>

              <a href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* ================= ENQUIRY FORM ================= */}

      <section
        className="contact-enquiry-section"
        id="contact-form"
      >

        <div className="contact-enquiry-container">

          {/* LEFT ARCHITECTURAL IMAGE */}

          <div className="contact-enquiry-image">

            <img
              src="/images/home-about.jpg"
              alt="Tropical Manifesto architectural design"
              loading="lazy"
            />

            <div className="contact-image-caption">
              <span>Design with Purpose</span>
              <span>Tropical Manifesto</span>
            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="contact-form-wrapper">

            <p className="contact-eyebrow">
              Send an Enquiry
              <span />
            </p>

            <h2>
              Tell Us About
              <br />
              Your Project
            </h2>

            <p className="contact-form-description">
              Every meaningful space starts with a
              conversation. Share your ideas, and
              let's explore the possibilities.
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >

              {/* NAME + EMAIL */}

              <div className="contact-form-row">

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

              </div>

              {/* PHONE + PROJECT TYPE */}

              <div className="contact-form-row">

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

              </div>

              {/* OFFICE SELECTION */}

              <div className="contact-field">
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
              </div>

              {/* MESSAGE */}

              <div className="contact-field">
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
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Prepare Email Enquiry
                <Send size={17} strokeWidth={1.7} />
              </button>

              <p className="contact-form-note">
                Your email application will open with
                the enquiry details ready to review
                and send.
              </p>

            </form>

          </div>
        </div>
      </section>

      {/* ================= TWO OFFICE LOCATIONS ================= */}

      <section
        className="contact-locations-section"
        id="our-locations"
      >

        <div className="contact-locations-container">

          <div className="contact-locations-header">

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

            <p>
              Connect with Tropical Manifesto
              at either of our studios.
              We'd love to discuss your next project.
            </p>

          </div>

          <div className="contact-offices-grid">
            {offices.map((office) => (
              <OfficeCard
                key={office.id}
                office={office}
              />
            ))}
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
