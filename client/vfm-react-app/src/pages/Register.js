import { useState } from "react";
import { Link } from "react-router-dom";
//import Login from "../Login";
import LoginHeader from '../components/headers/LandingHeader.js';


export const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

	const isVendor = credentials.role === "farmer";

  const roleOptions = [
    { value: "farmer", label: "Farmer" },
    { value: "consumer", label: "Consumer" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="auth-wrapper">
      <LoginHeader />

      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstname"
              value={credentials.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastname"
              value={credentials.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleChange}
            />
          </div>

          <div className="radio-group">
            <label>Role</label>
            {roleOptions.map((role) => (
              <div className="radio-item" key={role.value}>
                <input
                  type="radio"
                  id={role.value}
                  name="role"
                  value={role.value}
                  onChange={handleChange}
                />

                <label htmlFor={role.value}>{role.label}</label>
              </div>
            ))}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;