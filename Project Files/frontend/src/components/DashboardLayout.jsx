import Sidebar from "./Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout({ role, children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar role={role} />
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
