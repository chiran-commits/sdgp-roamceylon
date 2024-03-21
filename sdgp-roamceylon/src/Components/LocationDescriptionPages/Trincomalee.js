import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import TrincomaleeImage from '../LocationDescriptionPages/Images/trincomalee1.jpg';
import TrincoPlace1 from '../LocationDescriptionPages/Images/trincomalee_place1.jpg';
import TrincoPlace2 from '../LocationDescriptionPages/Images/trincomalee_place2.jpg';
import TrincoPlace3 from '../LocationDescriptionPages/Images/trincomalee_place3.jpg';
import TrincoHotel1 from '../LocationDescriptionPages/Images/trincomalee_hotel1.jpg';
import TrincoHotel2 from '../LocationDescriptionPages/Images/trincomalee_hotel2.jpg';
import TrincoHotel3 from '../LocationDescriptionPages/Images/trincomalee_hotel3.jpg';
import LocationData from './locations.json'
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
                <img src={TrincomaleeImage} className='location_image'></img>
                <div className='location_detail'>
                    <h3>TRINCOMALEE</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                            Trincomalee is a port city on the northeast coast of Sri Lanka. 
                            It has one of the world's finest natural harbors, historical sites and beautiful beaches.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Galle"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>    
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title' >Weather<br></br></span><p>Tropical and Hot</p>
                                            <p className='weatherdata'><FetchWeatherData city="trincomalee" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
                                                <div className='weather'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                Average
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
                                                            <circle cx="80" cy="80" r="50" stroke-linecap="round" />
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
                                                                Average
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
                                                            <circle cx="80" cy="80" r="50" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                        </div>    
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>URBAN/RURAL<br></br></span><p style={{marginTop:"20px"}}>{data.type}</p></p>
                                    </div>
                                </div>    
                            </div>
                        )
                    }
                })
            }
    
            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='location_destinations'>
                <div className='popular_destination'>
                    <img src={TrincoPlace1} className='destination_image'/>
                    <p className='text_dest'>Koneswaram Temple  (4.6 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={TrincoPlace2} className='destination_image'/>
                    <p className='text_dest'>Marble Beach (4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={TrincoPlace3} className='destination_image'/>
                    <p className='text_dest'>Pigeon Island National Park (4.5 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Trincomalee</h3>
            <div className='hotels'>
                <a href='https://www.cinnamonhotels.com/trincoblucinnamon' target="_blank">
                <div className='locationContainer'>
                    <img src={TrincoHotel1} className='destination_image'/>
                    <p className='text_dest'>Trinco Blu By Cinnamon</p>
                </div>
                </a>
                <a href='https://amaranthebay.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={TrincoHotel2} className='destination_image'/>
                    <p className='text_dest'>Amaranthe Bay Resort</p>
                </div>
                </a>
                <a href='https://trincomaleebeachresortandspa.com/' target='_blank'>
                <div className='locationContainer'>
                    <img src={TrincoHotel3} className='destination_image'/>
                    <p className='text_dest'>Trincomalee Beach Resort & Spa</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="trincomalee"/>

        </div>
        

    )
}