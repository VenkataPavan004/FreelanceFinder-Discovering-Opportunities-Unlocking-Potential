import { useEffect, useState } from "react";
import AppNavbar from "../../components/Navbar";
import API from "../../api";
import "./ClientApplications.css";

export default function ClientApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/applications", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setApplications(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApplications();
  }, []);

  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(`/applications/accept/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Application Accepted!");

      // Refresh applications
      setApplications((prev) =>
        prev.map((app) =>
          app._id === id ? { ...app, status: "Accepted" } : app
        )
      );

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AppNavbar />

      <div className="client-applications-page">
        <h2>Applications</h2>

        <div className="applications-grid">
          {applications.map((app) => (
            <div key={app._id} className="application-card">
              <h3>{app.projectId?.title}</h3>
              <p>Freelancer: {app.freelancerId?.username}</p>
              <p>Bid: ₹{app.bidAmount}</p>
              <p>Status: {app.status}</p>

              {app.status === "Pending" && (
                <button
                  onClick={() => handleAccept(app._id)}
                  className="accept-btn"
                >
                  Accept
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
