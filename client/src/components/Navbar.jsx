import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMenuOpen(false);
    // Reset body overflow when menu closes
    document.body.style.overflow = "";
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <h2>Enlightens</h2>
          <span className="nav-tagline">Rooftop Restaurant</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`nav-link ${isActive("/menu") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/ambiance"
            className={`nav-link ${isActive("/ambiance") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Ambiance
          </Link>
          <Link
            to="/events"
            className={`nav-link ${isActive("/events") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/book"
            className="btn btn--primary nav-cta"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>

        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          id="navToggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
