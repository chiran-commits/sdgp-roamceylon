import React from "react";
import "./HomePage.css";
import "../ScrollCSS/scroll.css";
import Navbar from "../AboutUsPage/Navbar";
import sdgpVideo from "../HomePage/Assets/sdgpVideo.mp4";
import { useEffect } from "react";
import colomboImage from "../HomePage/Assets/colombo.jpg";
import kandyImage from "../HomePage/Assets/kandy.jpg";
import mataraImage from "../HomePage/Assets/matara.jpg";
import galleImage from "../HomePage/Assets/galle.jpg";
import tropicalImage from "../HomePage/Assets/tropical.jpg";
import mountainImage from "../HomePage/Assets/mountains.webp"
import ArugamBay from '../LocationDescriptionPages/Images/aruHome.jpg'
import Trincomalee from '../LocationDescriptionPages/Images/trincomalee1.jpg';
import NuwaraEliya from '../LocationDescriptionPages/Images/nuwaraMain.jpeg';
import Ella from '../LocationDescriptionPages/Images/ellawallpaper.jpg';
import { Link } from "react-router-dom";
import FetchWeather from "./GetWeather";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { authorizationActions } from "../../store";
import { useSelector } from 'react-redux';

export default function HomePage() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  
 
  
  function anchorTagAbout() {

    dispatch(authorizationActions.login())
    const target = document.getElementById("target-about-us");
    const position = target.getBoundingClientRect().top + window.scrollY - 33;


    // Scroll smoothly to the target position
    window.scrollTo({
      top: position,
      behavior: "smooth", // Smooth scrolling
    });
  }

  function anchorTagCountry() {
    const target = document.getElementById("target-country");
    const position = target.getBoundingClientRect().top + window.scrollY - 33;

    // Scroll smoothly to the target position
    window.scrollTo({
      top: position,
      behavior: "smooth", // Smooth scrolling
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElement = document.querySelector(
      ".home-container-about .hidden"
    );

    const hiddenElement2 = document.querySelector(
      ".home-container-country .hidden"
    );
    if (hiddenElement) {
      observer.observe(hiddenElement);
    }
    if (hiddenElement2){
      observer.observe(hiddenElement2);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
        <div className="home-page">
          <Navbar activeOption="home" />  {/* Navbar created in a seperate file and imported for each web page */}
          <div className="home-container">
            <video className="video-bg" autoPlay muted loop playsInline>
              <source src={sdgpVideo} type="video/mp4" />
            </video>
            <div className="dark-overlay"></div>
            <div className="welcome-text">
              <h2>
                {/* Make Sri Lanka your remote work haven,{" "}
                <span className="explore-now">Explore now!</span> */}
                Find Your Digital Nomad Haven In Sri Lanka
              </h2>
              <div className="main-welcome-heading">
                {/* <h3>WELCOME TO ROAMCEYLON</h3> */}
              </div>
              <div className="button-area">
                <button className="about-btn" onClick={anchorTagCountry}>Get Started</button>
                <button className="about-btn" onClick={anchorTagAbout}>About Us</button>
              </div>
            </div>
          </div>
          <div className="home-container-about" id="target-about-us">
            <section className="hidden">

              <div class="content">
                <h2>RoamCeylon</h2>  {/* "Roamceylon" input twice to acheive the wave animation */}
                <h2>RoamCeylon</h2>
              </div>

              <div className="about-content" >
                <p>
                  At Roamceylon, we're passionate about empowering digital
                  nomads to embrace the freedom of remote work while immersing
                  themselves in the vibrant culture and breathtaking landscapes
                  of Sri Lanka. Our platform serves as a gateway to personalized
                  recommendations, expert guidance, and a supportive community,
                  ensuring that every aspect of your relocation journey is
                  smooth and fulfilling. Whether you're seeking the perfect work
                  environment, cultural experiences, or simply a new adventure,
                  Roamceylon is your trusted partner in making your digital
                  nomad dreams a reality. Join us and embark on an unforgettable
                  journey of discovery, connection, and growth in the tropical
                  paradise of Sri Lanka.
                </p>
              </div>
            </section>
          </div>


          {/* This code displays the trpoical locations section */}
          <div className="tropical-section">
            <div className="tropical-container">
              <div className="tropical-content">
                <h2>Tropical Weather.<br/>All day, Everyday.</h2>
                <p>Ever dreamt of working remotely in a place with warm weather all year round in addition to a low cost of living? Look no further than these suggested locations!</p>
              </div>
              <div className="tropical-content">
                <img src = {tropicalImage}/>
              </div>
            </div>
            <div className="tropical-countries">
              {/* <tropicalCountry link = "/galle" image = "../HomePage/Assets/galle.jpg" name = "Galle"/> */}
              <div className="tropical-country">
                <Link to="/galle">
                  <img src={galleImage}></img>
                  <h3>Galle</h3>
                  <br></br>
                </Link>
              </div>
              <div className="tropical-country">
                <Link to="/arugambay">
                  <img src={ArugamBay}></img>
                  <h3>Arugam Bay</h3>
                  <br></br>
                </Link>
              </div>
              <div className="tropical-country">
                <Link to="/trincomalee">
                  <img src={Trincomalee}></img>
                  <h3>Trincomalee</h3>
                  <br></br>
                </Link>
              </div>
            </div>
          </div>


          {/* This code displays the mountains section */}
          <div className="mountians-section">
            <div className="tropical-container">
              <div className="tropical-content">
                <h2>From Beautiful Beaches<br/>To Misty Mountains.</h2>
                <p>Embark on a captivating journey through Sri Lanka's enchanting tapestry of lush tea plantations, golden beaches, misty mountains, and ancient ruins—a paradise for every adventurous soul and curious digital nomads seeking a mosaic of inspiring landscapes.</p>
              </div>
              <div className="tropical-content">
                <img src = {mountainImage}/>
              </div>
            </div>
            <div className="tropical-countries">
              {/* <tropicalCountry link = "/galle" image = "../HomePage/Assets/galle.jpg" name = "Galle"/> */}
              <div className="tropical-country">
                <Link to="/nuwaraeliya">
                  <img src={NuwaraEliya}></img>
                  <h3>Nuwara Eliya</h3>
                  <br></br>
                </Link>
              </div>
              <div className="tropical-country">
                <Link to="/ella">
                  <img src={Ella}></img>
                  <h3>Ella</h3>
                  <br></br>
                </Link>
              </div>
              <div className="tropical-country">
                <Link to="/kandy">
                  <img src={kandyImage}></img>
                  <h3>Kandy</h3>
                  <br></br>
                </Link>
              </div>
            </div>
          </div>


          <div className="home-container-country" id="target-country">
            <section className="hidden">
              <h2>Popular Locations</h2>
              <div className="country-box-container">
                <Link to="/colombo">
                  <div className="coutnry-box">
                    <img className="img-pop" src={colomboImage}></img>
                    <p>
                      Colombo, Sri Lanka's capital, boasts a dynamic mix of
                      history and modernity. Its vibrant streets, rich culture,
                      and diverse cuisine make it a captivating destination for
                      travelers.
                    </p>
                    <br></br>
                  </div>
                  <h3>Colombo</h3>
                  <br></br>
                </Link>

                <Link to='/kandy'> 
                  <div className="coutnry-box">
                    <img class="img-pop" src={kandyImage}></img>
                    <p>
                      Kandy is a large city located in central Sri Lanka. The city is surrounded by majestic mountains, 
                      which are home to tea plantations and rainforests.
                    </p>
                    <br></br>
                  </div>
                  <h3>Kandy</h3>
                  <br></br>
                </Link>  

                <Link to='/matara'>
                <div className="coutnry-box">
                  <img class="img-pop" src={mataraImage}></img>
                  <div className="effect">
                    <p>
                    Matara is a coastal town in southern Sri Lanka that's a major commercial hub and a good place to experience tropical Sri Lanka without the crowds. It's known for its Dutch architecture, ramparts, well-preserved fort, and street life.
                    </p><br></br>
                  </div>
                </div>
                <h3>Matara</h3>
                <br></br>
                </Link>

                <Link to="/galle">
                  <div className="coutnry-box">
                    <img class="img-pop" src={galleImage}></img>
                    <p>
                      Galle is a city on the southwest coastline of Sri Lanka. 
                      The city consists of exotic old trading port blessed with imposing Dutch-colonial buildings, stylish cafes, 
                      quirky boutiques and impeccably restored beautiful hotels.
                    </p>
                  </div>
                  <h3>Galle</h3>
                  <br></br>
                </Link>  
              </div>
            </section>  
          </div>


          {/* This code displays the discord section */}
          <div className="discord">
              <h3>Be a Part of the Community</h3>
              {isLoggedIn ? (<a href="https://discord.gg/5kNm49ejz5">Join the discord server</a>) : (<p>Login to an account to join the RoamCeylon Discord Server!</p>)}
              {/* The isLogged indicates whether the user is logged in to an acocunt and changes the code accordingly */}
          </div>


          {/* This code displays the footer section */}
          <hr className="footer-sep"></hr>
          <footer className="home-footer">
            <h3>ROAMCEYLON</h3>
            <div className="social-panel">Organised by a group of students from Informatics Institute of Technology, Sri Lanka. We strive to provide a better service for all the travel market by providing up-to-date information about Sri Lanka</div>
            <div className="footer-bot">
              <p>Copyright 2024 - Roamceylon</p>
            </div>
          </footer>
        </div>
    </>
  );
}
