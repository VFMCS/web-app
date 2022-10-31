import './App.css';
import * as React from 'react' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import CustomerLandingPage from './pages/CustomerLandingPage'
import FarmerLandingPage from './pages/FarmerLandingPage'
import FarmerHeader from './components/FarmerHeader.js';
import LandingHeader from './components/LandingHeader.js'
import FarmerDashboard from './pages/FarmerDashboard';

function App() {
  let [userType, setUserType] = React.useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer" element={<FarmerLandingPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
