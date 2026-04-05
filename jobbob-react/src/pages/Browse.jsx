import { useState } from "react";
import JobCard from "../components/JobCard";

const ALL_JOBS = [
  { title: "Frontend Developer", company: "Google", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer", company: "Amazon", location: "Delhi", type: "Full-time" },
  { title: "UI/UX Designer", company: "Figma", location: "Bangalore", type: "Remote" },
  { title: "Data Scientist", company: "Microsoft", location: "Hyderabad", type: "Full-time" },
  { title: "DevOps Engineer", company: "Flipkart", location: "Remote", type: "Contract" },
  { title: "Mobile Developer", company: "Zomato", location: "Mumbai", type: "Full-time" },
];

export default function Browse() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const types = ["All", "Full-time", "Remote", "Contract"];

  const filtered = ALL_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-container">
      <div className="container">
        <h2 className="page-title">Browse Jobs</h2>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="🔍  Search by title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          {types.map((t) => (
            <button
              key={t}
              className={`filter-tab ${filter === t ? "active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="no-results">No jobs found. Try a different search.</p>
        ) : (
          <div className="jobs-grid">
            {filtered.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}