import { useState } from "react";

export default function JobPost() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Job "${form.title}" posted successfully!`);
    setForm({ title: "", company: "", location: "", type: "Full-time", description: "" });
  };

  return (
    <div className="page-container">
      <div className="container form-page">
        <h2 className="page-title">Post a Job</h2>
        <p className="page-subtitle">Reach thousands of qualified candidates</p>

        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="e.g. Senior React Developer"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                className="form-input"
                placeholder="e.g. Acme Corp"
                value={form.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                className="form-input"
                placeholder="e.g. Remote / Mumbai"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Job Type</label>
              <select
                name="type"
                className="form-input"
                value={form.type}
                onChange={handleChange}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              name="description"
              className="form-input form-textarea"
              placeholder="Describe the role, responsibilities, and requirements..."
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}