import { Link } from "react-router-dom";
import "../login-styles/login-navbar.css";
import logo from "../../public/logo.svg";

  // Header for Log-In
  // Contains the link to sign up, sign in and the FarmFresh logo
const LoginHeader = () => {
  let navigate = useNavigate();
  let toLanding = () => navigate("/");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Button onClick={toLanding}>
            <img src={headerLogo} alt="Logo" />
            <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
              FarmFresh
            </Typography>
          </Button>
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