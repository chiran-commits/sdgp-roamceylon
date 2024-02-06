import React from 'react';
import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";
import leftimage from './leftimage.jpg';
import rightimage from './rightimage.jpg';

export default function LocationPage(){
    return(
        <div>
            <Navbar/>
            <div className="mainContainer">
                <div className="container">
                    <div className="leftContainer">
                        <h2><center>Manual Search</center></h2>
                        <img src={leftimage} className='locationImages'/>
                    </div>
                    
                    <div className="rightContainer">
                        <h2><center>Provide Recommandation</center></h2>
                        <img src={rightimage} className='locationImages'/>
                    </div> 
                </div>
            </div>
        </div>
    );
}