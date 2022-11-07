import { useState } from "react";
import "../login-styles/auth.css";
import LoginHeader from '../components/headers/LandingHeader.js';
import LandingHeader from '../components/headers/LandingHeader.js';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(login)

    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    // Check if Login is valid
    // if valid, continue to appropriate page depending on whether farmer or consumer
  };

  return (

    <div className="auth-wrapper">
      <LoginHeader/>

      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

