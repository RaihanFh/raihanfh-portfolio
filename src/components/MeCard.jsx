import profilePhoto from "../assets/profile photo.jpeg";
import "../css/App.css";
import { profile } from "../data/profile";
import { ArrowDownTrayIcon, MapPinIcon } from "@heroicons/react/24/outline";

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.41c1.02 0 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57C20.57 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function renderHighlighted(text, highlights) {
  if (!highlights || highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);
  const highlightSet = new Set(highlights);
  return parts.map((part, index) =>
    highlightSet.has(part) ? <strong key={index}>{part}</strong> : part
  );
}

function MeCard() {
  const [first, ...rest] = profile.summary;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section home-section">
      <blockquote className="profile-card">
        <img
          src={profilePhoto}
          alt="Raihan Fadhilah Hafiizh"
          className="card-photo-desktop"
          loading="eager"
          width="400"
          height="400"
        />

        <article className="card-content">
          <div className="card-body">
            <h1>Hi, I'm {profile.name}</h1>
            <p className="title-line">{profile.title}</p>
            <p className="location-line">
              <MapPinIcon className="icon-sm" />
              {profile.location}
            </p>
            <p className="summary">
              {renderHighlighted(first, profile.highlight)}
            </p>
            {rest.map((paragraph, index) => (
              <p key={index} className="summary">
                {paragraph}
              </p>
            ))}

            <div className="button-row">
              <a href={profile.cvFile} download className="btn btn-primary">
                <ArrowDownTrayIcon className="icon-sm" />
                Download CV
              </a>
              <button type="button" className="btn btn-secondary" onClick={scrollToContact}>
                Contact Me
              </button>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="GitHub"
              >
                <GitHubIcon className="icon-md" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="icon-md" />
              </a>
            </div>

            <footer className="card-footer-mobile">
              <img
                src={profilePhoto}
                alt="Raihan Fadhilah Hafiizh"
                className="card-photo-mobile"
                loading="eager"
                width="80"
                height="80"
              />
              <span className="author-name">{profile.name}</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </div>
  );
}

export default MeCard;
