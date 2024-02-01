import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//type like http://localhost:3000/about to acess the about us page
function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </div>
  </Router> 
  );
}
//gggggg

export default App;

