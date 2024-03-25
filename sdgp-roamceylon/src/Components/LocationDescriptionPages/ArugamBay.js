import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import LeGrand from '../LocationDescriptionPages/Images/leGrand.jpg';
import raddisson from '../LocationDescriptionPages/Images/raddisson.jpg';
import lighthouse from '../LocationDescriptionPages/Images/lighthouse.jpg';
import AruHome from '../LocationDescriptionPages/Images/aruHome.jpg'
import AruHotel1 from '../LocationDescriptionPages/Images/aruHotel1.jpg'
import AruHotel2 from '../LocationDescriptionPages/Images/aruHotel2.jpg'
import AruHotel3 from '../LocationDescriptionPages/Images/aruHotel3.jpg'
import Aru1 from '../LocationDescriptionPages/Images/aru1.jpg';
import Aru2 from '../LocationDescriptionPages/Images/aru2.jpg';
import Aru3 from '../LocationDescriptionPages/Images/aru3.jpg';
import LocationData from '../LocationPage/Locations.json';
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Galle(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div className='main'>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={AruHome} className='location_image'></img>
                <div className='location_detail'>
                    <h3>ARUGAM BAY</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                            Arugam Bay is located on the southeast coast of Sri Lanka. This place is all about sandy beaches that stretch for days, drawing in surfers from every corner of the world. If you're into surfing, this is your spot. The waves here are legendary, making it a magnet for pros and beginners itching to catch the perfect break.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "ArugamBay"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>    
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title' >Weather<br></br></span><p>Tropical</p>
                                            <p className='weatherdata'><FetchWeatherData city="Batticaloa" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
                                                <div className='weather'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                Medium
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                            <defs>
                                                                <linearGradient id="GradientColor">
                                                                <stop offset="0%" stop-color="#e91e63" />
                                                                <stop offset="100%" stop-color="#673ab7" />
                                                                </linearGradient>
                                                            </defs>
                                                            <circle style={{strokeDashoffset:"150"}} cx="80" cy="80" r="50" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                        </div>    
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>COST OF LIVING<br></br></span></p>
                                        <div className='indicator-scale'>      
                                                <div className='cost'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                Medium
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                            <defs>
                                                                <linearGradient id="GradientColor">
                                                                <stop offset="0%" stop-color="#e91e63" />
                                                                <stop offset="100%" stop-color="#673ab7" />
                                                                </linearGradient>
                                                            </defs>
                                                            <circle style={{strokeDashoffset:"270"}} cx="80" cy="80" r="50" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                        </div>    
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>URBAN/RURAL<br></br></span><p className='city-type'>{data.type}</p></p>
                                    </div>
                                </div>    
                            </div>
                        )
                    }
                })
            }
    
            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='location_destinations'>
                <a href='https://www.tripadvisor.com/Attraction_Review-g3348959-d577794-Reviews-Arugam_Bay-Arugam_Bay_Eastern_Province.html' target="_blank">
                <div className='popular_destination'>
                    <img src={Aru1} className='destination_image'/>
                    <p className='text_dest'>Arugam Bay Beach (4.0 <span class="fa fa-star checked"></span>)</p>
                </div>
                </a>

                <a href='https://www.tripadvisor.com/Attraction_Review-g608525-d7225212-Reviews-Whisky_Point_Sri_Lanka-Pottuvil_Arugam_Bay_Eastern_Province.html' target="_blank">
                <div className='popular_destination'>
                    <img src={Aru2} className='destination_image'/>
                    <p className='text_dest'>Whiskey Point (4.5 <span class="fa fa-star checked"></span>)</p>
                </div>
                </a>

                <a href='https://www.kumananationalpark.com/' target="_blank">
                <div className='popular_destination'>
                    <img src={Aru3} className='destination_image'/>
                    <p className='text_dest'>Kumana National Park (4.9 <span class="fa fa-star checked"></span>)</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Arugam Bay</h3>
            <div className='hotels'>
                <a href='https://www.jetwinghotels.com/jetwingsurf/' target="_blank">
                <div className='locationContainer'>
                    <img src={AruHotel1} className='destination_image'/>
                    <p className='text_dest'>Jetwing Surf</p>
                </div>
                </a>
                <a href='https://www.thespicetrails.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={AruHotel2} className='destination_image'/>
                    <p className='text_dest'>The Spice Trail</p>
                </div>
                </a>
                <a href='https://www.bluewavearugambay.com/' target='_blank'>
                <div className='locationContainer'>
                    <img src={AruHotel3} className='destination_image'/>
                    <p className='text_dest'>The Blue Wave Hotel</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="ArugamBay"/>

        </div>
        

    )
}