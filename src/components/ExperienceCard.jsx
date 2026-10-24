import "../css/App.css";
import {
  CalendarDaysIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

function ExperienceCard({ experience }) {
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
        </div>

        <div className="meta-details">
          <div className="meta-item">
            <CalendarDaysIcon className="icon-sm" />
            <span>
              {experience.startDate} – {experience.endDate}
            </span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <ul className="bullet-list">
          {experience.desc.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
