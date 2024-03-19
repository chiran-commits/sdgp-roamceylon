import React from "react";
import './AboutUs.css';
import Navbar from "./Navbar";
import D1 from "./Developer1.png"
import facbook_img from "./facebook_5968764.png"
import instagram_img from "./instagram_2111463.png"
import whatsapp_img from "./whatsapp_5968841.png"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authorizationActions } from "../../store";
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import axios from "axios";
import thinalimage from "./Thinal.JPG";
import puleeshaimage from "./Puleesha.jpg";
import tharukaimage from "./Tharuka.jpg";
import sigiriya from "./aboutUsSigiriya.jpg";
import colombo from "./aboutUsColombo.jpg";

function App(){

  const dispatch = useDispatch();

  useEffect(() => {

        
    const getProfile = async () => {
        
        const authToken = localStorage.getItem('SDGP-roamceylon2');
        if(authToken==null){
          dispatch(authorizationActions.logout())

        }else{
            const res = await axios
            .get("http://localhost:5009/user",{
                headers: {
                     Authorization: authToken
                }
            }).then(
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
    <div>
      <Navbar activeOption='aboutus'/>
      <br></br>
      <div className="top-section">
          <h2>About Us</h2>
          <h3>Guiding Sri Lanka's Digital Nomads</h3>
        </div>
        <div className="content-section">
          <div className="content-item">
            <h2>An Overview</h2><br></br><br></br>
            <p>RoamCeylon was established in 2023 and has been helping Digital Nomads to visit Sri Lanka for their next excusrion in a tropical island. The website was created by five students for their SDGP in the Informatics Institute of Technology. This website aims to provide Digital Nomads with all the necessary information needed to plan their next trip to work remotely in the Pearl of the Indian Ocean. In addition, the location recommendation featre uses machine learning to recommend optimal loctions based on the user's personal preferences, which ensures a convenient way of learning about Sri Lanka's vibrant landscapes.</p>
          </div>
          <div className="content-item">
            <img src = {sigiriya}/>
          </div>
        </div>
        <div className="content-section">
          <div className="content-item">
            <h2>Our Story</h2><br></br><br></br>
            <p>RoamCeylon was created with the intention of guiding the Digital Nomads of Sri Lanka. The developers of RoamCeylon were inspired to create such an application due to the economic crisis faced by Sri Lanka in 2022, which plummeted foreign currency reserves in the nation. Digital Nomadism has a huge potential in Sri Lanka as it could bring lots of foreign currency to the country, and boost the Sri Lankan economy.</p>
          </div>
          <div className="content-item">
            <img src = {colombo}/>
          </div>
        </div>


      <div id="subframe">
        <h2 id="moveBottom"><center className="textColor">THE CREATORS</center></h2><br></br><br></br>
        <div className="imageSection">
          <div className="developer-container">
            <img className="about-image" src={D1}></img>
            <Creator name="Chiran Gamage" email="chiran.20221029@iit.ac.lk"/>
          </div>
          <div className="developer-container">
            <img className="about-image" src={thinalimage}></img>
            <Creator name="Thinal Karunarathna" email="thinal.20221003@iit.ac.lk"/>
          </div>
          <div className="developer-container">
            <img className="about-image" src={D1}></img>
            <Creator name="Neelesh Gamage" email="neelesh.20221028@iit.ac.lk"/>
          </div>
          <div className="developer-container">
            <img className="about-image" src={puleeshaimage}></img>
            <Creator name="Puleesha Vilhan" email="puleesha.20221061@iit.ac.lk"/>
          </div>
          <div className="developer-container">
            <img className="about-image" src={tharukaimage}></img>
            <Creator name="Tharuka Bandara" email="sathvidu.20221032@iit.ac.lk"/>
          </div>
        </div>
        <br></br><br></br>
        <h3><center className="textColor">CONTACT US:</center></h3>
        <h3><center> <a href="roamceylon.sdgp@gmail.com " className="textColor">roamceylon.sdgp@gmail.com </a></center></h3>
        <div className="bottomContainer">
          <div className="middleBottom">
            <h4><center>We are a group of 2nd Year students at Informatics Institute of Technology (IIT), following a bachelors degree in Software Engineering.</center></h4>
            <h4><center>This project was created as a part of the SDGP module in our 2nd Year. </center></h4>
            <h4>WELCOME TO ROAMCEYLON!</h4>
          </div>
          <div className="leftBottom">
            <h6>Privacy Policy</h6>
            <h6>Terms & Conditions</h6>
          </div>
          <div className="rightBottom">
            <a href="https://www.facebook.com/"><img className="applogos" src={facbook_img}/></a> <a href="https://www.whatsapp.com/"><img className="applogos" src={whatsapp_img} /></a> <a href="https://www.instagram.com/"><img className="applogos" src={instagram_img}/></a>
          </div>
        </div>
      </div>
    </div>
);

}

const Creator  = (props) =>{
  return(
    <div>
      <h4 style={{color:"blue"}}><center>{props.name}</center></h4><br></br>
      <h4 style={{color:"Black"}}><center>Email: <a style={{color:"Black"}} href={props.email}>{props.email}</a></center></h4>
    </div>
  );
}

export default App;