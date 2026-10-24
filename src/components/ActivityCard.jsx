import { MapPinIcon, CalendarDaysIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

function ActivityCard({ activity }) {
  return (
    <div className="card activity-card">
      <div className="card-header">
        <div className="header-main">
          <h3 className="job-title">{activity.title}</h3>
          {activity.org && (
            <div className="company-badge">
              <BuildingOffice2Icon className="icon-sm" />
              <span>{activity.org}</span>
            </div>
          )}
        </div>

        <div className="meta-details">
          <div className="meta-item">
            <CalendarDaysIcon className="icon-sm" />
            <span>
              {activity.startDate} – {activity.endDate}
            </span>
          </div>
          {activity.location && (
            <div className="meta-item">
              <MapPinIcon className="icon-sm" />
              <span>{activity.location}</span>
            </div>
          )}
        </div>
      </div>

      {activity.desc && activity.desc.length > 0 && (
        <div className="card-body">
          <ul className="bullet-list">
            {activity.desc.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActivityCard;
