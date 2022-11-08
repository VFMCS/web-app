import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}>
              {
              // TODO: Add routes to other pages
              }
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
