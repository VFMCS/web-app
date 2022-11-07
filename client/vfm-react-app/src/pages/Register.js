import * as React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Login from "../Login";
import LoginHeader from '../components/headers/LandingHeader.js';
import FarmerLandingPage from "./FarmerLandingPage.js";
import { useNavigate } from "react-router-dom";
import { NavigateBefore } from '@mui/icons-material';


export const Register = () => {
  let navigate = useNavigate();

  let [profileModalOpen, setProfileModalState] = useState(false);
  const [credentials, setCredentials] = useState({
    user_id: Math.round(Math.random() * 10000) + 10,
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address:"",
    is_vendor:false,
    photo:null,
    about_me:"",
    email: "",
    created_on: new Date(),
    image_url:"",
    role:"farmer"
  });

  const is_vendor_options = [
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

  React.useEffect(() => {
   setCredentials({
    user_id: Math.round(Math.random() * 10000) + 10,
    username: credentials.first_name,
    password: credentials.password,
    first_name: credentials.first_name,
    last_name: credentials.last_name,
    address:"",
    is_vendor: credentials.is_vendor === "farmer",
    photo:null,
    about_me:"",
    email: credentials.email,
    created_on: new Date(),
    image_url:"",
   })
}, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    credentials.is_vendor = credentials.is_vendor === "farmer";
    
    //Using random number for user_id for now, should check for collisions of user_id in the future
    fetch('http://localhost:3001/api/users', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(credentials),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      //console.error('Error:', error);
    });
    
    //set curr_user_id and print values
    localStorage.setItem('curr_user_id', credentials.user_id);
    console.log(localStorage.getItem('curr_user_id'))    
    console.log(credentials);

    if(credentials.is_vendor){
      navigate('/farmer');
    }
    else{
      navigate('/customer');
    }
  };

  
  let modalCloseHandler = (e, reason) => {
      if (reason === "backdropClick") {
          setProfileModalState(false)
          return
      }
      setProfileModalState(false)
      navigate('/farmer')
  }

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
              name="first_name"
              value={credentials.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="last_name"
              value={credentials.last_name}
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
            {is_vendor_options.map((is_vendor) => (
              <div className="radio-item" key={is_vendor.value}>
                <input
                  type="radio"
                  id={is_vendor.value}
                  name="is_vendor"
                  value={is_vendor.value}
                  onChange={handleChange}
                />

                <label htmlFor={is_vendor.value}>{is_vendor.label}</label>
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
      <FarmerProfileModal open={profileModalOpen} setModalState={setProfileModalState} onClose={modalCloseHandler}/>
    </div>
  );
};

export default Register;