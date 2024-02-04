import "./NavbarStyles.css";
import user from "./images.png"

function Navbar(){
   return(
    <nav>
        <a id="moveToRight" href="index.html"><h2>ROAMCEYLON</h2></a>
        <div>
            <ul id="navbar">
                <li><a href="index.html">HOME</a></li>
                <li><a href="#">LOCATIONS</a></li>
                <li><a className="active" href="#">ABOUT US</a></li>
                <li><a href="index.html"><img className="userimg" src={user}/></a></li>
            </ul>
        </div>
    </nav>

   );
}


export default Navbar;