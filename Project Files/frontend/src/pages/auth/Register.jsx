import { Link } from "react-router-dom";
import "./AuthClean.css";

export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card-clean">
        <h2 className="auth-title">Register</h2>

        <form>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <select required>
            <option value="">Select role</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>

          <button type="submit" className="primary-btn">
            Create account
          </button>
        </form>

       <div className="auth-footer-center">
      <span>Already have an account?</span>
      <Link to="/login">Login</Link>
      </div>

      </div>
    </div>
  );
}
