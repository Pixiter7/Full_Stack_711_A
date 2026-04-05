export default function JobCard({ title, company, location, type = "Full-time" }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-company-icon">{company.charAt(0)}</div>
        <div>
          <h3 className="job-title">{title}</h3>
          <p className="job-company">{company}</p>
        </div>
      </div>
      <div className="job-card-footer">
        <span className="job-tag">{location}</span>
        <span className="job-tag job-tag-type">{type}</span>
        <button className="btn-apply">Apply Now</button>
      </div>
    </div>
  );
}