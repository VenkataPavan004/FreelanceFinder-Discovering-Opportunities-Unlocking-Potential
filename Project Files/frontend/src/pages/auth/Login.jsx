import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api";
import "./AuthClean.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });

      // Store token
      localStorage.setItem("token", res.data.token);

      // Store full user object
      localStorage.setItem("user", JSON.stringify({
        _id: res.data._id,
        username: res.data.username,
        email: res.data.email,
        userType: res.data.userType
      }));

      // Redirect based on role
      if (res.data.userType === "admin") {
        navigate("/admin/dashboard");
      } else if (res.data.userType === "client") {
        navigate("/client/dashboard");
      } else {
        navigate("/freelancer/dashboard");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card-clean">
        <h2 className="auth-title">Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Sign in
          </button>
        </form>

        <div className="auth-footer-center">
          <span>Don’t have an account?</span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
