import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import HomePage from './Components/HomePage/HomePage.js';
import LocationPage from './Components/LocationPage/LocationPage.js';
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import ErrorPage from './Components/ErrorPage/ErrorPage.js';
import Colombo from './Components/LocationDescriptionPages/Colombo.js';
import Kandy from './Components/LocationDescriptionPages/Kandy.js';
import Common from './Components/LocationDescriptionPages/common.js';
import Common2 from './Components/LocationDescriptionPages/common2.js';
import Galle from './Components/LocationDescriptionPages/Galle.js';
import Ella from './Components/LocationDescriptionPages/Ella.js';
import NuwaraEliya from './Components/LocationDescriptionPages/NuwaraEliya.js';
import ArugamBay from './Components/LocationDescriptionPages/ArugamBay.js';
import Jaffna from './Components/LocationDescriptionPages/Jaffna.js';
import Anuradhapura from './Components/LocationDescriptionPages/Anuradhapura.js';
import Trincomalee from './Components/LocationDescriptionPages/Trincomalee.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useSelector } from "react-redux";




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
        <Route path="/common2" element={<Common2/>} />
        <Route path="/galle" element={<Galle/>} />
        <Route path="/kandy" element={<Kandy/>} />
        <Route path="/ella" element={<Ella/>} />
        <Route path='/nuwaraeliya' element={<NuwaraEliya/>} />
        <Route path='/arugambay' element={<ArugamBay/>}/>
        <Route path='/jaffna' element={<Jaffna/>}/>
        <Route path='/anuradhapura' element={<Anuradhapura/>}/>
        <Route path='/Trincomalee' element={<Trincomalee/>}/>
      </Routes>
  </Router> 
  );
}


export default App;

