import "./NavbarStyles.css";
import user from "./images.png"
import  React, {useState} from 'react';



const Navbar = ({activeOption}) =>{
   const [menuOpen, setMenuOpen] = useState(false)

   return(
    <nav>
        <a id="moveToRight" href="/"><h2>ROAMCEYLON</h2></a>
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
                <li><a href="profile"><img className="userimg" src={user}/></a></li>
            </ul>
        </div>
    </nav>

   );
}


export default Navbar;