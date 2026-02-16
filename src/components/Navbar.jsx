import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide dashboard on Home and About
  const hideDashboard =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <nav className="nav">

      <h2>💰 Finance Manager</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!hideDashboard && (
          <Link to="/dashboard">Dashboard</Link>
        )}

        <Link to="/login">
          <button className="nav-btn login">Login</button>
        </Link>

        <Link to="/register">
          <button className="nav-btn register">Register</button>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;
