import AppNavbar from "../../components/Navbar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <>
      <AppNavbar />

      <div className="admin-dashboard">
        <h2 className="page-title">Admin Dashboard</h2>

        <div className="admin-stats">
          <div className="admin-stat-card">
            <h4>Total Users</h4>
            <p>25</p>
          </div>

          <div className="admin-stat-card">
            <h4>Total Projects</h4>
            <p>12</p>
          </div>

          <div className="admin-stat-card">
            <h4>Total Applications</h4>
            <p>34</p>
          </div>

          <div className="admin-stat-card">
            <h4>Active Projects</h4>
            <p>6</p>
          </div>
        </div>
      </div>
    </>
  );
}
