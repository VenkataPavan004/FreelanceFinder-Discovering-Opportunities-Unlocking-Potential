import { useEffect, useState } from "react";
import AppNavbar from "../../components/Navbar";
import API from "../../api";
import "./ClientProjects.css";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

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

      <div className="client-projects-page">
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
