import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

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
