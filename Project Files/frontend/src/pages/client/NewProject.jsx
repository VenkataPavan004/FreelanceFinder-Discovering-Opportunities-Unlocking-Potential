import AppNavbar from "../../components/Navbar";
import "./NewProject.css";

export default function NewProject() {
  return (
    <>
      <AppNavbar />

      <div className="new-project-page">
        <h2 className="page-title">Post New Project</h2>

        <form className="new-project-form">
          <input placeholder="Project Title" required />
          <textarea placeholder="Project Description" rows="4" required />
          <input placeholder="Required Skills (comma separated)" />
          <input type="number" placeholder="Budget (₹)" required />

          <button type="submit">Post Project</button>
        </form>
      </div>
    </>
  );
}
