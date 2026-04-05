import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { number: "10,000+", label: "Jobs Posted" },
    { number: "5,000+", label: "Companies Hiring" },
    { number: "50,000+", label: "Candidates" },
  ];

  const categories = [
    { icon: "💻", name: "Technology", count: "1,200 jobs" },
    { icon: "📊", name: "Finance", count: "850 jobs" },
    { icon: "🎨", name: "Design", count: "620 jobs" },
    { icon: "📣", name: "Marketing", count: "740 jobs" },
    { icon: "🏥", name: "Healthcare", count: "930 jobs" },
    { icon: "📚", name: "Education", count: "510 jobs" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Find Your <span className="highlight">Dream Job</span> Today
          </h1>
          <p className="hero-subtitle">
            Browse thousands of opportunities from top companies. Your next career move starts here.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn btn-primary">Browse Jobs</Link>
            <Link to="/jobpost" className="btn btn-secondary">Post a Job</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Explore by Category</h2>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link to="/browse" key={cat.name} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}