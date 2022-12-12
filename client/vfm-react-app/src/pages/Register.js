import * as React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from '../components/headers/LandingHeader.js';
import FarmerLandingPage from "./FarmerLandingPage.js";
import { NavigateBefore } from '@mui/icons-material';
import FarmerProfileModal from "../components/FarmerProfileModal.js"
import {Alert, Stack} from "@mui/material"

// When any sign-up button is clicked, this modal provides a place for vendors or farmers to create a new account. 
// It makes sure no fields are left blank and all of the information entered is valid for our database by providing the user
// with error statements if it is not passed.
// Once a farmer registers, they are provided with a modal to create their profile, including uploading an image.  
export const Register = () => {
  let navigate = useNavigate();

  let [profileModalOpen, setProfileModalState] = useState(false); // Open profile modal when user is done registering.
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

  const handleChange = (e) => { // Changes the new user data entry for a farmer. 
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

  const postCredentials = () => { // Saves the credentials of a new user to the database. Prints all to console first.
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
    
  
  const handleSubmit = (e) => { // On submit of the first registering button. After this is submitted, the modal opens.
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

  
  let modalCloseHandler = (e, reason) => { // Modal closes finally once pictures are uploaded.
      if (reason === "backdropClick") {
          return
      }
      setProfileModalState(false)
      postCredentials()
      localStorage.setItem('curr_user_is_vendor', true)
      navigate('/farmer')
  }

  return (
      <Stack spacing={4} minHeight={"92vh"}>
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
    </Stack>
  );
};

export default Register;