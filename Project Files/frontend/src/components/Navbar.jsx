import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function AppNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isHome = location.pathname === "/";
  const isFreelancer = location.pathname.startsWith("/freelancer");
  const isClient = location.pathname.startsWith("/client");

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="nav-left">
        <Link to="/" className="logo">
          <span className="logo-bold">SB</span> Works
        </Link>
      </div>

      {/* RIGHT SIDE - LINKS + BUTTON */}
      <div className="nav-right-container">

        {/* DASHBOARD LINKS */}
        {(isFreelancer || isClient) && (
          <>
            {isFreelancer && (
              <>
                <NavItem to="/freelancer/dashboard" label="Dashboard" />
                <NavItem to="/freelancer/projects" label="All Projects" />
                <NavItem to="/freelancer/my-projects" label="My Projects" />
                <NavItem to="/freelancer/applications" label="Applications" />
              </>
            )}

            {isClient && (
              <>
                <NavItem to="/client/dashboard" label="Dashboard" />
                <NavItem to="/client/projects" label="All Projects" />
                <NavItem to="/client/applications" label="Applications" />
              </>
            )}

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {/* HOME PAGE SIGN IN */}
        {isHome && (
          <Link to="/login" className="signin-btn">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      {label}
    </Link>
  );
}
