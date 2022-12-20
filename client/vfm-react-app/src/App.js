import './App.css';
import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FarmerLandingPage from './pages/FarmerLandingPage'
import FarmerProfileView from './pages/FarmerProfileView';
import CustomerLandingPage from './pages/CustomerLandingPage';
import CustomerSearch from './pages/CustomerSearch';
import FarmerSearch from './pages/FarmerSearch';
import CustomerSearchVendors from './pages/CustomerSearchVendors';
import Register from './pages/Register';
import Login from './pages/Login';
import FarmerReserves from './pages/FarmerReserves';
import FarmerReserveRequests from './pages/FarmerReserveRequests';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerFAQPage from './pages/CustomerFAQ';
import FarmerFAQ from './pages/FarmerFAQ';
import CustomerCurrentOrders from './pages/CustomerCurrentOrders';
import CustomerCompletedOrders from './pages/CustomerCompletedOrders';

// Organizes app and sets global variable for current user id if user is logged in. 
function App() {

  const [curr_user_id, setCurr_User_Id] = React.useState( // Hook for the current user ID if user is logged in.
    JSON.parse(localStorage.getItem('curr_user_id')) || -1
  );
  
  const [curr_user_is_vendor, setCurr_User_Is_Vendor] = React.useState( // Hook for showing either a vendor screen or a customer screen.
    JSON.parse(localStorage.getItem('curr_user_is_vendor')) || false
  );
  
  React.useEffect(() => {
    if(localStorage.getItem('curr_user_id') === null) {setCurr_User_Id(0); localStorage.setItem('curr_user_id', -1);}
    if(localStorage.getItem('curr_user_is_vendor') === null) {setCurr_User_Is_Vendor(false); localStorage.setItem('curr_user_is_vendor', false);}
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer" element={<FarmerLandingPage />} />
        <Route path="/customer" element={<CustomerLandingPage />} />
        <Route path = "/farmer-profile" element = {<FarmerProfileView />}/>
        <Route path="/customer-search" element={<CustomerSearch/>} />
        <Route path="/customer-current-orders" element={<CustomerCurrentOrders/>} />
        <Route path="/customer-completed-orders" element={<CustomerCompletedOrders/>} />
        <Route path="/farmer-search" element={<FarmerSearch/>} />
        <Route path="/customer-search-vendor" element={<CustomerSearchVendors/>} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/farmer-reserves" element={<FarmerReserves />} />
        <Route path="/farmer-reserve-requests" element={<FarmerReserveRequests />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/customer/faq/" element={<CustomerFAQPage />} />
        <Route path="/farmer/faq/" element={<FarmerFAQ />} />
        <Route path="/farmer/profile/" element={<FarmerProfileView forFarmer />} />
        {/*Add more routes here (can also create nested routes)*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
