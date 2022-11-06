import { Link } from "react-router-dom";
import "../login-styles/login-navbar.css";
import logo from "../../public/logo.svg";

const LoginHeader = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-img" />
          <h1>VFM</h1>
        </Link>

        <div className="navbar-links">
          <Link to="/sign-in" className="navbar-link">
            Sign In
          </Link>
          <Link to="/sign-up" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginHeader;