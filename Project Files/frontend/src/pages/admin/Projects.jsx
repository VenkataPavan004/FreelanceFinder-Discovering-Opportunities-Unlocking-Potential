import AppNavbar from "../../components/Navbar";
import "./AdminTables.css";

export default function Projects() {
  return (
    <>
      <AppNavbar />

      <div className="admin-table-page">
        <h2 className="page-title">Manage Projects</h2>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Status</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Website Redesign</td>
              <td>ABC Pvt Ltd</td>
              <td>Active</td>
              <td>₹8000</td>
            </tr>
            <tr>
              <td>Logo Design</td>
              <td>Sugar Rush</td>
              <td>Completed</td>
              <td>₹4000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
     