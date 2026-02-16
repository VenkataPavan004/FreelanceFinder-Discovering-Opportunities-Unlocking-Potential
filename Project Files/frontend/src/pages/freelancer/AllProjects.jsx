import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../../components/Navbar";
import API from "../../api";
import "./AllProjects.css";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();   // ✅ now we use it

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <AppNavbar />

      <div className="dashboard-page">
        <h2 className="dashboard-title">All Projects</h2>

        <div className="projects-grid">
          {projects.length === 0 ? (
            <p style={{ color: "white" }}>No projects found</p>
          ) : (
            projects.map((project) => (
              <div
                className="project-box"
                key={project._id}
                onClick={() =>
                  navigate(`/freelancer/project/${project._id}`)
                }
                style={{ cursor: "pointer" }}
              >
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="project-footer">
                  <span className="budget">₹{project.budget}</span>
                  <span>Status: {project.status}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
