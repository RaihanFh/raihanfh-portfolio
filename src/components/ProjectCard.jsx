function ProjectCard({ project, reverse }) {
  const isMobile = project.type === "mobile";

  return (
    <div className={`project-item ${reverse ? "reverse" : ""}`}>
      {/* Media / Visual Side */}
      <div className={`project-media-wrapper ${isMobile ? "mobile-wrapper" : "web-wrapper"}`}>
        {isMobile ? (
          /* 3-Screen Perspective Mockup for Mobile Apps */
          <div className="mobile-mockup-container">
            <img
              src={project.images[0] || project.images}
              alt={`${project.title} Left Screen`}
              className="phone-screen phone-left"
            />
            <img
              src={project.images[1] || project.images[0] || project.images}
              alt={`${project.title} Center Screen`}
              className="phone-screen phone-center"
            />
            <img
              src={project.images[2] || project.images[0] || project.images}
              alt={`${project.title} Right Screen`}
              className="phone-screen phone-right"
            />
          </div>
        ) : (
          /* Standard Web Card Display */
          <div className="web-mockup-container">
            <img src={project.images} alt={project.title} className="web-screen" />
          </div>
        )}

        {/* Hover / Direct Link Action */}
        {project.link && (
          <div className="visit-overlay">
            <a href={project.link} target="_blank" rel="noreferrer" className="visit-btn">
              Visit Project
            </a>
          </div>
        )}
      </div>

      {/* Details / Content Side */}
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="visit-btn-mobile">
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;