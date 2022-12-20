import React, { useState, ThemeProvider } from "react";
import theme from '../theme/theme.js'
import "../login-styles/auth.css";
import LoginHeader from '../components/headers/LandingHeader.js';
import LandingHeader from '../components/headers/LandingHeader.js';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material'


// Provides an interface, when Log-in button is clicked, for users to log in. 
const Login = () => {
  let navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [curr_user_id, setCurr_User_Id] = useState(localStorage.getItem('curr_user_id'));

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

  React.useEffect(() => {
    localStorage.setItem('curr_user_id', curr_user_id);
  }, [curr_user_id])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(login)

    //Check if user has entered info
    if (login.email === "" || login.password === "") {
      console.log("error"); return;
    }

    //Get the user by email and id
    let url = 'http://127.0.0.1:5001/api/users/' + login.email + "/" + login.password;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
      if (data.length === 0) {
        return Promise.reject("No user found");
      };
      console.log("login user id: " + data[0].user_id);
      setCurr_User_Id(data[0].user_id);
      localStorage.setItem('curr_user_id', data[0].user_id)
    }).then(() => {
      console.log("curr_user_id: " + localStorage.getItem('curr_user_id'));
      fetch('http://127.0.0.1:5001/curr-user-api/' + localStorage.getItem('curr_user_id')).then(response => response.json()).then(data => {
        console.log(data);
        localStorage.setItem('curr_user_is_vendor', data[0].is_vendor)

      }).then(() => {
        console.log("curr_user_is_vendor: " + localStorage.getItem('curr_user_is_vendor'));
        if (localStorage.getItem('curr_user_is_vendor') === 'true') {
          navigate('/farmer');
        }
        else {
          navigate('/customer');
        }
      }
      ).catch(err => console.error(err));
    }).catch(err => console.error(err));
  }
  return (
    <Stack spacing={4} minHeight={"92vh"}>
      <div id="login-auth-wrap" className="auth-wrapper">
        <LandingHeader />

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
    </Stack>
  );
};

export default Login;