import AppNavbar from "../../components/Navbar";
import "./MyProjects.css";

export default function MyProjects() {
  return (
    <>
      <AppNavbar />

      <div className="dashboard-page">
        <h2 className="dashboard-title">My Projects</h2>

        <div className="projects-section">
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
