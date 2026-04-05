import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 className="footer-logo">Job<span>Bob</span></h3>
          <p>Connecting talent with opportunity. Find your dream job or hire the best candidates today.</p>
        </div>
        <div className="footer-col">
          <h4>For Job Seekers</h4>
          <ul>
            <li><Link to="/browse">Browse Jobs</Link></li>
            <li><Link to="/login">Create Account</Link></li>
            <li><a href="#">Career Tips</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>For Employers</h4>
          <ul>
            <li><Link to="/jobpost">Post a Job</Link></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JobBob. All rights reserved.</p>
      </div>
    </footer>
  );
}