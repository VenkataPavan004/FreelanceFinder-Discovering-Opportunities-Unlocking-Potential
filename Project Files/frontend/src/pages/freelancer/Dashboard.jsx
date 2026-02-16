import AppNavbar from "../../components/Navbar";
import "./FreelancerDashboard.css";

export default function FreelancerDashboard() {
  return (
    <>
      <AppNavbar />

      <div className="dashboard-page">
        <h2 className="dashboard-title">Freelancer Dashboard</h2>

        {/* ===== STATS ===== */}
        <div className="stats-grid">
          <div className="stat-card accent-blue">
            <h4>Active Projects</h4>
            <p>2</p>
          </div>

          <div className="stat-card accent-green">
            <h4>Completed</h4>
            <p>5</p>
          </div>

          <div className="stat-card accent-purple">
            <h4>Earnings</h4>
            <p>₹24,500</p>
          </div>

          <div className="stat-card accent-orange">
            <h4>Applications</h4>
            <p>3</p>
          </div>
        </div>

        {/* ===== RECENT PROJECTS ===== */}
        <div className="projects-section">
          <h3>Recent Projects</h3>

          <div className="project-card">
            <div>
              <h5>Website Redesign</h5>
              <span>Client: ABC Pvt Ltd</span>
            </div>
            <span className="status active">Active</span>
          </div>

          <div className="project-card">
            <div>
              <h5>Logo Design</h5>
              <span>Client: Sugar Rush</span>
            </div>
            <span className="status completed">Completed</span>
          </div>
        </div>
      </div>
    </>
  );
}
