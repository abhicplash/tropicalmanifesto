
import { useState, useEffect } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

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

const transparentPages = ["/", "/contact"];

function Navbar() {
  const location = useLocation();

  const hasTransparentNavbar = transparentPages.includes(
    location.pathname
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when navigating between pages
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isOverlay =
    hasTransparentNavbar && !scrolled && !menuOpen;

  return (
    <>
      {/* Spacer only for pages with solid navbar */}
      {!hasTransparentNavbar && (
        <div className="tm-nav-spacer" />
      )}

      <header
        className={[
          "tm-navbar",
          hasTransparentNavbar
            ? "tm-navbar-home"
            : "tm-navbar-inner",
          isOverlay ? "tm-navbar-transparent" : "",
          scrolled ? "tm-navbar-scrolled" : "",
          menuOpen ? "tm-navbar-menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="tm-nav-container">

          {/* BRAND */}
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

            <span className="tm-brand-name">
              <span>Tropical</span>
              <span>Manifesto</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
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
                  `tm-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="tm-nav-actions">

            <Link
              to="/contact"
              className="tm-start-btn"
              onClick={closeMenu}
            >
              <span>Start a Project</span>
              <ArrowRight
                size={18}
                strokeWidth={1.8}
              />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="tm-menu-toggle"
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="tm-mobile-navigation"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            >
              {menuOpen ? (
                <X size={25} strokeWidth={1.8} />
              ) : (
                <Menu size={25} strokeWidth={1.8} />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          id="tm-mobile-navigation"
          className={`tm-mobile-menu ${
            menuOpen ? "open" : ""
          }`}
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
                `tm-mobile-link ${
                  isActive ? "active" : ""
                }`
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
    </>
  );
}

export default Navbar;
