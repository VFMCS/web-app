import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FarmerPostItem from './pages/FarmerPostItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}>
              {
              // TODO: Add routes to other pages
              }
          </Route>
          <Route path="/postitem" element={<FarmerPostItem />}>
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
