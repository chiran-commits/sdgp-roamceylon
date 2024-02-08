import React from 'react';
import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";



export default function LocationPage(){
    return(
        <div>
            <Navbar activeOption="locations"/>
            <div className="mainContainer">
                <div className="location-container">
                    <div className="leftContainer">
                        <h2>Manual Search</h2>
                        <div className="input-box-search">
                            <input type="text" placeholder="Search the location for you...."/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <button type="submit" className="search-btn">Search</button>
                    </div>
                    
                    <div className="rightContainer">
                        <h2><center>Provide Recommandation</center></h2>
                        <div className='textarea-center'>
                            <textarea placeholder='Enter the features of your ideal location...' className="input-box-recommendation"> 
                            </textarea>
                        </div>
                        <button type="submit" className="recommendation-btn">Generate Locations</button>
                    </div> 
                </div>
            </div>
        </div>
    );
}