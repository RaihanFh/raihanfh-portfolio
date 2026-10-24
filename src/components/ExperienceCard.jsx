import { useState } from "react";
import "../css/App.css";
import {
  CalendarDaysIcon,
  BuildingOffice2Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const INITIAL_COUNT = 3;

function ExperienceCard({ experience }) {
  const bullets = experience.desc ?? [];
  const [expanded, setExpanded] = useState(false);
  const hasMore = bullets.length > INITIAL_COUNT;
  const visibleBullets = expanded ? bullets : bullets.slice(0, INITIAL_COUNT);

  return (
    <div className="card experience-card">
      <div className="card-header">
        <div className="header-main">
          <h3 className="job-title">{experience.position}</h3>
          {experience.at && (
            <div className="company-badge">
              <BuildingOffice2Icon className="icon-sm" />
              <span>{experience.at}</span>
            </div>
          )}
          {experience.endDate === "Present" && (
            <span className="current-badge">Current</span>
          )}
        </div>

        <div className="meta-details">
          <div className="meta-item">
            <CalendarDaysIcon className="icon-sm" />
            <span>
              {experience.startDate} – {experience.endDate}
            </span>
          </div>
          {experience.location && (
            <div className="meta-item">
              <MapPinIcon className="icon-sm" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="card-body">
        <ul className="bullet-list">
          {visibleBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            className="show-more-btn"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
