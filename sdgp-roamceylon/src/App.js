import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import HomePage from './Components/HomePage/HomePage.js';
import LocationPage from './Components/LocationPage/LocationPage.js';
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import ErrorPage from './Components/ErrorPage/ErrorPage.js';
import Colombo from './Components/LocationDescriptionPages/Colombo.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';




function App() {

  return (

  <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/location" element={<LocationPage/>}/>
        <Route path = "*" element = {<ErrorPage/>}/>
        <Route path="/colombo" element={<Colombo/>} />
      </Routes>
  </Router> 
  );
}


export default App;

