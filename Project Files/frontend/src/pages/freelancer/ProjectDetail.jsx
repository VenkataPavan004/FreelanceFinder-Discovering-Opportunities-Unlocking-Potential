import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AppNavbar from "../../components/Navbar";
import API from "../../api";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get(`/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <AppNavbar />

      <div style={{ padding: "120px 80px", color: "white" }}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>Budget: ₹{project.budget}</p>
        <p>Status: {project.status}</p>
      </div>
    </>
  );
}
  