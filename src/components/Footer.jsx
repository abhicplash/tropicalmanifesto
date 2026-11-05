
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import logo from "../assets/logo.png";
import "./Footer.css";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Architecture",
  "Interiors",
  "Landscapes",
  "Consultancy",
];

// Social icons use inline SVGs to avoid
// unsupported Lucide brand icon imports.

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.35-1.55 2.78-1.55 2.98 0 3.59 1.96 3.59 4.5v5.3Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.03-.79-.01-1.72.2-2.57l1.3-5.52s-.33-.65-.33-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.35-.9 3.65-.26 1.09.55 1.98 1.62 1.98 1.94 0 3.44-2.05 3.44-5 0-2.61-1.87-4.43-4.54-4.43-3.1 0-4.92 2.32-4.92 4.72 0 .94.36 1.94.8 2.48.09.11.1.21.07.32l-.3 1.23c-.05.2-.16.24-.37.15-1.4-.65-2.28-2.7-2.28-4.35 0-3.54 2.57-6.79 7.4-6.79 3.88 0 6.9 2.76 6.9 6.46 0 3.85-2.43 6.95-5.8 6.95-1.13 0-2.19-.59-2.55-1.29l-.7 2.65c-.25.98-.94 2.2-1.4 3.03A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.94C17.93 4.79 12 4.79 12 4.79s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.94c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="tm-footer">

      {/* Decorative architecture background */}
      <div
        className="tm-footer-photo"
        aria-hidden="true"
      />

      <div className="tm-footer-container">

        <div className="tm-footer-grid">

          {/* BRAND COLUMN */}
          <div className="tm-footer-brand">

            <Link to="/" className="tm-footer-logo">
              <img src={logo} alt="" />
              <span>
                Tropical
                <br />
                Manifesto
              </span>
            </Link>

            <p className="tm-footer-description">
              An architecture and design studio creating
              contextual, sustainable and human-centric
              spaces.
            </p>

            <div className="tm-footer-socials">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>

            </div>
          </div>

          {/* EXPLORE COLUMN */}
          <div className="tm-footer-column">

            <h3>Explore</h3>
            <div className="tm-footer-accent" />

            <div className="tm-footer-links">
              {footerLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>

          </div>

          {/* EXPERTISE COLUMN */}
          <div className="tm-footer-column">

            <h3>Our Expertise</h3>
            <div className="tm-footer-accent" />

            <div className="tm-footer-links">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>

          </div>

          {/* CONTACT COLUMN */}
          <div className="tm-footer-column tm-footer-contact">

            <h3>Get in Touch</h3>
            <div className="tm-footer-accent" />

            <div className="tm-footer-contact-list">

              <a href="tel:+919876543210">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>

              <a href="mailto:hello@tropicalmanifesto.com">
                <Mail size={18} />
                <span>hello@tropicalmanifesto.com</span>
              </a>

              <div>
                <MapPin size={18} />
                <span>Kozhikode, Kerala, India</span>
              </div>

            </div>

            <Link to="/contact" className="tm-footer-cta">
              Start a Project
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="tm-footer-bottom">

          <p>
            © {new Date().getFullYear()} Tropical Manifesto.
            All Rights Reserved.
          </p>

          <div className="tm-footer-categories">
            <span>Architecture</span>
            <i>/</i>
            <span>Interiors</span>
            <i>/</i>
            <span>Landscapes</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
