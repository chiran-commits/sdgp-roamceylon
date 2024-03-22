import "./NavbarStyles.css";
import user from "./Asset 1.png"
import logo from "./Logo-roamceylon.png"
import  React, {useState} from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authorizationActions } from "../../store";
import axios from "axios";
import { useEffect } from "react";



const Navbar = ({activeOption,isProfile}) =>{
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
   const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();
  
    const logout = () => {
        localStorage.removeItem('roamceylon-refreshToken');
        localStorage.removeItem('roamceylon-accessToken');
    }


    const dispatch = useDispatch();

    useEffect(() => {
  
          
      const getProfile = async () => {
          
          const accessToken = localStorage.getItem('roamceylon-accessToken');
          if(accessToken==null){
            dispatch(authorizationActions.logout())
          }else{
              const res = await axios
              .get("https://sdgp-restapi-8i5dg1o4o-chiran-commits-projects.vercel.app/user",
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`
                  }
                }
              ).then(
                dispatch(authorizationActions.login())
              )
              .catch((err) => {console.log(err)
                dispatch(authorizationActions.logout())
  
              }
              );
             
            
          }
             
      };
      getProfile();
     
    
    }, []);





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

                {isProfile ? (<li><a onClick={logout} href="/">LOGOUT</a></li>) : (
                    isLoggedIn ? (<li><a href="profile"><img className="userimg" src={user}/></a></li>) : (
                        <li><a href="/login">LOGIN</a></li>)

                )}


                
            </ul>
        </div>
    </nav>

   );
}


export default Navbar;