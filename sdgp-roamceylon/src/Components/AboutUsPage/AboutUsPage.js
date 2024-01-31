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
      <Navbar/>
      <div id="subFrame">
        <h2 id="moveBottom"><center>THE CREATORS</center></h2><br></br><br></br>
        <div className="imageSection">
          <div>
            <img src={D1}></img>
            <Creator name="Chiran Gamage" email="abc" contact={123}/>
          </div>
          <div>
            <img src={D1}></img>
            <Creator name="Thinal Karunarathna" email="abc" contact={123}/>
          </div>
          <div>
            <img src={D1}></img>
            <Creator name="Neelesh Gamage" email="abc" contact={123}/>
          </div>
          <div>
            <img src={D1}></img>
            <Creator name="Puleesha Vilhan" email="abc" contact={123}/>
          </div>
          <div>
            <img src={D1}></img>
            <Creator name="Tharuka Bandara" email="abc" contact={123}/>
          </div>
        </div>
        <br></br><br></br>
        <h3><center>CONTACT US:</center></h3>
        <h3><center> <a href="roamceylon.sdgp@gmail.com " style={{color:"white"}}>roamceylon.sdgp@gmail.com </a></center></h3>
        <div className="bottomContainer">
          <div className="middleBottom">
            <br></br>
            <h6><center>Nunc sit amet condimentum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra efficitur diam eget fringilla. Donec euismod eleifend massa non volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis quis dolor a rhoncus. Sed eros magna, venenatis et urna vitae, vehicula porttitor nulla. Proin iaculis vel leo nec volutpat. Mauris malesuada vulputate libero at tincidunt. Nulla hendrerit risus non nisi laoreet dictum. Etiam erat lectus, mattis non interdum eget, laoreet eu odio. Suspendisse vehicula fermentum purus tristique pellentesque.</center></h6>
          </div>
          <div className="leftBottom">
            <h6>Privacy Policy</h6>
            <h6>Terms & Conditions</h6>
          </div>
          <div className="rightBottom">
            <img className="applogos" src={facbook_img}/> <img className="applogos" src={whatsapp_img} /> <img className="applogos" src={instagram_img}/>
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