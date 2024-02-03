import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';




function App() {




  return (
  
  <Router>
   
      <Routes>
        <Route path="/" component={<LoginPage/>} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/about" component={AboutUs} />
      </Routes>
  
  </Router> 
  );
}


export default App;

