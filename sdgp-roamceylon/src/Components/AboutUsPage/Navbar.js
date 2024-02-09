import "./NavbarStyles.css";
import user from "./images.png"
import  React from 'react';


const Navbar = ({activeOption}) =>{
   return(
    <nav>
        <a id="moveToRight" href="/"><h2>ROAMCEYLON</h2></a>
        <div>
            <ul id="navbar">
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