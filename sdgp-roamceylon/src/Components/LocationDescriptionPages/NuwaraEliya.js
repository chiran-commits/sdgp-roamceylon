import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import NuwaraHotel1 from '../LocationDescriptionPages/Images/nuwaraHotel1.jpg';
import NuwaraHotel2 from '../LocationDescriptionPages/Images/nuwaraHotel2.jpg';
import NuwaraHotel3 from '../LocationDescriptionPages/Images/nuwaraHotel3.jpg';
import LeGrand from '../LocationDescriptionPages/Images/leGrand.jpg';
import raddisson from '../LocationDescriptionPages/Images/raddisson.jpg';
import lighthouse from '../LocationDescriptionPages/Images/lighthouse.jpg';
import Nuwara1 from '../LocationDescriptionPages/Images/nuwara1.jpg';
import NuwaraMain from '../LocationDescriptionPages/Images/nuwaraMain.jpeg';
import Nuwara2 from '../LocationDescriptionPages/Images/nuwara2.jpg';
import Nuwara3 from '../LocationDescriptionPages/Images/nuwara3.jpg';
import LocationData from './locations.json'
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function NuwaraEliya(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div className='main'>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={NuwaraMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>NUWARA ELIYA</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                        Nuwara Eliya, nicknamed "Little England," is a charming town in Sri Lanka's hill country. Known for its cool climate, colonial architecture, and lush tea plantations, it offers serene lakes, picturesque waterfalls, and renowned botanical gardens. With its refreshing atmosphere and scenic beauty, Nuwara Eliya is a popular destination for nature lovers and those seeking a peaceful retreat.
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
                                            <span className='title' >Weather<br></br></span><p>Tropical/ Hot and Humid</p>
                                            <p className='weatherdata'><FetchWeatherData city="nuwara eliya" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
                                                <div className='weather'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                Mod
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
                                                            <circle cx="80" cy="80" r="29" stroke-linecap="round" />
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
                                                                High
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
                                                            <circle cx="80" cy="80" r="29" stroke-linecap="round" />
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
                    <img src={Nuwara1} className='destination_image'/>
                    <p className='text_dest'>Horton Plains National Park (4.5 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={Nuwara2} className='destination_image'/>
                    <p className='text_dest'>Little England(4.0 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={Nuwara3} className='destination_image'/>
                    <p className='text_dest'>Gregory Lake (4.0 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Popular Hotels in Nuwara Eliya</h3>
            <div className='hotels'>
                <a href='https://www.araliyaresorts.com/araliya-green-hills/' target="_blank">
                <div className='locationContainer'>
                    <img src={NuwaraHotel1} className='destination_image'/>
                    <p className='text_dest'>Araliya Green Hills Hotel</p>
                </div>
                </a>
                <a href='https://www.heritancehotels.com/teafactory/' target="_blank">
                <div className='locationContainer'>
                    <img src={NuwaraHotel2} className='destination_image'/>
                    <p className='text_dest'>Heritance Tea Factory</p>
                </div>
                </a>
                <a href='https://www.heavensevenhotels.com/' target='_blank'>
                <div className='locationContainer'>
                    <img src={NuwaraHotel3} className='destination_image'/>
                    <p className='text_dest'>Heaven Seven Hotel</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="galle"/>

        </div>
        

    )
}