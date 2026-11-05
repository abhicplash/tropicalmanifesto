
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="tm-navbar">
      <div className="tm-nav-container">

        {/* Logo */}
        <Link
          to="/"
          className="tm-brand"
          onClick={closeMenu}
          aria-label="Tropical Manifesto Home"
        >
          <img
            src={logo}
            alt=""
            className="tm-logo"
          />

          <div className="tm-brand-name">
            <span>Tropical</span>
            <span>Manifesto</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="tm-nav-links"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `tm-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="tm-nav-actions">

          <Link
            to="/contact"
            className="tm-start-btn"
            onClick={closeMenu}
          >
            <span>Start a Project</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="tm-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="tm-mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="tm-mobile-navigation"
        className={`tm-mobile-menu ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `tm-mobile-link ${isActive ? "active" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <Link
          to="/contact" 
          className="tm-mobile-cta"
          onClick={closeMenu}
        >
          Start a Project
          <ArrowRight size={18} />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
