import AppNavbar from "../../components/Navbar";
import "./AdminTables.css";

export default function Applications() {
  return (
    <>
      <AppNavbar />

      <div className="admin-table-page">
        <h2 className="page-title">Applications</h2>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Freelancer</th>
              <th>Bid</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Website Redesign</td>
              <td>John</td>
              <td>₹7500</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Logo Design</td>
              <td>Sarah</td>
              <td>₹4000</td>
              <td>Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
