import { useEffect, useState } from "react";
import AppNavbar from "../../components/Navbar";
import API from "../../api";
import "./ClientProjects.css";

export default function ClientProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/projects", {
          headers: {
            Authorization: `Bearer ${token}`
          }
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

      <div className="projects-page">
        <h2>All Projects</h2>

        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Budget: ₹{project.budget}</p>
              <p>Status: {project.status}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
