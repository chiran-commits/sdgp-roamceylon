import "./NavbarStyles.css";
import user from "./Asset 1.png"
import logo from "./Logo-roamceylon.png"
import  React, {useState} from 'react';
import { useSelector } from "react-redux";




const Navbar = ({activeOption}) =>{
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
   const [menuOpen, setMenuOpen] = useState(false)

   return(
    <nav>
        <a id="moveToRight" href="/"><h2>ROAMCEYLON</h2><img className="logoImg" src={logo}/></a>
        <div className="navMenu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div>
            <ul id="navbar" className={menuOpen ? "open" : ""}>
                <li><a href="/" className={activeOption == 'home' ? 'active' : ''}>HOME</a></li>
                <li><a href="/location" className={activeOption == 'locations' ? 'active' : ''}>LOCATIONS</a></li>
                <li><a href="/about" className={activeOption == 'aboutus' ? 'active' : ''}>ABOUT US</a></li>
                {isLoggedIn ? (<li><a href="profile"><img className="userimg" src={user}/></a></li>) : (
                <li><button>Sign In</button></li>)}
            </ul>
        </div>
    </nav>

   );
}


export default Navbar;