import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ role }) {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">SB Works</div>

      {role === "freelancer" && (
        <>
          <Link to="/freelancer/dashboard">Dashboard</Link>
          <Link to="/freelancer/projects">All Projects</Link>
          <Link to="/freelancer/applications">My Applications</Link>
        </>
      )}

      {role === "client" && (
        <>
          <Link to="/client/dashboard">Dashboard</Link>
          <Link to="/client/new-project">Post Project</Link>
        </>
      )}

      {role === "admin" && (
        <>
          <Link to="/admin/dashboard">Dashboard</Link>
        </>
      )}

      <div className="sidebar-footer">
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}
