import './App.css';
import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FarmerLandingPage from './pages/FarmerLandingPage'
import FarmerProfileView from './pages/FarmerProfileView';
import CustomerLandingPage from './pages/CustomerLandingPage';
import CustomerSearch from './pages/CustomerSearch';
import FarmerSearch from './pages/FarmerSearch';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  //Access current user id using following statements: localStorage.getItem('curr_user_id'), localStorage.setItem('curr_user_id', JSON.stringify(curr_user_id))

  /*
  let init_curr_user_id; 
  if(localStorage.getItem('curr_user_id') === undefined) 
    init_curr_user_id = 0;
  else{
    init_curr_user_id = JSON.parse(localStorage.getItem('curr_user_id'));
  }
  */
  const [curr_user_id, setCurr_User_Id] = React.useState(
    JSON.parse(localStorage.getItem('curr_user_id')) || 0
  );
  
  const [curr_user_is_vendor, setCurr_User_Is_Vendor] = React.useState(
    JSON.parse(localStorage.getItem('curr_user_is_vendor')) || false
  );
  
  React.useEffect(() => {
    if(localStorage.getItem('curr_user_id') === null) {setCurr_User_Id(0); localStorage.setItem('curr_user_id', 0);}
    if(localStorage.getItem('curr_user_is_vendor') === null) {setCurr_User_Id(false); localStorage.setItem('curr_user_is_vendor', false);}
  }, [])
  

  //localStorage.setItem('curr_user_id', JSON.stringify(curr_user_id));

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
