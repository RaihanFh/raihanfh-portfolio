import { ChartBarIcon } from "@heroicons/react/24/outline";

function ProjectCard({ project, reverse }) {
  const isMobile = project.type === "mobile";
  const rawImages = project.images;
  const imageList = Array.isArray(rawImages)
    ? rawImages
    : rawImages
    ? [rawImages]
    : [];
  const hasImages = imageList.length > 0;
  const isPlaceholder = !hasImages;

  return (
    <div className={`project-item ${reverse ? "reverse" : ""}`}>
      {/* Media / Visual Side */}
      <div
        className={`project-media-wrapper ${
          isMobile ? "mobile-wrapper" : "web-wrapper"
        } ${isPlaceholder ? "placeholder-wrapper" : ""}`}
      >
        {isPlaceholder ? (
          <div className="project-placeholder">
            <ChartBarIcon className="placeholder-icon" aria-hidden="true" />
            <span className="placeholder-label">{project.title}</span>
          </div>
        ) : isMobile ? (
          /* 3-Screen Perspective Mockup for Mobile Apps */
          <div className="mobile-mockup-container">
            <img
              src={imageList[0]}
              alt={`${project.title} screen 1`}
              className="phone-screen phone-left"
              loading="lazy"
            />
            <img
              src={imageList[1] || imageList[0]}
              alt={`${project.title} screen 2`}
              className="phone-screen phone-center"
              loading="lazy"
            />
            <img
              src={imageList[2] || imageList[0]}
              alt={`${project.title} screen 3`}
              className="phone-screen phone-right"
              loading="lazy"
            />
          </div>
        ) : (
          /* Standard Web Card Display */
          <div className="web-mockup-container">
            <img
              src={imageList[0]}
              alt={project.title}
              className="web-screen"
              loading="lazy"
            />
          </div>
        )}

        {/* Hover / Direct Link Action */}
        {project.link && (
          <div className="visit-overlay">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Project
            </a>
          </div>
        )}
      </div>

      {/* Details / Content Side */}
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.highlight && (
          <p className="project-highlight">{project.highlight}</p>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="tech-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="visit-btn-mobile"
          >
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
