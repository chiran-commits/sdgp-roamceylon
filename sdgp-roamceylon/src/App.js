import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';




function App() {




  return (
  
  
  <Router>
   
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
  
  </Router> 
  );
}


export default App;

