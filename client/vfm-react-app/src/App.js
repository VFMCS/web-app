import './App.css';
import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FarmerPostItem from './components/FarmerPostItem';
import FarmerLandingPage from './pages/FarmerLandingPage'
import FarmerProfileView from './pages/FarmerProfileView';
import CustomerLandingPage from './pages/CustomerLandingPage';
import CustomerSearch from './pages/CustomerSearch';
import FarmerSearch from './pages/FarmerSearch';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from "axios";

function App() {
  //Access current user id using following statements: localStorage.getItem('curr_user_id'), localStorage.setItem('curr_user_id', JSON.stringify(curr_user_id))

  const [curr_user_id, setCurr_User_Id] = React.useState(
    //temporarily commenting out below line
    JSON.parse(localStorage.getItem('curr_user_id')) || 0
  );

  localStorage.setItem('curr_user_id', JSON.stringify(curr_user_id));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer" element={<FarmerLandingPage />} />
        <Route path="/customer" element={<CustomerLandingPage />} />
        <Route path = "/farmer-profile" element = {<FarmerProfileView />}/>
        <Route path="/customer-search" element={<CustomerSearch/>} />
        <Route path="/farmer-search" element={<FarmerSearch/>} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        {/*Add more routes here (can also create nested routes)*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
