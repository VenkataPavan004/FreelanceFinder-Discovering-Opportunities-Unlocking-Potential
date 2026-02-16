import AppNavbar from "../../components/Navbar";
import "./AdminTables.css";

export default function Users() {
  return (
    <>
      <AppNavbar />

      <div className="admin-table-page">
        <h2 className="page-title">Manage Users</h2>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>Freelancer</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Sarah Smith</td>
              <td>sarah@gmail.com</td>
              <td>Client</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
