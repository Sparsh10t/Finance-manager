import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="nav">

      <h2>💰 Finance Manager</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {isLoggedIn && (
          <Link to="/dashboard">Dashboard</Link>
        )}

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="outline-btn">Login</button>
            </Link>

            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
