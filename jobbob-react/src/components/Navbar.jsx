import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Job<span>Bob</span>
      </Link>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/browse" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Browse Jobs
        </NavLink>
        <NavLink to="/jobpost" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Post a Job
        </NavLink>
        <NavLink to="/login" className="nav-link btn-login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}