import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../../components/Navbar";
import API from "../../api";
import "./ClientDashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const resProjects = await API.get("/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const resApplications = await API.get("/applications", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProjects(resProjects.data);
        setApplications(resApplications.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const totalProjects = projects.length;
  const activeProjects = projects.filter(
    (p) => p.status === "In Progress"
  ).length;

  const totalApplications = applications.length;

  return (
    <>
      <AppNavbar />

      <div className="client-dashboard-page">
        <div className="dashboard-glass-card">
          <h2 className="dashboard-title">Client Dashboard</h2>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Total Projects</h3>
              <div className="dashboard-number">{totalProjects}</div>
              <button
                className="dashboard-btn"
                onClick={() => navigate("/client/my-projects")}
              >
                View Projects
              </button>
            </div>

            <div className="dashboard-card">
              <h3>Active Projects</h3>
              <div className="dashboard-number">{activeProjects}</div>
              <button
                className="dashboard-btn"
                onClick={() => navigate("/client/my-projects")}
              >
                View Projects
              </button>
            </div>

            <div className="dashboard-card">
              <h3>Total Applications</h3>
              <div className="dashboard-number">{totalApplications}</div>
              <button
                className="dashboard-btn"
                onClick={() => navigate("/client/applications")}
              >
                View Applications
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
