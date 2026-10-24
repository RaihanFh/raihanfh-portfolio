import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { profile } from "../data/profile";
import "../css/Header.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const homeElement = document.getElementById("home");
    if (!homeElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowName(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(homeElement);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="floating-header">
      <div className="floating-nav-container">
        {showName && (
          <a
            className="nav-brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {profile.shortName}
          </a>
        )}

        <nav className="navbar">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
