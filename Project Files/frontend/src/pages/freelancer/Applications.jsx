import AppNavbar from "../../components/Navbar";
import { applications } from "../../data/applications";
import "./Applications.css";

export default function Applications() {
  return (
    <>
      <AppNavbar />

      {/* ✅ DASHBOARD WRAPPER */}
      <div className="dashboard-page">
        <h2 className="dashboard-title">My Applications</h2>

        <div className="applications-list">
          {applications.map((app) => (
            <div className="application-card" key={app.id}>
              <div>
                <h4>{app.project}</h4>
                <p>Bid Amount: ₹{app.bid}</p>
              </div>

              <span
                className={`status ${app.status.toLowerCase()}`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
