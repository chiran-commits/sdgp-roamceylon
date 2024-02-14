import React from "react";
import './AboutUs.css';
import Navbar from "./Navbar";
import D1 from "./Developer1.png"
import facbook_img from "./facebook_5968764.png"
import instagram_img from "./instagram_2111463.png"
import whatsapp_img from "./whatsapp_5968841.png"


function App(){
  return(
    <div>
      <Navbar activeOption='aboutus'/>
      <div id="subframe">
        <h2 id="moveBottom"><center>THE CREATORS</center></h2><br></br><br></br>
        <div className="imageSection">
          <div className="developer-container">
            <img src={D1}></img>
            <Creator name="Chiran Gamage" email="abc" contact={123}/>
          </div>
          <div className="developer-container">
            <img src={D1}></img>
            <Creator name="Thinal Karunarathna" email="abc" contact={123}/>
          </div>
          <div className="developer-container">
            <img src={D1}></img>
            <Creator name="Neelesh Gamage" email="abc" contact={123}/>
          </div>
          <div className="developer-container">
            <img src={D1}></img>
            <Creator name="Puleesha Vilhan" email="abc" contact={123}/>
          </div>
          <div className="developer-container">
            <img src={D1}></img>
            <Creator name="Tharuka Bandara" email="abc" contact={123}/>
          </div>
        </div>
        <br></br><br></br>
        <h3><center>CONTACT US:</center></h3>
        <h3><center> <a href="roamceylon.sdgp@gmail.com " style={{color:"white"}}>roamceylon.sdgp@gmail.com </a></center></h3>
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
      <h4><center>{props.name}</center></h4>
      <h4><center>Email: {props.email}</center></h4>
      <h4><center>Contact No: {props.contact}</center></h4>
    </div>
  );
}

export default App;