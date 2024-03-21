import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import LeGrand from '../LocationDescriptionPages/Images/leGrand.jpg';
import raddisson from '../LocationDescriptionPages/Images/raddisson.jpg';
import lighthouse from '../LocationDescriptionPages/Images/lighthouse.jpg';
import JaffnaHome from '../LocationDescriptionPages/Images/jaffnaHome.jpg'
import Jaffna1 from '../LocationDescriptionPages/Images/jaffna1.jpg';
import Jaffna2 from '../LocationDescriptionPages/Images/jaffna2.jpg';
import Jaffna3 from '../LocationDescriptionPages/Images/jaffna3.jpg';
import JaffnaHotel1 from '../LocationDescriptionPages/Images/jaffnaHotel1.jpg';
import JaffnaHotel2 from '../LocationDescriptionPages/Images/jaffnaHotel2.jpg';
import JaffnaHotel3 from '../LocationDescriptionPages/Images/jaffnaHotel3.jpg';
import LocationData from './locations.json';
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Jaffna(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div className='main'>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={JaffnaHome} className='location_image'></img>
                <div className='location_detail'>
                    <h3>JAFFNA</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                            Jaffna, located in northern Sri Lanka, is a culturally vibrant city renowned for its rich Tamil heritage, including stunning Hindu temples and delicious cuisine. Despite the scars of the past, it's undergoing revitalization and welcomes visitors to explore its unique culture, pristine beaches, and warm hospitality.
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
                                            <span className='title' >Weather<br></br></span><p className='weather-type'>Tropical/ Hot and Humid</p>
                                            <p className='weatherdata'><FetchWeatherData city="jaffna" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
                                                <div className='weather'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                Fast
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
                                                                Low
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
                <div className='popular_destination'>
                    <img src={Jaffna1} className='destination_image'/>
                    <p className='text_dest'>Nallur Kovil (4.5 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={Jaffna2} className='destination_image'/>
                    <p className='text_dest'>Jaffna Fort (4.0 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={Jaffna3} className='destination_image'/>
                    <p className='text_dest'>Delft Island (4.0 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Galle</h3>
            <div className='hotels'>
                <a href='https://www.jetwinghotels.com/jetwingjaffna/' target="_blank">
                <div className='locationContainer'>
                    <img src={JaffnaHotel1} className='destination_image'/>
                    <p className='text_dest'>Jetwing Jaffna</p>
                </div>
                </a>
                <a href='https://www.tripadvisor.com/Hotel_Review-g304135-d3791995-Reviews-Jaffna_Heritage_Hotel-Jaffna_Northern_Province.html' target="_blank">
                <div className='locationContainer'>
                    <img src={JaffnaHotel2} className='destination_image'/>
                    <p className='text_dest'>Jaffna Heritage Hotel</p>
                </div>
                </a>
                <a href='https://www.tripadvisor.com/Restaurant_Review-g304135-d10593768-Reviews-Peninsula-Jaffna_Northern_Province.html' target='_blank'>
                <div className='locationContainer'>
                    <img src={JaffnaHotel3} className='destination_image'/>
                    <p className='text_dest'>Peninsula</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="galle"/>

        </div>
        

    )
}