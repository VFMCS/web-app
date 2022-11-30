import * as React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Login from "../Login";
import LoginHeader from '../components/headers/LandingHeader.js';
import FarmerLandingPage from "./FarmerLandingPage.js";
import { NavigateBefore } from '@mui/icons-material';
import FarmerProfileModal from "../components/FarmerProfileModal.js"
import {Alert} from "@mui/material"


export const Register = () => {
  let navigate = useNavigate();

  let [profileModalOpen, setProfileModalState] = useState(false);
  let [curr_user_id, setCurr_User_Id] = useState(localStorage.getItem('curr_user_id'));

  const [credentials, setCredentials] = useState({
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

  let [missingFieldError, setMissingFieldError] = useState(false);

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
    console.log(credentials)
  };

  React.useEffect(() => {
   setCredentials({
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

  const postCredentials = () => {
    console.log('post starting');

    fetch("http://localhost:3001/api/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials)}).then(data => {console.log(data);
      //Get the user by email and password to then retrieve the id
      let url = 'http://localhost:3001/api/users/' + credentials.email + "/" + credentials.password;
      console.log(url);
      fetch(url).then(response => response.json()).then(data => {
        console.log("data: " + data)
        console.log("login user id: " + data[0].user_id); 
        setCurr_User_Id(data[0].user_id); 
        localStorage.setItem('curr_user_id', data[0].user_id);
        localStorage.setItem('curr_user_is_vendor', credentials.is_vendor);
      }).then(() => {
        console.log("curr_user_id: " + localStorage.getItem('curr_user_id'));
        console.log("curr_user_is_vendor: " + localStorage.getItem('curr_user_is_vendor'));
        console.log(credentials);
      }).then(() => {
        //set curr_user_id and print values
        if(localStorage.getItem('curr_user_is_vendor') === 'true'){navigate('/farmer');}
        else{navigate('/customer');}
      });
    });
  }

    
    

    /*
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
    */
    
    
  

  const handleSubmit = (e) => {
    e.preventDefault();

    credentials.is_vendor = credentials.is_vendor === "farmer";
    console.log(credentials.is_vendor)

    let required = [credentials.first_name, 
      credentials.last_name, 
      credentials.password, 
      credentials.email]
    if (required.includes("")) {
      console.log(required)
      setMissingFieldError(true)
      return
    }
    if (is_vendor_options.map(o => document.getElementById(o.value).checked).every(x=>!x)) {
      setMissingFieldError(true)
      return
    }

    setMissingFieldError(false)
  
    if(credentials.is_vendor){
      setProfileModalState(true)
    }
    else{
      postCredentials()
      
    }
  };

  
  let modalCloseHandler = (e, reason) => {
      if (reason === "backdropClick") {
          return
      }
      setProfileModalState(false)
      postCredentials()
      localStorage.setItem('curr_user_is_vendor', true)
      navigate('/farmer')
  }

  return (
    <div id="auth-wrapper-register" className="auth-wrapper">
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
          { missingFieldError &&
          <Alert severity="error" sx={{m: 2}}> Please enter all fields </Alert>}
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
      <FarmerProfileModal open={profileModalOpen} setModalState={setProfileModalState} onClose={modalCloseHandler} profile={credentials} changeHandler={handleChange}/>
    </div>
  );
};

export default Register;