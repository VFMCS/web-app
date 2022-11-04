import './App.css';
import * as React from 'react' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FarmerLandingPage from './pages/FarmerLandingPage'
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerLandingPage from './pages/CustomerLandingPage';

function App() {
  // We may want to move this out or make it static
  let [user, setUser] = React.useState(null) // once logged in this should be set to current user
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer" element={<FarmerLandingPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/customer" element={<CustomerLandingPage />} />
        <Route path = "/farmerprofile" element = {<FarmerDashboard />}/>
        {/*Add more routes here (can also create nested routes)*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
