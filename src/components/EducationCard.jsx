import { AcademicCapIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

function EducationCard({ education }) {
  return (
    <div className="card education-card">
      <div className="card-header">
        <div className="header-main">
          <h3 className="job-title">{education.degree}</h3>
          <div className="company-badge">
            <AcademicCapIcon className="icon-sm" />
            <span>{education.school}</span>
          </div>
        </div>

        <div className="meta-details">
          <div className="meta-item">
            <CalendarDaysIcon className="icon-sm" />
            <span>
              {education.startDate} – {education.endDate}
            </span>
          </div>
          {education.location && (
            <div className="meta-item">
              <MapPinIcon className="icon-sm" />
              <span>{education.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="card-body">
        {education.gpa && (
          <span className="gpa-badge">GPA {education.gpa}</span>
        )}
        {education.thesis && (
          <blockquote className="thesis-quote">
            <span className="thesis-label">Thesis:</span> {education.thesis}
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default EducationCard;
