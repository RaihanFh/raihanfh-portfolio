import { useState, useEffect } from "react";
import "../css/Header.css";

const Header = () => {
  const [showName, setShowName] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Observer to detect when the #home section leaves the viewport
    const homeElement = document.getElementById("home");

    if (!homeElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show name in navbar when home section is NOT intersecting (scrolled past)
        setShowName(!entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of home section is visible
    );

    observer.observe(homeElement);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="floating-header">
      <div className="floating-nav-container">
        {/* Conditional Name Display */}
        {showName && (
          <div
            className="nav-brand"
            onClick={() => scrollToSection("home")}
          >
            Raihan Fadhilah H.
          </div>
        )}

        <nav className="navbar">
          <ul>
            <li
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </li>
            <li
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* Theme Switcher Toggle
        <button
          type="button"
          aria-label="Switch theme"
          className="theme-toggle-btn"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="sun-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;